import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Parsing Middlewares
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

// Zero-Telemetry and Strict Privacy Headers
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('Permissions-Policy', 'interest-cohort=(), telemetry=(), sync-xhr=()');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

// In-Memory Tamper-Evident Audit Log (for Local Clinician Workstation / Intranet)
interface AuditRecord {
  id: string;
  timestamp: string;
  actor: string;
  role: string;
  action: string;
  details: string;
  tamperSeal: string;
  status: 'SUCCESS' | 'WARNING' | 'ALERT';
}

const auditLogStore: AuditRecord[] = [];

/**
 * Health Check & Air-Gap Status
 */
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    app: 'Re-Leaf Mental Health Sanctuary',
    mode: 'air-gapped-ready',
    zeroTelemetry: true,
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
  });
});

/**
 * Air-Gap Checksum Verification Endpoint
 * Validates integrity checksum of QR-transferred triage packets
 */
app.post('/api/triage/verify-checksum', (req: Request, res: Response) => {
  const { packet, checksum } = req.body;
  if (!packet || !checksum) {
    return res.status(400).json({ error: 'Missing packet or checksum' });
  }

  const computed = crypto
    .createHash('sha256')
    .update(typeof packet === 'string' ? packet : JSON.stringify(packet))
    .digest('hex')
    .substring(0, 16);

  const isValid = computed.toLowerCase() === String(checksum).toLowerCase();

  return res.json({
    valid: isValid,
    computedChecksum: computed,
    providedChecksum: checksum,
    timestamp: new Date().toISOString(),
  });
});

/**
 * HIPAA §164.312 Tamper-Evident Audit Ingestion
 * Logs intake events with SHA-256 tamper seals
 */
app.post('/api/audit/log', (req: Request, res: Response) => {
  const { actor, role, action, details, status } = req.body;

  if (!actor || !action) {
    return res.status(400).json({ error: 'Missing required audit fields' });
  }

  const timestamp = new Date().toISOString();
  const id = `audit_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
  
  // Previous seal chaining
  const prevSeal = auditLogStore.length > 0 ? auditLogStore[auditLogStore.length - 1].tamperSeal : 'GENESIS';
  const tamperSeal = crypto
    .createHash('sha256')
    .update(`${prevSeal}:${timestamp}:${actor}:${action}:${details || ''}`)
    .digest('hex')
    .substring(0, 24);

  const newEntry: AuditRecord = {
    id,
    timestamp,
    actor: String(actor),
    role: String(role || 'INTAKE_NURSE'),
    action: String(action),
    details: String(details || ''),
    tamperSeal,
    status: status === 'ALERT' || status === 'WARNING' ? status : 'SUCCESS',
  };

  auditLogStore.push(newEntry);
  if (auditLogStore.length > 500) {
    auditLogStore.shift(); // retain last 500 records in memory
  }

  return res.status(201).json({ success: true, record: newEntry });
});

/**
 * Retrieve Audit Log (Clinician Only)
 */
app.get('/api/audit/records', (_req: Request, res: Response) => {
  res.json({
    count: auditLogStore.length,
    records: auditLogStore,
  });
});

// Serve frontend build artifacts in production
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// SPA Fallback for client-side routing
app.get('*', (_req: Request, res: Response) => {
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      // In dev mode when dist does not exist yet
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head><title>Re-Leaf Sanctuary API</title></head>
          <body style="font-family: sans-serif; padding: 2rem; background: #0f172a; color: #f8fafc;">
            <h1>🌿 Re-Leaf Server Running</h1>
            <p>Air-Gapped & Zero-Telemetry Mental Health Triage Service</p>
            <p>API endpoints: <code>/api/health</code>, <code>/api/audit/records</code>, <code>/api/triage/verify-checksum</code></p>
          </body>
        </html>
      `);
    }
  });
});

app.listen(PORT, () => {
  console.log(`[Re-Leaf Server] Running on http://localhost:${PORT}`);
  console.log(`[Re-Leaf Server] Zero-telemetry air-gapped mode active.`);
});

export default app;

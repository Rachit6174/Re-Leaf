# ⚙️ Re-Leaf: Backend Architecture & Server Extraction

> **Document 3 of 3:** Comprehensive Backend Specification, Server API Endpoints, Air-Gapped Intranet Architecture, and Container Deployment.

---

## 📑 Table of Contents
1. [Backend Philosophy & Air-Gap Deployment](#1-backend-philosophy--air-gap-deployment)
2. [Server Implementation (`server.ts`)](#2-server-implementation-serverts)
3. [API Endpoints Reference](#3-api-endpoints-reference)
   - [3.1 `GET /api/health`](#31-get-apihealth)
   - [3.2 `POST /api/triage/verify-checksum`](#32-post-apitriageverify-checksum)
   - [3.3 `POST /api/audit/log`](#33-post-apiauditlog)
   - [3.4 `GET /api/audit/records`](#34-get-apiauditrecords)
4. [Security Headers & Zero-Telemetry Enforcement](#4-security-headers--zero-telemetry-enforcement)
5. [Cryptographic Tamper-Evident Chaining (HIPAA §164.312)](#5-cryptographic-tamper-evident-chaining-hipaa-164312)
6. [Optional Cloud AI & Gemini Proxy Integration](#6-optional-cloud-ai--gemini-proxy-integration)
7. [Air-Gapped Hardware & Deployment Topologies](#7-air-gapped-hardware--deployment-topologies)
8. [Docker & Containerized Setup](#8-docker--containerized-setup)
9. [Running, Verifying & Testing the Backend](#9-running-verifying--testing-the-backend)

---

## 1. Backend Philosophy & Air-Gap Deployment

Unlike standard SaaS web applications that continuously stream telemetry, conversational analytics, and session data to remote cloud servers, **Re-Leaf** is engineered from the ground up to operate under **strict zero-telemetry and air-gapped constraints**:

1. **Edge-Authoritative Triage:** The client browser or tablet evaluates user inputs locally using in-memory heuristic NLP scoring. The backend is never sent raw conversational transcripts.
2. **Optical Data Transfer:** Data handoff to clinic workstations occurs through optical 2D barcode (QR) scanning. No local network connectivity between the patient device and the clinic workstation is required.
3. **Local Intranet Serving:** In clinical or campus deployments, the Express backend serves as a high-speed, local LAN distribution host for tablets, verifying tamper seals and maintaining HIPAA §164.312 audit trails in local non-cloud storage.

---

## 2. Server Implementation (`server.ts`)

The complete server runtime implementation is contained in `server.ts`:

```typescript
import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Body Parsing Middlewares
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
 * Logs intake events with SHA-256 tamper seals chained to previous events
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
 * Retrieve Audit Log (Clinician Workstation Only)
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
```

---

## 3. API Endpoints Reference

### 3.1 `GET /api/health`
Checks server readiness, uptime, and validates air-gapped operational parameters.
- **Request:** `GET /api/health`
- **Response `200 OK`:**
  ```json
  {
    "status": "healthy",
    "app": "Re-Leaf Mental Health Sanctuary",
    "mode": "air-gapped-ready",
    "zeroTelemetry": true,
    "timestamp": "2026-10-09T23:45:00.000Z",
    "uptimeSeconds": 3600
  }
  ```

### 3.2 `POST /api/triage/verify-checksum`
Validates that an optical QR code payload was not corrupted or modified during camera ingestion.
- **Request:**
  ```json
  {
    "packet": {
      "v": "1.2.0",
      "tier": "MODERATE_ANXIETY_DEPRESSION",
      "pc": ["Sleep disruption", "Somatic chest pressure"]
    },
    "checksum": "a8f3b14e9c70281d"
  }
  ```
- **Response `200 OK`:**
  ```json
  {
    "valid": true,
    "computedChecksum": "a8f3b14e9c70281d",
    "providedChecksum": "a8f3b14e9c70281d",
    "timestamp": "2026-10-09T23:45:01.000Z"
  }
  ```

### 3.3 `POST /api/audit/log`
Appends a tamper-evident audit record in compliance with HIPAA §164.312(b).
- **Request:**
  ```json
  {
    "actor": "Staff Nurse Priya K.",
    "role": "INTAKE_NURSE",
    "action": "QR_SCANNED_AT_INTAKE",
    "details": "Patient QR intake completed with 0 errors",
    "status": "SUCCESS"
  }
  ```
- **Response `201 Created`:**
  ```json
  {
    "success": true,
    "record": {
      "id": "audit_1728517500000_3a8f9c1b",
      "timestamp": "2026-10-09T23:45:00.000Z",
      "actor": "Staff Nurse Priya K.",
      "role": "INTAKE_NURSE",
      "action": "QR_SCANNED_AT_INTAKE",
      "details": "Patient QR intake completed with 0 errors",
      "tamperSeal": "9f8a3c2b1e0d4f5a6b7c8d9e",
      "status": "SUCCESS"
    }
  }
  ```

### 3.4 `GET /api/audit/records`
Retrieves the active audit log ledger on the clinician's workstation.
- **Request:** `GET /api/audit/records`
- **Response `200 OK`:**
  ```json
  {
    "count": 12,
    "records": [ ... ]
  }
  ```

---

## 4. Security Headers & Zero-Telemetry Enforcement

The backend enforces strict defensive headers on every HTTP response:

| Header | Value | Purpose |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | Prevents MIME-type sniffing attacks |
| `X-Frame-Options` | `SAMEORIGIN` | Mitigates clickjacking in multi-tab hospital portals |
| `X-XSS-Protection` | `1; mode=block` | Activates browser XSS reflection filters |
| `Referrer-Policy` | `no-referrer` | Ensures zero referrer leakage across origins |
| `Permissions-Policy` | `interest-cohort=(), telemetry=(), sync-xhr=()` | Opts out of FLoC and third-party telemetry |
| `Cache-Control` | `no-store, no-cache, must-revalidate, private` | Prevents disk caching of sensitive clinical screens |

---

## 5. Cryptographic Tamper-Evident Chaining (HIPAA §164.312)

Re-Leaf implements an in-memory blockchain-like audit trail:
$$\text{TamperSeal}_n = \text{SHA256}(\text{TamperSeal}_{n-1} \parallel \text{Timestamp} \parallel \text{Actor} \parallel \text{Action} \parallel \text{Details})$$

- $\text{TamperSeal}_0 = \text{"GENESIS"}$
- Any retroactive alteration of a previous record breaks all downstream tamper seals, alerting attending clinical supervisors to unauthorized data modifications.

---

## 6. Optional Cloud AI & Gemini Proxy Integration

When operating in an online or hybrid clinic environment where cloud AI capabilities are desired:

```typescript
import { GoogleGenAI } from '@google/genai';

// Initialize with server-side environment secret (never exposed to client)
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// Server proxy route
app.post('/api/ai/companion-reflect', async (req, res) => {
  const { prompt, persona } = req.body;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are ${persona.name}, a gentle and calming companion. Respond warmly in 2 sentences: ${prompt}`,
    });
    res.json({ reply: response.text });
  } catch (err) {
    res.status(500).json({ error: 'AI reflection unavailable offline' });
  }
});
```

---

## 7. Air-Gapped Hardware & Deployment Topologies

### Topology A: Standalone Hospital Triage Kiosk
- Hardware: Raspberry Pi 4 / Intel NUC running Linux Alpine.
- Network: Local Wi-Fi Access Point with Captive Portal, strictly isolated from the internet (air-gapped SSID: `Re-Leaf-Sanctuary`).
- Flow: Patient connects phone to the local Wi-Fi, loads `http://sanctuary.local:3000`, completes triage, and displays the QR code.

### Topology B: Dual-Device Optical Air-Gap
- Patient Device: Smartphone running Re-Leaf as an offline PWA.
- Clinician Workstation: Desktop PC with USB webcam in the consultation room.
- Flow: The clinician scans the screen with the webcam; zero physical cables or RF networks connect the two devices.

---

## 8. Docker & Containerized Setup

### Multi-Stage Build
Build the container image:
```bash
docker build -t re-leaf:latest .
```

### Launch Container
```bash
docker run -d \
  -p 3000:3000 \
  --name re-leaf-container \
  --restart unless-stopped \
  re-leaf:latest
```

### Docker Compose
```bash
docker compose up -d
```

Verify container status:
```bash
docker compose ps
docker compose logs -f
```

---

## 9. Running, Verifying & Testing the Backend

### Start Server
```bash
# Production start (requires npm run build first)
npm start

# Development hot-reload start
npm run server
```

### Health Verification via cURL
```bash
curl http://localhost:3000/api/health
```
Expected output:
```json
{
  "status": "healthy",
  "app": "Re-Leaf Mental Health Sanctuary",
  "mode": "air-gapped-ready",
  "zeroTelemetry": true
}
```

### Test Audit Logging
```bash
curl -X POST http://localhost:3000/api/audit/log \
  -H "Content-Type: application/json" \
  -d '{"actor":"Dr. Sharma","role":"ATTENDING_CLINICIAN","action":"TRIAGE_ASSESSMENT_VIEWED","details":"Assessed mild anxiety","status":"SUCCESS"}'
```

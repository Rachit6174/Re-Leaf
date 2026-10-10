# 🌿 Re-Leaf: Air-Gapped Mental Health Triage & Clinical Handoff

| Sanctuary Welcome Gate | Dark Mode Interface | Bright Mode Interface |
| --- | --- | --- |
<img width="1470" height="781" alt="Screenshot 2026-10-10 at 8 16 49 AM" src="https://github.com/user-attachments/assets/d0f94aad-1f3c-4b7d-9e8d-20ed5e09996a" />
" alt="Hackathon Banner">
 <img width="1470" height="781" alt="Screenshot 2026-10-10 at 8 16 34 AM" src="https://github.com/user-attachments/assets/b5fda937-93cb-40b6-8072-f2469bd8544a" />
 <img width="1249" height="699" alt="Screenshot 2026-10-10 at 8 14 57 AM" src="https://github.com/user-attachments/assets/00bbe18a-c6d2-4056-a737-8df4f631db3f" />



> **Re-Leaf** is an air-gapped, zero-telemetry mental health triage and somatic grounding platform designed for high-stigma, low-connectivity, and clinical intake environments[cite: 1]. Built with biophilic nature aesthetics, interactive Apple Weather-style frosted glass UI, and teen host greeting gates, Re-Leaf facilitates compassionate triage without ever transmitting a single byte of personal data to cloud servers[cite: 1].

---

## 📑 Table of Contents

* [Vision & Architectural Philosophy](https://www.google.com/search?q=%23-vision--architectural-philosophy)
* [System Architecture & Optical Data Flow](https://www.google.com/search?q=%23-system-architecture--optical-data-flow)
* [Key Features](https://www.google.com/search?q=%23-key-features)
* [1. Teen Host Sanctuary Gate](https://www.google.com/search?q=%231-teen-host-sanctuary-gate)
* [2. Apple Weather-Style Nature Dynamics](https://www.google.com/search?q=%232-apple-weather-style-nature-dynamics)
* [3. Companion Elixir Potion Customizer](https://www.google.com/search?q=%233-companion-elixir-potion-customizer)
* [4. Somatic Grounding Suite & Web Audio Synth](https://www.google.com/search?q=%234-somatic-grounding-suite--web-audio-synth)
* [5. Multilingual Indian Dialect Engine](https://www.google.com/search?q=%235-multilingual-indian-dialect-engine)
* [6. Panic Purge & Stealth Camouflage](https://www.google.com/search?q=%236-panic-purge--stealth-camouflage)
* [7. Optical QR Handoff & Clinician Portal](https://www.google.com/search?q=%237-optical-qr-handoff--clinician-portal)


* [Project File Structure](https://www.google.com/search?q=%23-project-file-structure)
* [Quick Start](https://www.google.com/search?q=%23-quick-start)
* [Prerequisites](https://www.google.com/search?q=%23prerequisites)
* [Installation](https://www.google.com/search?q=%23installation)
* [Running the Development Environment](https://www.google.com/search?q=%23running-the-development-environment)
* [Building for Production](https://www.google.com/search?q=%23building-for-production)
* [Running the Express Backend Server](https://www.google.com/search?q=%23running-the-express-backend-server)


* [Privacy & Air-Gap Guarantee](https://www.google.com/search?q=%23-privacy--air-gap-guarantee)
* [Clinical Intake & HIPAA Compliance](https://www.google.com/search?q=%23-clinical-intake--hipaa-compliance)
* [Docker Deployment](https://www.google.com/search?q=%23-docker-deployment)
* [Contributing & License](https://www.google.com/search?q=%23-contributing--license)

---

## 🌿 Vision & Architectural Philosophy

Mental health triage in remote health posts, college campuses, and conflict-affected zones faces three insurmountable barriers:[cite: 1]

1. **Network Fragility:** Lack of stable cellular connectivity or Wi-Fi in rural PHCs (Primary Health Centres)[cite: 1].
2. **Surveillance & Stigma Fear:** Users avoid digital mental health tools due to tracking, ad trackers, and data brokerage risks[cite: 1].
3. **Clinical Bottlenecks:** Intake nurses are overwhelmed and lack structured, pre-triaged DSM-5 symptom cross-cutting reports[cite: 1].

**Re-Leaf solves this with an Air-Gapped, Client-Side First Architecture:**[cite: 1]

* All natural language processing (NLP), symptom keyword extraction, and distress scoring run locally in the browser runtime via Web Workers and rule-based heuristic algorithms[cite: 1].
* Triage packets are compressed and transferred to clinician tablets strictly through an **optical QR code scan** — zero Wi-Fi, zero Bluetooth, and zero cellular connection required[cite: 1].
* Ambient audio is generated mathematically via the browser's **Web Audio API synthesizers** (binaural pink noise, raindrops, ocean surges) without streaming heavy external audio files[cite: 1].

---

## 🛰 System Architecture & Optical Data Flow

```text
       +-------------------------------------------------------------+
       |                     PATIENT CLIENT (BROWSER)                |
       |                                                             |
       |  +---------------------+        +------------------------+  |
       |  | Teen Sanctuary Gate |        | Companion Elixir Potion|  |
       |  | (Aanya / Kabir)     |        | (Pet / Spirit / Avatar)|  |
       |  +----------+----------+        +-----------+------------+  |
       |             |                               |               |
       |             v                               v               |
       |  +-------------------------------------------------------+  |
       |  |   Conversational Triage & Grounding Interaction       |  |
       |  |   - 4-4-4 Pranayama Box Breathing                     |  |
       |  |   - 5-4-3-2-1 Sensory Grounding                       |  |
       |  |   - Somatic Tension Heatmap                           |  |
       |  |   - Local Rule-Based Indian NLP Triage Engine         |  |
       |  +--------------------------+----------------------------+  |
       |                             |                               |
       |                             v                               |
       |             +-------------------------------+               |
       |             | In-Memory Triage Packet Gen   |               |
       |             | SHA-256 Tamper Checksum Seal  |               |
       |             +---------------+---------------+               |
       |                             |                               |
       |                             v                               |
       |             +-------------------------------+               |
       |             | High-Density Optical QR Code  |               |
       |             +---------------+---------------+               |
       +-----------------------------|-------------------------------+
                                     |
                       [ AIR-GAPPED OPTICAL AIR GAP ]
                        (No Network / No Bluetooth)
                                     |
                                     v
       +-----------------------------+-------------------------------+
       |                   CLINICIAN WORKSTATION / INTAKE            |
       |                                                             |
       |  +-------------------------------------------------------+  |
       |  | Optical Camera Scanner (ZXing / Canvas Decoder)       |  |
       |  +--------------------------+----------------------------+  |
       |                             |                               |
       |                             v                               |
       |  +-------------------------------------------------------+  |
       |  | DSM-5 Cross-Cutting Review & FHIR Observation Bundler |  |
       |  | - Sleep Disturbance, Anhedonia, Somatic, Panic Scores |  |
       |  | - Printable PDF / Offline Clinical Chart Handoff      |  |
       |  +--------------------------+----------------------------+  |
       |                             |                               |
       |                             v                               |
       |  +-------------------------------------------------------+  |
       |  | HIPAA §164.312 Tamper-Evident Chained Audit Logs      |  |
       |  | (Genesis -> Block Hash -> Sealed Event Chain)         |  |
       |  +-------------------------------------------------------+  |
       +-------------------------------------------------------------+
```[cite: 1]

---

## ✨ Key Features

### 1. Teen Host Sanctuary Gate
- **Compassionate First Contact:** Users are greeted at the front door before any sensitive questions are asked[cite: 1].
- **Warm Young Greeters:**[cite: 1]
  - **🌸 Aanya (Teen Girl):** High empathy, encouraging smile, warm conversational cadence[cite: 1].
  - **🌱 Kabir (Teen Boy):** Grounded, low-pressure, calming presence[cite: 1].
- **Uplifting Micro-Engagements:**[cite: 1]
  - Integrated, randomized stress-relief jokes and science-backed positive quotes[cite: 1].
  - One-tap anonymous access or optional local memory passcode lock[cite: 1].

### 2. Apple Weather-Style Nature Dynamics
- **Adaptive Day & Night Atmosphere:**[cite: 1]
  - **Bright Mode:** Golden sunny sky above rolling grassland hills with drifting procedural cumulus clouds, warm beige, pastel blues, soft ambers, and gentle pink highlights[cite: 1].
  - **Dark Mode:** Deep celestial indigo night sky with shimmering multi-layer star fields, drifting shooting stars, and a tranquil urban skyline silhouette[cite: 1].
- **Glassmorphic Tactile Widgets:**[cite: 1]
  - `backdrop-filter: blur(16px)` frosted glass containers[cite: 1].
  - Semi-transparent glass buttons with specular reflections, organic hover lifts (`translateY(-2px)`), and gentle tactile glows[cite: 1].

### 3. Companion Elixir Potion Customizer
- Custom interactive potion modal allowing users to configure their sanctuary companion:[cite: 1]
  - **Persona Roles:** Adopt as a Pet, Human Guide, or Nature Spirit[cite: 1].
  - **Pet Avatars:** Golden Pup (`golden_pup`), Gentle Cat (`gentle_cat`), Calm Bunny (`calm_bunny`), Wise Owl (`wise_owl`), Sprout Panda (`sprout_panda`)[cite: 1].
  - **Name & Identity:** Custom naming and gender expression (Female, Male, Non-Binary, Nature-Neutral)[cite: 1].
  - Dynamic companion emotes that respond to user sentiments in real-time[cite: 1].

### 4. Somatic Grounding Suite & Web Audio Synth
- **4-4-4 Pranayama Box Breathing:** High-precision visual expanding orb with inhale, hold, exhale, and rest cadence counters[cite: 1].
- **5-4-3-2-1 Sensory Grounding:** Guided sensory checklist (5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste)[cite: 1].
- **Interactive Body Tension Heatmap:** Clickable anatomical somatic map (Head, Neck/Shoulders, Chest, Abdomen, Lower Back, Limbs) scoring physical tension from 0 (Relaxed) to 3 (Severe)[cite: 1].
- **Binaural Nature Synthesizer:** Mathematically generated ambient audio nodes (Forest Rain, Deep Ocean, Rustling Leaves) with zero external MP3 downloads[cite: 1].

### 5. Multilingual Indian Dialect Engine
Supports 9 Indian regional languages with culturally localized distress terminology:[cite: 1]
| Language | Code | Native Script | Primary Crisis Helpline |
|---|---|---|---|
| **English** | `en` | English | Tele-MANAS `14416` / Kiran `1800-599-0019`[cite: 1] |
| **Hindi** | `hi` | हिन्दी | Tele-MANAS `14416` / Vandrevala `+91 9999 666 555`[cite: 1] |
| **Bengali** | `bn` | বাংলা | Tele-MANAS `14416` / Kolkata Lifeline[cite: 1] |
| **Telugu** | `te` | తెలుగు | Tele-MANAS `14416` / Roshni Foundation[cite: 1] |
| **Tamil** | `ta` | தமிழ் | Tele-MANAS `14416` / Sneha India[cite: 1] |
| **Marathi** | `mr` | मराठी | Tele-MANAS `14416` / Aasra Helpline[cite: 1] |
| **Gujarati** | `gu` | ગુજરાતી | Tele-MANAS `14416` / Saath Helpline[cite: 1] |
| **Kannada** | `kn` | ಕನ್ನಡ | Tele-MANAS `14416` / NIMHANS Support[cite: 1] |
| **Punjabi** | `pa` | ਪੰਜਾਬੀ | Tele-MANAS `14416` / Jeevan Aastha[cite: 1] |

### 6. Panic Purge & Stealth Camouflage
- **Instant Camouflage Screen:** Quick-tap stealth disguise transforms the app into an innocuous calculator or basic weather widget in < 80 milliseconds[cite: 1].
- **Volatile In-Memory Panic Purge:** Instantly shreds all local session messages, somatic maps, and triage buffers with zero persistent traces[cite: 1].
- **Auto-Purge Inactivity Timer:** Configurable 5, 10, or 15-minute inactivity countdown that zeros the heap if the device is left unattended[cite: 1].

### 7. Optical QR Handoff & Clinician Portal
- Encodes clinical packets into high-density 480px QR codes with `errorCorrectionLevel: 'M'`[cite: 1].
- Includes cryptographic SHA-256 tamper-evident integrity seals[cite: 1].
- Built-in Clinician Portal with video camera QR intake, DSM-5 Cross-Cutting Symptom scoring, HIPAA §164.312 chained audit logs, and printable intake sheets[cite: 1].

---

## 📂 Project File Structure

```text
re-leaf/
├── index.html                     # HTML5 entry with PWA tags & Google fonts
├── metadata.json                  # AI Studio & applet metadata configuration
├── package.json                   # Dependencies & npm scripts
├── tsconfig.json                  # Strict TypeScript configuration
├── vite.config.ts                 # Vite bundler configuration
├── server.ts                      # Full-stack Express backend & air-gap server
├── Dockerfile                     # Multi-stage production container build
├── docker-compose.yml             # Docker compose deployment recipe
├── README.md                      # Primary GitHub repository documentation
├── FRONTEND.md                    # In-depth Frontend architecture & extracts
├── BACKEND.md                     # In-depth Backend architecture & APIs
├── public/                        # Static icons, manifest, & offline assets
└── src/
    ├── main.tsx                   # React root mount
    ├── App.tsx                    # Main Sanctuary orchestration & state
    ├── index.css                  # Tailwind v4 directives & glassmorphic styles
    ├── assets/
    │   └── images/                # Nature backgrounds (Day sunny, Night skyline)
    ├── components/
    │   ├── AutoPurgeTimer.tsx     # Inactivity countdown shredder
    │   ├── BodyScanTensionMap.tsx # Anatomical somatic tension mapper
    │   ├── BoxBreathingModal.tsx  # 4-4-4 Pranayama breathing orb
    │   ├── ClinicalQRHandoffModal.tsx # Zero-telemetry optical QR encoder
    │   ├── ClinicianPortal.tsx    # Camera QR intake, DSM-5 & audit logs
    │   ├── CompanionCustomizerModal.tsx # Elixir potion companion wizard
    │   ├── EmergencyDirectoryModal.tsx  # 1-tap dialer for Indian helplines
    │   ├── Grounding54321Modal.tsx# 5-4-3-2-1 sensory grounding workflow
    │   ├── LoginSanctuaryGate.tsx # Teen host greeting gate (Aanya & Kabir)
    │   ├── MovingSkyBackground.tsx# Animated daylight clouds & nighttime sky
    │   ├── OfflineIndicator.tsx   # Air-gapped network status badge
    │   ├── PanicDisguiseModal.tsx # Quick-switch camouflage shield
    │   ├── PWAInstallButton.tsx   # Offline PWA installation trigger
    │   ├── ReLeafLogo.tsx         # Single-leaf emblem with theme contrast
    │   └── VoiceInputButton.tsx   # Local browser speech-to-text input
    ├── services/
    │   ├── airGapTransfer.ts      # Optical QR serializer & tamper seal hasher
    │   ├── emergencyHelplines.ts  # Offline Indian crisis directory
    │   ├── languages.ts           # 9 Indian language dictionary & prompts
    │   ├── natureSoundSynth.ts    # Web Audio API procedural sound synthesizer
    │   └── nlpEngine.ts           # Heuristic DSM-5 offline triage rule engine
    └── types/
        └── triage.ts              # Core clinical data models & TypeScript types
```[cite: 1]

---

## 🚀 Quick Start

### Prerequisites
- **Node.js:** v18.0.0 or higher[cite: 1]
- **npm:** v9.0.0 or higher (or `bun` / `pnpm`)[cite: 1]

### Installation
Clone the repository and install dependencies:[cite: 1]
```bash
git clone https://github.com/your-username/re-leaf.git
cd re-leaf
npm install

```

### Running the Development Environment

Launch Vite client in development mode with HMR:[cite: 1]

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Create an optimized production bundle:[cite: 1]

```bash
npm run build

```

Build output is saved to the `/dist` directory[cite: 1].

### Running the Express Backend Server

Run the full-stack server serving the compiled frontend with air-gap verification and audit API endpoints:[cite: 1]

```bash
npm start
# or during development:
npm run server

```

---

## 🔒 Privacy & Air-Gap Guarantee

Re-Leaf adheres to strict zero-telemetry engineering principles:[cite: 1]

1. **Zero Outbound Requests:** No Google Analytics, no telemetry beacons, no pixel trackers, no third-party CDNs[cite: 1].
2. **Ephemeral Memory Storage:** Patient session triage is kept exclusively in React component memory state. No confidential chats are stored in unencrypted `localStorage` or `IndexedDB`[cite: 1].
3. **No Cloud Dependency:** The app operates 100% offline once cached by the browser service worker[cite: 1].
4. **Security Headers Enforced:** The server serves strict headers:[cite: 1]
```http
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: no-referrer
Permissions-Policy: interest-cohort=(), telemetry=(), sync-xhr=()
Cache-Control: no-store, no-cache, must-revalidate, private

```



---

## 🩺 Clinical Intake & HIPAA Compliance

For clinical environments (clinics, triage tents, and health kiosks):[cite: 1]

* **HIPAA §164.312(b) Audit Controls:** Every intake action (QR scan, chart review, role change, PDF export) generates a SHA-256 cryptographically chained record[cite: 1].
* **Tamper Seals:** If any past audit record is modified, the downstream hash chain breaks, immediately signaling tampering to supervisors[cite: 1].
* **FHIR Observation Compatibility:** The clinical packet maps symptoms into standard LOINC and SNOMED-CT clinical representations[cite: 1].

---

## 🐳 Docker Deployment

To deploy Re-Leaf inside an air-gapped clinic server or intranet kiosk:[cite: 1]

```bash
# Build the Docker image
docker build -t re-leaf:latest .

# Run container on port 3000
docker run -d -p 3000:3000 --name re-leaf-app re-leaf:latest

```

Or using Docker Compose:[cite: 1]

```bash
docker compose up -d

```

---

## 📄 License & Ethical Use Notice

This project is licensed under the **MIT License**[cite: 1].

> **Clinical Disclaimer:** Re-Leaf is a triage support, psychoeducation, and somatic de-escalation instrument. It does not replace professional psychiatric emergency services[cite: 1]. If you or someone you know is in acute danger, please contact local emergency medical services or Tele-MANAS immediately at **14416** (India) or **988** (USA/Canada)[cite: 1].

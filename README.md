# 🌿 Re-Leaf: Air-Gapped Mental Health Triage & Clinical Handoff

[![Zero Telemetry](https://img.shields.io/badge/Telemetry-0%25%20Air--Gapped-emerald.svg)](#privacy--air-gap-guarantee)
[![React](https://img.shields.io/badge/Frontend-React%2019%20%2B%20TypeScript-blue.svg)](https://react.dev/)
[![Styling](https://img.shields.io/badge/UI-Tailwind%20CSS%20v4%20Glassmorphism-sky.svg)](https://tailwindcss.com/)
[![Compliance](https://img.shields.io/badge/Standards-HIPAA%20%C2%A7164.312%20Audit-purple.svg)](#clinical-intake--hipaa-compliance)
[![Languages](https://img.shields.io/badge/Dialects-9%20Indian%20Languages-orange.svg)](#multilingual-indian-dialects)
[![Offline](https://img.shields.io/badge/Offline-PWA%20Installable-green.svg)](#deployment--installation)

> **Re-Leaf** is an air-gapped, zero-telemetry mental health triage and somatic grounding platform designed for high-stigma, low-connectivity, and clinical intake environments. Built with biophilic nature aesthetics, interactive Apple Weather-style frosted glass UI, and teen host greeting gates, Re-Leaf facilitates compassionate triage without ever transmitting a single byte of personal data to cloud servers.

---

## 📑 Table of Contents

- [Vision & Architectural Philosophy](#-vision--architectural-philosophy)
- [System Architecture & Optical Data Flow](#-system-architecture--optical-data-flow)
- [Key Features](#-key-features)
  - [1. Teen Host Sanctuary Gate](#1-teen-host-sanctuary-gate)
  - [2. Apple Weather-Style Nature Dynamics](#2-apple-weather-style-nature-dynamics)
  - [3. Companion Elixir Potion Customizer](#3-companion-elixir-potion-customizer)
  - [4. Somatic Grounding Suite & Web Audio Synth](#4-somatic-grounding-suite--web-audio-synth)
  - [5. Multilingual Indian Dialect Engine](#5-multilingual-indian-dialect-engine)
  - [6. Panic Purge & Stealth Camouflage](#6-panic-purge--stealth-camouflage)
  - [7. Optical QR Handoff & Clinician Portal](#7-optical-qr-handoff--clinician-portal)
- [Project File Structure](#-project-file-structure)
- [Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Environment](#running-the-development-environment)
  - [Building for Production](#building-for-production)
  - [Running the Express Backend Server](#running-the-express-backend-server)
- [Privacy & Air-Gap Guarantee](#-privacy--air-gap-guarantee)
- [Clinical Intake & HIPAA Compliance](#-clinical-intake--hipaa-compliance)
- [Docker Deployment](#-docker-deployment)
- [Contributing & License](#-contributing--license)

---

## 🌿 Vision & Architectural Philosophy

Mental health triage in remote health posts, college campuses, and conflict-affected zones faces three insurmountable barriers:
1. **Network Fragility:** Lack of stable cellular connectivity or Wi-Fi in rural PHCs (Primary Health Centres).
2. **Surveillance & Stigma Fear:** Users avoid digital mental health tools due to tracking, ad trackers, and data brokerage risks.
3. **Clinical Bottlenecks:** Intake nurses are overwhelmed and lack structured, pre-triaged DSM-5 symptom cross-cutting reports.

**Re-Leaf solves this with an Air-Gapped, Client-Side First Architecture:**
- All natural language processing (NLP), symptom keyword extraction, and distress scoring run locally in the browser runtime via Web Workers and rule-based heuristic algorithms.
- Triage packets are compressed and transferred to clinician tablets strictly through an **optical QR code scan** — zero Wi-Fi, zero Bluetooth, and zero cellular connection required.
- Ambient audio is generated mathematically via the browser's **Web Audio API synthesizers** (binaural pink noise, raindrops, ocean surges) without streaming heavy external audio files.

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
```

---

## ✨ Key Features

### 1. Teen Host Sanctuary Gate
- **Compassionate First Contact:** Users are greeted at the front door before any sensitive questions are asked.
- **Warm Young Greeters:**
  - **🌸 Aanya (Teen Girl):** High empathy, encouraging smile, warm conversational cadence.
  - **🌱 Kabir (Teen Boy):** Grounded, low-pressure, calming presence.
- **Uplifting Micro-Engagements:**
  - Integrated, randomized stress-relief jokes and science-backed positive quotes.
  - One-tap anonymous access or optional local memory passcode lock.

### 2. Apple Weather-Style Nature Dynamics
- **Adaptive Day & Night Atmosphere:**
  - **Bright Mode:** Golden sunny sky above rolling grassland hills with drifting procedural cumulus clouds, warm beige, pastel blues, soft ambers, and gentle pink highlights.
  - **Dark Mode:** Deep celestial indigo night sky with shimmering multi-layer star fields, drifting shooting stars, and a tranquil urban skyline silhouette.
- **Glassmorphic Tactile Widgets:**
  - `backdrop-filter: blur(16px)` frosted glass containers.
  - Semi-transparent glass buttons with specular reflections, organic hover lifts (`translateY(-2px)`), and gentle tactile glows.

### 3. Companion Elixir Potion Customizer
- Custom interactive potion modal allowing users to configure their sanctuary companion:
  - **Persona Roles:** Adopt as a Pet, Human Guide, or Nature Spirit.
  - **Pet Avatars:** Golden Pup (`golden_pup`), Gentle Cat (`gentle_cat`), Calm Bunny (`calm_bunny`), Wise Owl (`wise_owl`), Sprout Panda (`sprout_panda`).
  - **Name & Identity:** Custom naming and gender expression (Female, Male, Non-Binary, Nature-Neutral).
  - Dynamic companion emotes that respond to user sentiments in real-time.

### 4. Somatic Grounding Suite & Web Audio Synth
- **4-4-4 Pranayama Box Breathing:** High-precision visual expanding orb with inhale, hold, exhale, and rest cadence counters.
- **5-4-3-2-1 Sensory Grounding:** Guided sensory checklist (5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste).
- **Interactive Body Tension Heatmap:** Clickable anatomical somatic map (Head, Neck/Shoulders, Chest, Abdomen, Lower Back, Limbs) scoring physical tension from 0 (Relaxed) to 3 (Severe).
- **Binaural Nature Synthesizer:** Mathematically generated ambient audio nodes (Forest Rain, Deep Ocean, Rustling Leaves) with zero external MP3 downloads.

### 5. Multilingual Indian Dialect Engine
Supports 9 Indian regional languages with culturally localized distress terminology:
| Language | Code | Native Script | Primary Crisis Helpline |
|---|---|---|---|
| **English** | `en` | English | Tele-MANAS `14416` / Kiran `1800-599-0019` |
| **Hindi** | `hi` | हिन्दी | Tele-MANAS `14416` / Vandrevala `+91 9999 666 555` |
| **Bengali** | `bn` | বাংলা | Tele-MANAS `14416` / Kolkata Lifeline |
| **Telugu** | `te` | తెలుగు | Tele-MANAS `14416` / Roshni Foundation |
| **Tamil** | `ta` | தமிழ் | Tele-MANAS `14416` / Sneha India |
| **Marathi** | `mr` | मराठी | Tele-MANAS `14416` / Aasra Helpline |
| **Gujarati** | `gu` | ગુજરાતી | Tele-MANAS `14416` / Saath Helpline |
| **Kannada** | `kn` | ಕನ್ನಡ | Tele-MANAS `14416` / NIMHANS Support |
| **Punjabi** | `pa` | ਪੰਜਾਬੀ | Tele-MANAS `14416` / Jeevan Aastha |

### 6. Panic Purge & Stealth Camouflage
- **Instant Camouflage Screen:** Quick-tap stealth disguise transforms the app into an innocuous calculator or basic weather widget in < 80 milliseconds.
- **Volatile In-Memory Panic Purge:** Instantly shreds all local session messages, somatic maps, and triage buffers with zero persistent traces.
- **Auto-Purge Inactivity Timer:** Configurable 5, 10, or 15-minute inactivity countdown that zeros the heap if the device is left unattended.

### 7. Optical QR Handoff & Clinician Portal
- Encodes clinical packets into high-density 480px QR codes with `errorCorrectionLevel: 'M'`.
- Includes cryptographic SHA-256 tamper-evident integrity seals.
- Built-in Clinician Portal with video camera QR intake, DSM-5 Cross-Cutting Symptom scoring, HIPAA §164.312 chained audit logs, and printable intake sheets.

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
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher (or `bun` / `pnpm`)

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/re-leaf.git
cd re-leaf
npm install
```

### Running the Development Environment
Launch Vite client in development mode with HMR:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
Create an optimized production bundle:
```bash
npm run build
```
Build output is saved to the `/dist` directory.

### Running the Express Backend Server
Run the full-stack server serving the compiled frontend with air-gap verification and audit API endpoints:
```bash
npm start
# or during development:
npm run server
```

---

## 🔒 Privacy & Air-Gap Guarantee

Re-Leaf adheres to strict zero-telemetry engineering principles:
1. **Zero Outbound Requests:** No Google Analytics, no telemetry beacons, no pixel trackers, no third-party CDNs.
2. **Ephemeral Memory Storage:** Patient session triage is kept exclusively in React component memory state. No confidential chats are stored in unencrypted `localStorage` or `IndexedDB`.
3. **No Cloud Dependency:** The app operates 100% offline once cached by the browser service worker.
4. **Security Headers Enforced:** The server serves strict headers:
   ```http
   X-Content-Type-Options: nosniff
   X-Frame-Options: SAMEORIGIN
   Referrer-Policy: no-referrer
   Permissions-Policy: interest-cohort=(), telemetry=(), sync-xhr=()
   Cache-Control: no-store, no-cache, must-revalidate, private
   ```

---

## 🩺 Clinical Intake & HIPAA Compliance

For clinical environments (clinics, triage tents, and health kiosks):
- **HIPAA §164.312(b) Audit Controls:** Every intake action (QR scan, chart review, role change, PDF export) generates a SHA-256 cryptographically chained record.
- **Tamper Seals:** If any past audit record is modified, the downstream hash chain breaks, immediately signaling tampering to supervisors.
- **FHIR Observation Compatibility:** The clinical packet maps symptoms into standard LOINC and SNOMED-CT clinical representations.

---

## 🐳 Docker Deployment

To deploy Re-Leaf inside an air-gapped clinic server or intranet kiosk:

```bash
# Build the Docker image
docker build -t re-leaf:latest .

# Run container on port 3000
docker run -d -p 3000:3000 --name re-leaf-app re-leaf:latest
```

Or using Docker Compose:
```bash
docker compose up -d
```

---

## 📄 License & Ethical Use Notice

This project is licensed under the **MIT License**.

> **Clinical Disclaimer:** Re-Leaf is a triage support, psychoeducation, and somatic de-escalation instrument. It does not replace professional psychiatric emergency services. If you or someone you know is in acute danger, please contact local emergency medical services or Tele-MANAS immediately at **14416** (India) or **988** (USA/Canada).

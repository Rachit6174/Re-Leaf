# 🎨 Re-Leaf: Frontend Architecture & Source Extraction

> **Document 2 of 3:** Comprehensive Frontend Specification, Component Architecture, Styling System, and Client-Side Logic.

---

## 📑 Table of Contents
1. [Architecture & Design Principles](#1-architecture--design-principles)
2. [Frontend Directory Index](#2-frontend-directory-index)
3. [Design System, Glassmorphism & Animations](#3-design-system-glassmorphism--animations)
4. [Component Deep Dive & Source Breakdown](#4-component-deep-dive--source-breakdown)
   - [4.1 App Shell (`src/App.tsx`)](#41-app-shell-srcapptsx)
   - [4.2 Teen Sanctuary Login Gate (`src/components/LoginSanctuaryGate.tsx`)](#42-teen-sanctuary-login-gate-srccomponentsloginsanctuarygatetsx)
   - [4.3 Moving Sky Background (`src/components/MovingSkyBackground.tsx`)](#43-moving-sky-background-srccomponentsmovingskybackgroundtsx)
   - [4.4 Brand Logo (`src/components/ReLeafLogo.tsx`)](#44-brand-logo-srccomponentsreleaflogotsx)
   - [4.5 Companion Elixir Potion (`src/components/CompanionCustomizerModal.tsx`)](#45-companion-elixir-potion-srccomponentscompanioncustomizermodaltsx)
   - [4.6 4-4-4 Pranayama Box Breathing (`src/components/BoxBreathingModal.tsx`)](#46-4-4-4-pranayama-box-breathing-srccomponentsboxbreathingmodaltsx)
   - [4.7 5-4-3-2-1 Sensory Grounding (`src/components/Grounding54321Modal.tsx`)](#47-5-4-3-2-1-sensory-grounding-srccomponentsgrounding54321modaltsx)
   - [4.8 Somatic Tension Heatmap (`src/components/BodyScanTensionMap.tsx`)](#48-somatic-tension-heatmap-srccomponentsbodyscantensionmaptsx)
   - [4.9 Optical Air-Gap QR Handoff (`src/components/ClinicalQRHandoffModal.tsx`)](#49-optical-air-gap-qr-handoff-srccomponentsclinicalqrhandoffmodaltsx)
   - [4.10 Clinician Portal & HIPAA Audit (`src/components/ClinicianPortal.tsx`)](#410-clinician-portal--hipaa-audit-srccomponentsclinicianportaltsx)
   - [4.11 Safety Camouflage & Purge (`src/components/PanicDisguiseModal.tsx` & `AutoPurgeTimer.tsx`)](#411-safety-camouflage--purge)
   - [4.12 Voice Input & Offline Indicators (`src/components/VoiceInputButton.tsx`)](#412-voice-input--offline-indicators)
5. [Client Services & Offline Engines](#5-client-services--offline-engines)
   - [5.1 Web Audio Procedural Synthesizer (`src/services/natureSoundSynth.ts`)](#51-web-audio-procedural-synthesizer-srcservicesnaturesoundsynthts)
   - [5.2 Heuristic Offline Triage Engine (`src/services/nlpEngine.ts`)](#52-heuristic-offline-triage-engine-srcservicesnlpenginets)
   - [5.3 Optical Air-Gap Serializer (`src/services/airGapTransfer.ts`)](#53-optical-air-gap-serializer-srcservicesairgaptransferts)
   - [5.4 Multilingual Indian Dictionary (`src/services/languages.ts`)](#54-multilingual-indian-dictionary-srcserviceslanguagests)
   - [5.5 Emergency Helplines (`src/services/emergencyHelplines.ts`)](#55-emergency-helplines-srcservicesemergencyhelplinests)
6. [Core TypeScript Definitions (`src/types/triage.ts`)](#6-core-typescript-definitions-srctypestriagets)
7. [Frontend Setup & Compilation Guide](#7-frontend-setup--compilation-guide)

---

## 1. Architecture & Design Principles

The Re-Leaf frontend is built as a high-reliability, zero-telemetry Single Page Application (SPA) using:
- **Framework:** React 19 with functional components and hooks.
- **Language:** TypeScript 5.8+ with strict typing and no implicit `any`.
- **Bundler:** Vite 6 / 8 with lightning-fast ESM cold starts and minimal distribution footprint.
- **Styling:** Tailwind CSS v4 using modern `@import "tailwindcss";` theme layer.
- **Audio:** Web Audio API procedural synthesis with zero external MP3 network dependencies.
- **State Management:** Ephemeral React memory state (`useState`, `useReducer`, `useMemo`). No clinical chat data is written to persistent `localStorage` to avoid forensic traces on shared devices.

---

## 2. Frontend Directory Index

```text
src/
├── main.tsx                         # React 19 entry point
├── App.tsx                          # Core Sanctuary state coordinator & view switcher
├── index.css                        # Tailwind v4 directives, glass styles & animations
├── assets/
│   └── images/                      # Atmospheric background art
├── components/
│   ├── AutoPurgeTimer.tsx           # Configurable inactivity countdown memory shredder
│   ├── BodyScanTensionMap.tsx       # Anatomical somatic tension heatmapping tool
│   ├── BoxBreathingModal.tsx        # 4-4-4 Pranayama expanding orb visualizer
│   ├── ClinicalQRHandoffModal.tsx   # Air-gapped QR code generation modal
│   ├── ClinicianPortal.tsx          # Doctor/Nurse portal with QR camera scanner & audit log
│   ├── CompanionCustomizerModal.tsx # "Companion Elixir Potion" modal for persona/pet configuration
│   ├── EmergencyDirectoryModal.tsx  # Direct tel: dialer for Indian mental health helplines
│   ├── Grounding54321Modal.tsx      # 5-4-3-2-1 sensory grounding exercise
│   ├── LoginSanctuaryGate.tsx       # Welcome gate with Teen Host greeting, jokes & quotes
│   ├── MovingSkyBackground.tsx      # CSS/DOM procedural moving clouds & starry night sky
│   ├── OfflineIndicator.tsx         # Network status banner verifying air-gap state
│   ├── PanicDisguiseModal.tsx       # Emergency camouflage disguise (calculator/weather screen)
│   ├── PWAInstallButton.tsx         # Progressive Web App installation trigger
│   ├── ReLeafLogo.tsx               # Theme-adaptive single leaf logo emblem
│   └── VoiceInputButton.tsx         # Local Web Speech API microphone input button
├── services/
│   ├── airGapTransfer.ts            # QR payload minification & SHA-256 integrity hashing
│   ├── emergencyHelplines.ts        # Tele-MANAS, KIRAN, Vandrevala offline directory
│   ├── languages.ts                 # 9 Indian language localizations & cultural phrases
│   ├── natureSoundSynth.ts          # Pure Web Audio API white/pink noise & filter synth
│   └── nlpEngine.ts                 # Rule-based offline DSM-5 symptom scoring engine
└── types/
    └── triage.ts                    # Clinical data models, roles & audit types
```

---

## 3. Design System, Glassmorphism & Animations

Re-Leaf implements an Apple Weather-inspired visual hierarchy with two distinct atmospheric themes:

### Bright Mode (Daylight Sanctuary)
- **Sky Top:** Procedural radiant sky with gentle drifting cumulus clouds (`animate-cloud-drift`).
- **Grassland Bottom:** Lush organic green grassland floor.
- **Palette:** Soft warm beige (`#fffdfa`), pastel blues, warm yellows, and subtle blush pink accents.
- **Widgets:** Translucent frosted glass containers (`bg-white/40` to `bg-white/60`, `backdrop-blur-xl`, `border-white/50`).

### Dark Mode (Celestial Starlight)
- **Night Sky:** Deep obsidian and midnight indigo sky with multi-tiered twinkling star clusters, shooting star flares, and a distant city skyline silhouette.
- **Enhanced Sky Visibility:** Calibrated transparency overlay (`from-transparent via-slate-950/25 to-slate-950/65`) ensuring starlight remains prominent.
- **Widgets:** Smoked glass containers (`bg-slate-900/40` to `bg-slate-900/65`, `backdrop-blur-xl`, `border-white/10`).

### Universal Glass Buttons
All buttons in Re-Leaf utilize tactile glass styling:
```css
/* Glass Button Standard */
button:not(:disabled),
a[role="button"]:not([aria-disabled="true"]),
.glass-button {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

button:not(:disabled):hover,
a[role="button"]:not([aria-disabled="true"]):hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.28);
  border-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14), inset 0 1px 1px rgba(255, 255, 255, 0.5);
}
```

---

## 4. Component Deep Dive & Source Breakdown

### 4.1 App Shell (`src/App.tsx`)
The central controller manages:
- **Sanctuary State:** Active user profile, companion configuration, conversation messages, and somatic tension scores.
- **Theme Toggle:** Bright vs. Dark mode with instant wallpaper switching.
- **Audio Synth:** Background nature soundscape generator (Rain, Stream, Forest Wind).
- **Navigation Modals:** Box Breathing, 5-4-3-2-1 Grounding, Somatic Body Scan, Clinician Portal, QR Handoff, and Helplines.
- **Emergency Panic Shred:** Global keyboard shortcut or button click to wipe session memory instantly.

### 4.2 Teen Sanctuary Login Gate (`src/components/LoginSanctuaryGate.tsx`)
The welcoming entry gate greets users with warm emotional safety:
- **Teen Host Selection:**
  - **Aanya:** Warm teen girl avatar with uplifting, empathetic tone.
  - **Kabir:** Grounding teen boy avatar with gentle, reassuring tone.
- **Interactive Cheer Library:**
  - 10+ randomized stress-relief jokes.
  - 10+ curated cognitive-behavioral inspirational quotes.
- **Flexible Access Modes:**
  - **1-Tap Anonymous Entry:** Instant access without storing any username or email.
  - **Local Passcode Memory:** Encrypted in-browser profile for repeat visits.

### 4.3 Moving Sky Background (`src/components/MovingSkyBackground.tsx`)
Renders an animated dynamic backdrop:
- **Day Mode:** Moving SVG procedural clouds drifting at varying parallax speeds across a sunny horizon.
- **Night Mode:** Multi-tier particle starfield with subtle pulsing luminescence, shooting star traces, and a cityscape silhouette.
- **Hardware-Accelerated:** Transforms are GPU-accelerated via `transform: translate3d(...)` ensuring 60 FPS performance on low-power mobile devices.

### 4.4 Brand Logo (`src/components/ReLeafLogo.tsx`)
- Renders an SVG single curved leaf emblem with dew drop highlight.
- Provides theme-aware contrast (`isBright` prop):
  - In bright mode: Emerald-to-teal leaf with deep slate title typography.
  - In dark mode: Luminous mint-to-emerald leaf with crisp white typography.

### 4.5 Companion Elixir Potion (`src/components/CompanionCustomizerModal.tsx`)
Customizes the sanctuary AI companion:
- **Form Factors:**
  - **Pet:** Golden Pup (`golden_pup`), Gentle Cat (`gentle_cat`), Calm Bunny (`calm_bunny`), Wise Owl (`wise_owl`), Sprout Panda (`sprout_panda`).
  - **Human Guide:** Empathetic peer or elder mentor.
  - **Nature Spirit:** Elemental calming presence.
- **Customization Options:** Custom naming, gender identity (Female, Male, Non-Binary, Neutral), and reactive emojis.

### 4.6 4-4-4 Pranayama Box Breathing (`src/components/BoxBreathingModal.tsx`)
- Visual expanding and contracting biofeedback orb.
- 4-phase cycle: **Inhale (4s)** -> **Hold (4s)** -> **Exhale (4s)** -> **Rest (4s)**.
- Integrated pacing haptic/visual cue counter for de-escalating panic attacks.

### 4.7 5-4-3-2-1 Sensory Grounding (`src/components/Grounding54321Modal.tsx`)
- Step-by-step interactive countdown based on Cognitive Behavioral Therapy (CBT):
  - 👁 5 Things you can see around you
  - ✋ 4 Things you can physically touch or feel
  - 👂 3 Sounds you can hear right now
  - 👃 2 Scents you can smell
  - 👅 1 Taste you can experience

### 4.8 Somatic Tension Heatmap (`src/components/BodyScanTensionMap.tsx`)
- Clickable anatomical human body map divided into 6 clinical regions:
  - Head, Neck & Shoulders, Chest, Abdomen, Lower Back, and Limbs.
- 4-level color-coded severity: Relaxed (0), Mild (1), Moderate (2), Severe (3).
- Outputs a normalized `BodyTensionMap` used in clinical triage packets.

### 4.9 Optical Air-Gap QR Handoff (`src/components/ClinicalQRHandoffModal.tsx`)
- Encodes clinical assessments into a 480px QR code.
- Minifies payloads using single-character keys (`v`, `ts`, `tier`, `pc`, `d`, `som`, `imp`, `cris`, `chk`).
- Appends an SHA-256 integrity checksum for verification by the intake nurse.

### 4.10 Clinician Portal & HIPAA Audit (`src/components/ClinicianPortal.tsx`)
- Dedicated doctor/nurse view accessible via role switch.
- Features:
  - Video camera QR code scanner.
  - DSM-5 Cross-Cutting Symptom Breakdown (Sleep, Somatic, Cognitive, Anhedonia, Social, Panic).
  - HIPAA §164.312 Tamper-Evident Audit Log with chained block hashes.
  - Printable clinical triage intake summary.

### 4.11 Safety Camouflage & Purge
- **`PanicDisguiseModal.tsx`:** Instantly covers the screen with an interactive working calculator or standard weather forecast screen.
- **`AutoPurgeTimer.tsx`:** Inactivity watchdog that wipes the in-memory chat session after 5, 10, or 15 minutes of silence.

### 4.12 Voice Input & Offline Indicators
- **`VoiceInputButton.tsx`:** Utilizes the browser's native `webkitSpeechRecognition` / `SpeechRecognition` API for hands-free offline dictation in Indian English and Hindi.
- **`OfflineIndicator.tsx`:** Reassures users that the device is running in an air-gapped state with no active internet traffic.

---

## 5. Client Services & Offline Engines

### 5.1 Web Audio Procedural Synthesizer (`src/services/natureSoundSynth.ts`)
Synthesizes calming soundscapes in real-time without downloading audio files:
```typescript
class NatureSoundSynth {
  private ctx: AudioContext | null = null;
  // White/Pink noise generation via AudioBuffer
  // Resonant BiquadFilterNodes simulating raindrops & ocean waves
  // Periodic low-frequency oscillators (LFO) creating wind surges
}
```

### 5.2 Heuristic Offline Triage Engine (`src/services/nlpEngine.ts`)
- Lexical keyword matching and sentiment density analysis for 9 Indian languages.
- Scores across 6 core DSM-5 domains:
  1. Sleep Disturbance
  2. Somatic Tension
  3. Cognitive Fatigue
  4. Anhedonia & Apathy
  5. Social Withdrawal
  6. Acute Panic / Crisis
- Detects critical distress keywords and triggers immediate de-escalation protocols and helpline recommendations.

### 5.3 Optical Air-Gap Serializer (`src/services/airGapTransfer.ts`)
- Serializes `ClinicalTriagePacket` into compressed JSON.
- Generates high-density QR codes offline via `qrcode`.
- Signs every packet with an SHA-256 hash seal.

### 5.4 Multilingual Indian Dictionary (`src/services/languages.ts`)
Contains localized greetings, quick-response chips, and symptom prompts for 9 languages:
English (`en`), Hindi (`hi`), Bengali (`bn`), Telugu (`te`), Tamil (`ta`), Marathi (`mr`), Gujarati (`gu`), Kannada (`kn`), and Punjabi (`pa`).

### 5.5 Emergency Helplines (`src/services/emergencyHelplines.ts`)
Pre-bundled offline registry containing:
- **Tele-MANAS:** `14416` (National 24/7 Mental Health Helpline, Government of India)
- **KIRAN:** `1800-599-0019` (Ministry of Social Justice and Empowerment)
- **Vandrevala Foundation:** `+91 9999 666 555`
- **Aasra:** `+91 98204 66726`
- **NIMHANS Support:** `080-46110007`

---

## 6. Core TypeScript Definitions (`src/types/triage.ts`)

```typescript
export type LanguageCode = 'en' | 'hi' | 'bn' | 'te' | 'ta' | 'mr' | 'gu' | 'kn' | 'pa';
export type TriageStage = 'MILD_DISTRESS' | 'MODERATE_ANXIETY_DEPRESSION' | 'ELEVATED_RISK' | 'ACUTE_CRISIS';

export type SymptomDomainKey = 
  | 'sleep_disturbance'
  | 'somatic_tension'
  | 'cognitive_fatigue'
  | 'anhedonia_apathy'
  | 'social_withdrawal'
  | 'acute_panic_distress';

export interface SymptomDomainData {
  key: SymptomDomainKey;
  name: string;
  score: number; // 0 to 10
  severity: 'None' | 'Mild' | 'Moderate' | 'Severe';
  detectedIndicators: string[];
  clinicalSignificance: string;
}

export type BodyPartId = 'head' | 'neck_shoulders' | 'chest' | 'abdomen' | 'lower_back' | 'limbs';
export type BodyTensionLevel = 0 | 1 | 2 | 3;
export type BodyTensionMap = Record<BodyPartId, BodyTensionLevel>;

export interface CompanionPersona {
  type: 'pet' | 'human' | 'nature_spirit';
  name: string;
  gender: 'female' | 'male' | 'non_binary' | 'nature_neutral';
  petSpecies?: 'golden_pup' | 'gentle_cat' | 'calm_bunny' | 'wise_owl' | 'sprout_panda';
  avatarIcon: string;
  personality: string;
}

export interface ClinicalTriagePacket {
  version: '1.2.0';
  generatedAt: string;
  sessionDurationMinutes: number;
  triageTier: TriageStage;
  primaryComplaints: string[];
  domains: Record<SymptomDomainKey, SymptomDomainData>;
  somaticHeatmap: BodyTensionMap;
  timelineEstimate: string;
  dailyImpact: {
    sleep: string;
    social: string;
    workStudy: string;
    appetite: string;
  };
  recommendedInterventions: string[];
  crisisFlag: boolean;
  fhirObservationBundle: Record<string, any>;
  integrityChecksum: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: string;
  role: 'PATIENT' | 'INTAKE_NURSE' | 'ATTENDING_CLINICIAN' | 'TRIAGE_SUPERVISOR';
  action: string;
  details: string;
  tamperSeal: string;
  status: 'SUCCESS' | 'WARNING' | 'ALERT';
}
```

---

## 7. Frontend Setup & Compilation Guide

### Development
```bash
# Install dependencies
npm install

# Start Vite development server on port 3000
npm run dev
```

### Static Type Checking
```bash
# Verify TypeScript without emitting bundle
npm run lint
```

### Production Build
```bash
# Compile and optimize for production
npm run build
```
Build assets are generated in `/dist` and are ready for zero-server static hosting or integration with the Express backend.

# TrustDocs Education to Employment - frontend

The frontend web application for the TrustDocs education-to-employment verification platform.

## Overview

TrustDocs connects verified university education with verified employment. This Next.js application hosts the frontend user interfaces for TrustDocs Admin, Universities, Students, and Companies, adhering to the fintech-inspired dark theme design tokens specified in the platform documentation.

## Current Status: Phase 1 (Frontend Foundation)

- **Framework**: Next.js 16 (App Router, React 19)
- **Language**: TypeScript with `@/*` import alias pointing to `./src/*`
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **Client State**: Zustand for cross-page client-side interactive state
- **Typography**: Google Inter font via Next.js font system
- **Design System**: Global dark theme tokens (`#070B17` Deep Navy, `#0B1220` Midnight Navy, `#101827` Navy Slate, `#3B82F6` Trust Blue, `#22D3EE` Electric Cyan)
- **Accessibility**: WCAG AA contrast compliance, visible `:focus-visible` keyboard rings, and minimum 44px interactive touch targets

## Architecture & Source Organization

The project organizes source code inside `src/` following a modular, domain-driven structure:

```
src/
├── app/                 # Next.js App Router routes and root layouts
├── components/
│   ├── ui/              # Reusable basic UI components (buttons, badges, cards)
│   ├── layout/          # Application shell, top navigation, and sidebar components
│   └── shared/          # Shared business-neutral UI components
├── hooks/               # Custom reusable React hooks
├── lib/                 # Core third-party library configurations and utilities
├── services/            # API client and service functions
├── store/               # Zustand client-side global state stores
├── styles/              # Additional shared style modules and theme definitions
├── types/               # Shared TypeScript interfaces and type definitions
├── utils/               # Pure helper functions
├── constants/           # Platform-wide constants and enumerations
└── config/              # Public application configurations
```

### State Management & Zustand's Role

TrustDocs cleanly separates **client state** from **server data**:

- **Zustand (`src/store/`)** is reserved strictly for genuine cross-page client state:
  - Sidebar and navigation drawer open/closed states
  - Multi-step verification form progress
  - Non-sensitive UI preferences
  - Temporary QR display and countdown workflow state
- **What Zustand Does NOT Handle**:
  - **Server Data**: Certificates, organization records, verification histories, and audit logs are managed through API services and server-state caching (TanStack Query).
  - **Sensitive Secrets**: Passwords, JWT access/refresh tokens, biometric landmarks/images, and blockchain private keys are never stored in Zustand or local storage.

Refer to [src/store/README.md](./src/store/README.md) for domain-specific store conventions.

## Getting Started

### Prerequisites

- Node.js `v20+` or `v24+`
- npm `v10+` or `v11+`

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and Lint

Verify code quality and production compilation:

```bash
# Run ESLint
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```

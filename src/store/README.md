# State Management Architecture & Conventions

This directory contains client-side global state stores powered by **Zustand**.

---

## Conventions

- **One store per business domain**: Keep stores focused and modular rather than maintaining a monolithic global state.
- **Filename pattern**: `<domain>.store.ts` (e.g., `ui.store.ts`, `verification.store.ts`).
- **Hook export pattern**: `use<Domain>Store` (e.g., `useUIStore`, `useVerificationStore`).
- **Client state only**: Use Zustand exclusively for genuine cross-page client-side interactive state.
- **No server data caching**: Do not use Zustand for server data that should be fetched, cached, and synchronized via API/server-state tools (e.g., TanStack Query).
- **Zero sensitive data**: Never store access tokens, refresh tokens, passwords, biometric data, private keys, wallet secrets, or certificate documents in Zustand.
- **Fine-grained selectors**: Always use selectors when consuming store state to prevent unnecessary component re-renders:
  ```ts
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  ```
- **Explicit persistence**: Persist store state to storage only when explicitly required.
- **Storage safety**: Never persist sensitive authentication or identity information to `localStorage` or `sessionStorage`.

---

## State Responsibility Matrix

| Use Zustand For (Client State) | Do NOT Use Zustand For (Server/Security State) |
|---|---|
| Sidebar and modal open/closed state | Certificates and credential records fetched from backend |
| Temporary multi-step form progress | University or company organization lists |
| Non-sensitive UI preferences and themes | System audit logs and verification records |
| Temporary QR display/countdown workflow state | Database records |
| Cross-page wizard workflow state | Authentication tokens and session secrets |
| Camera preview modal active state | Biometric landmark vectors or raw images |
| | Blockchain private keys and seed phrases |

*Server data and database records must be managed via API service queries and server-state caching.*

---

## Future Store Examples (Architecture Reference)

The following stores represent planned future domain modules. They are documented here for design reference and should **not** be implemented prematurely:

1. `src/store/auth.store.ts`: High-level non-sensitive client session state (e.g., current user role, organization verification status flag).
2. `src/store/ui.store.ts`: Layout state such as sidebar expansion, active theme, mobile navigation drawer, and active modal overlays.
3. `src/store/verification.store.ts`: Active verification wizard step, temporary QR countdown timer state, and client-side challenge progress.

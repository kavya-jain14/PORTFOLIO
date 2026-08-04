# The Way of the Code

A cinematic, story-driven software-engineering portfolio for Kavya Jain.

## Current Milestone

**Foundation** — The project has been migrated to a strict TypeScript
foundation. The codebase contains a minimal application shell with a design
token system and no visual implementation. Cinematic scenes, animations, and
portfolio content are not implemented yet.

## Stack

- React 19
- Vite 8
- TypeScript (strict)
- GSAP (installed, not yet integrated)
- ESLint (flat config, type-checked)
- Prettier

## Getting Started

### Prerequisites

- Node.js ≥ 22.12.0 (see `.nvmrc` for recommended version)
- npm

### Installation

```bash
git clone https://github.com/kavya-jain14/PORTFOLIO.git
cd PORTFOLIO
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

| Script                 | Description                            |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Start the Vite development server      |
| `npm run build`        | Type-check and build for production    |
| `npm run preview`      | Preview the production build           |
| `npm run lint`         | Run ESLint with zero-warning tolerance |
| `npm run typecheck`    | Run TypeScript type checking           |
| `npm run format`       | Format all files with Prettier         |
| `npm run format:check` | Verify formatting (CI-safe)            |

## Project Structure

```
src/
├── main.tsx              ← Application entry point
├── vite-env.d.ts         ← Vite client type declarations
├── app/
│   ├── App.tsx           ← Minimal application shell
│   └── App.module.css    ← Application shell styles
└── styles/
    ├── reset.css         ← Browser normalization
    ├── tokens.css        ← Design tokens (CSS custom properties)
    ├── typography.css    ← Base type scale
    └── global.css        ← Global document styles
```

## Vision

The future portfolio introduction will feature a cinematic mountain scene with
hand-authored GSAP timelines, canvas-based effects, and deliberate motion
choreography. This is a long-term implementation goal — not the current state.

## Principles

### Accessibility

- Reduced-motion preferences will be respected
- Semantic HTML structure
- Keyboard navigation support
- Content accessible without animation

### Performance

- CSS Modules for scoped styles
- Scene-level code splitting (planned)
- Single unified animation loop (planned)

These are guiding principles for future implementation, not completed features.

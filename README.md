# Kavya Jain — portfolio

A responsive personal homepage with selected project repositories, an about section, and a GitHub contact link. The page uses a flat editorial layout, semantic sections, a keyboard skip link, visible focus states, and reduced-motion-aware anchor navigation.

## Run locally

Tested with Node.js 24.

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

## Source map

- `src/App.jsx`: project descriptions and page content.
- `src/App.css`: responsive page layout.
- `src/index.css`: typography, defaults, focus and motion preferences.
- `index.html`: page title and description.

Built with React and Vite. GSAP remains installed for future motion work; the current page does not depend on an animation sequence. Project links lead to source repositories and do not claim that every project is deployed or complete.

The production build was checked in Chromium at desktop and 375 px widths without horizontal overflow. Publishing this repository does not by itself verify a live hosting deployment.

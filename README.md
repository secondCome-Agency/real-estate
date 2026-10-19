# RainBasera — Real Estate React Website

A responsive React + Vite website inspired by the supplied screen recording's architectural/property editorial style. Content, property names, project names, and brand are original sample data.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes
- Property photography is loaded from Unsplash URLs, so an internet connection is needed to display the images.
- The enquiry form currently validates input in the browser and displays a confirmation state. It does not send data to a backend. Connect your email service/API before production use.
- Property cards open a detail modal.
- Section reveal animations use IntersectionObserver and CSS transitions. The hero and image cards include hover/reveal motion.

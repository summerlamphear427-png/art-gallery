# Art Gallery

A responsive single-page application (SPA) showcasing six original digital artworks by Summer Lamphear.

**Live site:** https://mellifluous-paletas-20ae76.netlify.app/
**Repository:** https://github.com/summerlamphear427-png/art-gallery

## Features

- Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile) built with Bootstrap
- Client-side routing with React Router, so navigation happens without page reloads
- Reusable `ArtCard` component for each artwork
- Quick view modal for previewing an artwork's details
- Dedicated detail page for each artwork (`/art/:id`)
- Artwork data stored in a JSON file and loaded dynamically
- Lazy loading of images using the native `loading="lazy"` attribute

## Tech Stack

- React (with Vite)
- React Router
- Bootstrap and React-Bootstrap
- Deployed on Netlify

## Project Structure

- `src/App.jsx`: routes, gallery page, and Quick view modal
- `src/components/ArtCard.jsx`: reusable card for each artwork
- `src/components/ArtDetail.jsx`: detail page for a single artwork
- `src/data/artworks.json`: artwork data (title, artist, year, description, image)
- `public/images/`: artwork images
- `public/_redirects`: makes page refreshes work on Netlify

## Running Locally

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173`

## Build and Deployment

Run `npm run build` to create a minified production build in the `dist` folder. The site is deployed to Netlify, which rebuilds automatically whenever changes are pushed to the `main` branch.

## Design Choices

- **React and Vite** for fast setup and a large amount of documentation.
- **Bootstrap** for a responsive grid and ready-made components like cards and modals.
- **A JSON file** instead of an API, since the data is small and doesn't change.
- **Local images** in the `public` folder so they never break from external links.

## Testing

Responsive behavior was tested with browser developer tools' device mode at phone, tablet, and desktop widths.
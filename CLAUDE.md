# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **P2P Car Rental** platform with a monorepo structure. The frontend application is built with Next.js 16 (App Router), TypeScript, and CSS Modules. The design was implemented from Figma and features a vehicle listing page with search functionality and vehicle cards.

## Development Commands

**All commands must be run from the `p2p-web/` directory:**

```bash
cd p2p-web

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Repository Structure

```
p2pcar/
├── p2p-web/              # Frontend Next.js application
│   ├── src/
│   │   ├── app/         # Next.js App Router pages
│   │   └── components/  # React components with CSS Modules
│   ├── public/          # Static assets
│   └── package.json     # Frontend dependencies
└── README.md
```

## Tech Stack

- **Next.js 16.1.1** with App Router (Turbopack enabled)
- **React 19.2.3**
- **TypeScript 5** with strict mode
- **Tailwind CSS 4** (global utilities)
- **CSS Modules** (primary styling approach)

## Architecture

### Path Aliases
- `@/*` maps to `./src/*` (configured in `p2p-web/tsconfig.json`)

### Component Structure

Each component in `src/components/` has a corresponding `*.module.css` file for scoped styling:

- `P2PRentalPage.tsx` - Main page wrapper
- `SearchBar.tsx` - Hero section with search inputs (location, dates)
- `VehicleGrid.tsx` - Grid container with sort dropdown, contains hardcoded vehicle data
- `VehicleCard.tsx` - Individual vehicle card component

### Data Model

The `Vehicle` interface (defined in `VehicleCard.tsx`) includes:
- `id`, `name`, `image` (URL string)
- `rating`, `reviewCount`
- `location`, `seats`, `transmission`, `fuel`
- `hostName`, `hostInitial`, `trips`
- `price` (per day in CNY)
- `badges` (array of strings like "超级车主", "即时预订")

Vehicle data is currently hardcoded in `VehicleGrid.tsx` (6 sample vehicles with Unsplash images).

### Styling Approach

**Primary: CSS Modules** - Each component imports styles as:
```tsx
import styles from './ComponentName.module.css';
```
Usage: `className={styles.className}`

**Global: Tailwind CSS v4** - Imported via `@import "tailwindcss"` in `globals.css` for utility classes.

### Design Tokens

Key colors:
- Primary blue: `#155dfc` (buttons, badges, links)
- Gradient: `#155dfc` → `#1447e6` (SearchBar background)
- Text: `#101828` (headings), `#4a5565` (body), `#6a7282` (secondary)
- Borders: `#d1d5dc`
- Rating star: `#F59E0B`

Font: Inter (with Noto Sans JP/SC fallback for Chinese)

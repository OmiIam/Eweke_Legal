# E.J. Eweke & Co - Legal Website

## Overview
This is a professional law firm website for E.J. Eweke & Co - Advocates, Solicitors, and Legal Consultants. The website showcases the firm's practice areas, insights, and provides contact information for potential clients.

**Status:** ✅ Fully configured and running in Replit environment

## Project Architecture

### Tech Stack
- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 3.4.0
- **UI Components:** Radix UI components library
- **TypeScript:** Full TypeScript support
- **Font:** Helvetica Neue (via CDN)

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (Radix-based)
│   ├── figma/          # Figma-related components
│   ├── About.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Insights.tsx
│   ├── LegalDisclaimer.tsx
│   ├── PracticeAreas.tsx
│   ├── ScrollProgress.tsx
│   ├── SEOHead.tsx
│   ├── SkipToContent.tsx
│   ├── Testimonials.tsx
│   └── TrustSignals.tsx
├── styles/
│   └── globals.css     # Global styles and Tailwind config
├── App.tsx             # Main application component
└── main.tsx            # Application entry point

index.html              # HTML entry point
```

### Key Features
1. **Responsive Design:** Mobile-first approach with Tailwind CSS
2. **Accessibility:** Screen reader support, skip-to-content links, focus states
3. **SEO Optimized:** React Helmet for meta tags
4. **Modern UI:** Radix UI primitives for accessible components
5. **Toast Notifications:** Sonner for elegant notifications

## Development Setup

### Configuration Changes Made for Replit
1. **Vite Configuration** (`vite.config.ts`):
   - Server host set to `0.0.0.0` (required for Replit)
   - Port set to `5000` (Replit's webview port)
   - HMR client port set to `443` (for Replit proxy)

2. **Package Configuration** (`package.json`):
   - Added `"type": "module"` for ES modules support

3. **Tailwind Configuration** (`tailwind.config.js`):
   - Configured custom theme colors using CSS variables
   - Added custom border radius values

4. **PostCSS Configuration** (`postcss.config.js`):
   - Uses Tailwind CSS v3 (downgraded from v4 for compatibility)
   - Autoprefixer for browser compatibility

### Important Notes
- The project originally had Tailwind CSS v4, but was downgraded to v3.4.0 for stability
- `src/index.css` contains pre-compiled CSS and is NOT imported
- `src/styles/globals.css` is the main stylesheet with `@tailwind` directives

## Running the Application

### Development
```bash
npm run dev
```
Runs on http://0.0.0.0:5000 (accessible via Replit webview)

### Production Build
```bash
npm run build
```
Builds the application to the `build/` directory

## Deployment Configuration

The project is configured for static deployment:
- **Type:** Static site
- **Build Command:** `npm run build`
- **Output Directory:** `build/`

## Dependencies

### Main Dependencies
- React & React DOM (18.3.1)
- Radix UI component libraries
- Tailwind CSS utilities (class-variance-authority, tailwind-merge, clsx)
- Lucide React (icons)
- Sonner (toast notifications)
- React Helmet (SEO)
- React Hook Form (form handling)

### Development Dependencies
- Vite & plugins
- TypeScript & type definitions
- Tailwind CSS & PostCSS
- Autoprefixer

## Recent Changes (November 24, 2025)
1. Configured Vite for Replit environment (host, port, HMR)
2. Fixed Tailwind CSS compatibility issues (downgraded v4 → v3)
3. Resolved PostCSS configuration conflicts
4. Fixed file permissions for Vite binary
5. Set up deployment configuration for static hosting
6. Created .gitignore for Node.js projects
7. Updated package.json with module type

## Known Issues & Solutions
- **WebSocket HMR Warning:** The dev server shows a WebSocket connection warning, but this doesn't affect functionality. It's a known issue with Replit's proxy setup and can be safely ignored during development.

## Future Considerations
- Consider adding a backend for contact form submission
- Implement analytics tracking
- Add more practice area pages
- Enhance SEO with dynamic meta tags per page

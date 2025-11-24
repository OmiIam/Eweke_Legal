# E.J. Eweke & Co - Law Firm Website

## Overview
This is a professional law firm website for E.J. Eweke & Co, a Nigerian law firm specializing in legal representation for corporations and institutions. The website showcases the firm's practice areas, expertise, and contact information.

## Project Architecture

### Tech Stack
- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.0
- **UI Components**: Radix UI (various components)
- **Additional Libraries**:
  - Sonner (toast notifications)
  - Lucide React (icons)
  - React Helmet (SEO meta tags)
  - React Hook Form (form handling)
  - Recharts (data visualization)

### Project Structure
```
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components (shadcn/ui style)
│   │   ├── figma/        # Figma-related components
│   │   ├── About.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Insights.tsx
│   │   ├── LegalDisclaimer.tsx
│   │   ├── PracticeAreas.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── SEOHead.tsx
│   │   ├── SkipToContent.tsx
│   │   ├── Testimonials.tsx
│   │   └── TrustSignals.tsx
│   ├── styles/
│   │   └── globals.css   # Global styles with Tailwind directives
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies and scripts
```

## Development

### Installation
Dependencies are already installed. If you need to reinstall:
```bash
npm install
```

### Running the Development Server
The development server is configured to run automatically via the workflow:
```bash
npm run dev
```
The server runs on port 5000 and is accessible via the Replit preview.

### Building for Production
```bash
npm run build
```
The production build will be output to the `build/` directory.

## Replit Configuration

### Workflow
- **Name**: Start application
- **Command**: `npm run dev`
- **Port**: 5000 (configured for webview)
- **Host**: 0.0.0.0 (allows Replit preview access)
- **Allowed Hosts**: Configured to accept all hosts for Replit proxy

### Deployment
- **Type**: Static site deployment
- **Build Command**: `npm run build`
- **Public Directory**: `build/`

### Key Configuration Details
The Vite configuration has been set up specifically for the Replit environment:
- Host set to `0.0.0.0` to allow external access
- Port set to 5000 (Replit's webview port)
- `allowedHosts: true` to allow Replit's proxy URLs
- HMR client port set to 443 for WebSocket connections

## Recent Changes (November 24, 2025)
- Initial setup and configuration for Replit environment
- Fixed Tailwind CSS compatibility issues (downgraded from v4 to v3.4.0)
- Configured Vite for Replit preview compatibility
- Set up deployment configuration for static site hosting
- Added proper gitignore for Node.js projects

## Features
- Professional law firm landing page
- Responsive design with Tailwind CSS
- SEO-optimized with meta tags
- Accessibility features (skip to content, keyboard navigation)
- Contact form with validation
- Practice areas showcase
- Client testimonials
- Legal insights/blog section
- Trust signals (accreditations, languages)
- Legal disclaimer

## Notes
- The project uses ES modules (`"type": "module"` in package.json)
- Custom theme colors are defined in `globals.css` using CSS custom properties
- UI components follow the shadcn/ui pattern with Radix UI primitives

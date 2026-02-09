# GrammarAI - React SaaS Application

A modern, responsive web application built with React, Vite, and Tailwind CSS featuring a dark SaaS design system.

## Features

- ✨ Dark mode SaaS UI design
- 🎨 Gradient accents (blue to purple)
- 📱 Fully responsive layout
- 🔐 Login page with social authentication
- 🏠 Landing page with hero section and feature cards
- ⚡ Fast development with Vite
- 🎯 React Router for navigation
- 🎭 Lucide React icons

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Demo_T-check/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions CI/CD pipeline
├── src/
│   ├── components/
│   │   └── Navbar.jsx         # Navigation component
│   ├── pages/
│   │   ├── LandingPage.jsx    # Home page
│   │   └── LoginPage.jsx      # Login page
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies
```

## Pages

### Landing Page (/)
- Hero section with gradient headline
- AI-Powered badge
- Call-to-action buttons
- Three feature cards:
  - Instant Correction
  - Style Suggestions
  - Privacy First

### Login Page (/login)
- Email and password inputs with icons
- Remember me checkbox
- Forgot password link
- Social login (Google & GitHub)
- Sign up link

## Design System

### Colors
- **Background:** `#05050A` (Very dark navy/black)
- **Card Background:** `#0f1219` / `#111827` (Dark gray/blue)
- **Primary Gradient:** Blue-600 to Purple-600
- **Text:** White, Gray-300, Gray-400

### Typography
- **Font Family:** Inter (sans-serif)
- **Sizes:** text-sm to text-7xl

## CI/CD

The project includes a GitHub Actions workflow that:
- Builds the project on push to main
- Runs on pull requests
- Optionally deploys to GitHub Pages

## License

MIT

## Author

Built as a demo SaaS application.

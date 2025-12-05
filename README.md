# Online Guestbook (Next.js Migration)

This project is a modern, responsive online guestbook application migrated from Create React App to Next.js 16 (App Router). It features a stunning "Liquid Glass" theme, secure server-side email submission, and a fully componentized UI using Tailwind CSS and shadcn/ui.

## Features

- **Next.js 16 App Router**: Leveraging the latest Next.js features for performance and SEO.
- **Liquid Glass Theme**: A premium, frosted glass aesthetic with dynamic gradients and motion.
- **Dark/Light Mode**: Fully supported theming with persistent user preference.
- **Secure Email Submission**: EmailJS logic moved to Server Actions to protect API keys.
- **Responsive Design**: Optimized for all device sizes.
- **No External UI Libraries**: Replaced Material UI with Tailwind CSS and shadcn/ui (Radix UI + Tailwind).

## Tech Stack

- **Framework**: Next.js 16
- **Language**: JavaScript
- **Styling**: Tailwind CSS, CSS Modules (for global styles)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Email Service**: EmailJS (via Server Actions)

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd online-guestbook
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Copy `.env.example` to `.env` and fill in your EmailJS credentials:
   ```bash
   cp .env.example .env
   ```
   
   Required variables:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_PRIVATE_KEY` (Optional, for added security)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: React components (UI and feature-specific).
  - `ui/`: Reusable shadcn/ui components.
  - `content/`: Guestbook feature components.
  - `Header/`: Global header component.
- `lib/`: Utility functions and configuration.
- `hooks/`: Custom React hooks.
- `public/`: Static assets.
- `styles/`: Global styles (though mostly handled by Tailwind).

## Theme System

See [README_THEME.md](./README_THEME.md) for detailed documentation on the Liquid Glass design system.

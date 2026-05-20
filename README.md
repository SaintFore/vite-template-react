# Vite Template React

A modern React + TypeScript project template with the latest tools and best practices.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** build tool
- **Tailwind CSS** + **shadcn/ui** (Radix UI)
- **React Router** for routing
- **React Query** for data fetching
- **React Hook Form** + **Zod** for form handling and validation
- **Framer Motion** for animations
- **pnpm** package manager

## Quick Start

```bash
# Create project from template
pnpm dlx degit SaintFore/vite-template-react my-app
cd my-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm lint     # Run ESLint
pnpm preview  # Preview production build
```

## Project Structure

```
src/
├── api/          # API client and type definitions
├── components/   # Reusable components
│   └── ui/       # shadcn/ui components
├── lib/          # Utility functions
├── pages/        # Page components
├── schemas/      # Zod validation schemas
├── App.tsx       # Main app component
└── main.tsx      # Entry point
```

## Adding UI Components

```bash
# Add shadcn/ui components
pnpm dlx shadcn@latest add button
```
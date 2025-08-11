# EraEnvision Website

## Overview

EraEnvision is an AI-powered business growth and digital transformation platform offering personalized AI consulting through three main segments: Launch (for entrepreneurs), Scale (for businesses), and Invest (for investors). The platform provides customized roadmaps, optimization tools, and investment insights through a comprehensive SaaS solution.

This repository contains a modern landing page built as a full-stack web application showcasing the platform's capabilities, featuring a sophisticated user interface with Turkish/English language support, contact forms, and detailed segment presentations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **Design System**: Custom brand colors (Era Red #E1182E as primary) with Space Grotesk for headings and Inter for body text
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Internationalization**: Custom translation system supporting Turkish and English languages
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency

### Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful endpoints with proper error handling and request/response logging
- **Development Server**: Integrated Vite development server with HMR support
- **Static Serving**: Production-ready static file serving with proper caching headers

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations for version-controlled database schema changes
- **Connection**: Neon Database serverless PostgreSQL for production deployment
- **Fallback Storage**: In-memory storage implementation for development and testing

### Database Schema Design
- **Users Table**: Basic user authentication with username/password
- **Contacts Table**: Contact form submissions with GDPR/KVKK compliance fields
- **Blog Posts Table**: Content management with multilingual support, SEO fields, and publishing workflow
- **Case Studies Table**: Success stories with structured problem/solution format

### Authentication and Authorization
- **Current Implementation**: Basic user storage structure in place
- **Session Management**: Cookie-based sessions using connect-pg-simple for production scalability
- **Security**: Prepared for production-grade authentication implementation

### Performance Optimizations
- **Build Process**: Optimized production builds with code splitting and asset optimization
- **Image Handling**: External image sources with proper lazy loading and optimization
- **CSS**: Tailwind CSS with purging for minimal bundle sizes
- **Caching**: Query client configuration with intelligent caching strategies

### Development Workflow
- **Type Safety**: Full TypeScript implementation across client, server, and shared code
- **Code Quality**: ESLint configuration and consistent code formatting
- **Development Tools**: Hot module replacement, error overlays, and development-specific tooling
- **Build System**: Unified build process for both client and server components

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with TypeScript, React DOM, and modern hooks
- **Build Tools**: Vite for development server and building, esbuild for server bundling
- **Database**: PostgreSQL via Neon Database serverless platform
- **ORM**: Drizzle ORM with PostgreSQL dialect and Zod integration for type safety

### UI and Styling
- **Component Library**: shadcn/ui built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS for advanced CSS processing
- **Fonts**: Google Fonts integration for Space Grotesk and Inter typography
- **Icons**: Lucide React for consistent, customizable icons

### Development and Production Tools
- **Server Framework**: Express.js with middleware for JSON parsing and static serving
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, Replit-specific development plugins
- **Utilities**: date-fns for date formatting, nanoid for unique ID generation

### Form Handling and Validation
- **Form Management**: React Hook Form with Radix UI form components integration
- **Validation**: Zod for runtime type validation and schema definition
- **UI Components**: Custom form components built with Radix UI and proper validation display

### Deployment and Infrastructure
- **Database Hosting**: Neon Database for serverless PostgreSQL
- **Environment**: Node.js with ESM module support
- **Build Output**: Optimized static assets and server bundle for production deployment
- **Development Environment**: Replit-optimized with cartographer and runtime error handling
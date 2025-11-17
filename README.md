# 🚀 Code Value - Modern Web Application

A pixel-perfect, fully responsive React application built with Next.js 15, featuring smooth animations, modern design, and exceptional user experience.

## ✨ Features

### 🎨 Pixel-Perfect Design
- **Modern UI/UX** - Beautiful, clean interface with attention to detail
- **Responsive Design** - Mobile-first approach with perfect breakpoints
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Component Library** - Built with shadcn/ui for consistency and accessibility

### 🚀 Technology Stack
- **⚡ Next.js 15** - Latest React framework with App Router
- **📘 TypeScript 5** - Full type safety and better developer experience
- **🎨 Tailwind CSS 4** - Utility-first CSS framework
- **🧩 shadcn/ui** - High-quality, accessible components
- **🌈 Framer Motion** - Production-ready motion library
- **🎯 Lucide React** - Beautiful icon library

### 📱 Pages & Features
- **🏠 Home** - Hero section with features, stats, and CTAs
- **📖 About** - Company information, team, and timeline
- **📊 Dashboard** - Analytics, projects, and activity monitoring
- **📧 Contact** - Contact form with Web3Forms integration and FAQ

## 🚀 Quick Start

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd code-value-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Building & Production
npm run build        # Build for production
npm run start        # Start production server
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier (if configured)

# Database (if using)
npm run db:push      # Push database schema
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── dashboard/         # Dashboard page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/             # Reusable React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   ├── forms/           # Form components (ContactForm)
│   └── ui/               # shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
└── prisma/               # Database schema and configuration
```

## 🎨 Customization Guide

### 🎯 Colors & Theme
The application uses a modern color palette with blue and purple gradients. To customize:

1. **Primary Colors**: Edit CSS variables in `src/app/globals.css`
2. **Theme Colors**: Modify Tailwind config in `tailwind.config.ts`
3. **Component Colors**: Update individual component styles

### 📐 Spacing & Layout
- **Container**: Uses `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` pattern
- **Spacing**: Follows 8px grid system (4, 8, 12, 16, 20, 24, 32)
- **Breakpoints**: Mobile (sm: 640px), Tablet (md: 768px), Desktop (lg: 1024px)

### 🎭 Animations
Animations are powered by Framer Motion. Key patterns:
- **Page Transitions**: Stagger animations with `staggerChildren`
- **Hover Effects**: Scale, rotate, and translate transforms
- **Entrance Animations**: Fade-in with slide effects

### 🖼️ Images & Assets
- **Logo**: Replace `/public/logo.svg` with your brand logo
- **Images**: Add to `/public/assets/` directory
- **Optimization**: Use WebP format for better performance

## 🧩 Component Usage

### Layout Components
```tsx
import Layout from '@/components/layout/layout'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

// Wrap pages with Layout component
<Layout>
  <YourPageContent />
</Layout>
```

### UI Components
```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Use shadcn/ui components
<Button size="lg" className="bg-blue-600 hover:bg-blue-700">
  Click me
</Button>
```

### Contact Form
```tsx
import ContactForm from '@/components/forms/contact-form'

// Web3Forms integrated contact form
<ContactForm />
```

### Animations
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  Animated content
</motion.div>
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

### Mobile-First Approach
All components are designed mobile-first with progressive enhancement:
- Base styles for mobile
- `sm:` prefix for tablet
- `md:` and `lg:` prefixes for desktop

## 🚀 Performance Optimization

### Code Splitting
- Automatic with Next.js App Router
- Lazy loading for images and components
- Optimized bundle size

### Image Optimization
- Next.js Image component for automatic optimization
- WebP format support
- Responsive images with srcset

### Animation Performance
- Hardware-accelerated transforms
- Optimized Framer Motion configurations
- Reduced layout thrashing

## 🔧 Development Workflow

### Adding New Pages
1. Create directory in `src/app/`
2. Add `page.tsx` file
3. Wrap content with `<Layout>` component
4. Add navigation link in `Header` component

### Creating Components
1. Follow existing component patterns
2. Use TypeScript interfaces for props
3. Add Framer Motion animations
4. Include responsive design

### Styling Guidelines
- Use Tailwind utility classes
- Follow the existing color scheme
- Maintain consistent spacing
- Add hover and focus states

## 🌟 Best Practices

### Code Organization
- Keep components small and focused
- Use TypeScript for type safety
- Follow React best practices
- Maintain consistent naming conventions

### Performance
- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Monitor bundle size

### Accessibility
- Use semantic HTML elements
- Add proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers

## 📊 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using modern web technologies. Enjoy building amazing applications! 🚀

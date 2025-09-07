# ALLEGRA Protocol - Whitepaper Site

A modern, responsive whitepaper website for ALLEGRA Protocol built with Next.js 14, featuring AI-powered DeFi with sustainable yields.

## 🚀 Features

- **Modern Design**: Glassmorphism UI with gradient effects and premium aesthetics
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Interactive**: Smooth animations and transitions powered by Framer Motion
- **Command Palette**: Spotlight-style search with ⌘K shortcut for instant navigation
- **AI-Inspired**: Futuristic design blending institutional finance with modern DeFi vibes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom glassmorphism utilities
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Icons**: Lucide React for consistent iconography
- **Command Palette**: cmdk for the search functionality
- **TypeScript**: Full type safety throughout the application

## 📁 Project Structure

```
allegra/
├── app/
│   ├── globals.css          # Global styles and utilities
│   ├── layout.tsx           # Root layout with navigation and footer
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   └── accordion.tsx
│   ├── Navigation.tsx       # Glassmorphism navigation bar
│   ├── Hero.tsx            # Hero section with animated background
│   ├── Footer.tsx          # Footer with social links
│   ├── CommandPalette.tsx  # Search and navigation palette
│   └── whitepaper/         # Whitepaper content sections
│       ├── ExecutiveSummary.tsx
│       ├── HowItWorks.tsx
│       ├── KeyFeatures.tsx
│       ├── Technology.tsx
│       ├── ReturnsStructure.tsx
│       ├── SecurityMeasures.tsx
│       ├── TeamOverview.tsx
│       └── ImportantNotes.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue to Purple gradients (`from-blue-500 to-purple-600`)
- **Secondary**: Green to Teal accents (`from-green-500 to-teal-600`)
- **Background**: Dark gradient (`from-slate-900 via-purple-900 to-slate-900`)
- **Glass**: Semi-transparent white with backdrop blur

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold with gradient text effects
- **Body**: Clean, readable text with proper contrast

### Components
- **Cards**: Glassmorphism with hover effects
- **Buttons**: Multiple variants (glass, gradient, outline)
- **Navigation**: Sticky with active section highlighting
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The site is built with a mobile-first approach:

- **Mobile**: Single column layout with touch-friendly interactions
- **Tablet**: Optimized grid layouts and improved spacing
- **Desktop**: Full multi-column layouts with hover effects

## ⌨️ Keyboard Shortcuts

- **⌘K / Ctrl+K**: Open command palette
- **ESC**: Close command palette
- **↑/↓**: Navigate through search results
- **Enter**: Select and navigate to section

## 🎯 Key Sections

1. **Hero**: Animated landing with gradient text and floating orbs
2. **Executive Summary**: Protocol overview with feature highlights
3. **How It Works**: 4-step process with visual flow
4. **Key Features**: Comprehensive feature grid with icons
5. **Technology**: Tabbed interface explaining AI, smart contracts, and risk management
6. **Returns Structure**: Yield tiers and fee structure
7. **Security**: Audit results and security measures
8. **Team**: Team members and advisors with social links
9. **Important Notes**: Risk warnings and legal disclaimers

## 🔧 Customization

### Adding New Sections
1. Create a new component in `components/whitepaper/`
2. Add it to the main page in `app/page.tsx`
3. Update the command palette in `components/CommandPalette.tsx`

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Use the `glass` utility class for glassmorphism effects

### Animations
- All animations use Framer Motion
- Modify animation properties in individual components
- Use `whileInView` for scroll-triggered animations

## 📄 License

This project is for demonstration purposes. Please ensure you have proper licensing for any production use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

Built with ❤️ for the future of DeFi
# Allegra

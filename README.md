# Erick Angelo Ramirez - Portfolio

A modern, responsive portfolio website built with React, Next.js, and TypeScript.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This will create a static export in the `out/` directory that can be deployed to GitHub Pages.

## 🎨 Features

- **Responsive Design**: Works on all devices
- **Modern UI**: Built with Tailwind CSS and Radix UI
- **TypeScript**: Full type safety
- **Performance**: Optimized for fast loading
- **SEO Ready**: Proper meta tags and structure

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── global.css         # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # UI components (Button, Card, etc.)
│   ├── project-card.tsx  # Project display component
│   ├── award-card.tsx    # Award display component
│   └── ...               # Other components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Manual Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. The static files will be in the `out/` directory

3. Configure GitHub Pages in your repository settings to serve from the `out/` directory

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

- Build the project on every push to main
- Deploy to GitHub Pages
- Handle all the configuration automatically

## 🛠️ Technologies Used

- **React 18** - UI library
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

# Banter Royale - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Navigate to the project directory:
   ```bash
   cd banter-royale-FINAL-ALIGNED
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **banter-royale** (or your preferred name)
   - In which directory is your code located? **./**
   - Want to override the settings? **N**

5. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import this project folder
4. Vercel will auto-detect the Vite configuration
5. Click "Deploy"

## 📋 Project Structure

```
banter-royale-FINAL-ALIGNED/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles with custom fonts
│   └── assets/              # Images and assets
├── public/
│   ├── favicon.png          # Browser tab icon
│   └── images/              # Additional images
├── api/                     # Serverless API functions for Vercel
│   ├── subscribe.js         # Email subscription endpoint
│   ├── subscribers.js       # Get subscribers endpoint
│   ├── subscribers-count.js # Get subscriber count
│   └── subscribers-export.js # Export subscribers
├── index.html               # Main HTML file
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## ✨ Features Implemented

- ✅ Responsive landing page design
- ✅ Custom fonts (Transducer and Lato)
- ✅ Email subscription functionality with serverless API
- ✅ Host images in corners (hidden on mobile to prevent overlap)
- ✅ "POWERED BY" text aligned with "B" in "BANTER"
- ✅ "POWERED BY" positioned close to bottom of "ROYALE"
- ✅ Dexscreener and Dextools logos centered at bottom
- ✅ Twitter/X social link
- ✅ Custom favicon with BR logo
- ✅ No scrolling required on desktop view
- ✅ Smooth animations and transitions

## 🔧 Environment Setup

The API functions use Vercel KV (Redis) for storing email subscriptions. To set up:

1. In Vercel Dashboard, go to your project
2. Navigate to "Storage" tab
3. Create a new KV Database
4. The environment variables will be automatically configured

## 📱 Responsive Breakpoints

- Mobile: < 1024px (host images hidden)
- Desktop: ≥ 1024px (host images visible in corners)

## 🎨 Design Details

- **Logo Alignment**: "POWERED BY" text aligns with the "B" in "BANTER"
- **Spacing**: Minimal gap between logo and powered by text
- **Bottom Links**: Dexscreener and Dextools logos perfectly centered
- **Host Images**: Positioned in four corners with responsive sizing
- **Colors**: Red (#DC2626) for primary actions, white text on dark background

## 📝 Notes

- The project uses Vite for fast development and optimized production builds
- Tailwind CSS is configured for responsive design
- All images are optimized for web performance
- API endpoints are serverless functions deployed with the frontend


# Deployment Guide

## 🚀 Quick Start - Deploy to GitHub Pages

Your portfolio is now configured and ready for deployment!

### Step 1: Push to GitHub

Make sure all changes are committed:
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/keshavverma1/Portfolio
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Select **Source**: GitHub Actions
   - GitHub Actions workflow will handle automatic deployment

### Step 3: Done! 🎉

Your site will be live at: **https://keshavverma1.github.io/Portfolio/**

The deployment happens automatically whenever you push to the `main` branch!

---

## Automatic Deployment (GitHub Actions)

The `.github/workflows/deploy.yml` file is configured to:
- Install dependencies
- Run ESLint checks
- Build the production bundle
- Deploy to GitHub Pages

**Workflow triggers:**
- On every push to `main` branch
- On every pull request to `main` branch

Check the **Actions** tab in your GitHub repository to see deployment status.

---

## Alternative Deployment Options

### Deploy to Netlify
1. Go to [netlify.com](https://www.netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. **Build command:** `npm run build`
5. **Publish directory:** `dist`
6. Deploy!

### Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite configuration
5. Click "Deploy"

### Deploy to Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase login`
3. Run: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

---

## Local Preview

To test the production build locally:
```bash
npm run build
npm run preview
```

Then open http://localhost:4173

---

## Environment Variables (if needed)

Create a `.env` file in the root directory (don't commit to git):
```
VITE_API_URL=https://api.example.com
```

Access in your code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

Use `.env.example` as a template for your team.

---

## Troubleshooting

### Routes not working on GitHub Pages?
If you get 404 errors on sub-pages, try using HashRouter instead of BrowserRouter.

**In `src/App.jsx`**, change:
```javascript
import { HashRouter } from "react-router-dom";
// ...
<HashRouter>
  {/* routes */}
</HashRouter>
```

This will use URL hashes (`/#/about`) instead of paths (`/about`), which works perfectly with GitHub Pages.

### Build fails?
1. Check the Actions tab for error logs
2. Run `npm run build` locally to test
3. Ensure all dependencies are installed: `npm ci`

### Site shows blank page?
- Clear browser cache
- Check browser console (F12) for errors
- Verify `base` setting in `vite.config.js` is correct

---

## Performance Tips

✅ Already optimized:
- Minified builds with Terser
- Proper dependency bundling
- Source maps disabled in production

Your portfolio is ready for production! 🚀

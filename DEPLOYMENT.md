# PointOak Homepage - Deployment Guide

## 🚀 Quick Start

The PointOak homepage is production-ready and can be deployed immediately.

## 📦 Pre-Deployment Checklist

- ✅ All components built and tested
- ✅ Production build successful (`npm run build`)
- ✅ Images optimized and in place
- ✅ TypeScript compilation clean
- ✅ ESLint passing
- ✅ No console errors

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Next.js)

**Why Vercel?**
- Native Next.js support
- Automatic SSL
- Edge network CDN
- Zero configuration
- Free tier available

**Steps:**
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Navigate to project
cd /home/openclaw/.openclaw/workspace-site-orchestrator/projects/pointoak/pointoak-site

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Link to existing project? No
# - Project name: pointoak-site
# - Directory: ./
# - Override settings? No

# Production deployment
vercel --prod
```

**Custom Domain:**
1. Go to Vercel dashboard
2. Select your project
3. Settings → Domains
4. Add: www.pointoak.com
5. Configure DNS records as shown

---

### Option 2: Netlify

**Steps:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

**Or via Netlify UI:**
1. Go to netlify.com
2. "Add new site" → "Import an existing project"
3. Connect to Git repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy

---

### Option 3: AWS Amplify

**Steps:**
1. Go to AWS Amplify Console
2. "New app" → "Host web app"
3. Connect repository
4. Build settings (auto-detected for Next.js):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Deploy

---

### Option 4: Traditional VPS (DigitalOcean, Linode, etc.)

**Requirements:**
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx for reverse proxy
- SSL certificate (Let's Encrypt)

**Steps:**

1. **Prepare the server:**
```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2
```

2. **Upload the project:**
```bash
# On your local machine
cd /home/openclaw/.openclaw/workspace-site-orchestrator/projects/pointoak
tar -czf pointoak-site.tar.gz pointoak-site/
scp pointoak-site.tar.gz user@your-server:/var/www/

# On the server
cd /var/www
tar -xzf pointoak-site.tar.gz
cd pointoak-site
npm install
npm run build
```

3. **Start with PM2:**
```bash
pm2 start npm --name "pointoak-site" -- start
pm2 save
pm2 startup
```

4. **Configure Nginx:**
```nginx
server {
    listen 80;
    server_name pointoak.com www.pointoak.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Setup SSL with Let's Encrypt:**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d pointoak.com -d www.pointoak.com
```

---

## 🔧 Environment Variables

This build doesn't require environment variables, but if you add analytics or forms:

### Example .env.local:
```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form API
NEXT_PUBLIC_CONTACT_API=https://api.example.com/contact

# Sentry (error tracking)
SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

**Important:** Never commit `.env.local` to Git!

---

## 📊 Post-Deployment

### 1. DNS Configuration
Point your domain to the deployment:

**For Vercel/Netlify:**
- Follow their DNS setup guide
- Usually CNAME to their edge network

**For VPS:**
```
A Record:     pointoak.com → YOUR_SERVER_IP
CNAME Record: www          → pointoak.com
```

### 2. Performance Testing
```bash
# Run Lighthouse
npx lighthouse https://pointoak.com --view

# Check bundle size
npm run build
# Look for First Load JS sizes
```

### 3. Monitor
- Setup uptime monitoring (UptimeRobot, Pingdom)
- Enable error tracking (Sentry)
- Configure analytics (Google Analytics, Plausible)

---

## 🔄 CI/CD Setup

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🐛 Troubleshooting

### Build fails on deployment
- Ensure Node.js version matches (18+)
- Check `package-lock.json` is committed
- Verify all images are in `public/images/`

### Images not loading
- Check Next.js Image domains in `next.config.js`
- Verify image paths are correct
- Ensure images are optimized (<10MB each)

### Slow initial load
- Enable CDN caching
- Use image optimization
- Check bundle size with `npm run build`

### TypeScript errors
```bash
# Clean and rebuild
rm -rf .next
npm run build
```

---

## 📈 Performance Targets

**Lighthouse Scores (Target):**
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 🔒 Security Checklist

- ✅ HTTPS enabled
- ✅ Security headers configured
- ✅ Dependencies up to date (`npm audit`)
- ✅ No sensitive data in code
- ✅ CORS properly configured
- ✅ Rate limiting on forms (when added)

---

## 📞 Support

**Project Location:**
```
/home/openclaw/.openclaw/workspace-site-orchestrator/projects/pointoak/pointoak-site/
```

**Build Command:**
```bash
npm run build
```

**Dev Server:**
```bash
npm run dev
# Access at http://localhost:3000
```

**Production Server:**
```bash
npm start
# Runs on port 3000
```

---

## ✅ Deployment Verification

After deployment, verify:

1. ✅ Site loads at production URL
2. ✅ All images display correctly
3. ✅ Navigation links work
4. ✅ Forms submit (if applicable)
5. ✅ Mobile responsive
6. ✅ SSL certificate valid
7. ✅ No console errors
8. ✅ Analytics tracking (if configured)

---

**Deployment Status:** 🟢 Ready for Production

**Recommended Platform:** Vercel (fastest deployment, best Next.js support)

**Estimated Time:** 5-10 minutes for first deployment

---

*For questions about deployment, contact the TKX Media development team.*

# AI Revo Labs Website - Railway Deployment

Complete deployment package for the AI Revo Labs website on Railway.

## 📦 What's Included

```
airevo-railway-deploy/
├── index.html          # Your SEO-optimized website
├── server.js           # Express server for Railway
├── package.json        # Node.js dependencies
├── railway.json        # Railway configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

---

## 🚀 Quick Deploy to Railway (5 Minutes)

### Method 1: GitHub + Railway (Recommended)

**Step 1: Push to GitHub**
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AI Revo Labs website"

# Add your GitHub repository
git remote add origin https://github.com/yourusername/airevo-labs.git

# Push to GitHub
git push -u origin main
```

**Step 2: Deploy on Railway**
1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway will auto-detect Node.js and deploy
6. **Done!** Your site will be live at: `https://your-project.up.railway.app`

---

### Method 2: Railway CLI (Direct Deploy)

**Step 1: Install Railway CLI**
```bash
npm i -g @railway/cli
```

**Step 2: Login to Railway**
```bash
railway login
```

**Step 3: Initialize and Deploy**
```bash
# Initialize Railway project
railway init

# Deploy
railway up
```

**Step 4: Open Your Site**
```bash
railway open
```

---

## 🌐 Custom Domain Setup

### Add Your Custom Domain (www.airevolabs.in)

**Step 1: In Railway Dashboard**
1. Go to your project
2. Click "Settings" → "Domains"
3. Click "Add Domain"
4. Enter: `www.airevolabs.in`

**Step 2: Update DNS Records**

Go to your domain registrar (e.g., GoDaddy, Namecheap) and add:

**CNAME Record:**
```
Type: CNAME
Name: www
Value: your-project.up.railway.app
TTL: 3600
```

**For Root Domain (airevolabs.in):**
```
Type: A
Name: @
Value: [Railway will provide IP]
OR
Type: CNAME (if supported)
Name: @
Value: your-project.up.railway.app
```

**Wait 5-60 minutes for DNS propagation.**

---

## ⚙️ Environment Variables (Optional)

If you need environment variables:

**Via Railway Dashboard:**
1. Go to your project
2. Click "Variables"
3. Add key-value pairs

**Via CLI:**
```bash
railway variables set KEY=value
```

---

## 🔄 Update Your Website

### Method 1: Git Push (Automatic Deploy)
```bash
# Make changes to index.html or other files
git add .
git commit -m "Update website content"
git push origin main
# Railway automatically redeploys
```

### Method 2: Railway CLI
```bash
# Make changes
railway up
```

---

## 📊 Monitoring & Logs

**View Logs:**
```bash
railway logs
```

**Or in Dashboard:**
1. Go to your project
2. Click "Deployments"
3. Click on latest deployment
4. View logs

---

## 💰 Pricing

**Railway Free Tier:**
- $5 free credits per month
- Perfect for static websites
- Auto-scaling
- HTTPS included
- Custom domains included

**Your website will cost ~$0.50-2/month** (very lightweight static site)

---

## 🔒 SSL/HTTPS

Railway provides automatic SSL certificates for:
- Default domain (*.up.railway.app)
- Custom domains (www.airevolabs.in)

**No configuration needed!**

---

## ⚡ Performance Optimization

Your site is already optimized:
- ✅ Minimal JavaScript (Tailwind CDN only)
- ✅ No external image dependencies
- ✅ Clean HTML structure
- ✅ Fast Express server

**Expected Load Time:** <1 second

---

## 🐛 Troubleshooting

### Issue: "Application failed to respond"
**Solution:** Check Railway logs
```bash
railway logs
```

### Issue: "Port binding error"
**Solution:** Server.js already uses `process.env.PORT`

### Issue: "Domain not working"
**Solution:** 
1. Check DNS propagation: `dig www.airevolabs.in`
2. Wait 24 hours for full propagation
3. Clear browser cache

### Issue: "Site shows old version"
**Solution:**
```bash
# Force redeploy
railway redeploy
```

---

## 📝 Local Development

**Test Locally Before Deploying:**

```bash
# Install dependencies
npm install

# Run server
npm start

# Open browser
http://localhost:3000
```

---

## 🔗 Important Links

- **Railway Dashboard:** https://railway.app/dashboard
- **Railway Docs:** https://docs.railway.app
- **Railway Discord:** https://discord.gg/railway
- **Your Site (after deploy):** https://your-project.up.railway.app

---

## 📞 Support

**Railway Issues:**
- Railway Discord: https://discord.gg/railway
- Railway Support: support@railway.app

**Website Issues:**
- Email: hello@airevolabs.in

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads at Railway URL
- [ ] Custom domain works (if configured)
- [ ] HTTPS is active (lock icon in browser)
- [ ] All sections display correctly
  - [ ] Hero section
  - [ ] Services
  - [ ] Recent Projects
  - [ ] Tech Stack
  - [ ] FAQ
  - [ ] Contact
- [ ] Navigation links work
- [ ] Email links work (mailto:hello@airevolabs.in)
- [ ] Mobile responsive (test on phone)
- [ ] Set up Google Search Console
- [ ] Create OG image (og-image.png) and upload

---

## 🎯 Next Steps After Deployment

1. **Set Up Google Search Console**
   - Verify your domain
   - Submit sitemap

2. **Create OG Image**
   - Size: 1200x630px
   - Upload as `og-image.png`
   - Update HTML if needed

3. **Monitor Performance**
   - Check Railway metrics
   - Monitor load times

4. **Start Content Marketing**
   - Follow the blog post templates
   - Publish 1 post per month

---

## 📈 Scaling

Your site is ready to scale automatically:
- Railway handles traffic spikes
- No configuration needed
- Pay-as-you-grow pricing

---

**🎉 Congratulations! Your AI Revo Labs website is ready to deploy!**

For questions about deployment, check Railway docs or Railway Discord.
For questions about website content, refer to the SEO documentation in your package.

---

*Last Updated: November 9, 2025*
*AI Revo Labs - Built by Recruiters. Powered by AI.*

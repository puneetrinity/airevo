# 🚀 QUICK START GUIDE

## Deploy in 5 Minutes

### Option A: Railway with GitHub (Easiest)

1. **Upload to GitHub:**
   - Create new repo: https://github.com/new
   - Upload all files from this folder
   - OR use GitHub Desktop

2. **Deploy on Railway:**
   - Go to: https://railway.app
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repo
   - **DONE!** Site will be live automatically

3. **Get Your URL:**
   - Railway will show: `https://your-project.up.railway.app`
   - Share it!

---

### Option B: Railway CLI (Direct)

1. **Install Railway CLI:**
   ```bash
   npm i -g @railway/cli
   ```

2. **Login:**
   ```bash
   railway login
   ```

3. **Deploy:**
   ```bash
   railway init
   railway up
   ```

4. **Open:**
   ```bash
   railway open
   ```

---

## What's Included?

✅ SEO-optimized website
✅ Express server (for Railway)
✅ All configuration files
✅ Complete documentation

---

## Custom Domain (www.airevolabs.in)

1. In Railway: Settings → Domains → Add Domain
2. Enter: `www.airevolabs.in`
3. Update DNS at your registrar:
   - Type: CNAME
   - Name: www
   - Value: your-project.up.railway.app

Wait 1 hour for DNS propagation.

---

## Need Help?

Read: **README.md** (full instructions)
Railway Discord: https://discord.gg/railway
Email: hello@airevolabs.in

---

**That's it! Your website is ready to go live! 🎉**

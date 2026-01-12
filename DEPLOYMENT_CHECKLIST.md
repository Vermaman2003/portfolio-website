# ✅ DEPLOYMENT CHECKLIST

Copy this checklist and mark items as you complete them!

## Pre-Deployment
- [ ] GitHub account exists (create at https://github.com/signup)
- [ ] Logged into GitHub
- [ ] Portfolio files ready at /app

## Step 1: GitHub Repository
- [ ] Opened https://github.com/new
- [ ] Named repository: portfolio-website
- [ ] Set to Public
- [ ] Did NOT check "Add README"
- [ ] Did NOT check "Add .gitignore"
- [ ] Clicked "Create repository"
- [ ] Copied repository URL: https://github.com/______/portfolio-website.git

## Step 2: Push to GitHub
- [ ] Ran: cd /app
- [ ] Ran: git remote add origin [YOUR_URL]
- [ ] Ran: git branch -M main
- [ ] Ran: git push -u origin main
- [ ] Code successfully pushed (check GitHub repo page)

## Step 3: Vercel Deployment
- [ ] Opened https://vercel.com
- [ ] Signed up with GitHub
- [ ] Authorized Vercel
- [ ] Clicked "Add New..." → "Project"
- [ ] Found portfolio-website repo
- [ ] Clicked "Import"
- [ ] Set Root Directory to: frontend ⚠️ CRITICAL!
- [ ] Verified Build Command: yarn build
- [ ] Verified Output Directory: build
- [ ] Clicked "Deploy"
- [ ] Waited 2-3 minutes
- [ ] Deployment successful ✅

## Post-Deployment
- [ ] Clicked on live URL
- [ ] Tested all sections work
- [ ] Checked mobile responsiveness
- [ ] Copied live URL: https://____________.vercel.app
- [ ] Added URL to LinkedIn profile
- [ ] Added URL to resume
- [ ] Shared with network

## Optional Enhancements
- [ ] Added custom domain
- [ ] Set up analytics
- [ ] Added contact form backend
- [ ] Optimized images further

---

## 🎉 CONGRATULATIONS!

Your portfolio is now live and accessible worldwide!

Live URL: _________________________________

Deployment Date: __________________________

Next Review Date: _________________________

---

## Quick Commands for Future Updates

```bash
cd /app
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel auto-deploys in 2-3 minutes after push!

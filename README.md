# Margaret's 6-Project Automation Hub

## 🚀 Quick Deploy to Vercel (5 minutes)

### Step 1: Get Your Files
1. Download `index.html` from this chat
2. Create a folder called `automation-hub` on your computer
3. Put `index.html` inside it

### Step 2: Deploy to Vercel (FREE)
1. Go to https://vercel.com/signup
2. Sign up with GitHub (it's free)
3. Click "Add New" → "Project"
4. Drag your `automation-hub` folder into Vercel
5. Click "Deploy"
6. Done! You'll get a URL like `automation-hub.vercel.app`

## 🔑 API Keys You Need

### Required:
- **Anthropic API Key**: https://console.anthropic.com/settings/keys
  - Free tier: $5 credit (lasts weeks)
  - Generates all your content

### Optional (for auto-scheduling):
- **Brevo API Key**: https://app.brevo.com/settings/keys/api
  - Free tier: 300 emails/day
  - Auto-sends newsletters

- **Buffer API Key**: https://account.buffer.com/developers
  - Free tier: 3 accounts, 10 posts each
  - Auto-schedules social posts

## 📖 How to Use

### Every Sunday (15 minutes):
1. Open your Vercel URL
2. Paste in API keys (they don't save - this is for security)
3. Click "Generate This Week's Content"
4. Wait 30 seconds
5. Review all content for 6 projects
6. Click "Schedule All" (if you have Brevo + Buffer keys)
   OR click "Download JSON" and manually paste into schedulers

## 🎯 What It Generates

**Podcast Pal:**
- 1 newsletter email
- 3 LinkedIn posts

**Breaking the Cycle:**
- Next episode outline
- 3 Instagram posts

**AI Teaching Bots:**
- Bot improvement notes
- 2 LinkedIn posts

**Education Consultancy:**
- Client outreach email
- TES resource ideas

**Echoes:**
- B2B pitch email
- 2 LinkedIn posts

**Daisy Chain:**
- 3 Instagram voice note scripts (Mon/Wed/Fri)

## ⚙️ Advanced: Auto-Scheduling Setup

If you added Brevo + Buffer keys:

### Brevo Setup:
1. Go to https://app.brevo.com/contacts
2. Create a "Podcast Pal Newsletter" list
3. Add your subscribers
4. Update line 213 in `index.html` with your list ID

### Buffer Setup:
1. Go to https://buffer.com/manage
2. Connect your Instagram/LinkedIn accounts
3. Go to https://account.buffer.com/developers
4. Copy your Profile IDs
5. Update line 252 in `index.html` with your profile IDs

## 🆘 Troubleshooting

**"API key invalid"**: Make sure you copied the full key including `sk-ant-` prefix

**"Scheduling failed"**: You need to configure email lists and Buffer profile IDs (see above)

**"Content looks weird"**: Download JSON and manually paste - automation takes practice

## 💰 Total Cost

- Vercel hosting: **FREE forever**
- Anthropic API: **~£2-5/month** (very light usage)
- Brevo: **FREE** (under 300 emails/day)
- Buffer: **FREE** (3 accounts, 10 posts each)

**Total: £2-5/month** to automate 15+ hours of work

## 🔒 Security Note

API keys are stored in your browser session only (not on any server). You need to re-enter them each time you open the dashboard. This is intentional for security.

If you want keys to persist, you'd need to add environment variables on Vercel (slightly more complex but doable).

## 📞 Support

Built by Claude for Margaret's multi-project empire 🚀

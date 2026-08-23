# musical v2.0
upgraded from the original toy project to a real profile platform.
## what’s new
• profile customization: banners, avatars, fonts, cursors, 10 themes, accent colors
• social links: 20+ platforms (spotify, lastfm, discord, twitter, github, instagram, youtube, twitch,
tiktok, steam, reddit, telegram, soundcloud, bandcamp, paypal, cashapp, venmo, ko-fi, linktree,
website, email)
• badges system: admin, owner, verified, premium, beta, og, artist, dev, mod, supporter
• admin panel: user vey has admin perms to edit any user’s badges, status, theme
• view tracking: every profile tracks views, leaderboard on homepage
• export/import: back up all your data as json, move between browsers
• status indicators: online/idle/dnd/offline with colored dots
• public profiles: anyone can view any profile, even without logging in
## files
• index.html — landing page with top profiles and stats
• login.html — auth (login/signup)
• discover.html — find people, filter by genre
• profile.html — public profile view (yours or anyone’s)
• settings.html — edit your profile, appearance, links, data
• admin.html — admin panel (admin users only)
• app.js — all the logic, localStorage, no backend
## no backend
everything stores in localStorage. no supabase, no server, no tracking. host on github pages for free

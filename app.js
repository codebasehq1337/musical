const APP = {
  // ========== DEFAULT USERS ==========
  defaultUsers: [
    { id: 'u1', username: 'alex', password: 'alex', name: 'alex chen', bio: 'shoegaze till i die', genres: ['shoegaze', 'dream pop', 'post-rock'], theme: 'blue', connections: { spotify: true, lastfm: true, discord: false }, playlists: [{name:'late night drives',emoji:'🌙',tracks:42},{name:'shoegaze essentials',emoji:'🎸',tracks:68}], recentTracks: [{title:'alison',artist:'slowdive',time:'2 min ago'},{title:'when you sleep',artist:'my bloody valentine',time:'8 min ago'},{title:'machine gun',artist:'slowdive',time:'15 min ago'}], stats: {tracks:1247,artists:42,hours:128,obscurity:94}, status: 'online', nowPlaying: 'slowdive — sugar for the pill', views: 342, badges: ['beta'], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#4a7fc9', links: [{platform:'spotify',url:'https://open.spotify.com/user/alex'},{platform:'lastfm',url:'https://last.fm/user/alexchen'}], created: Date.now() - 86400000 * 30 },
    { id: 'u2', username: 'maya', password: 'maya', name: 'maya okafor', bio: 'techno and ambient only', genres: ['techno', 'ambient', 'idm'], theme: 'purple', connections: { spotify: true, lastfm: false, discord: true }, playlists: [{name:'warehouse',emoji:'🏭',tracks:55},{name:'focus',emoji:'🧠',tracks:30}], recentTracks: [{title:'alberto balsalm',artist:'aphex twin',time:'5 min ago'},{title:'spastik',artist:'plastikman',time:'12 min ago'}], stats: {tracks:892,artists:28,hours:96,obscurity:88}, status: 'offline', nowPlaying: 'aphex twin — alberto balsalm', views: 189, badges: [], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#7c6bdb', links: [{platform:'spotify',url:'https://open.spotify.com/user/maya'},{platform:'discord',url:'https://discord.com/users/maya'}], created: Date.now() - 86400000 * 20 },
    { id: 'u3', username: 'jordan', password: 'jordan', name: 'jordan smith', bio: 'indie rock kid', genres: ['indie rock', 'shoegaze', 'jangle pop'], theme: 'teal', connections: { spotify: false, lastfm: true, discord: false }, playlists: [{name:'summer 2024',emoji:'☀️',tracks:40}], recentTracks: [{title:'under the sun',artist:'diiv',time:'1 min ago'},{title:'loomer',artist:'my bloody valentine',time:'10 min ago'}], stats: {tracks:2100,artists:67,hours:156,obscurity:72}, status: 'online', nowPlaying: 'diiv — under the sun', views: 567, badges: ['verified'], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#2db4a3', links: [{platform:'lastfm',url:'https://last.fm/user/jordansmith'}], created: Date.now() - 86400000 * 15 },
    { id: 'u4', username: 'riley', password: 'riley', name: 'riley park', bio: 'hip hop head', genres: ['hip hop', 'jazz rap', 'lo-fi'], theme: 'amber', connections: { spotify: true, lastfm: true, discord: true }, playlists: [{name:'beats to study to',emoji:'📖',tracks:120}], recentTracks: [{title:'rapp snitch knishes',artist:'mf doom',time:'3 min ago'}], stats: {tracks:3400,artists:89,hours:210,obscurity:61}, status: 'online', nowPlaying: 'mf doom — rapp snitch knishes', views: 891, badges: ['verified','premium'], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#d49a3a', links: [{platform:'spotify',url:'https://open.spotify.com/user/riley'},{platform:'lastfm',url:'https://last.fm/user/rileypark'},{platform:'discord',url:'https://discord.com/users/riley'}], created: Date.now() - 86400000 * 45 },
    { id: 'u5', username: 'sam', password: 'sam', name: 'sam torres', bio: 'heavy music only', genres: ['metalcore', 'post-hardcore', 'math rock'], theme: 'rose', connections: { spotify: false, lastfm: true, discord: false }, playlists: [{name:'mosh pit',emoji:'🤘',tracks:45}], recentTracks: [{title:'concubine',artist:'converge',time:'20 min ago'}], stats: {tracks:1560,artists:34,hours:98,obscurity:82}, status: 'offline', nowPlaying: 'converge — concubine', views: 123, badges: [], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#e05a7a', links: [{platform:'lastfm',url:'https://last.fm/user/samtorres'}], created: Date.now() - 86400000 * 5 },
    { id: 'u6', username: 'casey', password: 'casey', name: 'casey kim', bio: 'synthwave forever', genres: ['synthwave', 'retrowave', 'darkwave'], theme: 'blue', connections: { spotify: true, lastfm: false, discord: true }, playlists: [{name:'nightcall',emoji:'🌃',tracks:38}], recentTracks: [{title:'sunset',artist:'the midnight',time:'7 min ago'}], stats: {tracks:780,artists:22,hours:64,obscurity:75}, status: 'online', nowPlaying: 'the midnight — sunset', views: 445, badges: ['beta'], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#4a7fc9', links: [{platform:'spotify',url:'https://open.spotify.com/user/casey'},{platform:'discord',url:'https://discord.com/users/casey'}], created: Date.now() - 86400000 * 25 },
    { id: 'u7', username: 'taylor', password: 'taylor', name: 'taylor reed', bio: 'folk and feelings', genres: ['folk', 'indie folk', 'singer-songwriter'], theme: 'purple', connections: { spotify: true, lastfm: true, discord: false }, playlists: [{name:'campfire',emoji:'🔥',tracks:52}], recentTracks: [{title:'white winter hymnal',artist:'fleet foxes',time:'30 min ago'}], stats: {tracks:920,artists:41,hours:74,obscurity:68}, status: 'offline', nowPlaying: 'fleet foxes — white winter hymnal', views: 234, badges: [], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#7c6bdb', links: [{platform:'spotify',url:'https://open.spotify.com/user/taylor'},{platform:'lastfm',url:'https://last.fm/user/taylorreed'}], created: Date.now() - 86400000 * 12 },
    { id: 'u8', username: 'drew', password: 'drew', name: 'drew nakamura', bio: 'have a nice life or have no life', genres: ['shoegaze', 'noise rock', 'slowcore'], theme: 'blue', connections: { spotify: false, lastfm: true, discord: true }, playlists: [{name:'depression hours',emoji:'🖤',tracks:90}], recentTracks: [{title:'bloodhail',artist:'have a nice life',time:'4 min ago'}], stats: {tracks:4500,artists:56,hours:312,obscurity:97}, status: 'online', nowPlaying: 'have a nice life — bloodhail', views: 1203, badges: ['verified','beta','premium'], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#4a7fc9', links: [{platform:'lastfm',url:'https://last.fm/user/drewnakamura'},{platform:'discord',url:'https://discord.com/users/drew'}], created: Date.now() - 86400000 * 60 },
    { id: 'u9', username: 'vey', password: 'vey', name: 'vey', bio: 'site admin. building musical.', genres: ['everything'], theme: 'blue', connections: { spotify: true, lastfm: true, discord: true }, playlists: [{name:'admin vibes',emoji:'⚡',tracks:999}], recentTracks: [{title:'admin panel',artist:'the system',time:'now'}], stats: {tracks:9999,artists:999,hours:999,obscurity:100}, status: 'online', nowPlaying: 'the system — admin panel', views: 9999, badges: ['admin','verified','beta','premium','owner'], banner: '', avatar: '', font: 'JetBrains Mono', cursor: 'crosshair', accent: '#4a7fc9', links: [{platform:'github',url:'https://github.com/codebasehq1337'},{platform:'discord',url:'https://discord.com/users/vey'}], created: Date.now(), isAdmin: true },
  ],

  badgeDefs: {
    admin:    { label: 'ADMIN',     color: '#ef4444', icon: '👑', desc: 'Site administrator' },
    owner:    { label: 'OWNER',     color: '#f59e0b', icon: '🔥', desc: 'Site owner' },
    verified: { label: 'VERIFIED',  color: '#22c55e', icon: '✓',  desc: 'Verified user' },
    premium:  { label: 'PREMIUM',   color: '#a855f7', icon: '💎', desc: 'Premium member' },
    beta:     { label: 'BETA',      color: '#3b82f6', icon: '⚡', desc: 'Beta tester' },
    og:       { label: 'OG',        color: '#ec4899', icon: '🌟', desc: 'Original gangster' },
    artist:   { label: 'ARTIST',    color: '#f97316', icon: '🎵', desc: 'Verified artist' },
    dev:      { label: 'DEV',       color: '#06b6d4', icon: '💻', desc: 'Developer' },
    mod:      { label: 'MOD',       color: '#8b5cf6', icon: '🛡️', desc: 'Moderator' },
    supporter:{ label: 'SUPPORTER', color: '#eab308', icon: '⭐', desc: 'Supporter' },
  },

  platforms: {
    spotify:   { icon: 'fab fa-spotify',     color: '#1db954', label: 'Spotify' },
    lastfm:    { icon: 'fab fa-lastfm',      color: '#d51007', label: 'Last.fm' },
    discord:   { icon: 'fab fa-discord',     color: '#5865f2', label: 'Discord' },
    twitter:   { icon: 'fab fa-twitter',     color: '#1da1f2', label: 'Twitter' },
    github:    { icon: 'fab fa-github',      color: '#ffffff', label: 'GitHub' },
    instagram: { icon: 'fab fa-instagram',   color: '#e4405f', label: 'Instagram' },
    youtube:   { icon: 'fab fa-youtube',     color: '#ff0000', label: 'YouTube' },
    twitch:    { icon: 'fab fa-twitch',      color: '#9146ff', label: 'Twitch' },
    tiktok:    { icon: 'fab fa-tiktok',      color: '#ffffff', label: 'TikTok' },
    steam:     { icon: 'fab fa-steam',       color: '#1b2838', label: 'Steam' },
    reddit:    { icon: 'fab fa-reddit',      color: '#ff4500', label: 'Reddit' },
    telegram:  { icon: 'fab fa-telegram',    color: '#0088cc', label: 'Telegram' },
    soundcloud:{ icon: 'fab fa-soundcloud',  color: '#ff5500', label: 'SoundCloud' },
    bandcamp:  { icon: 'fab fa-bandcamp',    color: '#1da0c3', label: 'Bandcamp' },
    paypal:    { icon: 'fab fa-paypal',      color: '#003087', label: 'PayPal' },
    cashapp:   { icon: 'fas fa-dollar-sign', color: '#00d632', label: 'Cash App' },
    venmo:     { icon: 'fab fa-vimeo-v',     color: '#008cff', label: 'Venmo' },
    ko-fi:     { icon: 'fas fa-coffee',      color: '#ff5e5b', label: 'Ko-fi' },
    linktree:  { icon: 'fas fa-tree',        color: '#43e660', label: 'Linktree' },
    website:   { icon: 'fas fa-globe',       color: '#ffffff', label: 'Website' },
    email:     { icon: 'fas fa-envelope',    color: '#ea4335', label: 'Email' },
  },

  themes: {
    blue:   { name: 'Blue',   bg: '#0a0e1a', accent: '#4a7fc9', gradient: 'linear-gradient(135deg, #4a7fc9, #2d5a9e)' },
    purple: { name: 'Purple', bg: '#0a0a1a', accent: '#7c6bdb', gradient: 'linear-gradient(135deg, #7c6bdb, #5a3db8)' },
    teal:   { name: 'Teal',   bg: '#0a1a18', accent: '#2db4a3', gradient: 'linear-gradient(135deg, #2db4a3, #1a7a6e)' },
    rose:   { name: 'Rose',   bg: '#1a0a10', accent: '#e05a7a', gradient: 'linear-gradient(135deg, #e05a7a, #b03a5a)' },
    amber:  { name: 'Amber',  bg: '#1a140a', accent: '#d49a3a', gradient: 'linear-gradient(135deg, #d49a3a, #a07020)' },
    green:  { name: 'Green',  bg: '#0a1a0a', accent: '#4ade80', gradient: 'linear-gradient(135deg, #4ade80, #22c55e)' },
    red:    { name: 'Red',    bg: '#1a0a0a', accent: '#f87171', gradient: 'linear-gradient(135deg, #f87171, #dc2626)' },
    pink:   { name: 'Pink',   bg: '#1a0a14', accent: '#f472b6', gradient: 'linear-gradient(135deg, #f472b6, #db2777)' },
    orange: { name: 'Orange', bg: '#1a100a', accent: '#fb923c', gradient: 'linear-gradient(135deg, #fb923c, #ea580c)' },
    gray:   { name: 'Gray',   bg: '#0f0f0f', accent: '#9ca3af', gradient: 'linear-gradient(135deg, #9ca3af, #6b7280)' },
  },

  fonts: [
    { name: 'Inter', family: "'Inter', sans-serif" },
    { name: 'JetBrains Mono', family: "'JetBrains Mono', monospace" },
    { name: 'Space Grotesk', family: "'Space Grotesk', sans-serif" },
    { name: 'Playfair Display', family: "'Playfair Display', serif" },
    { name: 'Bebas Neue', family: "'Bebas Neue', sans-serif" },
    { name: 'Creepster', family: "'Creepster', cursive" },
  ],
  cursors: ['default', 'crosshair', 'pointer', 'help', 'text', 'wait', 'move', 'not-allowed', 'zoom-in', 'grab', 'cell', 'alias'],

  // ========== STORAGE ==========
  getAccounts() {
    let accounts = JSON.parse(localStorage.getItem('musical_accounts') || 'null');
    if (!accounts) {
      accounts = JSON.parse(JSON.stringify(this.defaultUsers));
      localStorage.setItem('musical_accounts', JSON.stringify(accounts));
    }
    accounts.forEach(u => {
      if (!u.views) u.views = Math.floor(Math.random() * 500);
      if (!u.badges) u.badges = [];
      if (!u.links) u.links = [];
      if (!u.font) u.font = 'Inter';
      if (!u.cursor) u.cursor = 'default';
      if (!u.accent) u.accent = this.themes[u.theme || 'blue']?.accent || '#4a7fc9';
      if (!u.created) u.created = Date.now() - Math.floor(Math.random() * 86400000 * 30);
      if (u.username === 'vey' && !u.isAdmin) u.isAdmin = true;
    });
    return accounts;
  },
  saveAccounts(a) { localStorage.setItem('musical_accounts', JSON.stringify(a)); },

  getSession() { return JSON.parse(localStorage.getItem('musical_session') || 'null'); },
  setSession(s) { localStorage.setItem('musical_session', JSON.stringify(s)); },
  clearSession() { localStorage.removeItem('musical_session'); },

  getRequests() { return JSON.parse(localStorage.getItem('musical_requests') || '[]'); },
  saveRequests(r) { localStorage.setItem('musical_requests', JSON.stringify(r)); },

  getFriends() { return JSON.parse(localStorage.getItem('musical_friends') || '[]'); },
  saveFriends(f) { localStorage.setItem('musical_friends', JSON.stringify(f)); },

  getUser(id) { return this.getAccounts().find(u => u.id === id || u.username === id); },
  getMe() {
    const s = this.getSession();
    return s ? this.getUser(s.userId) : null;
  },
  updateMe(data) {
    const s = this.getSession();
    if (!s) return;
    const accounts = this.getAccounts();
    const idx = accounts.findIndex(u => u.id === s.userId);
    if (idx !== -1) {
      accounts[idx] = { ...accounts[idx], ...data };
      this.saveAccounts(accounts);
    }
  },

  isLogin: true,

  // ========== AUTH ==========
  initAuthPage() {
    const form = document.getElementById('auth-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('auth-user').value.trim().toLowerCase();
      const pass = document.getElementById('auth-pass').value;
      const confirm = document.getElementById('auth-confirm').value;

      if (!user || !pass) { this.toast('fill in both fields'); return; }

      if (this.isLogin) {
        const accounts = this.getAccounts();
        const found = accounts.find(a => a.username === user && a.password === pass);
        if (!found) { this.toast('wrong name or password'); return; }
        this.setSession({ userId: found.id, username: found.username });
        window.location.href = 'discover.html';
      } else {
        if (pass !== confirm) { this.toast('passwords do not match'); return; }
        const accounts = this.getAccounts();
        if (accounts.find(a => a.username === user)) { this.toast('name taken'); return; }
        const themeKeys = Object.keys(this.themes);
        const randomTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
        const newUser = {
          id: 'u' + Date.now(),
          username: user,
          password: pass,
          name: user,
          bio: 'new here. still building my sound.',
          genres: ['indie', 'rock', 'electronic'],
          theme: randomTheme,
          connections: { spotify: false, lastfm: false, discord: false },
          playlists: [{ name: 'my favorites', emoji: '⭐', tracks: 0 },{ name: 'recent finds', emoji: '🔍', tracks: 0 }],
          recentTracks: [{ title: 'welcome to musical', artist: 'the app', time: 'just now' }],
          stats: { tracks: 0, artists: 0, hours: 0, obscurity: 50 },
          status: 'online',
          nowPlaying: 'nothing yet',
          views: 0,
          badges: [],
          banner: '',
          avatar: '',
          font: 'Inter',
          cursor: 'default',
          accent: this.themes[randomTheme].accent,
          links: [],
          created: Date.now(),
        };
        accounts.push(newUser);
        this.saveAccounts(accounts);
        this.setSession({ userId: newUser.id, username: newUser.username });
        this.toast('account created');
        window.location.href = 'discover.html';
      }
    });
  },

  toggleAuth() {
    this.isLogin = !this.isLogin;
    const title = document.getElementById('auth-title');
    const sub = document.getElementById('auth-sub');
    const btn = document.getElementById('auth-btn');
    const toggleText = document.getElementById('auth-toggle-text');
    const toggleBtn = document.getElementById('auth-toggle');
    const confirmGroup = document.getElementById('confirm-group');
    if (title) title.textContent = this.isLogin ? 'log in' : 'sign up';
    if (sub) sub.textContent = this.isLogin ? 'no email. just a name and password.' : 'pick a name and password. that is it.';
    if (btn) btn.textContent = this.isLogin ? 'log in' : 'create account';
    if (toggleText) toggleText.textContent = this.isLogin ? 'no account?' : 'have an account?';
    if (toggleBtn) toggleBtn.textContent = this.isLogin ? 'sign up' : 'log in';
    if (confirmGroup) confirmGroup.style.display = this.isLogin ? 'none' : 'block';
  },

  logout() {
    this.clearSession();
    window.location.href = 'index.html';
  },

  requireAuth() {
    if (!this.getSession()) window.location.href = 'login.html';
  },

  // ========== NAV ==========
  renderNav() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    const session = this.getSession();
    const me = this.getMe();
    let links = session
      ? `<a href="discover.html">discover</a><a href="profile.html">profile</a><a href="settings.html">settings</a>${me?.isAdmin ? '<a href="admin.html">admin</a>' : ''}`
      : `<a href="login.html">log in</a>`;
    nav.innerHTML = `
      <a href="index.html" class="nav-logo">musical</a>
      <div class="nav-links">
        ${links}
        ${session ? `<a href="profile.html" class="nav-user"><div class="nav-avatar" style="${me?.avatar ? `background-image:url('${me.avatar}');background-size:cover;background-position:center;color:transparent;` : ''}">${me?.avatar ? '' : (me ? me.name.charAt(0).toUpperCase() : '?')}</div></a>` : ''}
      </div>
    `;
    const path = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('a').forEach(a => { if (a.getAttribute('href') === path) a.classList.add('active'); });
  },

  // ========== DISCOVER ==========
  initDiscover() {
    this.renderDiscover();
    document.querySelectorAll('.filter').forEach(f => {
      f.addEventListener('click', () => {
        document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
        f.classList.add('active');
        this.renderDiscover(f.dataset.filter);
      });
    });
  },

  renderDiscover(filter = 'all') {
    const list = document.getElementById('discover-list');
    if (!list) return;
    list.innerHTML = '';
    const accounts = this.getAccounts();
    const session = this.getSession();
    const friends = this.getFriends();
    const requests = this.getRequests();
    const me = this.getMe();

    accounts.forEach(user => {
      if (session && user.id === session.userId) return;
      const isFriend = friends.some(f => (f.a === session?.userId && f.b === user.id) || (f.b === session?.userId && f.a === user.id));
      const isPending = requests.some(r => r.from === session?.userId && r.to === user.id && r.status === 'pending');
      const isIncoming = requests.some(r => r.from === user.id && r.to === session?.userId && r.status === 'pending');
      const comp = me ? this.calcCompatibility(me, user) : Math.floor(Math.random() * 40 + 50);

      const row = document.createElement('div');
      row.className = 'user-row';
      row.innerHTML = `
        <a href="profile.html?id=${user.id}" class="user-avatar" style="${user.avatar ? `background-image:url('${user.avatar}');background-size:cover;background-position:center;color:transparent;` : ''}">${user.avatar ? '' : user.name.charAt(0).toUpperCase()}</a>
        <div class="user-info">
          <h3><a href="profile.html?id=${user.id}">${user.name}</a>${this.renderBadgesInline(user.badges)}</h3>
          <p>@${user.username} · ${user.genres.slice(0,2).join(', ')} · ${user.views || 0} views</p>
        </div>
        <div class="user-meta">
          <span class="compatibility">${comp}%</span>
          <span class="now-playing">🎧 ${user.nowPlaying}</span>
          ${isFriend ? '<span class="muted" style="font-size:12px;">friends</span>' :
            isPending ? '<button class="btn btn-ghost btn-sm" disabled>sent</button>' :
            isIncoming ? `<button class="btn btn-primary btn-sm" onclick="APP.acceptRequest('${user.id}')">accept</button>` :
            `<button class="btn btn-primary btn-sm" onclick="APP.sendRequest('${user.id}')">add</button>`
          }
        </div>
      `;
      list.appendChild(row);
    });
  },

  calcCompatibility(a, b) {
    const shared = a.genres.filter(g => b.genres.includes(g));
    return Math.min(99, Math.floor(50 + shared.length * 15 + Math.random() * 10));
  },

  sendRequest(toId) {
    const session = this.getSession();
    if (!session) return;
    const requests = this.getRequests();
    if (requests.find(r => r.from === session.userId && r.to === toId && r.status === 'pending')) { this.toast('already sent'); return; }
    requests.push({ from: session.userId, to: toId, status: 'pending', time: Date.now() });
    this.saveRequests(requests);
    this.toast('request sent');
    this.renderDiscover();
  },

  acceptRequest(fromId) {
    const session = this.getSession();
    if (!session) return;
    const requests = this.getRequests();
    const req = requests.find(r => r.from === fromId && r.to === session.userId && r.status === 'pending');
    if (!req) return;
    req.status = 'accepted';
    this.saveRequests(requests);
    const friends = this.getFriends();
    friends.push({ a: session.userId, b: fromId, since: Date.now() });
    this.saveFriends(friends);
    this.toast('friend added');
    this.renderDiscover();
  },

  // ========== BADGES ==========
  renderBadgesInline(badges) {
    if (!badges || badges.length === 0) return '';
    return ' ' + badges.map(b => {
      const def = this.badgeDefs[b];
      if (!def) return '';
      return `<span class="badge-inline" style="background:${def.color}22;color:${def.color};border:1px solid ${def.color}44;" title="${def.desc}">${def.icon} ${def.label}</span>`;
    }).join('');
  },

  renderBadgesBlock(badges) {
    if (!badges || badges.length === 0) return '';
    return `<div class="badges-row">${badges.map(b => {
      const def = this.badgeDefs[b];
      if (!def) return '';
      return `<span class="badge-block" style="background:${def.color}22;color:${def.color};border:1px solid ${def.color}44;" title="${def.desc}">${def.icon} ${def.label}</span>`;
    }).join('')}</div>`;
  },

  // ========== PROFILE PAGE ==========
  renderProfilePage() {
    const params = new URLSearchParams(window.location.search);
    const viewId = params.get('id');
    const session = this.getSession();
    const me = this.getMe();
    const user = viewId ? this.getUser(viewId) : me;
    if (!user) { window.location.href = 'index.html'; return; }
    const isSelf = session && user.id === session.userId;

    // Increment views if not self
    if (!isSelf && viewId) {
      const accounts = this.getAccounts();
      const idx = accounts.findIndex(u => u.id === user.id);
      if (idx !== -1) {
        accounts[idx].views = (accounts[idx].views || 0) + 1;
        this.saveAccounts(accounts);
      }
    }

    // Apply user's theme/font/cursor globally on this page
    this.applyUserTheme(user);

    // Banner
    const bannerEl = document.getElementById('p-banner');
    if (bannerEl) {
      if (user.banner && user.banner.trim()) {
        bannerEl.innerHTML = `<img src="${user.banner}" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.style.display='none';this.parentElement.style.background='${this.themes[user.theme]?.gradient || this.themes.blue.gradient}'">`;
        bannerEl.style.background = 'none';
      } else {
        bannerEl.innerHTML = '';
        bannerEl.style.background = this.themes[user.theme]?.gradient || this.themes.blue.gradient;
      }
    }

    // Avatar
    const avatarEl = document.getElementById('p-avatar');
    if (avatarEl) {
      if (user.avatar && user.avatar.trim()) {
        avatarEl.innerHTML = `<img src="${user.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;" onerror="this.style.display='none';this.parentElement.textContent='${user.name.charAt(0).toUpperCase()}'">`;
      } else {
        avatarEl.textContent = user.name.charAt(0).toUpperCase();
      }
    }

    // Status dot
    const statusEl = document.getElementById('p-status');
    if (statusEl) {
      const statusColors = { online: '#22c55e', idle: '#f59e0b', dnd: '#ef4444', offline: '#6b7280' };
      statusEl.style.background = statusColors[user.status] || statusColors.offline;
      statusEl.title = user.status;
    }

    // Name + badges
    const nameEl = document.getElementById('p-name');
    if (nameEl) nameEl.innerHTML = `${user.name}${this.renderBadgesInline(user.badges)}`;

    document.getElementById('p-handle').textContent = '@' + user.username;
    document.getElementById('p-bio').textContent = user.bio || 'no bio yet.';

    // Connections / Links
    const connEl = document.getElementById('p-connections');
    if (connEl) {
      connEl.innerHTML = '';
      if (user.connections?.spotify) connEl.innerHTML += `<span class="connection-badge spotify"><i class="fab fa-spotify"></i> spotify</span>`;
      if (user.connections?.lastfm) connEl.innerHTML += `<span class="connection-badge lastfm"><i class="fab fa-lastfm"></i> last.fm</span>`;
      if (user.connections?.discord) connEl.innerHTML += `<span class="connection-badge discord"><i class="fab fa-discord"></i> discord</span>`;
      if (user.links && user.links.length > 0) {
        user.links.forEach(link => {
          const plat = this.platforms[link.platform];
          if (plat && link.url) {
            connEl.innerHTML += `<a href="${link.url}" target="_blank" class="connection-badge" style="color:${plat.color};border-color:${plat.color}44;"><i class="${plat.icon}"></i> ${plat.label}</a>`;
          }
        });
      }
    }

    // Actions
    const actions = document.getElementById('p-actions');
    if (actions) {
      if (isSelf) {
        actions.innerHTML = `<a href="settings.html" class="btn btn-secondary btn-sm">edit profile</a>`;
      } else if (session) {
        const friends = this.getFriends();
        const isFriend = friends.some(f => (f.a === session.userId && f.b === user.id) || (f.b === session.userId && f.a === user.id));
        const isPending = this.getRequests().some(r => r.from === session.userId && r.to === user.id && r.status === 'pending');
        if (isFriend) actions.innerHTML = `<span class="muted" style="font-size:13px;">you are friends</span>`;
        else if (isPending) actions.innerHTML = `<button class="btn btn-ghost btn-sm" disabled>request sent</button>`;
        else actions.innerHTML = `<button class="btn btn-primary btn-sm" onclick="APP.sendRequest('${user.id}');setTimeout(()=>location.reload(),500)">add friend</button>`;
      } else {
        actions.innerHTML = `<a href="login.html" class="btn btn-secondary btn-sm">log in to add</a>`;
      }
    }

    // Recent tracks
    const tracksEl = document.getElementById('p-tracks');
    if (tracksEl) {
      tracksEl.innerHTML = (user.recentTracks || []).map(t => `
        <div class="track"><div class="track-art">♪</div><div class="track-info"><h4>${t.title}</h4><p>${t.artist}</p></div><span class="track-time">${t.time}</span></div>
      `).join('');
    }

    // Stats
    const stats = user.stats || {tracks:0,artists:0,hours:0,obscurity:50};
    const statsEl = document.getElementById('p-stats');
    if (statsEl) {
      statsEl.innerHTML = `
        <div class="stat"><div class="stat-num">${stats.tracks.toLocaleString()}</div><div class="stat-label">tracks</div></div>
        <div class="stat"><div class="stat-num">${stats.artists.toLocaleString()}</div><div class="stat-label">artists</div></div>
        <div class="stat"><div class="stat-num">${stats.hours}h</div><div class="stat-label">this month</div></div>
        <div class="stat"><div class="stat-num">${stats.obscurity}%</div><div class="stat-label">obscurity</div></div>
        <div class="stat"><div class="stat-num">${(user.views || 0).toLocaleString()}</div><div class="stat-label">profile views</div></div>
        <div class="stat"><div class="stat-num">${Math.floor((Date.now() - (user.created || Date.now())) / 86400000)}d</div><div class="stat-label">member</div></div>
      `;
    }

    // Genres
    const genresEl = document.getElementById('p-genres');
    if (genresEl) {
      genresEl.innerHTML = (user.genres || []).map(g => `<span class="tag">${g}</span>`).join('');
    }

    // Playlists
    const playlistsEl = document.getElementById('p-playlists');
    if (playlistsEl) {
      playlistsEl.innerHTML = (user.playlists || []).map(p => `
        <div class="playlist"><span class="playlist-emoji">${p.emoji}</span><span class="playlist-name">${p.name}</span><span class="playlist-count">${p.tracks} tracks</span></div>
      `).join('');
    }

    // Friends
    const allFriends = this.getFriends();
    const accounts = this.getAccounts();
    const userFriends = allFriends
      .filter(f => f.a === user.id || f.b === user.id)
      .map(f => { const fid = f.a === user.id ? f.b : f.a; return accounts.find(a => a.id === fid); })
      .filter(Boolean);

    const friendsList = document.getElementById('p-friends');
    if (friendsList) {
      if (userFriends.length === 0) {
        friendsList.innerHTML = '<p class="muted" style="font-size:13px;">no friends yet</p>';
      } else {
        friendsList.innerHTML = userFriends.map(f => `
          <div class="friend">
            <a href="profile.html?id=${f.id}" class="friend-avatar" style="${f.avatar ? `background-image:url('${f.avatar}');background-size:cover;background-position:center;color:transparent;` : ''}">${f.avatar ? '' : f.name.charAt(0).toUpperCase()}</a>
            <div><a href="profile.html?id=${f.id}" class="friend-name">${f.name}</a><div class="friend-status">${f.status === 'online' ? '🟢 online' : '⚫ offline'} — ${f.nowPlaying}</div></div>
          </div>
        `).join('');
      }
    }
  },

  // ========== SETTINGS ==========
  renderSettings() {
    const me = this.getMe();
    if (!me) return;

    // Connections
    ['spotify','lastfm','discord'].forEach(p => {
      const btn = document.getElementById('connect-'+p);
      if (!btn) return;
      const connected = me.connections?.[p];
      btn.textContent = connected ? 'disconnect' : 'connect';
      btn.className = connected ? 'btn btn-ghost btn-sm' : 'btn btn-secondary btn-sm';
      btn.onclick = () => {
        const conns = { ...me.connections, [p]: !connected };
        this.updateMe({ connections: conns });
        this.toast(`${p} ${!connected ? 'connected' : 'disconnected'}`);
        this.renderSettings();
      };
    });

    // Profile fields
    const nameInput = document.getElementById('settings-name');
    const bioInput = document.getElementById('settings-bio');
    const avatarInput = document.getElementById('settings-avatar');
    const bannerInput = document.getElementById('settings-banner');
    const statusSelect = document.getElementById('settings-status');
    if (nameInput) nameInput.value = me.name || '';
    if (bioInput) bioInput.value = me.bio || '';
    if (avatarInput) avatarInput.value = me.avatar || '';
    if (bannerInput) bannerInput.value = me.banner || '';
    if (statusSelect) statusSelect.value = me.status || 'online';

    // Theme picker
    const themeContainer = document.getElementById('theme-picker');
    if (themeContainer) {
      themeContainer.innerHTML = Object.entries(this.themes).map(([key, t]) => `
        <button class="theme-btn ${me.theme === key ? 'active' : ''}" data-theme="${key}" style="background: ${t.accent};" title="${t.name}" onclick="APP.setTheme('${key}')"></button>
      `).join('');
    }

    // Accent color picker
    const accentContainer = document.getElementById('accent-picker');
    if (accentContainer) {
      const colors = ['#4a7fc9','#7c6bdb','#2db4a3','#e05a7a','#d49a3a','#4ade80','#f87171','#f472b6','#fb923c','#9ca3af','#ec4899','#06b6d4','#eab308','#ffffff','#000000'];
      accentContainer.innerHTML = colors.map(c => `
        <button class="accent-btn ${me.accent === c ? 'active' : ''}" style="background:${c};" onclick="APP.setAccent('${c}')"></button>
      `).join('');
    }

    // Font picker
    const fontContainer = document.getElementById('font-picker');
    if (fontContainer) {
      fontContainer.innerHTML = this.fonts.map(f => `
        <button class="font-btn ${me.font === f.name ? 'active' : ''}" onclick="APP.setFont('${f.name}')" style="font-family:${f.family};">${f.name}</button>
      `).join('');
    }

    // Cursor picker
    const cursorContainer = document.getElementById('cursor-picker');
    if (cursorContainer) {
      cursorContainer.innerHTML = this.cursors.map(c => `
        <button class="cursor-btn ${me.cursor === c ? 'active' : ''}" onclick="APP.setCursor('${c}')" style="cursor:${c};">${c}</button>
      `).join('');
    }

    // Links editor
    this.renderLinksEditor();

    // Badges editor (admin only)
    if (me.isAdmin) {
      const badgeContainer = document.getElementById('badge-editor');
      if (badgeContainer) {
        badgeContainer.innerHTML = Object.entries(this.badgeDefs).map(([key, def]) => `
          <label class="badge-checkbox">
            <input type="checkbox" value="${key}" ${me.badges?.includes(key) ? 'checked' : ''} onchange="APP.toggleBadge('${key}')">
            <span style="color:${def.color};border-color:${def.color}44;">${def.icon} ${def.label}</span>
          </label>
        `).join('');
      }
    }

    // Apply current theme
    this.applyUserTheme(me);
  },

  renderLinksEditor() {
    const me = this.getMe();
    const container = document.getElementById('links-editor');
    if (!container || !me) return;
    container.innerHTML = (me.links || []).map((link, i) => `
      <div class="link-row">
        <select onchange="APP.updateLink(${i}, 'platform', this.value)">
          ${Object.entries(this.platforms).map(([k,p]) => `<option value="${k}" ${link.platform === k ? 'selected' : ''}>${p.label}</option>`).join('')}
        </select>
        <input type="text" value="${link.url || ''}" placeholder="https://..." onchange="APP.updateLink(${i}, 'url', this.value)">
        <button class="btn btn-ghost btn-sm" onclick="APP.removeLink(${i})"><i class="fas fa-trash"></i></button>
      </div>
    `).join('');
  },

  addLink() {
    const me = this.getMe();
    if (!me) return;
    const links = [...(me.links || []), { platform: 'website', url: '' }];
    this.updateMe({ links });
    this.renderLinksEditor();
  },

  updateLink(index, field, value) {
    const me = this.getMe();
    if (!me) return;
    const links = [...(me.links || [])];
    links[index] = { ...links[index], [field]: value };
    this.updateMe({ links });
  },

  removeLink(index) {
    const me = this.getMe();
    if (!me) return;
    const links = [...(me.links || [])];
    links.splice(index, 1);
    this.updateMe({ links });
    this.renderLinksEditor();
  },

  setTheme(theme) {
    this.updateMe({ theme });
    this.applyUserTheme(this.getMe());
    this.renderSettings();
    this.toast('theme saved');
  },

  setAccent(color) {
    this.updateMe({ accent: color });
    this.applyUserTheme(this.getMe());
    this.renderSettings();
    this.toast('accent color saved');
  },

  setFont(fontName) {
    this.updateMe({ font: fontName });
    this.applyUserTheme(this.getMe());
    this.renderSettings();
    this.toast('font saved');
  },

  setCursor(cursor) {
    this.updateMe({ cursor });
    document.body.style.cursor = cursor === 'default' ? 'auto' : cursor;
    this.renderSettings();
    this.toast('cursor saved');
  },

  toggleBadge(badge) {
    const me = this.getMe();
    if (!me || !me.isAdmin) return;
    const badges = [...(me.badges || [])];
    const idx = badges.indexOf(badge);
    if (idx > -1) badges.splice(idx, 1);
    else badges.push(badge);
    this.updateMe({ badges });
    this.renderSettings();
    this.toast(`badge ${idx > -1 ? 'removed' : 'added'}`);
  },

  saveSettings() {
    const name = document.getElementById('settings-name')?.value.trim();
    const bio = document.getElementById('settings-bio')?.value.trim();
    const avatar = document.getElementById('settings-avatar')?.value.trim();
    const banner = document.getElementById('settings-banner')?.value.trim();
    const status = document.getElementById('settings-status')?.value;
    const updates = {};
    if (name) updates.name = name;
    if (bio !== undefined) updates.bio = bio;
    if (avatar !== undefined) updates.avatar = avatar;
    if (banner !== undefined) updates.banner = banner;
    if (status) updates.status = status;
    this.updateMe(updates);
    this.toast('profile saved');
  },

  applyUserTheme(user) {
    if (!user) return;
    const theme = this.themes[user.theme] || this.themes.blue;
    const accent = user.accent || theme.accent;
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--accent-hover', accent);
    document.documentElement.style.setProperty('--bg', theme.bg);

    // Apply font to body
    const fontObj = this.fonts.find(f => f.name === user.font);
    if (fontObj) {
      document.body.style.fontFamily = fontObj.family;
    }

    // Apply cursor
    if (user.cursor && user.cursor !== 'default') {
      document.body.style.cursor = user.cursor;
    } else {
      document.body.style.cursor = 'auto';
    }
  },

  // ========== ADMIN ==========
  renderAdmin() {
    const me = this.getMe();
    if (!me || !me.isAdmin) { window.location.href = 'index.html'; return; }

    const accounts = this.getAccounts();
    const totalUsers = accounts.length;
    const totalViews = accounts.reduce((sum, u) => sum + (u.views || 0), 0);
    const onlineUsers = accounts.filter(u => u.status === 'online').length;

    const statsEl = document.getElementById('admin-stats');
    if (statsEl) {
      statsEl.innerHTML = `
        <div class="admin-stat"><div class="admin-stat-num">${totalUsers}</div><div class="admin-stat-label">total users</div></div>
        <div class="admin-stat"><div class="admin-stat-num">${totalViews.toLocaleString()}</div><div class="admin-stat-label">total views</div></div>
        <div class="admin-stat"><div class="admin-stat-num">${onlineUsers}</div><div class="admin-stat-label">online now</div></div>
      `;
    }

    const userList = document.getElementById('admin-users');
    if (userList) {
      userList.innerHTML = accounts.map(u => `
        <div class="admin-user-row">
          <div class="admin-user-info">
            <strong>${u.name}</strong>
            <span class="muted">@${u.username}</span>
            ${this.renderBadgesInline(u.badges)}
          </div>
          <div class="admin-user-meta">
            <span>${u.views || 0} views</span>
            <span class="status-dot ${u.status}"></span>
            <button class="btn btn-secondary btn-sm" onclick="APP.adminEditUser('${u.id}')">edit</button>
          </div>
        </div>
      `).join('');
    }
  },

  adminEditUser(userId) {
    const user = this.getUser(userId);
    if (!user) return;
    const modal = document.getElementById('admin-modal');
    const content = document.getElementById('admin-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <h3>edit @${user.username}</h3>
      <div class="form-group"><label>badges</label>
        <div class="badge-editor">
          ${Object.entries(this.badgeDefs).map(([key, def]) => `
            <label class="badge-checkbox">
              <input type="checkbox" value="${key}" ${user.badges?.includes(key) ? 'checked' : ''} onchange="APP.adminToggleBadge('${userId}', '${key}')">
              <span style="color:${def.color};border-color:${def.color}44;">${def.icon} ${def.label}</span>
            </label>
          `).join('')}
        </div>
      </div>
      <div class="form-group"><label>status</label>
        <select class="form-input" onchange="APP.adminSetStatus('${userId}', this.value)">
          <option value="online" ${user.status === 'online' ? 'selected' : ''}>online</option>
          <option value="idle" ${user.status === 'idle' ? 'selected' : ''}>idle</option>
          <option value="dnd" ${user.status === 'dnd' ? 'selected' : ''}>dnd</option>
          <option value="offline" ${user.status === 'offline' ? 'selected' : ''}>offline</option>
        </select>
      </div>
      <div class="form-group"><label>theme</label>
        <select class="form-input" onchange="APP.adminSetTheme('${userId}', this.value)">
          ${Object.entries(this.themes).map(([k,t]) => `<option value="${k}" ${user.theme === k ? 'selected' : ''}>${t.name}</option>`).join('')}
        </select>
      </div>
      <button class="btn btn-primary btn-sm" onclick="document.getElementById('admin-modal').classList.remove('active')">done</button>
    `;
    modal.classList.add('active');
  },

  adminToggleBadge(userId, badge) {
    const accounts = this.getAccounts();
    const idx = accounts.findIndex(u => u.id === userId);
    if (idx === -1) return;
    const badges = [...(accounts[idx].badges || [])];
    const i = badges.indexOf(badge);
    if (i > -1) badges.splice(i, 1);
    else badges.push(badge);
    accounts[idx].badges = badges;
    this.saveAccounts(accounts);
    this.renderAdmin();
    this.toast(`badge ${i > -1 ? 'removed from' : 'added to'} @${accounts[idx].username}`);
  },

  adminSetStatus(userId, status) {
    const accounts = this.getAccounts();
    const idx = accounts.findIndex(u => u.id === userId);
    if (idx === -1) return;
    accounts[idx].status = status;
    this.saveAccounts(accounts);
    this.renderAdmin();
    this.toast('status updated');
  },

  adminSetTheme(userId, theme) {
    const accounts = this.getAccounts();
    const idx = accounts.findIndex(u => u.id === userId);
    if (idx === -1) return;
    accounts[idx].theme = theme;
    accounts[idx].accent = this.themes[theme].accent;
    this.saveAccounts(accounts);
    this.renderAdmin();
    this.toast('theme updated');
  },

  // ========== EXPORT / IMPORT ==========
  exportData() {
    const data = {
      accounts: this.getAccounts(),
      session: this.getSession(),
      friends: this.getFriends(),
      requests: this.getRequests(),
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `musical-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.toast('data exported');
  },

  importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.accounts) localStorage.setItem('musical_accounts', JSON.stringify(data.accounts));
        if (data.friends) localStorage.setItem('musical_friends', JSON.stringify(data.friends));
        if (data.requests) localStorage.setItem('musical_requests', JSON.stringify(data.requests));
        this.toast('data imported. refresh the page.');
      } catch (err) {
        this.toast('invalid file');
      }
    };
    reader.readAsText(file);
  },

  // ========== TOAST ==========
  toast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 200); }, 2500);
  },
};

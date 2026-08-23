const APP = {
  // ─── DEFAULT MOCK USERS ───
  defaultUsers: [
    { id: 'u1', username: 'alex', password: 'alex', name: 'alex chen', bio: 'shoegaze till i die', genres: ['shoegaze', 'dream pop', 'post-rock'], theme: 'blue', connections: { spotify: true, lastfm: true, discord: false }, playlists: [{name:'late night drives',emoji:'🌙',tracks:42},{name:'shoegaze essentials',emoji:'🎸',tracks:68}], recentTracks: [{title:'alison',artist:'slowdive',time:'2 min ago'},{title:'when you sleep',artist:'my bloody valentine',time:'8 min ago'},{title:'machine gun',artist:'slowdive',time:'15 min ago'}], stats: {tracks:1247,artists:42,hours:128,obscurity:94}, status: 'online', nowPlaying: 'slowdive — sugar for the pill' },
    { id: 'u2', username: 'maya', password: 'maya', name: 'maya okafor', bio: 'techno and ambient only', genres: ['techno', 'ambient', 'idm'], theme: 'purple', connections: { spotify: true, lastfm: false, discord: true }, playlists: [{name:'warehouse',emoji:'🏭',tracks:55},{name:'focus',emoji:'🧠',tracks:30}], recentTracks: [{title:'alberto balsalm',artist:'aphex twin',time:'5 min ago'},{title:'spastik',artist:'plastikman',time:'12 min ago'}], stats: {tracks:892,artists:28,hours:96,obscurity:88}, status: 'offline', nowPlaying: 'aphex twin — alberto balsalm' },
    { id: 'u3', username: 'jordan', password: 'jordan', name: 'jordan smith', bio: 'indie rock kid', genres: ['indie rock', 'shoegaze', 'jangle pop'], theme: 'teal', connections: { spotify: false, lastfm: true, discord: false }, playlists: [{name:'summer 2024',emoji:'☀️',tracks:40}], recentTracks: [{title:'under the sun',artist:'diiv',time:'1 min ago'},{title:'loomer',artist:'my bloody valentine',time:'10 min ago'}], stats: {tracks:2100,artists:67,hours:156,obscurity:72}, status: 'online', nowPlaying: 'diiv — under the sun' },
    { id: 'u4', username: 'riley', password: 'riley', name: 'riley park', bio: 'hip hop head', genres: ['hip hop', 'jazz rap', 'lo-fi'], theme: 'amber', connections: { spotify: true, lastfm: true, discord: true }, playlists: [{name:'beats to study to',emoji:'📖',tracks:120}], recentTracks: [{title:'rapp snitch knishes',artist:'mf doom',time:'3 min ago'}], stats: {tracks:3400,artists:89,hours:210,obscurity:61}, status: 'online', nowPlaying: 'mf doom — rapp snitch knishes' },
    { id: 'u5', username: 'sam', password: 'sam', name: 'sam torres', bio: 'heavy music only', genres: ['metalcore', 'post-hardcore', 'math rock'], theme: 'rose', connections: { spotify: false, lastfm: true, discord: false }, playlists: [{name:'mosh pit',emoji:'🤘',tracks:45}], recentTracks: [{title:'concubine',artist:'converge',time:'20 min ago'}], stats: {tracks:1560,artists:34,hours:98,obscurity:82}, status: 'offline', nowPlaying: 'converge — concubine' },
    { id: 'u6', username: 'casey', password: 'casey', name: 'casey kim', bio: 'synthwave forever', genres: ['synthwave', 'retrowave', 'darkwave'], theme: 'blue', connections: { spotify: true, lastfm: false, discord: true }, playlists: [{name:'nightcall',emoji:'🌃',tracks:38}], recentTracks: [{title:'sunset',artist:'the midnight',time:'7 min ago'}], stats: {tracks:780,artists:22,hours:64,obscurity:75}, status: 'online', nowPlaying: 'the midnight — sunset' },
    { id: 'u7', username: 'taylor', password: 'taylor', name: 'taylor reed', bio: 'folk and feelings', genres: ['folk', 'indie folk', 'singer-songwriter'], theme: 'purple', connections: { spotify: true, lastfm: true, discord: false }, playlists: [{name:'campfire',emoji:'🔥',tracks:52}], recentTracks: [{title:'white winter hymnal',artist:'fleet foxes',time:'30 min ago'}], stats: {tracks:920,artists:41,hours:74,obscurity:68}, status: 'offline', nowPlaying: 'fleet foxes — white winter hymnal' },
    { id: 'u8', username: 'drew', password: 'drew', name: 'drew nakamura', bio: 'have a nice life or have no life', genres: ['shoegaze', 'noise rock', 'slowcore'], theme: 'blue', connections: { spotify: false, lastfm: true, discord: true }, playlists: [{name:'depression hours',emoji:'🖤',tracks:90}], recentTracks: [{title:'bloodhail',artist:'have a nice life',time:'4 min ago'}], stats: {tracks:4500,artists:56,hours:312,obscurity:97}, status: 'online', nowPlaying: 'have a nice life — bloodhail' },
  ],

  // ─── DB HELPERS ───
  getAccounts() {
    let accounts = JSON.parse(localStorage.getItem('musical_accounts') || 'null');
    if (!accounts) {
      accounts = JSON.parse(JSON.stringify(this.defaultUsers));
      localStorage.setItem('musical_accounts', JSON.stringify(accounts));
    }
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

  // ─── AUTH ───
  isLogin: true,

  initAuthPage() {
    const form = document.getElementById('auth-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('auth-user').value.trim().toLowerCase();
      const pass = document.getElementById('auth-pass').value;
      const confirm = document.getElementById('auth-confirm').value;

      if (!user || !pass) { this.toast('fill in both fields', 'error'); return; }

      if (this.isLogin) {
        const accounts = this.getAccounts();
        const found = accounts.find(a => a.username === user && a.password === pass);
        if (!found) { this.toast('wrong name or password', 'error'); return; }
        this.setSession({ userId: found.id, username: found.username });
        window.location.href = 'discover.html';
      } else {
        if (pass !== confirm) { this.toast('passwords do not match', 'error'); return; }
        const accounts = this.getAccounts();
        if (accounts.find(a => a.username === user)) { this.toast('name taken', 'error'); return; }
        const newUser = {
          id: 'u' + Date.now(),
          username: user,
          password: pass,
          name: user,
          bio: 'new here. still building my sound.',
          genres: ['indie', 'rock', 'electronic'],
          theme: 'blue',
          connections: { spotify: false, lastfm: false, discord: false },
          playlists: [
            { name: 'my favorites', emoji: '⭐', tracks: 0 },
            { name: 'recent finds', emoji: '🔍', tracks: 0 },
          ],
          recentTracks: [
            { title: 'welcome to musical', artist: 'the app', time: 'just now' },
          ],
          stats: { tracks: 0, artists: 0, hours: 0, obscurity: 50 },
          status: 'online',
          nowPlaying: 'nothing yet',
        };
        accounts.push(newUser);
        this.saveAccounts(accounts);
        this.setSession({ userId: newUser.id, username: newUser.username });
        this.toast('account created', 'success');
        window.location.href = 'discover.html';
      }
    });
  },

  toggleAuth() {
    this.isLogin = !this.isLogin;
    document.getElementById('auth-title').textContent = this.isLogin ? 'log in' : 'sign up';
    document.getElementById('auth-sub').textContent = this.isLogin ? 'no email. just a name and password.' : 'pick a name and password. that is it.';
    document.getElementById('auth-btn').textContent = this.isLogin ? 'log in' : 'create account';
    document.getElementById('auth-toggle-text').textContent = this.isLogin ? 'no account?' : 'have an account?';
    document.getElementById('auth-toggle').textContent = this.isLogin ? 'sign up' : 'log in';
    document.getElementById('confirm-group').style.display = this.isLogin ? 'none' : 'block';
  },

  logout() {
    this.clearSession();
    window.location.href = 'index.html';
  },

  requireAuth() {
    if (!this.getSession()) {
      window.location.href = 'login.html';
    }
  },

  // ─── NAV ───
  renderNav() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    const session = this.getSession();
    const me = this.getMe();

    let links = '';
    if (session) {
      links = `
        <a href="discover.html">discover</a>
        <a href="profile.html">profile</a>
        <a href="settings.html">settings</a>
      `;
    } else {
      links = `<a href="login.html">log in</a>`;
    }

    nav.innerHTML = `
      <a href="index.html" class="nav-logo">musical</a>
      <div class="nav-links">
        ${links}
        ${session ? `
          <a href="profile.html" class="nav-user">
            <div class="nav-avatar">${me ? me.name.charAt(0).toUpperCase() : '?'}</div>
          </a>
        ` : ''}
      </div>
    `;

    // mark active
    const path = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('a').forEach(a => {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });
  },

  // ─── DISCOVER ───
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
      if (session && user.id === session.userId) return; // skip self

      const isFriend = friends.some(f => (f.a === session?.userId && f.b === user.id) || (f.b === session?.userId && f.a === user.id));
      const isPending = requests.some(r => r.from === session?.userId && r.to === user.id && r.status === 'pending');
      const isIncoming = requests.some(r => r.from === user.id && r.to === session?.userId && r.status === 'pending');

      const comp = me ? this.calcCompatibility(me, user) : Math.floor(Math.random() * 40 + 50);

      const row = document.createElement('div');
      row.className = 'user-row';
      row.innerHTML = `
        <a href="profile.html?id=${user.id}" class="user-avatar">${user.name.charAt(0).toUpperCase()}</a>
        <div class="user-info">
          <h3><a href="profile.html?id=${user.id}">${user.name}</a></h3>
          <p>${user.handle || '@'+user.username} · ${user.genres.slice(0,2).join(', ')}</p>
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
    if (requests.find(r => r.from === session.userId && r.to === toId && r.status === 'pending')) {
      this.toast('already sent', 'warning'); return;
    }
    requests.push({ from: session.userId, to: toId, status: 'pending', time: Date.now() });
    this.saveRequests(requests);
    this.toast('request sent', 'success');
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
    this.toast('friend added', 'success');
    this.renderDiscover();
  },

  // ─── PROFILE ───
  renderProfilePage() {
    const params = new URLSearchParams(window.location.search);
    const viewId = params.get('id');
    const session = this.getSession();
    const me = this.getMe();
    const user = viewId ? this.getUser(viewId) : me;
    if (!user) { window.location.href = 'index.html'; return; }

    const isSelf = session && user.id === session.userId;

    document.getElementById('p-avatar').textContent = user.name.charAt(0).toUpperCase();
    document.getElementById('p-name').textContent = user.name;
    document.getElementById('p-handle').textContent = '@' + user.username;
    document.getElementById('p-bio').textContent = user.bio || 'no bio yet.';

    const connEl = document.getElementById('p-connections');
    connEl.innerHTML = '';
    if (user.connections?.spotify) connEl.innerHTML += `<span class="connection-badge spotify">spotify</span>`;
    if (user.connections?.lastfm) connEl.innerHTML += `<span class="connection-badge lastfm">last.fm</span>`;
    if (user.connections?.discord) connEl.innerHTML += `<span class="connection-badge discord">discord</span>`;

    const actions = document.getElementById('p-actions');
    if (isSelf) {
      actions.innerHTML = `<a href="settings.html" class="btn btn-secondary btn-sm">edit</a>`;
    } else if (session) {
      const friends = this.getFriends();
      const isFriend = friends.some(f => (f.a === session.userId && f.b === user.id) || (f.b === session.userId && f.a === user.id));
      const isPending = this.getRequests().some(r => r.from === session.userId && r.to === user.id && r.status === 'pending');
      if (isFriend) {
        actions.innerHTML = `<span class="muted" style="font-size:13px;">you are friends</span>`;
      } else if (isPending) {
        actions.innerHTML = `<button class="btn btn-ghost btn-sm" disabled>request sent</button>`;
      } else {
        actions.innerHTML = `<button class="btn btn-primary btn-sm" onclick="APP.sendRequest('${user.id}');location.reload()">add friend</button>`;
      }
    } else {
      actions.innerHTML = `<a href="login.html" class="btn btn-secondary btn-sm">log in to add</a>`;
    }

    // tracks
    const tracksEl = document.getElementById('p-tracks');
    tracksEl.innerHTML = (user.recentTracks || []).map(t => `
      <div class="track">
        <div class="track-art">♪</div>
        <div class="track-info">
          <h4>${t.title}</h4>
          <p>${t.artist}</p>
        </div>
        <span class="track-time">${t.time}</span>
      </div>
    `).join('');

    // stats
    const stats = user.stats || {tracks:0,artists:0,hours:0,obscurity:50};
    document.getElementById('p-stats').innerHTML = `
      <div class="stat"><div class="stat-num">${stats.tracks}</div><div class="stat-label">tracks</div></div>
      <div class="stat"><div class="stat-num">${stats.artists}</div><div class="stat-label">artists</div></div>
      <div class="stat"><div class="stat-num">${stats.hours}h</div><div class="stat-label">this month</div></div>
      <div class="stat"><div class="stat-num">${stats.obscurity}%</div><div class="stat-label">obscurity</div></div>
    `;

    // genres
    document.getElementById('p-genres').innerHTML = (user.genres || []).map(g => `<span class="tag">${g}</span>`).join('');

    // playlists
    document.getElementById('p-playlists').innerHTML = (user.playlists || []).map(p => `
      <div class="playlist">
        <span class="playlist-emoji">${p.emoji}</span>
        <span class="playlist-name">${p.name}</span>
        <span class="playlist-count">${p.tracks} tracks</span>
      </div>
    `).join('');

    // friends (only show if self, or if viewing someone with public friends)
    const friendsSection = document.getElementById('friends-section');
    const friendsList = document.getElementById('p-friends');
    const allFriends = this.getFriends();
    const accounts = this.getAccounts();
    const userFriends = allFriends
      .filter(f => f.a === user.id || f.b === user.id)
      .map(f => {
        const fid = f.a === user.id ? f.b : f.a;
        return accounts.find(a => a.id === fid);
      })
      .filter(Boolean);

    if (userFriends.length === 0) {
      friendsList.innerHTML = '<p class="muted" style="font-size:13px;">no friends yet</p>';
    } else {
      friendsList.innerHTML = userFriends.map(f => `
        <div class="friend">
          <a href="profile.html?id=${f.id}" class="friend-avatar">${f.name.charAt(0).toUpperCase()}</a>
          <div>
            <a href="profile.html?id=${f.id}" class="friend-name">${f.name}</a>
            <div class="friend-status">${f.status === 'online' ? '🟢 online' : '⚫ offline'} — ${f.nowPlaying}</div>
          </div>
        </div>
      `).join('');
    }
  },

  // ─── SETTINGS ───
  renderSettings() {
    const me = this.getMe();
    if (!me) return;

    // connections
    ['spotify','lastfm','discord'].forEach(p => {
      const btn = document.getElementById('connect-'+p);
      if (!btn) return;
      const connected = me.connections?.[p];
      btn.textContent = connected ? 'disconnect' : 'connect';
      btn.className = connected ? 'btn btn-ghost btn-sm' : 'btn btn-secondary btn-sm';
      btn.onclick = () => {
        const conns = { ...me.connections, [p]: !connected };
        this.updateMe({ connections: conns });
        this.toast(`${p} ${!connected ? 'connected' : 'disconnected'}`, 'success');
        this.renderSettings();
      };
    });

    // inputs
    const nameInput = document.getElementById('settings-name');
    const bioInput = document.getElementById('settings-bio');
    if (nameInput) nameInput.value = me.name;
    if (bioInput) bioInput.value = me.bio || '';

    // theme
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === (me.theme || 'blue'));
      btn.onclick = () => {
        this.updateMe({ theme: btn.dataset.theme });
        this.applyTheme(btn.dataset.theme);
        this.renderSettings();
        this.toast('theme saved', 'success');
      };
    });

    this.applyTheme(me.theme || 'blue');
  },

  saveSettings() {
    const name = document.getElementById('settings-name')?.value.trim();
    const bio = document.getElementById('settings-bio')?.value.trim();
    if (name) this.updateMe({ name });
    if (bio !== undefined) this.updateMe({ bio });
    this.toast('profile saved', 'success');
  },

  applyTheme(theme) {
    const colors = {
      blue: '#4a7fc9', purple: '#7c6bdb', teal: '#2db4a3',
      rose: '#e05a7a', amber: '#d49a3a',
    };
    const c = colors[theme] || colors.blue;
    document.documentElement.style.setProperty('--accent', c);
    document.documentElement.style.setProperty('--accent-hover', c);
  },

  // ─── TOAST ───
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

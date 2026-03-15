# Tasks — Personal Task Manager

A Todoist-inspired personal task manager with real-time sync across devices via Firebase Firestore.

## Quick Start (Local — No Firebase)

The app works out of the box using **localStorage** as a fallback. Simply open `index.html` in a browser or use a local server:

```bash
npx -y serve .
```

Default password: `admin123` (change `APP_PASSWORD` in the `<script>` tag).

---

## Firebase Setup (Real-Time Sync)

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Create project**
2. In your project, go to **Project settings** → **Add app** → **Web** (</> icon)
3. Copy the `firebaseConfig` object
4. Open `index.html` and replace the placeholder config:
   ```js
   const firebaseConfig = {
     apiKey: "YOUR_ACTUAL_KEY",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123:web:abc123"
   };
   ```
5. In Firebase Console → **Firestore Database** → **Create database** → Start in **test mode**
6. Collections `tasks`, `projects`, and `labels` are auto-created on first use

---

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Import project** → Select your repo
3. Framework Preset: **Other** (static)
4. Output directory: `./ ` (root)
5. Click **Deploy**

Your app is now live with a URL like `https://your-app.vercel.app`

---

## Features

- 📥 **Inbox, Today, Upcoming, Completed** views
- 📁 **Projects** with colour-coded dots
- 🏷 **Labels** with multi-select tagging
- 🚩 **4-level priority** system (P1–P4)
- 📅 **Due dates & deadlines** with smart colour chips
- ✅ **Subtasks** with inline add
- ⌨️ **Keyboard shortcuts**: Q (add), G+I/T/U (navigate), Escape (close)
- 📱 **Responsive** — sidebar collapses on mobile
- 🔒 **Password protected** — session stored in sessionStorage
- 🔥 **Real-time sync** via Firebase Firestore (optional)

---

## Keyboard Shortcuts

| Key | Action |
|---|---|
| `Q` | Open quick-add |
| `Escape` | Close panel / cancel |
| `Enter` | Submit task |
| `G` then `I` | Go to Inbox |
| `G` then `T` | Go to Today |
| `G` then `U` | Go to Upcoming |

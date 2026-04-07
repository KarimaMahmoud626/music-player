# Music Player

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Status-In_Progress-orange?style=for-the-badge" alt="Status: In Progress" />
</p>

A mobile music player app built with **React Native (Expo)** and **TypeScript**, featuring authentication, a multi-screen library browsing experience, playlists, liked songs, and a now-playing screen — currently in early development.

---

## 📱 Screens

| Screen          | Description                                     |
| --------------- | ----------------------------------------------- |
| **Login**       | Authentication entry screen                     |
| **Sign Up**     | New user registration screen                    |
| **Home**        | Main landing screen after login _(placeholder)_ |
| **Library**     | Browse your music library _(placeholder)_       |
| **Liked Songs** | View songs you've liked _(placeholder)_         |
| **Playlist**    | View and manage playlists _(placeholder)_       |
| **Now Playing** | Full playback control screen _(placeholder)_    |

---

## 🛠️ Tech Stack

| Layer            | Technology                                                |
| ---------------- | --------------------------------------------------------- |
| Language         | TypeScript                                                |
| Framework        | React Native + Expo                                       |
| State Management | Redux Toolkit                                             |
| Networking       | Axios                                                     |
| Navigation       | React Navigation (Native Stack + Drawer)                  |
| Theming          | Custom theme system (light & dark colors, platform fonts) |
| IDE              | Visual Studio Code                                        |

---

## 🗂️ Project Structure

```
src/
├── components/          # Reusable UI components (ThemedText, ThemedView)
├── constants/           # Theme colors and platform fonts
├── hooks/               # useColorScheme, useThemeColor
├── navigation/
│   ├── AppNavigator.tsx # Root stack (Login → SignUp → NowPlaying → Library)
│   └── DrawerNavigator.tsx # Drawer (Home, Playlist, LikedSongs)
├── redux/
│   └── store/
│       ├── auth/        # authSlice (login state)
│       ├── music/       # music slice (planned)
│       └── store.tsx    # Redux store configuration
└── screens/
    ├── Auth/            # LoginScreen, SignUpScreen
    ├── Home/            # HomeScreen
    ├── Library/         # LibraryScreen
    ├── LikedSongs/      # LikedSongsScreen
    ├── NowPlaying/      # NowPlayingScreen
    └── Playlist/        # PlaylistScreen
```

---

## 🔮 Planned Features

- 🎵 **Audio playback** — Play, pause, skip, seek with `expo-av`
- 📂 **Device library access** — Browse and load local music files
- ❤️ **Like songs** — Save favorite tracks to Liked Songs
- 📋 **Playlists** — Create and manage custom playlists
- 🔀 **Shuffle & repeat** — Playback controls
- 🌙 **Dark mode** — Full theming support already scaffolded
- 🔐 **Auth integration** — Wire up Redux auth slice to real login flow

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Expo CLI](https://docs.expo.dev/get-started/installation/) — `npm install -g expo-cli`
- [Expo Go](https://expo.dev/go) on your mobile device — **or** an Android/iOS emulator

### 1. Clone the repository

```bash
git clone https://github.com/KarimaMahmoud626/music-player.git
cd music-player
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npx expo start
```

Scan the QR code with Expo Go, or press `a` for Android emulator / `i` for iOS simulator.

---

## 👤 Author

**Karima Mahmoud**
[GitHub →](https://github.com/KarimaMahmoud626)

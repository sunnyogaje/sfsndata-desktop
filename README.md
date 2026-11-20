# SFSNData Desktop

A thin Electron wrapper around [sfsndata.com.ng](https://sfsndata.com.ng) — opens straight to the login page, maximized like a normal desktop app.

It's just a window pointed at the live site — no separate frontend code, no build step for the website itself. Logging in, session cookies, etc. all persist the same way they would in a normal browser.

## Run it locally (dev)

```
npm install
npm start
```

## Build the Windows installer (.exe)

```
npm run dist:win
```

This uses `electron-builder` with the NSIS target. Building a Windows installer from macOS needs one of:

- **Wine installed locally**: `brew install --cask wine-stable`, then run the command above directly on this Mac.
- **A Windows machine or CI runner**: run the same command on Windows, or set up a GitHub Actions workflow on `windows-latest` and download the `.exe` from the build artifacts.

The installer (and a portable build) land in `dist/`.

## Config

- `SFSNDATA_URL` env var overrides the URL it loads (defaults to `https://sfsndata.com.ng/login`) — useful for pointing at a staging/local build.
- Window opens maximized; starting size/behavior is in `src/main.js`.
- App icon: add `assets/icon.ico` and re-add `"icon": "assets/icon.ico"` under `build.win` in `package.json` once you have one.

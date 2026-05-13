# Maleah-s-Playpad-

Maleah’s Playpad is an installable learning-focused PWA for ages 3–6 with original animated activities.

## Included learning experience
- Animated welcome screen with **Maleah’s Playpad** / **Daddy’s Baby Girl**
- Tree addition activity (visual “first this many, then this many more”)
- Ocean counting/addition activity
- Matching game (objects/shapes)
- Coloring interaction board
- Music area with instrument tones + configurable audio hooks
- External media launcher for curated user-provided streaming links

## Copyright-safe model
This app is designed to stay legally safe:
- Use **only** media you own, created, licensed, or are otherwise allowed to use.
- Do **not** bundle copyrighted commercial songs/shows without rights.
- External streaming links remain external (not downloaded or cached by this app).

## Where to add your own media
Create or place your files in:
- `assets/audio/greetings/` (example: dad greeting)
- `assets/audio/songs/` (example: lullabies, learning songs)
- `assets/video/` (optional local video assets for future enhancements)
- `assets/images/coloring/` (optional coloring art assets)

Then edit `media-config.js`:
- `greetingAudio`: path to your greeting audio file
- `songs`: list of titled audio entries with `src`
- `externalLinks`: list of curated streaming URLs (YouTube/YouTube Kids/etc.)

## PWA / offline behavior
- App shell is cached for offline startup.
- Local same-origin assets are cached as they are loaded.
- External links/content are not cached by service worker.

## iPhone install
1. Open the deployed site in Safari.
2. Tap **Share**.
3. Tap **Add to Home Screen**.
4. Launch Maleah’s Playpad from the home screen.

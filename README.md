# Bharatverse Website

A responsive cinematic franchise landing page built with React, Vite, and plain CSS.

## Requirements
- Node.js 20.19+ or 22.12+ (recommended)
- npm
- VS Code (recommended editor)

## Run locally
1. Extract this folder.
2. Open the folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL Vite prints (usually `http://localhost:5173`).

## Production build
Run `npm run build`. The optimized site will be created in `dist/`.
Run `npm run preview` to preview the production build locally.

## Add your own artwork
The current character art areas are designed placeholders, so the site works immediately even before you add images.

1. Put your official Vayu poster at `public/images/vayu-poster.jpg`.
2. Put your official Jal poster at `public/images/jal-poster.jpg`.
3. Open `src/components/CharacterCard.jsx` and find the `.character-art` section. Replace the placeholder block with an `<img>` using `character.image`, for example:

```jsx
<img className="character-poster" src={character.image} alt={`${character.name} cinematic poster`} />
```

4. Add the following CSS to `src/styles.css`:

```css
.character-poster {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
}
```

You can also use your own approved logo by replacing the simple emblem in `src/components/Logo.jsx` and the hero emblem in `src/App.jsx` with an image file stored under `public/images/`.

## Connect your Instagram
In `src/components/Header.jsx` and `src/App.jsx`, replace `https://www.instagram.com/` with the full URL of your Bharatverse Instagram profile.

## Update the characters
Edit `src/data/characters.js`. This file contains the character names, city, descriptions, powers, and image paths.

## Project structure
```
src/
  components/
    CharacterCard.jsx
    Header.jsx
    Logo.jsx
  data/
    characters.js
  App.jsx
  main.jsx
  styles.css
public/
  images/
index.html
package.json
```

No database or backend is required for this first release.

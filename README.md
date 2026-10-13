# JS Lab — 10 JavaScript Projects

A responsive homepage for exploring ten mini-projects built with HTML, CSS, and JavaScript.

## Included projects

1. Age Calculator
2. Blob Maker
3. Counter Application
4. Day of the Week
5. FD Calculator
6. Gradient Generator
7. Image Editor
8. Live Word Counter
9. Love Calculator
10. Stopwatch & Timer

## Run locally

No installation or build step is required. Open `index.html` in your browser, or run a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a GitHub repository.
2. Extract this ZIP and upload **all of its contents** to the repository root. `index.html` must be at the root, not inside another folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site.

## Deploy with Vercel or Netlify

Import the repository as a static site:
- Build command: leave empty
- Output / publish directory: `.`

No backend or build process is required for the homepage.

## Structure

```text
.
├── index.html
├── README.md
├── .gitignore
├── Age calculator/
├── Blob maker/
├── counter application/
├── Day of the week/
├── finance deposit calculator/
├── Gradient generator/
├── image editor/
├── Live word counter/
├── Love Calculator/
└── Stop watch timer/
```

The original HTML, CSS, and JavaScript files for each project are included. The homepage uses relative links so the projects can be opened from the deployed site.

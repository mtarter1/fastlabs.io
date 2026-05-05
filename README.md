# FastLabs static site

This is a lightweight static website for `fastlabs.io`, built to run directly on GitHub Pages.

## Pages

- `index.html` - consulting-forward home page
- `about.html` - Madison / FastLabs background page, grounded in the 2025 resume
- `projects.html` - project index with simple client / automation / lab filters
- `writing.html` - static writing and blog placeholder
- `contact.html` - mailto-based contact form that works without a backend

## Quick edits

- Replace `madison.tarter@gmail.com` in `contact.html` and `script.js` if you want a different inbox.
- Replace the LinkedIn URL anywhere it appears if the profile URL changes.
- Add real project screenshots by replacing the `.project-media` sections in the HTML or their CSS in `styles.css`.
- Keep `CNAME` if GitHub Pages should serve the current custom domain, `www.fastlabs.io`.

## Deploy

Copy these files into the GitHub Pages repository root and enable Pages from the repository settings. No build step is required.

# Luo Jian · Game Design Portfolio

A bilingual portfolio with an About Me introduction, a project card, and a detailed Light and Shadow case study.

- `index.html`: Unified homepage containing both English and Chinese. English is shown by default.
- `light-and-shadow.html`: Unified bilingual project details and image galleries.
- `language.js`: In-page language switching. Click 中文 or EN; no language preference is stored. Chinese links use `?lang=zh`.
- `index-en.html`, `index-zh.html`, `light-and-shadow-en.html`: Redirects for older links, not separate content pages.
- `portfolio.css`, `styles.css`: Responsive styling.
- `assets/image/`: Images extracted from the original portfolio.
- `assets/light-and-shadow/portfolio.pdf`: Original PDF.

Open `index.html` locally or visit https://qqdcr.github.io/personal-website/ . No build step is required. The root URL always defaults to English. Language selection is preserved when navigating between the homepage and project details.

GitHub Pages publishes from the `main` branch root. `.nojekyll` enables static file serving. Push to `main` to update the live site.

Human: Fall Flat is identified as a design reference, not original work.

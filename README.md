# Juan Romo — Personal Portfolio

Personal portfolio and professional landing page built with **Astro** and **Tailwind CSS v4**, deployed to **GitHub Pages**.

## Requirements

- Node.js 22+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (usually `http://localhost:4321`).

## Build

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Deploy to GitHub Pages

This repository is named `juanmaro97.github.io`, so it is a GitHub Pages user site and does not need an Astro `base` path.

1. Push the project to the `main` branch.
2. Open **Settings → Pages** in the GitHub repository.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and verify that `Deploy portfolio to GitHub Pages` completes successfully.
5. Visit `https://juanmaro97.github.io`.

## Personalize before publishing

Search the project for these placeholders and replace them:

- `YOUR_EMAIL@example.com` — your professional email.
- `href="#"` on the LinkedIn link — your LinkedIn profile URL.
- `Add exact title and dates` — your exact job title and employment dates.
- `Add university name and graduation year` — your academic details.
- Add public project repository/demo links only when they are safe to share.
- Add your CV PDF at `public/cv/juan-romo-cv.pdf` and then add a download link in the hero or contact section.

## Content and confidentiality

The project cards are written as anonymized experience summaries and illustrative architecture showcases. Review every statement before publishing. Do not publish internal company information, customer data, confidential architecture, source code, metrics, or material that you are not authorized to disclose.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── public/favicon.svg
├── src/
│   ├── layouts/BaseLayout.astro
│   ├── pages/index.astro
│   └── styles/global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

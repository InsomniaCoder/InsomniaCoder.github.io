# Tanat Lokejaroenlarb — Portfolio

Personal portfolio website for Tanat Lokejaroenlarb, Staff SRE & Platform Engineer at Adevinta.

**Live site:** https://insomniacoder.github.io

## Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS** with custom dark navy/teal theme
- **TypeScript**
- Deployed via **GitHub Actions → GitHub Pages**

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All content lives in a single file: [`data/resume.ts`](data/resume.ts)

Update that file to change experience, skills, blog posts, talks, or contact info. Push to `main` and the site redeploys automatically.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds the static export and deploys to GitHub Pages.

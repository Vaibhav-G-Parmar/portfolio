# Portfolio

Personal portfolio built with Next.js (App Router), Tailwind CSS, and `next-themes`. Sections: hero, about, projects, gallery, contact, resume download.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content updates

| What | Where |
|------|--------|
| Profile, links, bio, skill groups | [`content/site.ts`](content/site.ts) |
| Project cards | [`data/projects.ts`](data/projects.ts) |
| Gallery photos | Add files under [`public/gallery/`](public/gallery/) and entries in [`content/gallery.ts`](content/gallery.ts) |
| Resume file | Replace [`public/resume.pdf`](public/resume.pdf) with your CV (the checked-in file is a minimal placeholder) |

Set `siteProfile.email`, `github`, and `linkedin` to your real URLs.

## Deploy on Vercel

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. Import the repo in [Vercel](https://vercel.com/new).
3. Use the defaults for a Next.js app (install command `npm install`, build `npm run build`, output `.next`).
4. Add production environment variables (see below) if you configure a public site URL.

**Recommended environment variable**

- `NEXT_PUBLIC_SITE_URL` — canonical site URL **without trailing slash**, for example `https://your-domain.com`. This drives `metadataBase`, [`app/sitemap.ts`](app/sitemap.ts), and [`app/robots.ts`](app/robots.ts). On Vercel you can omit it in simple cases because `VERCEL_URL` is provided at runtime, but setting `NEXT_PUBLIC_SITE_URL` to your primary domain keeps previews and redirects consistent.

**Optional future contact form**

If you later add a server-side email integration (for example Resend), you typically add server-only secrets such as:

- `RESEND_API_KEY` — API key, never prefixed with `NEXT_PUBLIC_`

Do not commit secrets; configure them only in Vercel **Project → Settings → Environment Variables**.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — run production build locally
- `npm run lint` — ESLint

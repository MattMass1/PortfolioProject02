# Next.js Resume — Matthew Masson

A single-page resume/portfolio site built with **Next.js (App Router)** and styled
entirely with **Tailwind CSS** utility classes. The whole page lives in
[`src/app/page.js`](src/app/page.js) and reproduces my portfolio: an AI Systems
Integrator focused on HIPAA-conscious healthcare automation.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS (v4)

## Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm start
```

## Features Implemented (MVP)

- [x] Next.js App Router project scaffolded with Tailwind CSS
- [x] All resume content written as JSX in `src/app/page.js`
- [x] Real personal content — no placeholder / Lorem Ipsum text
- [x] Semantic HTML landmarks (`header`, `main`, `section`, `article`, `footer`)
- [x] Logical heading hierarchy (`h1` for name/thesis, `h2` per section, `h3` per item)
- [x] Styled entirely with Tailwind utility classes via `className` — no custom CSS rules
- [x] Sections: Hero, About, Stack, Work, Automations, Builds, Compliance, Contact
- [x] Responsive, readable layout at desktop width
- [x] Dev server runs and the page loads with no console errors

## Sections

1. **Hero** — name, role, summary, and quick stats
2. **About** — background plus a facts list (location, studies, certifications)
3. **Stack** — the toolchain behind the automation work
4. **Work** — production healthcare systems, built and running
5. **Automations** — productized n8n workflows
6. **Builds** — engineering projects beyond the day job
7. **Compliance** — HIPAA-conscious approach and vendor posture
8. **Contact** — email, GitHub, and LinkedIn links

## Project Structure

```
nextjs-resume/
├─ src/
│  └─ app/
│     ├─ page.js        ← entire resume lives here
│     ├─ layout.js      ← root layout + metadata
│     └─ globals.css    ← Tailwind import + font mapping only
├─ public/
├─ package.json
└─ README.md
```

## Known Issues / Limitations

- Screenshots/GIFs for the project showcases are not embedded yet (text-only cards for now).
- Status tags (e.g. "pilot · demo", "operational") reflect honest project state and may
  change as projects move into full production.
- Single static page — no separate routes or components yet (per the assignment scope).

## Author

Matthew Masson — [GitHub](https://github.com/MattMass1) ·
[LinkedIn](https://www.linkedin.com/in/matthew-masson-551983226/)

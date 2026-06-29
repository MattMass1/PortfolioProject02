# Next.js Resume by Matthew Masson

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


## Sections

1. **Hero**  name, role, summary, and quick stats
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

## Author

Matthew Masson — [GitHub](https://github.com/MattMass1) ·
[LinkedIn](https://www.linkedin.com/in/matthew-masson-551983226/)

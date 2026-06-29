export default function Page() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] font-sans text-stone-200 antialiased">
      <header className="sticky top-0 z-50 border-b border-stone-800 bg-[#0B0C0E]/80 backdrop-blur">
        <div className="mx-auto flex h-15 max-w-5xl items-center justify-between px-6 py-3">
          <span className="font-mono font-semibold tracking-wide text-stone-100">
            matthew.masson
          </span>
          <nav
            aria-label="Primary"
            className="hidden gap-6 font-mono text-sm text-stone-400 sm:flex"
          >
            <a href="#about" className="hover:text-stone-100">
              about
            </a>
            <a href="#stack" className="hover:text-stone-100">
              stack
            </a>
            <a href="#work" className="hover:text-stone-100">
              work
            </a>
            <a href="#builds" className="hover:text-stone-100">
              builds
            </a>
            <a href="#contact" className="hover:text-stone-100">
              contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section id="top" className="py-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
            AI Systems Integrator · Healthcare
          </p>
          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-stone-50 sm:text-5xl md:text-6xl">
            Bridging legacy healthcare with intelligent automation.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-stone-400">
            I&apos;m Matthew Masson. I build HIPAA-conscious AI automation for
            clinics running legacy EHR and other clinical infrastructure,
            patient intake, insurance eligibility, and billing workflows that
            hold up in a real clinic.
          </p>
          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-lg bg-emerald-400 px-6 py-3 font-mono text-sm font-medium text-emerald-950 transition hover:brightness-110"
            >
              See the work
            </a>
            <a
              href="mailto:massmatt371@gmail.com"
              className="rounded-lg border border-stone-700 px-6 py-3 font-mono text-sm font-medium text-stone-100 transition hover:border-stone-500"
            >
              Start a conversation
            </a>
          </div>
          <dl className="flex flex-wrap gap-x-10 gap-y-6 border-t border-stone-800 pt-7">
            {[
              ["Focus", "Healthcare ops"],
              ["Stack", "n8n + LLM"],
              ["Standard", "HIPAA-conscious"],
              ["Approach", "EHR-agnostic"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-xs uppercase tracking-widest text-stone-500">
                  {k}
                </dt>
                <dd className="mt-1 text-base text-stone-100">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-t border-stone-800 py-20"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-stone-500">
            About
          </p>
          <h2
            id="about-heading"
            className="mb-10 text-3xl font-bold tracking-tight text-stone-50"
          >
            An operator who writes the code
          </h2>
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4 text-stone-400">
              <p>
                I don&apos;t automate clinics from the outside.{" "}
                <strong className="font-semibold text-stone-100">
                  I&apos;m embedded in the day-to-day operations of the
                  pulmonology practice I build for
                </strong>{" "}
               , close enough to see the no-shows, the eligibility checks, the
                fax pile, and the intake friction as they actually happen. Every
                workflow I ship starts from a problem I&apos;ve watched cost the
                practice real time.
              </p>
              <p>
                I&apos;ve been building with the Anthropic API since 2023. The
                work spans the full path: Postgres data design, n8n
                orchestration, RAG pipelines, and the compliance plumbing that
                has to come first when an LLM gets anywhere near patient data.
              </p>
              <p>
                Before the systems work I ran client creative projects end to
                end, including a five-figure brand campaign for a national
                retailer, from acquisition through delivery. Same instinct,
                different medium: build a repeatable system, then ship.
              </p>
            </div>
            <dl className="text-sm">
              {[
                ["Based", "Safety Harbor, FL"],
                ["Studying", "BAIS · USF"],
                ["Primary client", "Specialty medical practice"],
                ["Building since", "2023"],
                ["Certified", "Applied AI / RAG · DeepLearning.AI"],
                ["Practice", "Biz21 AI"],
                ["Stack", "n8n · Supabase · LLMs"],
                ["Open to", "Healthcare automation work"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-4 border-t border-stone-800 py-2.5 font-mono first:border-t-0"
                >
                  <dt className="text-stone-500">{k}</dt>
                  <dd className="text-right text-stone-300">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="stack"
          aria-labelledby="stack-heading"
          className="border-t border-stone-800 py-20"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-stone-500">
            Stack
          </p>
          <h2
            id="stack-heading"
            className="mb-3 text-3xl font-bold tracking-tight text-stone-50"
          >
            The toolchain behind the automation
          </h2>
          <p className="mb-10 max-w-2xl text-stone-400">
            A pragmatic set of tools chosen for reliability under compliance
            constraints: orchestration, data, deployment, and the AI layer,
            each with a business associate agreement in place where PHI can
            touch it.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "n8n",
                "Workflow orchestration, the backbone for intake, eligibility, and billing automations.",
              ],
              [
                "Supabase / Postgres",
                "Backend with row-level security, auth, and pgvector for embeddings, session state, and audit trails.",
              ],
              [
                "Vercel + Next.js",
                "Edge deployment for front-ends and serverless functions that broker requests to the AI layer.",
              ],
              [
                "Anthropic + OpenAI",
                "LLM reasoning under signed BAAs, triage, summarization, and structured extraction with PHI controls.",
              ],
              [
                "RAG / pgvector",
                "Retrieval over practice documentation with Supabase embeddings, grounded Q&A from real source docs.",
              ],
              [
                "Stedi (270/271)",
                "Real-time insurance eligibility, automated request/response handling for verification at intake.",
              ],
            ].map(([name, desc]) => (
              <li
                key={name}
                className="rounded-xl border border-stone-800 bg-[#121418] p-5"
              >
                <h3 className="mb-2 text-lg font-semibold text-stone-100">
                  {name}
                </h3>
                <p className="text-sm leading-relaxed text-stone-400">{desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="work"
          aria-labelledby="work-heading"
          className="border-t border-stone-800 py-20"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-stone-500">
            Work
          </p>
          <h2
            id="work-heading"
            className="mb-3 text-3xl font-bold tracking-tight text-stone-50"
          >
            Healthcare systems, built and running
          </h2>
          <p className="mb-10 max-w-2xl text-stone-400">
            Automation and infrastructure for a live pulmonology practice,
            built, deployed, and maintained under compliance constraints.
          </p>

          <div className="divide-y divide-stone-800">
            <article className="grid gap-5 py-7 sm:grid-cols-[3rem_1fr]">
              <p className="font-mono text-sm text-emerald-400">01</p>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-stone-100">
                  BACP Patient Intake &amp; Triage Bot
                </h3>
                <p className="mb-4 max-w-3xl text-stone-400">
                  An AI-driven intake assistant for Bay Area Chest Physicians, a
                  pulmonology practice. It collects patient information
                  conversationally, answers questions from practice docs, checks
                  insurance eligibility, and structures everything for the
                  clinical workflow.
                </p>
                <ul className="mb-4 list-disc space-y-1.5 pl-5 text-sm text-stone-400">
                  <li>
                    RAG Q&amp;A over practice documentation (Supabase + pgvector
                    embeddings)
                  </li>
                  <li>
                    Conversational intake that maps free-text answers to
                    structured fields
                  </li>
                  <li>
                    Real-time insurance eligibility via Stedi, plus an
                    emergency-triage layer
                  </li>
                  <li>PHI tokenized before any data reaches the LLM layer</li>
                </ul>
                <p className="mb-4 font-mono text-sm">
                  <a
                    href="https://bacp-chatbot.vercel.app"
                    className="text-blue-400 hover:underline"
                  >
                    live demo →
                  </a>
                </p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs">
                  <li className="rounded-full border border-blue-400/40 px-3 py-1 text-blue-400">
                    pilot · demo
                  </li>
                  {["Next.js", "Supabase / pgvector", "Claude API", "Stedi"].map(
                    (t) => (
                      <li
                        key={t}
                        className="rounded-full border border-stone-700 bg-[#16191e] px-3 py-1 text-stone-400"
                      >
                        {t}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </article>

            <article className="grid gap-5 py-7 sm:grid-cols-[3rem_1fr]">
              <p className="font-mono text-sm text-emerald-400">02</p>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-stone-100">
                  Insurance Verification &amp; Billing Automations
                </h3>
                <p className="mb-4 max-w-3xl text-stone-400">
                  n8n workflows that take the manual load off intake staff,
                  eligibility checks, payer responses, and billing prep handled
                  automatically with humans kept in the loop for edge cases.
                </p>
                <ul className="mb-4 list-disc space-y-1.5 pl-5 text-sm text-stone-400">
                  <li>
                    Automated 270/271 eligibility request and response handling
                    (Stedi)
                  </li>
                  <li>
                    Exception routing so staff only touch the cases that need
                    them
                  </li>
                  <li>
                    Audit logging on every transaction for compliance review
                  </li>
                </ul>
                <ul className="flex flex-wrap gap-2 font-mono text-xs">
                  <li className="rounded-full border border-emerald-400/40 px-3 py-1 text-emerald-400">
                    operational
                  </li>
                  {["n8n", "Webhooks", "Postgres"].map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-stone-700 bg-[#16191e] px-3 py-1 text-stone-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="grid gap-5 py-7 sm:grid-cols-[3rem_1fr]">
              <p className="font-mono text-sm text-emerald-400">03</p>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-stone-100">
                  Practice Web &amp; Email Infrastructure
                </h3>
                <p className="mb-4 max-w-3xl text-stone-400">
                  Migrated the practice&apos;s web presence off a legacy host
                  onto a modern stack, and fixed the deliverability and
                  discoverability problems underneath it, the unglamorous
                  infrastructure that has to actually work.
                </p>
                <ul className="mb-4 list-disc space-y-1.5 pl-5 text-sm text-stone-400">
                  <li>
                    DNS migration from WP Engine to Vercel (Next.js), with SSL
                    provisioning
                  </li>
                  <li>
                    Email authentication hardened: SPF, DKIM, and DMARC on
                    Microsoft 365
                  </li>
                  <li>Google Search Console indexing restored and verified</li>
                </ul>
                <p className="mb-4 font-mono text-sm">
                  <a
                    href="https://bayareachest.com"
                    className="text-blue-400 hover:underline"
                  >
                    bayareachest.com →
                  </a>
                </p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs">
                  <li className="rounded-full border border-emerald-400/40 px-3 py-1 text-emerald-400">
                    live
                  </li>
                  {["Next.js", "Vercel", "DNS / DMARC", "M365"].map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-stone-700 bg-[#16191e] px-3 py-1 text-stone-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="grid gap-5 py-7 sm:grid-cols-[3rem_1fr]">
              <p className="font-mono text-sm text-emerald-400">04</p>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-stone-100">
                  Supabase Backend Architecture
                </h3>
                <p className="mb-4 max-w-3xl text-stone-400">
                  The data layer underneath the automations: a Postgres schema
                  with row-level security, auth, and audit trails designed so
                  PHI access is scoped, logged, and reversible.
                </p>
                <ul className="mb-4 list-disc space-y-1.5 pl-5 text-sm text-stone-400">
                  <li>Row-level security policies scoping access per role</li>
                  <li>
                    Immutable audit tables for every read and write of sensitive
                    data
                  </li>
                  <li>
                    Edge functions brokering AI calls without exposing keys to
                    clients
                  </li>
                </ul>
                <ul className="flex flex-wrap gap-2 font-mono text-xs">
                  {["Supabase", "RLS", "Edge Functions"].map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-stone-700 bg-[#16191e] px-3 py-1 text-stone-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section
          id="automations"
          aria-labelledby="automations-heading"
          className="border-t border-stone-800 py-20"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-stone-500">
            Automations
          </p>
          <h2
            id="automations-heading"
            className="mb-3 text-3xl font-bold tracking-tight text-stone-50"
          >
            Workflows I&apos;ve productized
          </h2>
          <p className="mb-10 max-w-2xl text-stone-400">
            The same orchestration instinct applied outside healthcare,
            reusable n8n systems that turn a manual research task into a
            one-click report.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-stone-800 bg-[#121418] p-5">
              <h3 className="mb-2 text-lg font-semibold text-stone-100">
                Local Business Web Presence Audit
              </h3>
              <p className="text-sm leading-relaxed text-stone-400">
                A white-labelable n8n audit that scores a business across six
                verticals, SEO rank, Google Business Profile, page speed, and a
                CRO landing-page roast, and emails a structured HTML report.
                Built on SerpAPI + PageSpeed with no fragile scrapers.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                <li className="rounded-full border border-emerald-400/40 px-3 py-1 text-emerald-400">
                  live
                </li>
                {["n8n", "SerpAPI"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-stone-700 bg-[#16191e] px-3 py-1 text-stone-400"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-xl border border-stone-800 bg-[#121418] p-5">
              <h3 className="mb-2 text-lg font-semibold text-stone-100">
                Instagram Peer Audit
              </h3>
              <p className="text-sm leading-relaxed text-stone-400">
                Scrapes a profile, extracts a &quot;vibe&quot; profile, matches
                it against peers, and returns a scored audit by email. An
                end-to-end enrichment pipeline, profile in, ranked insight out.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                <li className="rounded-full border border-blue-400/40 px-3 py-1 text-blue-400">
                  prototype
                </li>
                {["n8n", "Apify"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-stone-700 bg-[#16191e] px-3 py-1 text-stone-400"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section
          id="builds"
          aria-labelledby="builds-heading"
          className="border-t border-stone-800 py-20"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-stone-500">
            Builds
          </p>
          <h2
            id="builds-heading"
            className="mb-3 text-3xl font-bold tracking-tight text-stone-50"
          >
            Engineering beyond the day job
          </h2>
          <p className="mb-10 max-w-2xl text-stone-400">
            The same systems instinct, applied to real-time graphics, data
            visualization, client delivery, and agent tooling, builds where I
            own the whole stack.
          </p>

          <div className="divide-y divide-stone-800">
            <article className="grid gap-5 py-7 sm:grid-cols-[3rem_1fr]">
              <p className="font-mono text-sm text-emerald-400">05</p>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-stone-100">
                  Cat Soccer: 3D Manager Autobattler
                </h3>
                <p className="mb-4 max-w-3xl text-stone-400">
                  A browser game where you draft a national squad of cats and
                  watch them play AI-driven 5-a-side matches in 3D. The
                  player&apos;s game is management, formation, a counter-cycle,
                  and team tactics, then the match resolves autonomously.
                  Single-player, client-side.
                </p>
                <ul className="mb-4 list-disc space-y-1.5 pl-5 text-sm text-stone-400">
                  <li>
                    Custom match-simulation engine: one deterministic loop
                    drives team AI, off-ball runs, marking, passing, and
                    shooting
                  </li>
                  <li>
                    Real-time 3D with react-three-fiber + Rapier physics,
                    native ball/body collision, procedural rigless animation
                  </li>
                  <li>
                    Tactics layer (mentality / pressing / tempo / width) that
                    re-tunes the AI per team; World Cup bracket with CPU-vs-CPU
                    resolution
                  </li>
                </ul>
                <p className="mb-4 font-mono text-sm">
                  <a
                    href="https://for-cat-and-country.vercel.app/"
                    className="text-blue-400 hover:underline"
                  >
                    play it live →
                  </a>
                </p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs">
                  <li className="rounded-full border border-stone-700 bg-[#16191e] px-3 py-1 text-stone-400">
                    personal
                  </li>
                  {[
                    "React",
                    "three.js",
                    "react-three-fiber",
                    "Rapier",
                    "Zustand",
                    "Vite",
                  ].map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-stone-700 bg-[#16191e] px-3 py-1 text-stone-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="grid gap-5 py-7 sm:grid-cols-[3rem_1fr]">
              <p className="font-mono text-sm text-emerald-400">06</p>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-stone-100">
                  Wellness Studio: Client Booking Site
                </h3>
                <p className="mb-4 max-w-3xl text-stone-400">
                  A polished single-page site for a Pilates &amp; nutrition
                  studio, an editorial, warm-neutral design delivered for a
                  non-technical client, with the architecture set up so booking
                  and payments drop in cleanly.
                </p>
                <ul className="mb-4 list-disc space-y-1.5 pl-5 text-sm text-stone-400">
                  <li>
                    Next.js 14 + Tailwind + Framer Motion, on a Material Design 3
                    warm-neutral palette
                  </li>
                  <li>
                    Google Calendar as a booking backend; Stripe wired for
                    payments
                  </li>
                  <li>
                    Shipped on Vercel with GitHub CI/CD; built for a
                    non-technical stakeholder
                  </li>
                </ul>
                <ul className="flex flex-wrap gap-2 font-mono text-xs">
                  <li className="rounded-full border border-emerald-400/40 px-3 py-1 text-emerald-400">
                    delivered
                  </li>
                  {["Next.js 14", "Tailwind", "Framer Motion", "Stripe"].map(
                    (t) => (
                      <li
                        key={t}
                        className="rounded-full border border-stone-700 bg-[#16191e] px-3 py-1 text-stone-400"
                      >
                        {t}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section
          id="compliance"
          aria-labelledby="compliance-heading"
          className="border-t border-stone-800 py-20"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-stone-500">
            Compliance
          </p>
          <h2
            id="compliance-heading"
            className="mb-3 text-3xl font-bold tracking-tight text-stone-50"
          >
            HIPAA-conscious by construction
          </h2>
          <p className="mb-10 max-w-2xl text-stone-400">
            Putting an LLM near patient data is mostly a compliance problem, not
            a modeling one. The hard part is the paperwork and the plumbing:
            which vendors will sign a business associate agreement, where PHI is
            allowed to travel, and how every access gets logged. I work that
            problem first, then build on top of it.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Navigating vendor BAAs",
                "Sorting which AI providers (OpenAI, Anthropic) and infra vendors will sign a business associate agreement, and routing PHI only through the ones that do.",
              ],
              [
                "Audit logging & access control",
                "Row-level security scoping access per role, plus immutable audit tables that log every read and write of sensitive data, access is scoped, logged, and reversible.",
              ],
              [
                "De-identification pipelines",
                "Tokenizing the 18 HIPAA identifiers before any text reaches a model, then re-associating results inside the trusted boundary.",
              ],
            ].map(([title, desc]) => (
              <li
                key={title}
                className="rounded-xl border border-stone-800 bg-[#121418] p-5"
              >
                <h3 className="mb-2 text-lg font-semibold text-stone-100">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-400">{desc}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 mb-4 font-mono text-sm uppercase tracking-[0.08em] text-stone-500">
            Vendor BAA posture
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {["OpenAI", "Anthropic", "Supabase", "Vercel"].map((v) => (
              <li
                key={v}
                className="rounded-lg border border-stone-800 bg-[#121418] px-3.5 py-2 font-mono text-sm text-stone-300"
              >
                {v} <span className="text-emerald-400">· BAA available</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-stone-400">
            PHI is de-identified or tokenized before it reaches any model
            provider. Access is scoped, encrypted in transit and at rest, and
            written to an immutable audit log.
          </p>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="border-t border-stone-800 py-24 text-center"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-stone-500">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl"
          >
            Have a legacy system that needs an AI bridge?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:massmatt371@gmail.com"
              className="rounded-lg bg-emerald-400 px-6 py-3 font-mono text-sm font-medium text-emerald-950 transition hover:brightness-110"
            >
              massmatt371@gmail.com
            </a>
            <a
              href="https://github.com/MattMass1"
              className="rounded-lg border border-stone-700 px-6 py-3 font-mono text-sm font-medium text-stone-100 transition hover:border-stone-500"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-masson-551983226/"
              className="rounded-lg border border-stone-700 px-6 py-3 font-mono text-sm font-medium text-stone-100 transition hover:border-stone-500"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 py-12 text-center font-mono text-sm text-stone-500">
        Matthew Masson · Business Analytics &amp; Information Systems, University
        of South Florida · 2026
      </footer>
    </div>
  );
}

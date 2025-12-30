import Link from "next/link";
import { LeadAgent } from "@/components/lead-agent";

const featureHighlights = [
  {
    title: "Conversion-ready landing scrapes",
    description:
      "Launch high-impact landing pages that convert design-hungry founders into booked calls with modular hero, proof, and offer blocks.",
  },
  {
    title: "Pipeline automation",
    description:
      "Sync fresh leads into your CRM, auto-trigger intro emails, and route enquiries by project size without touching a spreadsheet.",
  },
  {
    title: "Creative strategy baked in",
    description:
      "We pair each lead with a creative brief, references, and positioning insights—so your design team can jump in with clarity.",
  },
];

const playbook = [
  {
    step: "Signal scan",
    detail:
      "We monitor launch calendars, funding rounds, and product updates to surface prospects right when they need brand elevation.",
  },
  {
    step: "Brand fit scoring",
    detail:
      "Each lead gets graded across visual sophistication, marketing maturity, and urgencies so you know who to chase first.",
  },
  {
    step: "Story-first outreach",
    detail:
      "Personalised sequences highlight the design gaps we found and position your studio as the obvious partner.",
  },
];

const testimonials = [
  {
    name: "Mira Gomez",
    role: "Founder, Nova Studio",
    quote:
      "The agent distilled messy meetings into exact deliverables and filled our pipeline with $120k of projects in 6 weeks.",
  },
  {
    name: "Arjun Patel",
    role: "Creative Director, Scale Labs",
    quote:
      "Every lead arrives with context, moodboards, and budget clarity. We just show up and pitch. Close rate jumped 38%.",
  },
  {
    name: "Lina Cho",
    role: "Marketing Lead, Ether",
    quote:
      "The onboarding agent feels like our strategist on autopilot—clients rave about the experience before we even start.",
  },
];

const packages = [
  {
    name: "LaunchPad",
    price: "$2.5k",
    description: "Perfect for studios validating a new offer or niche.",
    bullets: [
      "Done-with-you positioning refresh",
      "Lead magnet landing page + analytics",
      "Weekly lead list (5-7 warm prospects)",
    ],
  },
  {
    name: "Momentum",
    price: "$4.8k",
    description: "Best seller for growing teams with recurring production work.",
    bullets: [
      "Multi-touch nurture campaigns",
      "Integrated lead qualification agent",
      "CRM + Notion pipeline automations",
    ],
  },
  {
    name: "Flagship",
    price: "$8.9k",
    description: "For agencies chasing enterprise retainers and ABM motions.",
    bullets: [
      "Account-based targeting & research sprints",
      "Executive-level deck + sales collateral",
      "Quarterly growth experiments & reporting",
    ],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="gradient-blur absolute left-1/2 top-[-30%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="gradient-blur absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="gradient-blur absolute bottom-[-20%] left-[10%] h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 md:px-10 lg:px-16">
        <header className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
              Graphic design growth engine
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Capture design-ready leads with an automated discovery agent that
              speaks your studio&apos;s language.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
              We help design studios and creative teams qualify, nurture, and close
              high-intent prospects. Drop the back-and-forth. Our agent captures
              goals, budget, and creative direction—then hands you meetings primed to
              convert.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#lead-agent"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:shadow-indigo-500/50"
              >
                Launch the lead agent
              </Link>
              <Link
                href="#packages"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/40 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-400 hover:text-white"
              >
                Review playbook
              </Link>
            </div>
            <div className="grid gap-6 text-sm text-slate-400 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold text-white">38%</p>
                <p>Average increase in close rate after 30 days.</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">24 hrs</p>
                <p>Time to send a tailored proposal once a lead flows in.</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">$120k</p>
                <p>Typical new pipeline seen across Momentum clients.</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-6 rounded-[36px] border border-slate-800/60 bg-slate-900/60 backdrop-blur">
              <div className="absolute inset-0 rounded-[36px] border border-indigo-500/10 blur-xl" />
            </div>
            <div className="relative w-full max-w-sm rounded-[36px] border border-slate-800 bg-slate-900/60 p-6 shadow-[0_60px_120px_-50px_rgba(99,102,241,0.7)] backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
                Brief Snapshot
              </p>
              <p className="mt-4 text-lg text-slate-200">
                “Need a launch campaign for our fintech rebrand. Focus on motion,
                social tiles, and an investor deck refresh.”
              </p>
              <div className="mt-6 grid gap-3 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Budget</span>
                  <span className="text-slate-100">$15k - $18k</span>
                </div>
                <div className="flex justify-between">
                  <span>Timeline</span>
                  <span className="text-slate-100">Kickoff in 2 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Personas</span>
                  <span className="text-slate-100">Founder, Marketing Lead</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="lead-agent"
          className="grid gap-10 rounded-[40px] border border-slate-800 bg-slate-900/50 p-8 shadow-[0_30px_80px_-40px_rgba(59,130,246,0.45)] backdrop-blur-lg lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
              Lead capture core
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              An intake agent that preps your design team before the first call.
            </h2>
            <p className="text-base text-slate-300">
              Prospects walk through a conversational flow that qualifies budget,
              timeline, tone, and deliverable requirements. You get context-rich
              briefs directly in Slack, Notion, or HubSpot.
            </p>
            <ul className="grid gap-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400" />
                <span>
                  Automated scoring reveals hot leads with project complexity and
                  urgency tags.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400" />
                <span>Every submission triggers a tailored follow-up email template.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400" />
                <span>
                  Native support for Notion, Airtable, and Zapier to sync pipelines.
                </span>
              </li>
            </ul>
          </div>

          <LeadAgent />
        </section>

        <section className="grid gap-10 rounded-[40px] border border-slate-800 bg-slate-900/40 p-10 backdrop-blur">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
              Why studios choose us
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Engineered for design-forward teams that crave qualified conversations.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featureHighlights.map((feature) => (
              <div
                key={feature.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-indigo-500/10"
              >
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-[40px] border border-slate-800 bg-slate-900/40 p-10 backdrop-blur md:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
              Prospecting playbook
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Warm intros from day one.
            </h2>
            <p className="text-base text-slate-300">
              Our growth researchers scout high-potential startups and brands that
              match your aesthetic. We arrive with context and a firm understanding of
              what success looks like.
            </p>
            <div className="grid gap-5">
              {playbook.map((item) => (
                <div key={item.step} className="rounded-3xl border border-indigo-500/10 bg-indigo-500/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">
                    {item.step}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[32px] border border-slate-800 bg-slate-950/70 p-8 shadow-[0_20px_60px_-40px_rgba(129,140,248,0.4)]">
            <h3 className="text-xl font-semibold text-white">Integrations that stick</h3>
            <p className="text-sm text-slate-300">
              Connect your favourite tools in minutes—no engineering queues required.
            </p>
            <div className="grid gap-4 text-sm text-slate-200">
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                <span>HubSpot &amp; Pipedrive</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  CRM
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                <span>Notion &amp; Airtable</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Ops
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                <span>Slack &amp; Linear</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Collaboration
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-emerald-400/10 bg-emerald-400/5 p-5">
              <p className="text-sm font-semibold text-emerald-200">
                Instant momentum
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Every package ships with onboarded automations, pre-built dashboards,
                and templates to rally stakeholders.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[40px] border border-slate-800 bg-slate-900/30 p-10 backdrop-blur">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
              Social proof
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Creative leaders using our agent to scale pipeline.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-indigo-500/10"
              >
                <p className="text-sm text-slate-200">{testimonial.quote}</p>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="packages"
          className="grid gap-10 rounded-[40px] border border-slate-800 bg-slate-900/40 p-10 backdrop-blur"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
              Packages
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Choose the engagement that fits your growth stage.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-inner shadow-indigo-500/10"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <span className="text-sm font-semibold text-indigo-200">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{plan.description}</p>
                <ul className="grid gap-3 text-sm text-slate-200">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#lead-agent"
                  className="inline-flex items-center justify-center rounded-full border border-indigo-500/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200 transition hover:border-indigo-300 hover:text-white"
                >
                  Book a call
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[40px] border border-slate-800 bg-slate-950/70 p-10 text-center shadow-[0_30px_100px_-40px_rgba(59,130,246,0.6)] backdrop-blur">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to fill your pipeline with qualified, design-ready leads?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Plug the agent into your existing stack, or let us rebuild your inbound
            funnel from the ground up. Either way, you&apos;ll walk away with clarity
            on the next million in revenue.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-slate-400">
            <Link
              href="mailto:hello@graphicagent.studio"
              className="text-base font-semibold text-indigo-200 transition hover:text-white"
            >
              hello@graphicagent.studio
            </Link>
            <p>Response within one business day. Rush projects available.</p>
          </div>
        </section>
      </main>
    </div>
  );
}


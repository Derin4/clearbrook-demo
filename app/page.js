import Link from "next/link";
import Counter from "./_components/Counter";
import Photo from "./_components/Photo";
import QuickBook from "./_components/QuickBook";
import Reveal from "./_components/Reveal";
import SectionHead from "./_components/SectionHead";
import ServiceFilter from "./_components/ServiceFilter";
import TeamCarousel from "./_components/TeamCarousel";
import TodayHours from "./_components/TodayHours";
import {
  faqs,
  features,
  providers,
  quotes,
  services,
  stats,
  steps,
} from "./_libs/data";

export default function HomePage() {
  const lead = providers[0];
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden bg-tint'>
        <div
          className='pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-coral-soft blur-3xl'
          aria-hidden='true'
        />
        <div className='relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-[1.1fr_1fr] lg:py-20'>
          <div>
            <p className='fade-up mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-accent-deep'>
              <span className='h-2 w-2 animate-pulse rounded-full bg-coral' />
              Accepting new patients
            </p>
            <h1
              className='fade-up mb-5 text-5xl leading-[1.05] sm:text-6xl'
              style={{ "--d": "100ms" }}
            >
              Care that takes the time to listen.
            </h1>
            <p
              className='fade-up mb-8 max-w-prose text-lg text-muted'
              style={{ "--d": "200ms" }}
            >
              Family medicine, pediatrics, vaccinations and mental health
              support, all under one roof, with online booking.
            </p>
            <div
              className='fade-up mb-10 flex flex-wrap items-center gap-5'
              style={{ "--d": "300ms" }}
            >
              <Link
                href='/new-patients'
                className='border-b-2 border-ink/30 pb-1 text-sm font-semibold transition-colors hover:border-ink'
              >
                New patient information
              </Link>
              <Link
                href='/providers'
                className='border-b-2 border-ink/30 pb-1 text-sm font-semibold transition-colors hover:border-ink'
              >
                Meet our team
              </Link>
            </div>
            <div className='fade-up max-w-md' style={{ "--d": "400ms" }}>
              <QuickBook />
            </div>
          </div>
          <div className='fade-up relative' style={{ "--d": "250ms" }}>
            <div className='relative overflow-hidden rounded-[2.5rem]'>
              <Photo
                id='hero'
                label='A doctor speaking with a family'
                swatch={["#cfe8e4", "#0f6b73"]}
                priority
                sizes='(min-width:1024px) 45vw, 100vw'
                className='drift aspect-[4/5] w-full'
              />
            </div>
            <div className='bob absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-[0_24px_40px_-24px_rgba(11,63,69,.6)] sm:-left-6'>
              <p className='text-xs font-semibold uppercase tracking-widest text-muted'>
                Next opening
              </p>
              <p className='font-display text-xl'>Tomorrow, 8:30 AM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div
        className='ticker-wrap overflow-hidden border-y border-line bg-deep py-3.5 text-paper'
        aria-hidden='true'
      >
        <div className='ticker flex w-max gap-10 whitespace-nowrap text-sm'>
          {[0, 1].map((k) =>
            services.map((s) => (
              <span key={k + s.id} className='flex items-center gap-10'>
                {s.name}
                <span className='text-coral'>✚</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* Stats */}
      <section className='mx-auto max-w-6xl px-6 py-16'>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className='font-display text-5xl text-accent'>
                <Counter n={s.n} suffix={s.suffix} />
              </p>
              <p className='mt-1 text-sm text-muted'>{s.label}</p>
            </Reveal>
          ))}
        </div>
        <p className='mt-6 text-xs text-muted/70'>
          Figures are illustrative, for the demo.
        </p>
      </section>

      {/* Services */}
      <section className='mx-auto max-w-6xl px-6 pb-20'>
        <SectionHead eyebrow='Services' title='Everyday care, done well' />
        <ServiceFilter />
        <Link
          href='/services'
          className='mt-8 inline-block text-sm font-semibold underline underline-offset-4'
        >
          All services
        </Link>
      </section>

      {/* Feature tiles */}
      <section className='bg-sand'>
        <div className='mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3'>
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 90}
              className='lift overflow-hidden rounded-3xl bg-white'
            >
              <Photo
                id={`feature-${i}`}
                label={f.title}
                swatch={f.tone}
                sizes='(min-width:768px) 30vw, 100vw'
                className='aspect-[16/10] w-full'
              />
              <div className='p-6'>
                <h3 className='mb-2 text-2xl'>{f.title}</h3>
                <p className='mb-4 text-sm text-muted'>{f.text}</p>
                <Link
                  href={f.href}
                  className='text-sm font-semibold text-accent-deep underline underline-offset-4'
                >
                  {f.cta} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <SectionHead eyebrow='How it works' title='Three steps to being seen' />
        <ol className='grid gap-6 md:grid-cols-3'>
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100} as='li' className='relative pl-16'>
              <span className='absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full bg-accent font-display text-xl text-white'>
                {i + 1}
              </span>
              <h3 className='mb-1 text-xl'>{t}</h3>
              <p className='text-sm text-muted'>{d}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Team */}
      <section className='bg-deep text-paper'>
        <div className='mx-auto max-w-6xl overflow-hidden px-6 py-16'>
          <div className='flex flex-wrap items-end justify-between gap-4'>
            <h2 className='text-3xl sm:text-4xl'>Meet the team</h2>
          </div>
          <TeamCarousel />
        </div>
      </section>

      {/* Quotes */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <SectionHead
          eyebrow='Kind words'
          title='What patients tell us'
          text='Illustrative quotes written for the demo.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {quotes.map((q, i) => (
            <Reveal
              key={q.by}
              delay={i * 90}
              className='lift flex flex-col rounded-3xl border border-line bg-white p-7'
            >
              <span
                className='mb-3 font-display text-5xl leading-none text-coral'
                aria-hidden='true'
              >
                “
              </span>
              <p className='mb-6 flex-1'>{q.q}</p>
              <p className='text-sm'>
                <span className='font-semibold'>{q.by}</span>
                <span className='text-muted'> · {q.tag}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lead message */}
      <section className='mx-auto max-w-6xl px-6 pb-20'>
        <Reveal className='grid items-center gap-8 rounded-[2.5rem] bg-tint p-6 sm:p-10 md:grid-cols-[14rem_1fr]'>
          <Photo
            id='lead'
            label={lead.name}
            swatch={lead.tone}
            sizes='224px'
            className='aspect-square w-full max-w-[14rem] rounded-full'
          />
          <div>
            <p className='mb-2 text-sm font-semibold text-accent-deep'>
              A note from our lead physician
            </p>
            <p className='mb-4 font-display text-2xl leading-snug sm:text-3xl'>
              We built Clearbrook around one idea: a visit should feel like a
              conversation.
            </p>
            <p className='text-sm text-muted'>
              {lead.name}, {lead.role}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Banner CTA */}
      <section className='relative overflow-hidden bg-accent text-white'>
        <div
          className='absolute inset-0 opacity-30'
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #e8795a 0, transparent 40%), radial-gradient(circle at 90% 80%, #0b3f45 0, transparent 45%)",
          }}
          aria-hidden='true'
        />
        <div className='relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center'>
          <div>
            <h2 className='mb-2 text-3xl sm:text-4xl'>Ready when you are.</h2>
            <p className='text-white/80'>
              Join our family practice or book your next visit online.
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='/book'
              className='rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-deep transition-all hover:-translate-y-0.5'
            >
              Book an appointment
            </Link>
            <Link
              href='/new-patients'
              className='rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white hover:text-deep'
            >
              Register as a new patient
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ + hours */}
      <section className='mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr]'>
        <div>
          <h2 className='mb-6 text-3xl'>Common questions</h2>
          <div className='divide-y divide-line border-y border-line'>
            {faqs.map((f) => (
              <details key={f.q} className='group py-4'>
                <summary className='flex cursor-pointer list-none items-center justify-between gap-4 font-medium'>
                  {f.q}
                  <span
                    className='grid h-7 w-7 shrink-0 place-items-center rounded-full bg-tint text-accent transition-transform group-open:rotate-45'
                    aria-hidden='true'
                  >
                    +
                  </span>
                </summary>
                <p className='mt-2 text-sm text-muted'>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div className='self-start rounded-3xl bg-sand p-6 text-sm'>
          <h2 className='mb-3 px-3 font-display text-2xl'>Hours</h2>
          <TodayHours />
          <p className='mt-4 px-3 text-xs text-muted'>
            In an emergency, call 911.
          </p>
        </div>
      </section>
    </>
  );
}

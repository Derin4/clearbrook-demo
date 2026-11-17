import Link from "next/link";
import Reveal from "../_components/Reveal";
import SectionHead from "../_components/SectionHead";
import { services } from "../_libs/data";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className='mx-auto max-w-5xl px-6 py-16'>
      <SectionHead
        eyebrow='Services'
        title='What we offer'
        text='Most services are covered by your provincial health plan.'
      />
      <div className='space-y-4'>
        {services.map((s, i) => (
          <Reveal
            key={s.id}
            delay={(i % 3) * 60}
            className='lift grid items-center gap-4 rounded-3xl border border-line bg-white p-6 sm:grid-cols-[1fr_1.4fr_auto]'
          >
            <div>
              <h2 className='text-2xl'>{s.name}</h2>
              <p className='text-xs text-accent-deep'>
                {s.mins} min · {s.ages}
              </p>
            </div>
            <p className='text-sm text-muted'>{s.text}</p>
            <Link
              href={`/book?service=${s.id}`}
              className='rounded-full bg-tint px-5 py-2.5 text-center text-sm font-semibold text-accent-deep transition-colors hover:bg-accent hover:text-white'
            >
              Book this
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

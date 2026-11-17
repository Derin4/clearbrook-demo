import Link from "next/link";
import Photo from "../_components/Photo";
import Reveal from "../_components/Reveal";
import SectionHead from "../_components/SectionHead";
import { providers } from "../_libs/data";

export const metadata = { title: "Our team" };

export default function ProvidersPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <SectionHead
        eyebrow='Our team'
        title='The people who will look after you'
        text='Providers are fictional and shown for the demo.'
      />
      <div className='grid gap-8 sm:grid-cols-2'>
        {providers.map((p, i) => (
          <Reveal
            key={p.id}
            delay={(i % 2) * 80}
            className='lift grid gap-5 rounded-3xl border border-line bg-white p-5 sm:grid-cols-[9rem_1fr]'
          >
            <Photo
              id={`prov-${p.id}`}
              label={p.name}
              swatch={p.tone}
              sizes='144px'
              className='aspect-square w-full rounded-2xl'
            />
            <div>
              <h2 className='text-2xl'>{p.name}</h2>
              <p className='mb-2 text-sm font-semibold text-accent-deep'>
                {p.role}
              </p>
              <p className='mb-3 text-sm text-muted'>{p.bio}</p>
              <Link
                href={`/book?provider=${p.id}`}
                className='text-sm font-semibold text-accent-deep underline underline-offset-4'
              >
                Book with{" "}
                {p.name.split(" ")[0] === "Dr."
                  ? p.name.split(" ")[1]
                  : p.name.split(" ")[0]}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

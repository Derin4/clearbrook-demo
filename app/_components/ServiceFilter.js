"use client";

import Link from "next/link";
import { useState } from "react";
import { groups, services } from "../_libs/data";

const TONES = ["bg-tint", "bg-coral-soft", "bg-sand"];

export default function ServiceFilter() {
  const [g, setG] = useState("all");
  const group = groups.find((x) => x.id === g);
  const list = group.ids
    ? services.filter((s) => group.ids.includes(s.id))
    : services;

  return (
    <div>
      <div
        className='mb-8 flex flex-wrap gap-2'
        role='group'
        aria-label='Filter care'
      >
        {groups.map((x) => (
          <button
            key={x.id}
            type='button'
            aria-pressed={g === x.id}
            onClick={() => setG(x.id)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${g === x.id ? "border-deep bg-deep text-white" : "border-line bg-white hover:border-accent"}`}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div key={g} className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {list.map((s, i) => (
          <Link
            key={s.id}
            href={`/book?service=${s.id}`}
            className='step-in lift group flex flex-col rounded-3xl border border-line bg-white p-6'
            style={{ "--d": `${i * 50}ms` }}
          >
            <span
              className={`mb-5 grid h-11 w-11 place-items-center rounded-2xl ${TONES[i % 3]} font-display text-lg text-accent-deep`}
              aria-hidden='true'
            >
              {s.name[0]}
            </span>
            <h3 className='mb-2 text-xl'>{s.name}</h3>
            <p className='mb-4 flex-1 text-sm text-muted'>{s.text}</p>
            <div className='flex items-center justify-between text-xs'>
              <span className='text-accent-deep'>
                {s.mins} min · {s.ages}
              </span>
              <span className='font-semibold text-ink transition-transform group-hover:translate-x-1'>
                Book →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const CHIPS = [
  ["checkup", "Check-up"],
  ["minor", "Sick or injured"],
  ["peds", "My child"],
  ["vax", "Vaccines"],
  ["mental", "Mental health"],
  ["", "Not sure"],
];

export default function QuickBook() {
  const [visit, setVisit] = useState("In person");
  const [svc, setSvc] = useState("checkup");

  const qs = new URLSearchParams();
  if (svc) qs.set("service", svc);
  qs.set("visit", visit);

  return (
    <div className='rounded-3xl border border-line bg-white p-5 shadow-[0_30px_60px_-34px_rgba(11,63,69,.5)] sm:p-6'>
      <p className='mb-3 font-display text-xl'>Book in under two minutes</p>
      <div
        className='mb-4 grid grid-cols-2 rounded-full bg-tint p-1 text-sm font-semibold'
        role='group'
        aria-label='Visit type'
      >
        {["In person", "Virtual"].map((v) => (
          <button
            key={v}
            type='button'
            aria-pressed={visit === v}
            onClick={() => setVisit(v)}
            className={`rounded-full py-2.5 transition-all ${visit === v ? "bg-accent text-white shadow" : "text-accent-deep hover:text-ink"}`}
          >
            {v}
          </button>
        ))}
      </div>
      <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-muted'>
        What do you need?
      </p>
      <div
        className='mb-5 flex flex-wrap gap-2'
        role='group'
        aria-label='Service'
      >
        {CHIPS.map(([id, label]) => (
          <button
            key={label}
            type='button'
            aria-pressed={svc === id}
            onClick={() => setSvc(id)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${svc === id ? "pop border-accent bg-accent text-white" : "border-line bg-paper hover:border-accent"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <Link
        href={`/book?${qs.toString()}`}
        className='block rounded-full bg-coral py-3.5 text-center text-sm font-semibold text-deep transition-all hover:-translate-y-0.5 hover:brightness-105'
      >
        Continue →
      </Link>
      <p className='mt-3 text-center text-xs text-muted'>
        Most visits are covered by your provincial health plan.
      </p>
    </div>
  );
}

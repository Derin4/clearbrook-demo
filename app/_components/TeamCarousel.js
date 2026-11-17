"use client";

import Link from "next/link";
import { useRef } from "react";
import { providers } from "../_libs/data";
import Photo from "./Photo";

export default function TeamCarousel() {
  const rail = useRef(null);
  const go = (dir) => {
    const el = rail.current;
    if (el)
      el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <div>
      <div className='mb-6 flex justify-end gap-2'>
        {[-1, 1].map((d) => (
          <button
            key={d}
            type='button'
            onClick={() => go(d)}
            aria-label={d < 0 ? "Previous" : "Next"}
            className='grid h-11 w-11 place-items-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-deep'
          >
            {d < 0 ? "←" : "→"}
          </button>
        ))}
      </div>
      <div
        ref={rail}
        className='no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2'
      >
        {providers.map((p) => (
          <div
            key={p.id}
            className='w-[70%] shrink-0 snap-start sm:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)]'
          >
            <Photo
              id={`prov-${p.id}`}
              label={p.name}
              swatch={p.tone}
              sizes='(min-width:1024px) 22vw, 70vw'
              className='mb-4 aspect-[4/5] w-full rounded-3xl'
            />
            <p className='font-display text-lg'>{p.name}</p>
            <p className='mb-2 text-sm text-paper/65'>{p.role}</p>
            <Link
              href={`/book?provider=${p.id}`}
              className='text-sm font-semibold text-coral underline-offset-4 hover:underline'
            >
              Book →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "../_libs/data";
import { site } from "../_libs/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shut, setShut] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const phone = site.contact[2];

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur transition-shadow ${scrolled ? "shadow-[0_6px_20px_-12px_rgba(0,0,0,.25)]" : ""}`}
    >
      <div
        className={`hidden bg-deep text-xs text-paper/80 transition-[height,opacity] duration-300 lg:block ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"}`}
      >
        <div className='mx-auto flex h-9 max-w-6xl items-center justify-between px-6'>
          <span>{site.contact[1]}</span>
          <span>
            Call us <span className='font-semibold text-paper'>{phone}</span> ·
            Emergency? Call 911
          </span>
        </div>
      </div>
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ${scrolled ? "py-3" : "py-4"}`}
      >
        <Link
          href='/'
          onClick={() => setOpen(false)}
          className='flex items-center gap-2.5 font-display text-xl tracking-tight text-ink'
        >
          <span
            className='grid h-9 w-9 place-items-center rounded-xl bg-accent'
            aria-hidden='true'
          >
            <svg viewBox='0 0 24 24' className='h-5 w-5 fill-paper'>
              <path d='M9 3h6v6h6v6h-6v6H9v-6H3V9h6z' />
            </svg>
          </span>
          <span className='leading-none'>
            Clearbrook
            <span className='block font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-deep'>
              Family Clinic
            </span>
          </span>
        </Link>
        <nav
          className='hidden items-center gap-1 text-sm font-medium text-ink/75 lg:flex'
          aria-label='Main'
        >
          <div
            className='group relative'
            data-shut={shut}
            onMouseLeave={() => setShut(false)}
          >
            <Link
              href='/services'
              onClick={() => setShut(true)}
              className={`flex items-center gap-1 rounded-full px-4 py-2 transition-colors hover:bg-tint hover:text-ink ${pathname.startsWith("/services") ? "bg-tint text-ink" : ""}`}
            >
              Services
              <svg
                viewBox='0 0 12 12'
                className='h-3 w-3 fill-none stroke-current stroke-2 transition-transform group-hover:rotate-180'
                aria-hidden='true'
              >
                <path d='M2 4.5 6 8l4-3.5' />
              </svg>
            </Link>
            <div className='mega absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3'>
              <div className='grid grid-cols-2 gap-1 rounded-3xl border border-line bg-white p-3 shadow-[0_30px_60px_-30px_rgba(11,63,69,.45)]'>
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={`/book?service=${s.id}`}
                    onClick={() => setShut(true)}
                    className='rounded-2xl p-3 transition-colors hover:bg-tint'
                  >
                    <span className='block text-sm font-semibold text-ink'>
                      {s.name}
                    </span>
                    <span className='text-xs text-muted'>
                      {s.mins} min · {s.ages}
                    </span>
                  </Link>
                ))}
                <Link
                  href='/services'
                  onClick={() => setShut(true)}
                  className='col-span-2 mt-1 rounded-2xl bg-sand p-3 text-center text-sm font-semibold text-accent-deep transition-colors hover:bg-coral-soft'
                >
                  See all services →
                </Link>
              </div>
            </div>
          </div>
          {site.nav
            .filter((l) => l.href !== "/services")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 transition-colors hover:bg-tint hover:text-ink ${pathname.startsWith(l.href) ? "bg-tint text-ink" : ""}`}
              >
                {l.label}
              </Link>
            ))}
        </nav>
        <div className='flex items-center gap-3'>
          <Link
            href={site.cta.href}
            className='hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep sm:inline-block'
          >
            {site.cta.label}
          </Link>
          <button
            type='button'
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className='flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden'
          >
            <span
              className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-paper transition-[height] duration-500 lg:hidden ${open ? "h-[100dvh]" : "h-0"}`}
        inert={!open}
      >
        <nav
          className='flex h-full flex-col overflow-y-auto px-6 pb-28 pt-6'
          aria-label='Mobile'
        >
          {[{ href: "/", label: "Home" }, ...site.nav, site.cta].map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className='border-b border-line py-4 font-display text-2xl text-ink'
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

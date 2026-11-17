"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  providers,
  services,
  SLOT_DAYS,
  SLOT_TIMES,
  TAKEN,
} from "../_libs/data";
import DemoForm from "./DemoForm";

const STEPS = ["Service", "Provider", "Time", "Your details"];

export default function BookingFlow() {
  const params = useSearchParams();
  const pre = services.find((s) => s.id === params.get("service"))?.id || null;
  const visit = params.get("visit") === "Virtual" ? "Virtual" : "In person";
  const preProv =
    providers.find((p) => p.id === params.get("provider"))?.id || null;
  const [step, setStep] = useState(pre ? 1 : 0);
  const [service, setService] = useState(pre);
  const [provider, setProvider] = useState(preProv);
  const [slot, setSlot] = useState(null);

  const svc = services.find((s) => s.id === service);
  const prov = providers.find((p) => p.id === provider);
  const eligible = providers.filter(
    (p) => !service || p.services.includes(service),
  );

  return (
    <div className='grid gap-10 lg:grid-cols-[1.6fr_1fr]'>
      <div className='min-w-0'>
        <ol className='mb-8 flex gap-2' aria-label='Booking steps'>
          {STEPS.map((s, i) => (
            <li
              key={s}
              className={`flex-1 border-t-4 pt-2 text-xs transition-colors duration-500 ${i <= step ? "border-accent text-ink" : "border-line text-muted/60"}`}
            >
              {i + 1}. {s}
            </li>
          ))}
        </ol>

        {step === 0 ? (
          <div className='step-in grid gap-3 sm:grid-cols-2'>
            {services.map((s) => (
              <button
                key={s.id}
                type='button'
                onClick={() => {
                  setService(s.id);
                  setProvider(null);
                  setStep(1);
                }}
                className={`rounded-2xl border p-4 text-left transition-colors hover:border-accent ${service === s.id ? "border-accent bg-tint" : "border-line bg-white"}`}
              >
                <span className='block font-display text-lg'>{s.name}</span>
                <span className='text-xs text-muted'>
                  {s.mins} min · {s.ages}
                </span>
              </button>
            ))}
          </div>
        ) : null}

        {step === 1 ? (
          <div className='step-in grid gap-3 sm:grid-cols-2'>
            <button
              type='button'
              onClick={() => {
                setProvider("any");
                setStep(2);
              }}
              className='rounded-2xl border border-line bg-white p-4 text-left transition-colors hover:border-accent'
            >
              <span className='block font-display text-lg'>
                First available
              </span>
              <span className='text-xs text-muted'>
                Soonest appointment with any provider
              </span>
            </button>
            {eligible.map((p) => (
              <button
                key={p.id}
                type='button'
                onClick={() => {
                  setProvider(p.id);
                  setStep(2);
                }}
                className={`rounded-2xl border p-4 text-left transition-colors hover:border-accent ${provider === p.id ? "border-accent bg-tint" : "border-line bg-white"}`}
              >
                <span className='block font-display text-lg'>{p.name}</span>
                <span className='text-xs text-muted'>{p.role}</span>
              </button>
            ))}
          </div>
        ) : null}

        {step === 2 ? (
          <div className='step-in overflow-x-auto'>
            <div className='grid min-w-[460px] grid-cols-5 gap-2'>
              {SLOT_DAYS.map((d) => (
                <div key={d}>
                  <p className='mb-2 text-center text-xs font-semibold uppercase tracking-widest text-muted'>
                    {d}
                  </p>
                  <div className='space-y-2'>
                    {SLOT_TIMES.map((t) => {
                      const key = `${d}-${t}`;
                      const taken = TAKEN.includes(key);
                      return (
                        <button
                          key={key}
                          type='button'
                          disabled={taken}
                          onClick={() => {
                            setSlot(key);
                            setStep(3);
                          }}
                          className={`w-full rounded-lg border px-1 py-2 text-xs transition-colors ${slot === key ? "border-accent bg-accent text-white" : taken ? "border-line text-muted/40 line-through" : "border-line bg-white hover:border-accent"}`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <p className='mt-3 text-xs text-muted'>
              Illustrative availability for next week.
            </p>
          </div>
        ) : null}

        {step === 3 ? (
          <div className='step-in'>
            <DemoForm
              initial={{ visit }}
              prefix='CB'
              submitLabel='Confirm appointment (demo)'
              successTitle='Appointment requested'
              successText='We will send a confirmation by text or email. Please bring your provincial health card.'
              fields={[
                { name: "name", label: "Full name", required: true },
                {
                  name: "dob",
                  label: "Date of birth",
                  type: "date",
                  required: true,
                },
                { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "email", label: "Email", type: "email" },
                {
                  name: "visit",
                  label: "Type of visit",
                  type: "select",
                  options: ["In person", "Virtual"],
                  wide: true,
                },
                { name: "reason", label: "Reason for visit", type: "textarea" },
              ]}
            />
          </div>
        ) : null}

        {step > 0 ? (
          <button
            type='button'
            onClick={() => setStep(step - 1)}
            className='mt-6 text-sm text-muted underline underline-offset-4 hover:text-ink'
          >
            ← Back
          </button>
        ) : null}
      </div>

      <aside className='self-start rounded-3xl bg-tint p-6 text-sm lg:sticky lg:top-28'>
        <h2 className='mb-4 font-display text-xl'>Your appointment</h2>
        <dl className='space-y-3'>
          <div>
            <dt className='text-xs uppercase tracking-widest text-muted'>
              Service
            </dt>
            <dd>{svc ? svc.name : "Not chosen yet"}</dd>
          </div>
          <div>
            <dt className='text-xs uppercase tracking-widest text-muted'>
              Provider
            </dt>
            <dd>
              {provider === "any"
                ? "First available"
                : prov
                  ? prov.name
                  : "Not chosen yet"}
            </dd>
          </div>
          <div>
            <dt className='text-xs uppercase tracking-widest text-muted'>
              Time
            </dt>
            <dd>{slot ? slot.replace("-", " at ") : "Not chosen yet"}</dd>
          </div>
        </dl>
        <p className='mt-5 border-t border-line pt-4 text-xs text-muted'>
          For urgent symptoms, call the clinic. In an emergency, call 911.
        </p>
      </aside>
    </div>
  );
}

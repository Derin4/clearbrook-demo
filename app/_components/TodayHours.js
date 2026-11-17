"use client";

import { useEffect, useState } from "react";
import { hours } from "../_libs/data";
import { todayIndex } from "../_libs/helpers";

// Row index in `hours` for each weekday (0 = Sunday).
const ROW = [2, 0, 0, 0, 0, 0, 1];

export default function TodayHours() {
  const [today, setToday] = useState(-1);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setToday(ROW[todayIndex()]));
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div>
      {hours.map(([d, t], i) => (
        <p
          key={d}
          className={`flex justify-between rounded-xl px-3 py-2.5 ${today === i ? "bg-white font-semibold shadow-sm" : ""}`}
        >
          <span>
            {d}
            {today === i ? (
              <span className='ml-2 rounded-full bg-coral-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-deep'>
                Today
              </span>
            ) : null}
          </span>
          <span className='text-muted'>{t}</span>
        </p>
      ))}
    </div>
  );
}

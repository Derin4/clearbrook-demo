"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className='step-in rounded-2xl bg-paper/10 p-4 text-sm text-paper'>
        Thank you. This is a demo, so nothing was sent.
      </p>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label htmlFor='nl' className='mb-2 block text-sm text-paper'>
        Seasonal health tips, in your inbox
      </label>
      <div className='flex gap-2'>
        <input
          id='nl'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='you@example.com'
          className='min-w-0 flex-1 rounded-full border border-paper/20 bg-paper/10 px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-coral'
        />
        <button
          type='submit'
          className='rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-deep transition-transform hover:-translate-y-0.5'
        >
          Join
        </button>
      </div>
      <p className='mt-2 text-xs text-paper/45'>
        Demo form. We never share your address.
      </p>
    </form>
  );
}

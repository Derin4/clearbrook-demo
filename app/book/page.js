import { Suspense } from "react";
import BookingFlow from "../_components/BookingFlow";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Book an appointment" };

export default function BookPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <SectionHead
        eyebrow='Book online'
        title='Book an appointment'
        text='Four quick steps. This is a demo, so nothing is actually booked.'
      />
      <Suspense fallback={<p className='text-muted'>Loading…</p>}>
        <BookingFlow />
      </Suspense>
    </div>
  );
}

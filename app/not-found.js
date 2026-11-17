import Link from "next/link";

export default function NotFound() {
  return (
    <div className='mx-auto max-w-xl px-6 py-28 text-center'>
      <p className='mb-3 font-body text-sm font-semibold text-coral'>404</p>
      <h1 className='mb-4 text-5xl'>We could not find that page.</h1>
      <p className='mb-8 font-body text-muted'>
        It may have moved. Let us get you back on track.
      </p>
      <Link
        href='/'
        className='inline-block rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-accent-deep'
      >
        Back to home
      </Link>
    </div>
  );
}

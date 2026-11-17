export default function SectionHead({
  eyebrow,
  title,
  text,
  className = "",
  center = false,
}) {
  return (
    <div
      className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p className='mb-3 inline-flex items-center gap-2 font-body text-sm font-semibold text-accent-deep'>
          <span
            className='h-1.5 w-6 rounded-full bg-coral'
            aria-hidden='true'
          />
          {eyebrow}
        </p>
      ) : null}
      <h2 className='text-3xl leading-tight text-ink sm:text-4xl'>{title}</h2>
      {text ? <p className='mt-3 text-muted'>{text}</p> : null}
    </div>
  );
}

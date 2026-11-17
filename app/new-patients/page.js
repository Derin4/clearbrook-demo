import DemoForm from "../_components/DemoForm";
import SectionHead from "../_components/SectionHead";
import { bring } from "../_libs/data";

export const metadata = { title: "New patients" };

export default function NewPatientsPage() {
  return (
    <div className='mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.2fr]'>
      <div>
        <SectionHead
          eyebrow='New patients'
          title='Welcome to Clearbrook'
          text='We are happy to meet you. Here is what to expect and what to bring.'
        />
        <h2 className='mb-3 text-xl'>Please bring</h2>
        <ul className='mb-8 space-y-2 text-sm'>
          {bring.map((b) => (
            <li key={b} className='flex gap-3'>
              <span
                className='grid h-6 w-6 shrink-0 place-items-center rounded-full bg-tint text-xs text-accent'
                aria-hidden='true'
              >
                ✓
              </span>
              {b}
            </li>
          ))}
        </ul>
        <p className='rounded-2xl bg-tint p-5 text-sm text-muted'>
          Your first visit is a longer appointment so your provider can learn
          your history and plan your care.
        </p>
      </div>
      <div>
        <h2 className='mb-5 text-2xl'>New patient registration</h2>
        <DemoForm
          prefix='NP'
          submitLabel='Register (demo)'
          successTitle='Registration received'
          successText='We will contact you within two business days to book your first visit.'
          fields={[
            { name: "name", label: "Full name", required: true },
            {
              name: "dob",
              label: "Date of birth",
              type: "date",
              required: true,
            },
            { name: "phone", label: "Phone", type: "tel", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "family",
              label: "Registering",
              type: "select",
              options: ["Just me", "Me and my family"],
              wide: true,
            },
            {
              name: "notes",
              label: "Anything we should know?",
              type: "textarea",
            },
          ]}
        />
      </div>
    </div>
  );
}

import DemoForm from "../_components/DemoForm";
import SectionHead from "../_components/SectionHead";
import TodayHours from "../_components/TodayHours";

export const metadata = { title: "Contact & hours" };

export default function ContactPage() {
  return (
    <div className='mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr]'>
      <div>
        <SectionHead
          eyebrow='Contact'
          title='Get in touch'
          text='For anything urgent, please call the clinic. Do not send urgent medical information through this form.'
        />
        <DemoForm
          prefix='CC'
          submitLabel='Send message (demo)'
          successTitle='Message received'
          successText='Our front desk will reply within one business day.'
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "topic",
              label: "Topic",
              type: "select",
              options: [
                "Appointments",
                "Prescription renewals",
                "Forms and records",
                "Something else",
              ],
              wide: true,
            },
            { name: "msg", label: "Message", type: "textarea", required: true },
          ]}
        />
      </div>
      <aside className='self-start rounded-3xl bg-sand p-7 text-sm'>
        <h2 className='mb-3 px-3 font-display text-2xl'>Visit us</h2>
        <p className='px-3'>46 Brookside Avenue</p>
        <p className='mb-4 px-3 text-muted'>(555) 010-4400</p>
        <TodayHours />
      </aside>
    </div>
  );
}

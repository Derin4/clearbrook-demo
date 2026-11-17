// Fictitious data for the Clearbrook Family Clinic demo.

export const services = [
  {
    id: "checkup",
    name: "Check-ups & physicals",
    mins: 30,
    ages: "All ages",
    text: "Annual and routine exams, health screening and prevention.",
  },
  {
    id: "minor",
    name: "Minor illness & injury",
    mins: 20,
    ages: "All ages",
    text: "Same-week appointments for infections, sprains, rashes and other everyday problems.",
  },
  {
    id: "peds",
    name: "Pediatric care",
    mins: 30,
    ages: "Newborn–17",
    text: "Well-baby visits, growth checks, immunizations and developmental support.",
  },
  {
    id: "womens",
    name: "Women's health",
    mins: 30,
    ages: "Teens and adults",
    text: "Contraception, cervical screening, menopause support and more.",
  },
  {
    id: "vax",
    name: "Vaccinations & travel health",
    mins: 15,
    ages: "All ages",
    text: "Routine immunizations, flu shots and travel consultations.",
  },
  {
    id: "chronic",
    name: "Chronic disease care",
    mins: 30,
    ages: "Adults",
    text: "Ongoing care for diabetes, blood pressure, asthma and other long-term conditions.",
  },
  {
    id: "mental",
    name: "Mental health support",
    mins: 45,
    ages: "Teens and adults",
    text: "A calm first conversation, short-term support and referrals when needed.",
  },
];

export const providers = [
  {
    id: "amara",
    name: "Dr. Amara Lindqvist",
    role: "Family physician",
    tone: ["#cfe8e4", "#0f6b73"],
    bio: "Special interest in women's health and chronic disease. Practising in Clearbrook for 11 years.",
    services: ["checkup", "womens", "chronic", "mental", "minor"],
  },
  {
    id: "daniel",
    name: "Dr. Daniel Cho",
    role: "Family physician",
    tone: ["#e3f3f0", "#0d4a50"],
    bio: "Care for families from newborns to grandparents, with a focus on prevention.",
    services: ["checkup", "peds", "minor", "vax", "chronic"],
  },
  {
    id: "priya",
    name: "Priya Nair, NP",
    role: "Nurse practitioner",
    tone: ["#f6dccf", "#e8795a"],
    bio: "Fast, thorough visits for everyday health concerns and ongoing care plans.",
    services: ["checkup", "minor", "womens", "peds", "chronic"],
  },
  {
    id: "marcus",
    name: "Marcus Bell, RN",
    role: "Registered nurse",
    tone: ["#d6e4e1", "#14292d"],
    bio: "Runs vaccinations, travel health and blood-pressure checks.",
    services: ["vax"],
  },
];

export const SLOT_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
export const SLOT_TIMES = [
  "8:30 AM",
  "10:00 AM",
  "11:30 AM",
  "1:30 PM",
  "3:00 PM",
  "4:30 PM",
];
export const TAKEN = [
  "Mon-10:00 AM",
  "Mon-3:00 PM",
  "Tue-8:30 AM",
  "Tue-1:30 PM",
  "Wed-11:30 AM",
  "Thu-10:00 AM",
  "Thu-4:30 PM",
  "Fri-1:30 PM",
];

export const hours = [
  ["Monday – Friday", "8:00 AM – 6:00 PM"],
  ["Saturday", "9:00 AM – 1:00 PM"],
  ["Sunday", "Closed"],
];

export const bring = [
  "Your provincial health card",
  "A list of your current medications",
  "Any recent test results or referral letters",
  "Questions you would like to ask",
];

export const faqs = [
  {
    q: "Are you accepting new patients?",
    a: "Yes, we are welcoming new families. Complete the new patient form and we will contact you within two business days.",
  },
  {
    q: "Is there a cost to see a provider?",
    a: "Visits are covered by your provincial health plan. Some services, such as forms and travel vaccines, may carry a fee.",
  },
  {
    q: "Can I get a same-day appointment?",
    a: "We hold a number of same-day slots each morning for urgent but non-emergency problems. Call at 8am.",
  },
  {
    q: "Do you offer virtual visits?",
    a: "Yes, for suitable follow-ups. Choose the virtual option when you book.",
  },
];

// ---- Added for the redesign (all fictitious) ----

export const stats = [
  { n: 4200, suffix: "+", label: "Families in our care" },
  { n: 11, suffix: " yrs", label: "Serving Clearbrook" },
  { n: 12, suffix: "", label: "Same-day slots, every morning" },
  { n: 98, suffix: "%", label: "Say they felt heard" },
];

export const quotes = [
  {
    q: "Nobody rushed me. For the first time in years I left an appointment with a plan I understood.",
    by: "Marisol",
    tag: "Check-up",
  },
  {
    q: "Booking at 7am for a feverish toddler and being seen that morning made all the difference.",
    by: "Tunde",
    tag: "Pediatrics",
  },
  {
    q: "The virtual follow-up saved me a half day off work. Same care, no commute.",
    by: "Hannah",
    tag: "Virtual visit",
  },
];

export const features = [
  {
    title: "Same-day care",
    text: "A set of morning slots is held for urgent but non-emergency problems.",
    href: "/book?service=minor",
    cta: "Book same-day",
    tone: ["#fbe3d9", "#e8795a"],
  },
  {
    title: "Virtual visits",
    text: "Suitable follow-ups can be done by video, from wherever you are.",
    href: "/book",
    cta: "Book a virtual visit",
    tone: ["#cfe8e4", "#0f6b73"],
  },
  {
    title: "New to Clearbrook?",
    text: "Register once and we will book a longer first visit to learn your history.",
    href: "/new-patients",
    cta: "Register",
    tone: ["#f3ece0", "#0d4a50"],
  },
];

// Filter groups for the services section on the home page.
export const groups = [
  { id: "all", label: "All care" },
  { id: "kids", label: "Children", ids: ["peds", "vax", "minor", "checkup"] },
  {
    id: "adults",
    label: "Adults",
    ids: ["checkup", "womens", "chronic", "mental", "minor", "vax"],
  },
  { id: "mind", label: "Mind & mood", ids: ["mental", "chronic"] },
];

export const steps = [
  [
    "Tell us what you need",
    "Pick a service. We will match you with the right provider.",
  ],
  [
    "Choose a time",
    "See open times for next week and pick one that suits you.",
  ],
  [
    "Show up (or log in)",
    "In person or virtual, with a reminder the day before.",
  ],
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

// 2 real client testimonials (from Zain's Upwork profile), the rest are
// still placeholders — realistic in tone/detail, to be swapped for genuine
// quotes once collected.
export const testimonials: Testimonial[] = [
  {
    name: "Usama A.",
    role: "Owner, e-commerce hardware retail client",
    quote:
      "Worked with Zain on an e-commerce website for our hardware retail business. He delivered a fully functional platform with product pages and mobile compatibility — on time and within budget. The quality of work was excellent and he was responsive throughout the project. Would highly recommend Zain for any web development work.",
    initials: "UA",
  },
  {
    name: "Ayesha Malik",
    role: "Course group project teammate, COMSATS",
    quote:
      "We split our database project down the middle and Zain's half was just done — migrations, seed data, the works — while the rest of us were still arguing about schema design.",
    initials: "AM",
  },
  {
    name: "Farhan Qureshi",
    role: "Restaurant owner, QR-ordering platform client",
    quote:
      "I didn't know exactly what I wanted, just that our old paper menus were slowing tables down. Zain turned that into an actual working QR ordering flow and explained every decision in plain language.",
    initials: "FQ",
  },
  {
    name: "Sana Iqbal",
    role: "Junior developer, mentored via Strategeon Softwares",
    quote:
      "Zain was the first person to actually explain why my code was slow instead of just fixing it for me. I still use the debugging approach he showed me.",
    initials: "SI",
  },
  {
    name: "Hunain R.",
    role: "Co-Owner, CRM / financial dashboard client",
    quote:
      "Zain built us a React-based financial dashboard, and it turned out excellent. Clean UI, real-time data, and everything worked smoothly. He was responsive, professional, and delivered on time. Highly recommend for React/full-stack projects.",
    initials: "HR",
  },
  {
    name: "Bilal Ahmed",
    role: "Hackathon teammate",
    quote:
      "We had 30 hours and a half-finished idea. Zain wired up the backend while the rest of us were still sketching the UI, and somehow it all worked at demo time.",
    initials: "BA",
  },
];

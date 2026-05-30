// Central constants — single source of truth for all clinic data
export const CLINIC = {
  name: "Dr. Vijay's Dental Clinic",
  tagline: "Expert Care with Precision",
  phone: ["+91 99947 87165"] as const,
  whatsapp: "919994787165",
  address: {
    line1: "33A,",
    line2: "N.G.O. Colony, Ganesh Nagar,",
    city: "Adambakkam, Chennai,",
    state: "Tamil Nadu 600088.",
    full: "33A, N.G.O. Colony, Ganesh Nagar, Adambakkam, Chennai, Tamil Nadu 600088.",
  },
  timings: {
    weekdays: "Mon - Sat: 5 PM - 9 PM",
    sunday: "By appointment only",
  },
  baseUrl: "https://drvijaysdentalclinic.com",
  social: {
    facebook: "https://www.facebook.com/vijaydentalclinic",
    instagram: "https://www.instagram.com/vijaydentalclinic",
  },
} as const;

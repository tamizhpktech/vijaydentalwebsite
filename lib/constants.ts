// Central constants — single source of truth for all clinic data
export const CLINIC = {
  name: "Dr. Vijay's Dental Clinic",
  tagline: "Expert Care with Precision",
  phone: ["+91 99947 87165", "+91 98401 36328"] as const,
  whatsapp: "919994787165",
  address: {
    line1: "33a, 1st Main Rd, Ramapuram,",
    line2: "N.G.O. Colony, Ganesh Nagar,",
    city: "Adambakkam, Chennai,",
    state: "Tamil Nadu 600088",
    full: "33a, 1st Main Rd, Ramapuram, N.G.O. Colony, Ganesh Nagar, Adambakkam, Chennai, Tamil Nadu 600088",
  },
  timings: {
    weekdays: "Mon – Sat: 10 AM – 1 PM & 5 PM – 9 PM",
    sunday: "By appointment only",
  },
  baseUrl: "https://www.vijaydentalclinic.in",
  social: {
    facebook: "https://www.facebook.com/vijaydentalclinic",
    instagram: "https://www.instagram.com/vijaydentalclinic",
  },
} as const;

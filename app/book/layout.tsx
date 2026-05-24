import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Dr. Vijay's Dental Clinic Adambakkam Chennai",
  description:
    "Book your dental appointment at Dr. Vijay's Dental Clinic in Adambakkam, Chennai. Online booking available for teeth whitening, implants, root canal, cosmetic dentistry & more. Quick WhatsApp confirmation.",
  alternates: {
    canonical: "https://www.vijaydentalclinic.in/book",
  },
  openGraph: {
    title: "Book Appointment | Dr. Vijay's Dental Clinic",
    description:
      "Schedule your visit at Dr. Vijay's Dental Clinic in Adambakkam, Chennai. Choose your service and preferred time — quick WhatsApp confirmation.",
    url: "https://www.vijaydentalclinic.in/book",
    type: "website",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

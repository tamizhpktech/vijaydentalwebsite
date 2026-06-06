import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const BASE_URL = "https://drvijaysdentalclinic.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dr. Vijay's Dental Clinic | Best Dentist in Adambakkam, Chennai",
    template: "%s | Dr. Vijay's Dental Clinic",
  },
  description:
    "Looking for a trusted dentist in Adambakkam, Chennai? Dr. Vijay's Dental Clinic offers expert teeth whitening, dental implants, root canal treatments, cosmetic dentistry & preventive care near Ramapuram & Ganesh Nagar. Book now!",
  keywords: [
    "dentist in Adambakkam",
    "dental clinic Chennai",
    "teeth whitening Chennai",
    "dental implants Adambakkam",
    "root canal treatment Chennai",
    "cosmetic dentistry Adambakkam",
    "Dr Vijay dental clinic",
    "best dentist near Ramapuram",
    "dental clinic Ganesh Nagar",
    "dental clinic NGO Colony",
    "pain free dentist Chennai",
    "family dentist Adambakkam",
    "orthodontics Chennai",
    "preventive dental care Chennai",
    "MDS endodontist Chennai",
  ],
  authors: [{ name: "Dr. Vijay Amirtharaj", url: BASE_URL }],
  creator: "Dr. Vijay's Dental Clinic",
  publisher: "Dr. Vijay's Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Dr. Vijay's Dental Clinic",
    title: "Dr. Vijay's Dental Clinic | Best Dentist in Adambakkam, Chennai",
    description:
      "Expert dental care in Adambakkam, Chennai. Teeth whitening, implants, root canal, cosmetic dentistry & more. 25+ years experience. Book your appointment today!",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Vijay's Dental Clinic — Expert Care with Precision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Vijay's Dental Clinic | Best Dentist in Adambakkam, Chennai",
    description:
      "Expert dental care in Adambakkam, Chennai. Teeth whitening, implants, root canal, cosmetic dentistry & more. Book your appointment today!",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/asset/logo8.png", type: "image/png" },
    ],
    apple: "/asset/logo8.png",
  },
  verification: {
    // Add Google Search Console verification token here when available
    // google: "your-google-verification-token",
  },
  category: "health",
};

// ── JSON-LD Structured Data ─────────────────────────────────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  "@id": `${BASE_URL}/#dentist`,
  name: "Dr. Vijay's Dental Clinic",
  alternateName: "Vijay Dental Clinic",
  url: BASE_URL,
  logo: `${BASE_URL}/asset/logo8.png`,
  image: `${BASE_URL}/asset/logo8.png`,
  description:
    "Dr. Vijay's Dental Clinic offers comprehensive dental services including teeth whitening, dental implants, root canal treatments, cosmetic dentistry, and preventive care in Adambakkam, Chennai.",
  telephone: ["+91-99947-87165"],
  email: "dvdcadambakkam@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "33A, N.G.O. Colony, Ganesh Nagar",
    addressLocality: "Adambakkam",
    addressRegion: "Chennai, Tamil Nadu",
    postalCode: "600088",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9736,
    longitude: 80.1974,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "00:00",
      closes: "00:00",
      description: "By appointment only",
    },
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Card",
  areaServed: [
    "Adambakkam",
    "Ramapuram",
    "Ganesh Nagar",
    "NGO Colony",
    "Kotturpuram",
    "Velachery",
    "Medavakkam",
    "Pallikaranai",
    "Chennai",
  ],
  medicalSpecialty: "Dentistry",
  hasMap: "https://maps.google.com/?q=Dr.+Vijay+Dental+Clinic+Adambakkam+Chennai",
  sameAs: [
    "https://www.facebook.com/vijaydentalclinic",
    "https://www.instagram.com/vijaydentalclinic",
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Vijay Amirtharaj",
    jobTitle: "Chief Dental Surgeon & Endodontist",
    description: "MDS - 25+ years of experience in comprehensive dental care",
    worksFor: {
      "@id": `${BASE_URL}/#dentist`,
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "38",
    reviewCount: "38",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Dr. Vijay's Dental Clinic",
  description: "Best dental clinic in Adambakkam, Chennai",
  publisher: {
    "@id": `${BASE_URL}/#dentist`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Adambakkam, Chennai, Tamil Nadu" />
        <meta name="geo.position" content="12.9736;80.1974" />
        <meta name="ICBM" content="12.9736, 80.1974" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Footer />
        <WhatsAppButton />
        
      </body>
    </html>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type IconName =
  | "sparkle"
  | "tooth"
  | "shield"
  | "star"
  | "thumb"
  | "phone"
  | "pin"
  | "clock"
  | "calendar"
  | "users"
  | "heart"
  | "implant"
  | "braces"
  | "bonding"
  | "headset";

export function ToothLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg className={compact ? "h-9 w-9" : "h-14 w-14"} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path
          d="M31.9 13.2c-4.3-5.6-13.7-5.1-18 .8-5.3 7.2.2 15 2.2 21.9 1.7 5.8 1.4 14.6 6 14.6 4.1 0 3.4-9.8 9.9-9.8 6.4 0 5.7 9.8 9.8 9.8 4.7 0 4.3-8.8 6-14.6 2-6.9 7.5-14.7 2.2-21.9-4.3-5.9-13.7-6.4-18.1-.8Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="leading-none text-black">
        <p className={compact ? "text-[10px]" : "text-[16px]"}>Dr. Vijay&apos;s</p>
        <p className={compact ? "text-sm font-extrabold" : "text-2xl font-extrabold tracking-tight"}>DENTAL CLINIC</p>
        <p className={compact ? "mt-1 text-[9px]" : "mt-2 text-[13px]"}>Expert Care with Precision</p>
      </div>
    </div>
  );
}

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = "fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round";

  if (name === "sparkle") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className={common} d="M28 5l5.9 16.1L50 27l-16.1 5.9L28 49l-5.9-16.1L6 27l16.1-5.9L28 5Z" />
        <path className={common} d="M49 7l2.3 6.2L58 16l-6.7 2.8L49 25l-2.3-6.2L40 16l6.7-2.8L49 7Z" />
      </svg>
    );
  }

  if (name === "tooth") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className={common} d="M31.9 13.2c-4.3-5.6-13.7-5.1-18 .8-5.3 7.2.2 15 2.2 21.9 1.7 5.8 1.4 14.6 6 14.6 4.1 0 3.4-9.8 9.9-9.8 6.4 0 5.7 9.8 9.8 9.8 4.7 0 4.3-8.8 6-14.6 2-6.9 7.5-14.7 2.2-21.9-4.3-5.9-13.7-6.4-18.1-.8Z" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className={common} d="M32 7l20 7v16c0 13-8.1 22.4-20 27-11.9-4.6-20-14-20-27V14l20-7Z" />
        <path className={common} d="M32 17v29M21 31h22" />
      </svg>
    );
  }

  if (name === "star") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className="fill-current" d="M32 6l7.6 15.4 17 2.5-12.3 12 2.9 17L32 44.8 16.8 53l2.9-17-12.3-12 17-2.5L32 6Z" />
      </svg>
    );
  }

  if (name === "thumb") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className={common} d="M23 55H12V29h11v26ZM23 31l10-21c1.2-2.5 5-1.7 5 1.1V25h12.2c4.1 0 7.2 3.7 6.4 7.8l-3 15.6A8 8 0 0 1 45.7 55H23V31Z" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className={common} d="M22 12l7 12-5 4c4 8 8 12 16 16l4-5 12 7c-1 6-5 10-11 10-18 0-37-19-37-37 0-6 4-10 14-7Z" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className={common} d="M32 58s18-17 18-33a18 18 0 0 0-36 0c0 16 18 33 18 33Z" />
        <circle className={common} cx="32" cy="25" r="6" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <circle className={common} cx="32" cy="32" r="23" />
        <path className={common} d="M32 18v16l10 6" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <rect className={common} x="13" y="16" width="38" height="36" rx="4" />
        <path className={common} d="M21 10v12M43 10v12M13 28h38M23 37h4M31 37h4M39 37h4M23 45h4M31 45h4M39 45h4" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <circle className={common} cx="24" cy="24" r="8" />
        <circle className={common} cx="43" cy="25" r="6" />
        <path className={common} d="M10 51c2-10 8-15 14-15s12 5 14 15M36 39c6 1 11 5 13 12" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className="fill-current" d="M32 53S11 40 11 24c0-8 5.5-13 12.2-13 4 0 7.3 2 8.8 5 1.5-3 4.8-5 8.8-5C47.5 11 53 16 53 24c0 16-21 29-21 29Z" />
      </svg>
    );
  }

  if (name === "implant") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className={common} d="M25 8h14v18H25zM22 26h20M26 35h12M24 43h16M27 51h10" />
        <path className={common} d="M29 26v29M35 26v29" />
      </svg>
    );
  }

  if (name === "braces") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className={common} d="M10 31c9-6 35-6 44 0M10 43c9 6 35 6 44 0" />
        <path className={common} d="M17 27v8M27 26v9M37 26v9M47 27v8M17 39v8M27 38v9M37 38v9M47 39v8" />
      </svg>
    );
  }

  if (name === "bonding") {
    return (
      <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
        <path className={common} d="M18 46L46 18M18 18l28 28" />
        <circle className={common} cx="18" cy="18" r="5" />
        <circle className={common} cx="46" cy="46" r="5" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path className={common} d="M18 37v-6a14 14 0 0 1 28 0v6M18 37h-4a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h4V37ZM46 37h4a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-4V37ZM42 51c-3 4-7 6-13 6" />
    </svg>
  );
}

function Eyebrow({ children, color = "text-black" }: { children: ReactNode; color?: string }) {
  return (
    <div className="flex items-start gap-5">
      <Icon name="sparkle" className={`mt-1 h-11 w-11 shrink-0 ${color}`} />
      <p className="text-[26px] leading-snug text-black max-sm:text-lg">{children}</p>
    </div>
  );
}

function ActionButton({
  href = "/book",
  children = "Book Appointment",
  className = "",
}: {
  href?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center rounded-[13px] bg-[#101113] px-8 py-4 text-lg font-medium text-white shadow-sm transition hover:bg-black ${className}`}>
      {children}
    </Link>
  );
}

const serviceCards = [
  {
    title: "Teeth Whitening",
    icon: "sparkle" as IconName,
    color: "text-[#111]",
    image: "/asset/service1.png",
    desc: "Brighten your smile and boost your confidence with advanced whitening solutions.",
  },
  {
    title: "Bonding",
    icon: "tooth" as IconName,
    color: "text-[#111]",
    image: "/asset/service2.webp",
    desc: "Repair chips, cracks, and gaps with natural-looking, tooth-colored bonding treatments.",
  },
  {
    title: "Cosmetic Procedures",
    icon: "tooth" as IconName,
    color: "text-[#8c73de]",
    image: "/asset/service7.jpeg",
    desc: "Enhance your smile with veneers, contouring, and other cosmetic dental solutions.",
  },
  {
    title: "Dental Implants",
    icon: "tooth" as IconName,
    color: "text-[#111]",
    image: "/asset/service3.jpeg",
    desc: "Restore missing teeth with durable, natural-looking dental implants that last.",
  },
  {
    title: "Root Canal Treatments",
    icon: "star" as IconName,
    color: "text-[#c2952f]",
    image: "/asset/service6.jpeg",
    desc: "Relieve pain and save your natural tooth with advanced root canal treatments.",
  },
  {
    title: "Preventive Care",
    icon: "shield" as IconName,
    color: "text-[#111]",
    image: "/asset/service5.jpeg",
    desc: "Keep your smile healthy with regular check-ups and professional cleanings.",
  },
];

const crop = [
  { x: 32, y: 116, w: 329, h: 207 },
  { x: 413, y: 116, w: 320, h: 207 },
  { x: 785, y: 116, w: 320, h: 207 },
  { x: 1157, y: 116, w: 307, h: 207 },
  { x: 32, y: 393, w: 329, h: 211 },
  { x: 413, y: 393, w: 320, h: 211 },
  { x: 785, y: 393, w: 320, h: 211 },
  { x: 1157, y: 393, w: 307, h: 211 },
  { x: 32, y: 676, w: 329, h: 204 },
  { x: 413, y: 676, w: 320, h: 204 },
  { x: 785, y: 676, w: 320, h: 204 },
  { x: 1157, y: 676, w: 307, h: 204 },
];

function SmileCrop({ index, label }: { index: number; label: string }) {
  const c = crop[index];
  const positionX = (c.x / (1536 - c.w)) * 100;
  const positionY = (c.y / (1024 - c.h)) * 100;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[8px] bg-white">
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/asset/Max_a_extract_all_the_12_p.png')",
          backgroundSize: `${(1536 / c.w) * 100}% ${(1024 / c.h) * 100}%`,
          backgroundPosition: `${positionX}% ${positionY}%`,
        }}
      />
      <div className="ba-label absolute inset-x-0 bottom-0 py-2 text-center text-[20px] font-semibold text-white max-sm:text-sm">{label}</div>
    </div>
  );
}

const galleryCards = [
  { title: "TEETH WHITENING", sub: "A Brighter, Brighter Smile", icon: "tooth" as IconName, before: 0, after: 1 },
  { title: "COSMETIC BONDING", sub: "Seamless Repair for Chipped Teeth", icon: "bonding" as IconName, before: 2, after: 3 },
  { title: "ORTHODONTICS", sub: "Achieving Perfect Alignment", icon: "braces" as IconName, before: 4, after: 5 },
  { title: "DENTAL IMPLANTS", sub: "Restore Function, Restore Confidence", icon: "implant" as IconName, before: 6, after: 7 },
  { title: "PORCELAIN VENEERS", sub: "Flawless, Natural-Looking Smiles", icon: "tooth" as IconName, before: 8, after: 9 },
  { title: "GUM CONTOURING", sub: "Balanced Gums, Beautiful Smiles", icon: "braces" as IconName, before: 10, after: 11 },
];

export function HomePage() {
  return (
    <section className="relative h-[calc(100vh-126px)] overflow-hidden bg-[#fff4f6] max-lg:h-auto max-lg:min-h-[calc(100vh-86px)]">
      <div className="absolute inset-0 rounded-b-[28px] bg-[radial-gradient(circle_at_62%_35%,rgba(255,193,208,.72),transparent_35%),linear-gradient(90deg,#fff_0%,#fff5f7_44%,#ffd7e1_100%)]" />
      <div className="site-container relative h-full pt-28 max-lg:h-auto max-lg:pb-10 max-lg:pt-12">
        <div className="max-w-[700px]">
          <Eyebrow>I Invite you to care about<br />the aesthetics of your face</Eyebrow>
          <h1 className="mt-8 text-[76px] font-extrabold leading-[1.08] tracking-tight text-[#151617] max-xl:text-[64px] max-md:text-[48px]">
            Have a shining smile with modern methods!
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Teeth Whitening", "Cosmetic Dentistry", "Dental Implants", "Root Canal", "Preventive Care"].map((item) => (
              <span key={item} className="rounded-2xl bg-white/78 px-5 py-3 text-base font-medium text-[#161719] shadow-sm backdrop-blur">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-[560px] text-[21px] leading-[1.42] text-black">
            I am committed to providing exceptional oral care to my patients. With advanced techniques and personalized attention, I ensure your dental health and <strong>well-being.</strong>
          </p>
          <ActionButton className="mt-7 rounded-[28px] px-10 py-5 text-xl" />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-[-70px] top-0 w-[70%] max-lg:relative max-lg:right-auto max-lg:mt-8 max-lg:h-[520px] max-lg:w-full">
          <div className="absolute inset-0 overflow-hidden rounded-[34px] border border-white/70 max-lg:relative max-lg:h-full">
            <Image
              src="/asset/ChatGPT Image May 13, 2026, 10_13_34 PM.png"
              alt="Smiling family"
              fill
              priority
              className="hero-family object-cover object-[61%_center]"
              sizes="(max-width: 1024px) 100vw, 72vw"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 z-20 w-[76%] -translate-x-1/2 rounded-2xl border border-white/80 bg-[linear-gradient(90deg,#ffd1dd,#fff4f7,#ffd3df)] px-16 py-7 shadow-[0_12px_42px_rgba(0,0,0,.16)] max-xl:w-[90%] max-md:static max-md:mt-8 max-md:translate-x-0 max-md:px-5">
          <div className="grid grid-cols-4 divide-x divide-black/30 max-md:grid-cols-2 max-md:divide-x-0 max-md:gap-5">
            {[
              ["shield", "15+", "Years of", "Experience"],
              ["star", "38", "5-Star", "Rates"],
              ["thumb", "99%", "Patient", "Satisfaction"],
              ["tooth", "1%", "Pain", "Promise"],
            ].map(([icon, value, line1, line2]) => (
              <div key={value} className="flex items-center justify-center gap-8 px-8 max-xl:gap-4 max-xl:px-4">
                <Icon name={icon as IconName} className="h-14 w-14 text-black" />
                <div>
                  <p className="text-2xl font-extrabold text-black">{value}</p>
                  <p className="text-base leading-tight text-black">{line1}<br />{line2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <section className="min-h-[calc(100vh-126px)] bg-page-blush py-7">
      <div className="site-container">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#ead9de] px-7 py-2 text-base font-extrabold uppercase tracking-wide text-black">Our Services</span>
          <h1 className="mt-4 text-[49px] font-extrabold leading-[1.15] tracking-tight text-black max-md:text-4xl">
            Comprehensive Dental Care<br />for a Healthier Smile
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-snug text-black">
            At Dr. Vijay&apos;s Dental Clinic, we offer a wide range of advanced dental treatments tailored to your needs in a comfortable and caring environment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-16 gap-y-4 text-base text-black">
            {["Advanced Technology", "Experienced Professionals", "Pain-free Treatments", "Patient-Centric Care"].map((item) => (
              <span key={item} className="flex items-center gap-3">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-[#c49a38] text-[10px] font-bold text-white">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {serviceCards.map((service) => (
            <article key={service.title} className="rounded-[12px] bg-white/88 p-5 shadow-card ring-1 ring-black/5">
              <div className="mb-4 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#ffe9ee]">
                  <Icon name={service.icon} className={`h-8 w-8 ${service.color}`} />
                </div>
                <h2 className="text-xl font-extrabold text-black">{service.title}</h2>
              </div>
              <div className="relative h-[108px] overflow-hidden rounded-[8px] bg-[#f2f2f2]">
                <Image src={service.image} alt={service.title} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <p className="mt-5 min-h-[54px] text-base leading-snug text-black">{service.desc}</p>
              <Link href="/book" className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#222] px-6 py-3 text-base font-semibold text-white shadow-sm">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SmileGalleryPage() {
  return (
    <section className="min-h-[calc(100vh-126px)] bg-gallery-blush py-14">
      <div className="site-container">
        <Eyebrow>See how we&apos;ve changed lives</Eyebrow>
        <h1 className="mt-5 text-[72px] font-extrabold leading-[1.08] tracking-tight text-black max-xl:text-[58px] max-md:text-4xl">
          Real Transformations, Beautiful Smiles
        </h1>
        <p className="mt-3 text-2xl leading-snug text-black max-md:text-lg">
          Explore the remarkable results our precision care and advanced techniques deliver. Witness a gallery of genuine smile transformations.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {galleryCards.map((item) => (
            <article key={item.title} className="rounded-[14px] bg-white p-4 shadow-card ring-1 ring-black/5">
              <div className="grid grid-cols-2 gap-2">
                <div className="h-[168px] max-xl:h-[140px]">
                  <SmileCrop index={item.before} label="Before" />
                </div>
                <div className="h-[168px] max-xl:h-[140px]">
                  <SmileCrop index={item.after} label="After" />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ffe6ec]">
                  <Icon name={item.icon} className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold leading-none text-black">{item.title} -</h2>
                  <p className="mt-2 text-lg leading-tight text-black">{item.sub}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PatientReviewsPage() {
  return (
    <section className="min-h-[calc(100vh-126px)] bg-reviews-blush">
      <div className="site-container pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_560px]">
          <div className="pl-32 max-xl:pl-0">
            <h1 className="text-[68px] font-extrabold leading-[1.08] tracking-tight text-black max-md:text-4xl">
              Hear From Our<br />Happy Patients
            </h1>
            <p className="mt-6 max-w-[560px] text-2xl leading-tight text-black">
              Authentic stories and transformations from those who have trusted Dr. Vijay
            </p>
          </div>
          <Image
            src="/asset/Max_a_extrct_all_the_7_ima.png"
            alt="Happy patients"
            width={1497}
            height={1051}
            className="h-[350px] w-full object-contain object-center"
            priority
          />
        </div>
      </div>
      <div className="mt-0 rounded-t-[28px] bg-[#f0fdfa] py-14">
        <div className="site-container">
          <h2 className="text-center text-[39px] font-extrabold tracking-tight text-black max-md:text-3xl">Real Patient Stories, Real Transformations</h2>
          <div className="mx-auto mt-8 grid max-w-[1280px] grid-cols-3 gap-8 max-lg:grid-cols-1">
            {[
              ["Anita R.", "I was very nervous about my dental visit, but Dr. Vijay and his team made me feel so comfortable. Excellent care and pain-free treatment!"],
              ["Ramesh K.", "Best dental experience I've had! Very professional, friendly staff and amazing results."],
              ["Lekha S.", "Highly recommend Dr. Vijay! Gentle, thorough and truly cares about his patients."],
            ].map(([name, text], index) => (
              <article key={name} className={`review-card review-card-${index + 1} rounded-[14px] px-8 py-10 shadow-card`}>
                <h3 className="text-center text-[28px] font-extrabold text-black">{name}</h3>
                <p className="mt-14 text-[23px] leading-snug text-black max-md:mt-8 max-md:text-lg">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  const values = [
    ["tooth", "Modern", "Technology"],
    ["shield", "Safe &", "Hygienic"],
    ["users", "Experienced", "Team"],
    ["heart", "Patient", "Centered Care"],
  ];

  return (
    <section className="min-h-[calc(100vh-126px)] bg-about-blush">
      <div className="site-container relative grid min-h-[660px] grid-cols-[0.95fr_1.05fr] items-center gap-8 py-16 max-lg:grid-cols-1">
        <div>
          <p className="text-base font-extrabold uppercase tracking-wide text-[#0d9488]">Our Commitment</p>
          <h1 className="mt-6 text-[64px] font-extrabold leading-none tracking-tight text-black max-md:text-5xl">About Us</h1>
          <p className="mt-10 max-w-[470px] text-[18px] leading-[1.65] text-black">
            At Dr. Vijay&apos;s Dental Clinic, we believe that a healthy smile leads to a happy life. With years of experience and a patient-first approach, we are dedicated to providing the highest quality dental care in a comfortable and friendly environment.
          </p>
          <div className="my-10 flex max-w-[390px] items-center gap-5">
            <span className="h-px flex-1 bg-[#d7b7c0]" />
            <Icon name="sparkle" className="h-5 w-5 text-[#0d9488]" />
            <span className="h-px flex-1 bg-[#d7b7c0]" />
          </div>
          <div className="grid max-w-[520px] grid-cols-4 gap-5 max-sm:grid-cols-2">
            {values.map(([icon, line1, line2]) => (
              <div key={line1} className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#ffe9ee]">
                  <Icon name={icon as IconName} className="h-8 w-8 text-[#e54d78]" />
                </div>
                <p className="mt-4 text-sm font-semibold leading-tight text-black">{line1}<br />{line2}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[610px] overflow-hidden rounded-[30px] bg-[radial-gradient(circle_at_48%_38%,rgba(255,218,227,.7),transparent_38%)]">
          <Image
            src="/asset/WhatsApp_Image_2026-05-13_at_20.13.07-removebg-preview.png"
            alt="Dr. Vijay"
            width={440}
            height={567}
            className="absolute bottom-0 right-16 h-[560px] w-auto object-contain max-md:right-0"
            priority
          />
          <div className="absolute bottom-24 right-10 rounded-[18px] bg-white/90 px-8 py-6 shadow-card backdrop-blur max-md:right-4">
            <h2 className="text-[26px] font-extrabold text-black">Dr. Vijay</h2>
            <p className="mt-2 text-sm font-semibold text-[#ce5577]">BDS, MDS</p>
            <p className="mt-3 text-sm text-black">Founder & Chief Dental Surgeon</p>
            <p className="mt-2 text-sm text-black">16+ Years of Experience</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 text-center">
        <div className="site-container">
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#0d9488]">Why Choose Us</p>
          <h2 className="mt-4 text-[40px] font-extrabold text-black max-md:text-3xl">Your Smile, Our Priority</h2>
          <div className="mx-auto mt-7 flex max-w-[230px] items-center gap-5">
            <span className="h-px flex-1 bg-[#d7b7c0]" />
            <Icon name="sparkle" className="h-5 w-5 text-[#0d9488]" />
            <span className="h-px flex-1 bg-[#d7b7c0]" />
          </div>
          <p className="mx-auto mt-7 max-w-[670px] text-lg leading-relaxed text-black">
            We combine advanced technology, expert care, and a gentle approach to deliver the best dental experience for you and your family.
          </p>
          <ActionButton className="mt-10 rounded-full px-10 py-4 text-base">
            <span className="flex items-center gap-3"><Icon name="calendar" className="h-6 w-6" /> Book Appointment</span>
          </ActionButton>
          <div className="mx-auto mt-20 grid max-w-[1040px] grid-cols-5 overflow-hidden rounded-[18px] bg-white shadow-card ring-1 ring-black/5 max-md:grid-cols-2">
            {[
              ["shield", "15+", "Years of", "Experience"],
              ["star", "5000+", "Happy", "Patients"],
              ["thumb", "99%", "Patient", "Satisfaction"],
              ["tooth", "Minimal", "", "Pain"],
              ["headset", "Friendly", "", "Support"],
            ].map(([icon, value, line1, line2]) => (
              <div key={value} className="border-r border-black/10 px-6 py-7 text-center last:border-r-0">
                <Icon name={icon as IconName} className="mx-auto h-8 w-8 text-[#0d9488]" />
                <p className="mt-5 text-2xl font-extrabold text-black">{value}</p>
                <p className="mt-2 text-base leading-tight text-black">{line1 && <>{line1}<br /></>}{line2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <section className="min-h-[calc(100vh-126px)] bg-contact-blush py-20">
      <div className="site-container">
        <div className="grid grid-cols-[0.95fr_1.05fr] gap-20 max-lg:grid-cols-1">
          <div className="pt-16">
            <Eyebrow color="text-[#0d9488]">We&apos;re here to help you<br />with all your dental needs</Eyebrow>
            <h1 className="mt-28 text-[88px] font-extrabold leading-none tracking-tight text-[#151617] max-md:mt-16 max-md:text-5xl">Contact Us</h1>
            <div className="mt-8 h-1 w-24 bg-[#0d9488]" />
            <p className="mt-8 max-w-[510px] text-[23px] leading-[1.55] text-black">
              Have questions or need to book an appointment? Reach out to us - we&apos;re happy to help you smile with confidence.
            </p>
          </div>
          <div className="rounded-[18px] bg-white p-10 shadow-card ring-1 ring-black/5">
            {[
              ["phone", "Call Us", ["+91 99947 87165", "+91 98401 36328"]],
              ["pin", "Visit Us", ["Dr. Vijay's Dental Clinic", "No.36, Main Rd, Kottivaikkam,", "No.26, Mailath, Kondity Nagar,", "Adambakkam, Chennai,", "Tamil Nadu 600088"]],
              ["clock", "Clinic Timings", ["Mon - Sat", "10 AM - 1 PM", "5 PM - 9 PM", "Sunday", "By appointment only"]],
            ].map(([icon, title, lines], index) => (
              <div key={title as string} className={index === 0 ? "pb-10" : "border-t border-black/15 py-10 last:pb-0"}>
                <div className="flex gap-10 max-sm:gap-5">
                  <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-[#ffe1e8] max-sm:h-16 max-sm:w-16">
                    <Icon name={icon as IconName} className="h-12 w-12 text-black max-sm:h-9 max-sm:w-9" />
                  </div>
                  <div className="pt-2 text-[21px] leading-[1.55] text-black max-sm:text-base">
                    <h2 className="mb-2 text-[22px] font-extrabold text-black">{title as string}</h2>
                    {(lines as string[]).map((line, i) => (
                      <p key={line} className={title === "Clinic Timings" && (i === 1 || i === 2) ? "font-extrabold" : ""}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 rounded-[12px] border border-[#efbdc8] bg-[#ffe5eb] px-28 py-9 max-lg:px-8">
          <div className="flex items-center justify-between gap-8 max-md:flex-col max-md:items-start">
            <div className="flex items-center gap-12 max-md:gap-6">
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-[#ffcbd8]">
                <Icon name="calendar" className="h-14 w-14 text-black" />
              </div>
              <div>
                <h2 className="text-[25px] font-extrabold text-black">Ready for a healthier smile?</h2>
                <p className="mt-2 max-w-[520px] text-lg leading-snug text-black">
                  Book your appointment online in minutes and take the first step towards a confident, beautiful you.
                </p>
              </div>
            </div>
            <ActionButton className="rounded-[9px] px-12 py-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

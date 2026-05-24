import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Dr. Vijay's Dental Clinic",
  description: "The page you're looking for doesn't exist. Return to Dr. Vijay's Dental Clinic homepage.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #fff 0%, #fff4f6 50%, #ffe9ee 100%)",
        padding: "40px 20px",
        fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 540 }}>
        {/* Tooth icon */}
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          style={{ width: 80, height: 80, margin: "0 auto 24px", color: "#e54d78" }}
        >
          <path
            d="M31.9 13.2c-4.3-5.6-13.7-5.1-18 .8-5.3 7.2.2 15 2.2 21.9 1.7 5.8 1.4 14.6 6 14.6 4.1 0 3.4-9.8 9.9-9.8 6.4 0 5.7 9.8 9.8 9.8 4.7 0 4.3-8.8 6-14.6 2-6.9 7.5-14.7 2.2-21.9-4.3-5.9-13.7-6.4-18.1-.8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p
          style={{
            fontSize: "7rem",
            fontWeight: 900,
            lineHeight: 1,
            margin: "0 0 8px",
            color: "#e54d78",
            letterSpacing: "-0.04em",
          }}
        >
          404
        </p>

        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "#101113",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          Oops — Page Not Found
        </h1>

        <p
          style={{
            color: "#46484d",
            fontSize: "1.05rem",
            lineHeight: 1.6,
            margin: "0 0 32px",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us guide you back to your healthy smile journey.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#101113",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/book"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#e54d78",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Book Appointment
          </Link>
        </div>

        <p style={{ marginTop: 32, color: "#888", fontSize: "0.9rem" }}>
          Need help?{" "}
          <a href="tel:+919994787165" style={{ color: "#e54d78", fontWeight: 700 }}>
            Call us: +91 99947 87165
          </a>
        </p>
      </div>
    </main>
  );
}

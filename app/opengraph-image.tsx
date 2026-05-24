import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Dr. Vijay's Dental Clinic — Expert Care with Precision";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fff 0%, #fff4f6 45%, #ffd1dd 100%)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background decoration circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(229, 77, 120, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(229, 77, 120, 0.06)",
          }}
        />

        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          {/* Tooth SVG */}
          <svg
            viewBox="0 0 64 64"
            width={80}
            height={80}
            style={{ color: "#e54d78" }}
          >
            <path
              d="M31.9 13.2c-4.3-5.6-13.7-5.1-18 .8-5.3 7.2.2 15 2.2 21.9 1.7 5.8 1.4 14.6 6 14.6 4.1 0 3.4-9.8 9.9-9.8 6.4 0 5.7 9.8 9.8 9.8 4.7 0 4.3-8.8 6-14.6 2-6.9 7.5-14.7 2.2-21.9-4.3-5.9-13.7-6.4-18.1-.8Z"
              fill="none"
              stroke="#e54d78"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 18, color: "#888", fontWeight: 600 }}>Dr. Vijay&apos;s</span>
            <span style={{ fontSize: 42, fontWeight: 900, color: "#101113", letterSpacing: "-1px", lineHeight: 1 }}>
              DENTAL CLINIC
            </span>
            <span style={{ fontSize: 16, color: "#e54d78", fontWeight: 600, marginTop: 4 }}>
              Expert Care with Precision
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "#e54d78",
            borderRadius: 999,
            marginBottom: 32,
          }}
        />

        {/* Headline */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#101113",
            textAlign: "center",
            letterSpacing: "-1.5px",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Best Dentist in
          <span style={{ color: "#e54d78" }}> Adambakkam</span>, Chennai
        </div>

        {/* Sub */}
        <div
          style={{
            marginTop: 20,
            fontSize: 22,
            color: "#46484d",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Teeth Whitening · Dental Implants · Root Canal · Cosmetic Dentistry
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#e54d78",
            padding: "18px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>
            📍 Adambakkam, Chennai 600088
          </span>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>
            📞 +91 99947 87165
          </span>
          <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: 16 }}>
            vijaydentalclinic.in
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

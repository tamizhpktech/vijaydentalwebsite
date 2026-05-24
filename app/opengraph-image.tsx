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
          background: "linear-gradient(135deg, #fff 0%, #fff4f6 50%, #ffd3df 100%)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* ── Clinic name row ───────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 20 }}>
          {/* Tooth icon — single child */}
          <div style={{ display: "flex", width: 64, height: 64, alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 64 64" width={64} height={64}>
              <path
                d="M31.9 13.2c-4.3-5.6-13.7-5.1-18 .8-5.3 7.2.2 15 2.2 21.9 1.7 5.8 1.4 14.6 6 14.6 4.1 0 3.4-9.8 9.9-9.8 6.4 0 5.7 9.8 9.8 9.8 4.7 0 4.3-8.8 6-14.6 2-6.9 7.5-14.7 2.2-21.9-4.3-5.9-13.7-6.4-18.1-.8Z"
                fill="none"
                stroke="#e54d78"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Name stack — each line is a single-child div */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 16, color: "#aaa", fontWeight: 600 }}>
              <span>Dr. Vijay&apos;s</span>
            </div>
            <div style={{ display: "flex", fontSize: 42, fontWeight: 900, color: "#101113", letterSpacing: "-1px", lineHeight: 1 }}>
              <span>DENTAL CLINIC</span>
            </div>
            <div style={{ display: "flex", fontSize: 15, color: "#e54d78", fontWeight: 700, marginTop: 4 }}>
              <span>Expert Care with Precision</span>
            </div>
          </div>
        </div>

        {/* ── Pink divider ──────────────────────────────────────── */}
        <div style={{ display: "flex", width: 64, height: 3, background: "#e54d78", borderRadius: 999, marginBottom: 28 }} />

        {/* ── Headline line 1 ───────────────────────────────────── */}
        <div style={{ display: "flex", fontSize: 54, fontWeight: 900, color: "#101113", letterSpacing: "-1.5px" }}>
          <span>Best Dentist in Adambakkam</span>
        </div>
        {/* ── Headline line 2 ───────────────────────────────────── */}
        <div style={{ display: "flex", fontSize: 54, fontWeight: 900, color: "#e54d78", letterSpacing: "-1.5px", marginBottom: 24 }}>
          <span>Chennai, Tamil Nadu</span>
        </div>

        {/* ── Service pills row ─────────────────────────────────── */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Teeth Whitening", "Dental Implants", "Root Canal", "Cosmetic Dentistry"].map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                background: "rgba(229,77,120,0.10)",
                border: "1.5px solid rgba(229,77,120,0.25)",
                borderRadius: 999,
                padding: "8px 20px",
                fontSize: 15,
                fontWeight: 700,
                color: "#c13d63",
              }}
            >
              <span>{s}</span>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ───────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#e54d78",
            padding: "16px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
              📍 Adambakkam, Chennai 600088
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
              📞 +91 99947 87165
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: 15 }}>
              vijaydentalclinic.in
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

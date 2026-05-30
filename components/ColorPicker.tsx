"use client";

import { useState, useEffect } from "react";

export default function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#2F80ED"); // Blue
  const [secondaryColor, setSecondaryColor] = useState("#2EC4B6"); // Teal
  const [navBarBg, setNavBarBg] = useState("#FFFFFF"); // White
  const [heroBg, setHeroBg] = useState("#EAF6FF"); // Light blue
  const [cardsBg, setCardsBg] = useState("#F5F7FA"); // Soft gray

  useEffect(() => {
    const hexToRgb = (hex: string) => {
      if (!hex || hex.length < 7) return "47, 128, 237"; // fallback
      const r = parseInt(hex.substring(1, 3), 16);
      const g = parseInt(hex.substring(3, 5), 16);
      const b = parseInt(hex.substring(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    };

    const root = document.documentElement;
    
    // Primary Color (Buttons, Highlights)
    root.style.setProperty("--primary-btn", primaryColor);
    root.style.setProperty("--pink-strong", primaryColor);
    root.style.setProperty("--color-brand-pink", primaryColor);
    root.style.setProperty("--pink-rgb", hexToRgb(primaryColor));

    // Secondary Color (Secondary buttons / pills)
    root.style.setProperty("--secondary-btn", secondaryColor);

    // Nav Bar
    root.style.setProperty("--nav-bg", navBarBg);

    // Hero Section
    root.style.setProperty("--hero-bg", heroBg);
    root.style.setProperty("--pink", heroBg);
    root.style.setProperty("--color-brand-pink-light", heroBg);
    root.style.setProperty("--pink-blush", heroBg);

    // Cards / Sections / Doctor BG
    root.style.setProperty("--band", cardsBg);
    root.style.setProperty("--doctor-bg", cardsBg);

  }, [primaryColor, secondaryColor, navBarBg, heroBg, cardsBg]);

  return (
    <div style={{ position: "fixed", bottom: "100px", left: "20px", zIndex: 9999 }}>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: "var(--ink)",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            border: "none",
          }}
        >
          🎨 Color Picker
        </button>
      )}

      {isOpen && (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            border: "1px solid var(--line)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "250px",
            maxHeight: "80vh",
            overflowY: "auto"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ margin: 0, fontSize: "1rem" }}>Theme Colors</h3>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: "1.2rem" }}
            >
              ×
            </button>
          </div>

          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.9rem", fontWeight: "bold" }}>
            Primary Color
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              style={{ width: "100%", height: "40px", cursor: "pointer", border: "none", padding: 0 }}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.9rem", fontWeight: "bold" }}>
            Secondary Color
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
              style={{ width: "100%", height: "40px", cursor: "pointer", border: "none", padding: 0 }}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.9rem", fontWeight: "bold" }}>
            Nav Bar BG
            <input
              type="color"
              value={navBarBg}
              onChange={(e) => setNavBarBg(e.target.value)}
              style={{ width: "100%", height: "40px", cursor: "pointer", border: "none", padding: 0 }}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.9rem", fontWeight: "bold" }}>
            Hero BG
            <input
              type="color"
              value={heroBg}
              onChange={(e) => setHeroBg(e.target.value)}
              style={{ width: "100%", height: "40px", cursor: "pointer", border: "none", padding: 0 }}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.9rem", fontWeight: "bold" }}>
            Cards & Sections BG
            <input
              type="color"
              value={cardsBg}
              onChange={(e) => setCardsBg(e.target.value)}
              style={{ width: "100%", height: "40px", cursor: "pointer", border: "none", padding: 0 }}
            />
          </label>
        </div>
      )}
    </div>
  );
}

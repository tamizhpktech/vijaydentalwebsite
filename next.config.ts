import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Security Headers ──────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking — only allow framing from same origin
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Stop browsers from MIME-sniffing the content type
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Enable XSS filter in older browsers
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Control referrer information sent to third parties
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Force HTTPS for 2 years (max-age=63072000), include subdomains
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Restrict browser features/APIs available to this page
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()",
          },
          // Content Security Policy — restrict resource origins
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts: self + Next.js inline scripts (nonce not yet set) + WhatsApp redirect
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              // Styles: self + inline (Tailwind/CSS-in-JS)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts: self + Google Fonts
              "font-src 'self' https://fonts.gstatic.com",
              // Images: self + data URIs (for base64 images)
              "img-src 'self' data: blob: https:",
              // Connections: self + WhatsApp API
              "connect-src 'self' https://wa.me https://api.whatsapp.com",
              // iFrames: none allowed
              "frame-src 'none'",
              // Media: self only
              "media-src 'self'",
              // Object/embed: none
              "object-src 'none'",
              // Base URI restricted to self
              "base-uri 'self'",
              // Form submissions: self only
              "form-action 'self' https://wa.me",
              // Upgrade insecure requests to HTTPS
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // Cross-origin policies
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups", // allow-popups needed for WhatsApp window.open
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-site",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none", // required for WhatsApp window.open to function
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/asset/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ── Image Optimisation ────────────────────────────────────────────────────
  images: {
    // Allow optimising images from the same host
    remotePatterns: [],
    // Modern formats for smaller file sizes
    formats: ["image/avif", "image/webp"],
    // Device breakpoints for responsive images
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL (1 week)
    minimumCacheTTL: 604800,
  },

  // ── Performance ───────────────────────────────────────────────────────────
  compress: true,
  poweredByHeader: false, // Remove "X-Powered-By: Next.js" for security

  // ── Redirects — enforce trailing-slash consistency ────────────────────────
  async redirects() {
    return [];
  },
};

export default nextConfig;

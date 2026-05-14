"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ToothLogo } from "./DentalSite";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", dropdown: true },
  { href: "/smile-gallery", label: "Smile Gallery" },
  { href: "/patient-reviews", label: "Patient Reviews", dropdown: true },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 rounded-b-[8px] bg-white shadow-[0_8px_24px_rgba(0,0,0,.15)]">
      <div className="site-container">
        <div className="flex h-[126px] items-center justify-between gap-8 max-lg:h-[86px]">
          <Link href="/" className="shrink-0" aria-label="Dr. Vijay's Dental Clinic home">
            <ToothLogo />
          </Link>

          <nav className="hidden items-center gap-12 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={`nav-link ${active ? "active" : ""}`}>
                  {link.label}
                  {link.dropdown && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>

          <Link href="/book" className="hidden rounded-[9px] bg-[#111] px-8 py-4 text-lg font-medium text-white transition hover:bg-black lg:inline-flex">
            Book Appointment
          </Link>

          <button
            className="grid h-11 w-11 place-items-center rounded-lg border border-black/10 lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle menu"
            type="button"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/10 bg-white px-6 py-5 shadow-lg lg:hidden">
          <div className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium ${pathname === link.href ? "bg-[#ffe8ee] text-black" : "text-black/75"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block rounded-lg bg-black px-4 py-3 text-center text-base font-medium text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

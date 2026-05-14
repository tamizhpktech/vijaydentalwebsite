"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Smile Gallery" },
  { href: "/#reviews", label: "Patient Reviews" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md h-16" : "bg-white/90 backdrop-blur-sm h-20"
      }`}
    >
      <div className="mx-auto max-w-[1376px] px-6 h-full">
        <div className="flex items-center justify-between gap-4 h-full">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-3 shrink-0" aria-label="Dr. Vijay's Dental Clinic home">
            <Image 
              src="/asset/logo1-removebg-preview.png" 
              alt="Logo" 
              width={50} 
              height={49} 
              className="h-10 w-auto max-sm:h-9" 
            />
            <span className="flex flex-col leading-none">
              <small className="text-[11px] font-medium text-gray-600 max-sm:text-[9px]">Dr. Vijay&apos;s</small>
              <strong className="text-[19px] font-extrabold tracking-tight text-black max-sm:text-base">DENTAL CLINIC</strong>
              <em className="text-[10px] font-normal not-italic text-brand-teal max-sm:text-[8px]">Expert Care with Precision</em>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === "/" && (link.href.startsWith("/#") ? false : pathname === link.href);
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`text-[15px] font-bold transition-colors hover:text-brand-teal ${
                    active ? "text-brand-teal" : "text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/book" 
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-[15px] font-bold text-white transition hover:bg-brand-teal-dark shadow-sm"
            >
              Book Appointment
            </Link>

            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-white shadow-sm lg:hidden transition-colors hover:bg-gray-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="relative h-5 w-6">
                <span 
                  className={`absolute left-0 block h-0.5 w-full bg-black transition-all duration-300 ${
                    mobileOpen ? "top-2.5 rotate-45" : "top-0"
                  }`} 
                />
                <span 
                  className={`absolute left-0 top-2.5 block h-0.5 w-full bg-black transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`} 
                />
                <span 
                  className={`absolute left-0 block h-0.5 w-full bg-black transition-all duration-300 ${
                    mobileOpen ? "top-2.5 -rotate-45" : "top-5"
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-x-0 bottom-0 z-40 bg-white transition-all duration-500 ease-in-out lg:hidden border-t border-gray-100 ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ top: scrolled ? "64px" : "80px" }}
      >
        <div className="flex flex-col h-full p-8 overflow-y-auto">
          <nav className="flex flex-col gap-6 mb-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-bold text-gray-900 transition-colors hover:text-brand-teal"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto">
            <Link
              href="/book"
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center rounded-2xl bg-black py-5 text-xl font-bold text-white shadow-lg transition active:scale-[0.98]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


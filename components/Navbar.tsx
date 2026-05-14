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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-gray-100 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-[1376px] px-6">
        {/* Top Row: Logo and CTA */}
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
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
              <em className="text-[10px] font-normal not-italic text-brand-pink max-sm:text-[8px]">Expert Care with Precision</em>
            </span>
          </Link>

          {/* Desktop Nav (Visible only on LG+) */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8">
            {links.map((link) => {
              const active = pathname === "/" && (link.href.startsWith("/#") ? false : pathname === link.href);
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`text-[15px] font-bold transition-colors hover:text-brand-pink ${
                    active ? "text-brand-pink" : "text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <Link 
            href="/book" 
            className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-[15px] font-bold !text-white transition hover:bg-brand-pink-dark shadow-sm max-sm:px-4 max-sm:py-2.5 max-sm:text-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Slider Nav (Visible only below LG) */}
        <div className="lg:hidden border-t border-gray-50/50">
          <nav className="flex items-center gap-6 overflow-x-auto whitespace-nowrap py-4 scrollbar-hide px-1">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-bold text-gray-800 transition-colors hover:text-brand-pink active:text-brand-pink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}



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

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-gray-100 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md h-20" : "bg-white/90 backdrop-blur-sm h-24"
      }`}
    >
      <div className="mx-auto max-w-[1376px] px-6 h-full">
        <div className="flex items-center justify-between gap-4 h-full">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-3 shrink-0" aria-label="Dr. Vijay's Dental Clinic home">
              <Image 
                src="/asset/logo8.png" 
                alt="Logo" 
              width={100} 
              height={100} 
              className="h-20 w-auto max-sm:h-16" 
            />
            <span className="flex flex-col leading-none">
              <small className="text-base font-extrabold text-black max-sm:text-[13px]">Dr. Vijay&apos;s</small>
              <strong className="text-[19px] font-extrabold tracking-tight text-black max-sm:text-base">DENTAL CLINIC</strong>
              <em className="text-[10px] font-normal not-italic text-brand-pink max-sm:text-[8px]">Expert Care with Precision</em>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8" aria-label="Main navigation">
            {links.map((link) => {
              const isHash = link.href.startsWith("/#");
              const active = pathname === "/" && !isHash ? pathname === link.href : false;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  replace={isHash}  
                  className={`text-[15px] font-bold transition-colors hover:text-brand-pink ${
                    active ? "text-brand-pink" : "text-gray-800"
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
              className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-[15px] font-bold !text-white transition hover:bg-brand-pink-dark shadow-sm max-sm:hidden"
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
        className={`absolute top-full left-0 w-full z-40 bg-white transition-opacity duration-300 ease-in-out lg:hidden border-t border-gray-100 overflow-y-auto ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ height: 'calc(100vh - 100%)' }}
      >
        <div className="p-8">
          <ul className="flex flex-col mb-10 w-full list-none m-0 p-0">
            <li className="w-full">
              <Link href="/#home" replace onClick={handleLinkClick} className="block text-2xl font-bold text-black py-4 border-b border-gray-200 transition-colors hover:text-brand-pink">Home</Link>
            </li>
            <li className="w-full">
              <Link href="/#services" replace onClick={handleLinkClick} className="block text-2xl font-bold text-black py-4 border-b border-gray-200 transition-colors hover:text-brand-pink">Services</Link>
            </li>
            <li className="w-full">
              <Link href="/#gallery" replace onClick={handleLinkClick} className="block text-2xl font-bold text-black py-4 border-b border-gray-200 transition-colors hover:text-brand-pink">Smile Gallery</Link>
            </li>
            <li className="w-full">
              <Link href="/#reviews" replace onClick={handleLinkClick} className="block text-2xl font-bold text-black py-4 border-b border-gray-200 transition-colors hover:text-brand-pink">Patient Reviews</Link>
            </li>
            <li className="w-full">
              <Link href="/#about" replace onClick={handleLinkClick} className="block text-2xl font-bold text-black py-4 border-b border-gray-200 transition-colors hover:text-brand-pink">About Us</Link>
            </li>
            <li className="w-full">
              <Link href="/#contact" replace onClick={handleLinkClick} className="block text-2xl font-bold text-black py-4 border-b border-gray-200 transition-colors hover:text-brand-pink">Contact Us</Link>
            </li>
          </ul>
          
          <div className="pt-8">
            <Link
              href="/book"
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center rounded-2xl bg-black py-5 text-xl font-bold !text-white shadow-lg transition active:scale-[0.98]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}




"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { CLINIC } from "@/lib/constants";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const text = `*New Appointment Request*%0A%0A*Patient Name:* ${formData.name}%0A*Age:* ${formData.age}%0A*Gender:* ${formData.gender}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || "N/A"}%0A*Service:* ${formData.service}%0A*Preferred Date:* ${formData.date}%0A*Preferred Time:* ${formData.time}%0A*Message:* ${formData.message || "None"}`;
    // Small delay so user sees the loading state
    setTimeout(() => {
      window.open(`https://wa.me/${CLINIC.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="book-page" style={{ paddingTop: "160px" }}>
        <div className="book-shell">
          <div className="mb-8 text-center">
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#e54d78]">Schedule your visit</p>
            <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-black max-sm:text-4xl">Book Appointment</h1>
            <p className="mt-4 text-lg text-black">Send your appointment request directly to the clinic through WhatsApp.</p>
          </div>

          <div className="book-card p-8 max-sm:p-5">
            {submitted ? (
              <div className="py-14 text-center">
                {/* Success checkmark */}
                <div style={{
                  width: 72, height: 72, borderRadius: "50%", background: "#e8f5e9",
                  display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px"
                }}>
                  <svg viewBox="0 0 24 24" width={36} height={36} fill="none" stroke="#2e7d32" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold text-black">Request Sent via WhatsApp!</h2>
                <p className="mt-3 text-gray-600">Your appointment request has opened in WhatsApp. We will confirm your slot shortly.</p>
                <div className="mt-7 flex justify-center gap-3 flex-wrap">
                  <Link href="/#home" className="inline-flex rounded-xl bg-[#e54d78] px-8 py-3.5 font-bold text-white transition hover:bg-[#c13d63] shadow-sm">
                    Return to Home
                  </Link>
                  <a href={`tel:${CLINIC.phone[0].replace(/\s/g, "")}`} className="inline-flex rounded-xl border-2 border-[#e54d78] px-8 py-3.5 font-bold text-[#e54d78] transition hover:bg-[#fff4f6]">
                    Call Us Instead
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="field-name" label="Patient Name" name="name" value={formData.name} onChange={handleChange} required />
                  <Field id="field-phone" label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required type="tel" pattern="[0-9]{10}" maxLength={10} title="Please enter a valid 10-digit phone number" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="field-age" label="Age" name="age" value={formData.age} onChange={handleChange} required type="number" min="1" max="120" />
                  <div>
                    <label htmlFor="field-gender" className="mb-1.5 block text-sm font-semibold text-gray-700">Gender *</label>
                    <select id="field-gender" required name="gender" value={formData.gender} onChange={handleChange} className="book-input">
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="field-email" label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" />
                  <div>
                    <label htmlFor="field-service" className="mb-1.5 block text-sm font-semibold text-gray-700">Service Type *</label>
                    <select id="field-service" required name="service" value={formData.service} onChange={handleChange} className="book-input">
                      <option value="">Select a service</option>
                      <option>General Consultation</option>
                      <option>Teeth Whitening</option>
                      <option>Dental Implants</option>
                      <option>Root Canal</option>
                      <option>Cosmetic Procedures</option>
                      <option>Preventive Care</option>
                      <option>Sleep Dentistry</option>
                      <option>Periodontics (Gum Care)</option>
                      <option>Orthodontics / Braces / Aligners</option>
                      <option>Pediatric Care</option>
                      <option>Geriatric Dentistry</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="field-date" label="Preferred Date" name="date" value={formData.date} onChange={handleChange} required type="date" min={new Date().toISOString().split("T")[0]} />
                  <Field id="field-time" label="Preferred Time" name="time" value={formData.time} onChange={handleChange} required type="time" step={900} />
                </div>
                <div>
                  <label htmlFor="field-message" className="mb-1.5 block text-sm font-semibold text-gray-700">Message / Concern</label>
                  <textarea id="field-message" name="message" value={formData.message} onChange={handleChange} rows={4} className="book-input resize-none" placeholder="Describe your concern or any specific requirements..." />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-black py-4 text-base font-bold text-white transition hover:bg-gray-900 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <circle cx="12" cy="12" r="10" strokeOpacity={0.25} />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Opening WhatsApp…
                    </>
                  ) : (
                    "Confirm Appointment Request"
                  )}
                </button>
                <p className="text-center text-sm text-gray-500">
                  Prefer to call?{" "}
                  <a href={`tel:${CLINIC.phone[0].replace(/\s/g, "")}`} className="font-semibold text-[#e54d78] hover:underline">
                    {CLINIC.phone[0]}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

function Field({
  id,
  label,
  name,
  value,
  onChange,
  required = false,
  type = "text",
  ...props
}: {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-gray-700">
        {label}{required ? " *" : ""}
      </label>
      <input
        id={id}
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="book-input"
        aria-required={required}
        {...props}
      />
    </div>
  );
}

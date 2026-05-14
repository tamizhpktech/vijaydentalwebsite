"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const phone = "919994787165";
    const text = `*New Appointment Request*%0A%0A*Patient Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || "N/A"}%0A*Service:* ${formData.service}%0A*Preferred Date:* ${formData.date}%0A*Preferred Time:* ${formData.time}%0A*Message:* ${formData.message || "None"}`;
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="book-page pt-[140px]">
      <div className="book-shell">
        <div className="mb-8 text-center">
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#e54d78]">Schedule your visit</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-black max-sm:text-4xl">Book Appointment</h1>
          <p className="mt-4 text-lg text-black">Send your appointment request directly to the clinic through WhatsApp.</p>
        </div>

        <div className="book-card p-8 max-sm:p-5">
          {submitted ? (
            <div className="py-14 text-center">
              <h2 className="text-2xl font-extrabold text-black">Request Sent</h2>
              <p className="mt-3 text-gray-600">Your appointment request has opened in WhatsApp. We will confirm shortly.</p>
              <Link href="/#home" className="mt-7 inline-flex rounded-xl bg-[#e54d78] px-8 py-3.5 font-bold text-white transition hover:bg-[#c13d63] shadow-sm">Return to Home Page</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Patient Name" name="name" value={formData.name} onChange={handleChange} required />
                <Field label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required type="tel" pattern="[0-9]{10}" maxLength={10} title="Please enter a valid 10-digit phone number" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" />
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-gray-700">Service Type *</label>
                  <select required name="service" value={formData.service} onChange={handleChange} className="book-input">
                    <option value="">Select a service</option>
                    <option>General Checkup</option>
                    <option>Teeth Whitening</option>
                    <option>Dental Implants</option>
                    <option>Root Canal</option>
                    <option>Cosmetic Bonding</option>
                    <option>Cosmetic Procedures</option>
                    <option>Preventive Care</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Preferred Date" name="date" value={formData.date} onChange={handleChange} required type="date" />
                <Field label="Preferred Time" name="time" value={formData.time} onChange={handleChange} required type="time" step="900" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">Message / Concern</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="book-input resize-none" placeholder="Describe your concern..." />
              </div>
              <button type="submit" className="w-full rounded-xl bg-black py-4 text-base font-bold text-white transition hover:bg-gray-900">
                Confirm Appointment Request
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  required = false,
  type = "text",
  ...props
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-gray-700">{label}{required ? " *" : ""}</label>
      <input required={required} type={type} name={name} value={value} onChange={onChange} className="book-input" {...props} />
    </div>
  );
}

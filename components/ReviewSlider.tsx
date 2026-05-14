"use client";

import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Anjalin Nirmala",
    initial: "A",
    color: "#e8890c",
    rating: 5,
    time: "4 years ago",
    text: "Dr. Vijay had been very patient in treating my tooth cavities and I'm relieved of the pain. Happy about the quality of treatment and empathy shown to patients.",
  },
  {
    name: "Hilda Mary",
    initial: "H",
    color: "#e8890c",
    rating: 5,
    time: "2 years ago",
    text: "Excellent maintenance of the clinic. Calm and composed environment. Dr. Vijay Amirtharaj explained the treatment plan accurately which was understandable.",
  },
  {
    name: "Rajaiah Selvaraj",
    initial: "R",
    color: "#c2952f",
    rating: 5,
    time: "4 years ago",
    text: "Dr. Vijay's Dental Clinic is one of the best Dental Clinics available in Chennai. I had a problem with my teeth, and he treated it in best manner. Also he has all the best facilities under one roof.",
  },
  {
    name: "Sridhar Mannarsamy",
    initial: "S",
    color: "#0d9488",
    rating: 5,
    time: "4 years ago",
    text: "Thanks to Dr. Vijay sir, I am oral cancer survivor. Based on his suggestion and went for 16 tooth root canal with less mouth opening. He did very patiently for all tooth also provide quality treatment.",
  },
  {
    name: "Ramcharan Buvaraghan",
    initial: "R",
    color: "#4a8fd4",
    rating: 5,
    time: "3 years ago",
    text: "I removed all my 4 wisdom teeth here. Dr Vijay made me feel extremely comfortable before, during, and after the surgery. He was very clear with communication. Overall everything went extremely smooth.",
  },
  {
    name: "Selvakathir Nirmal Doss",
    initial: "S",
    color: "#5ba85b",
    rating: 5,
    time: "1 year ago",
    text: "I had been to Dr. Vijay's clinic recently for root canal and cleaning. He was very patient and explained in detail. The hospital was neat and clean. There was no wait time since we had booked the appointment.",
  },
  {
    name: "Shubha Dinesh",
    initial: "S",
    color: "#8c73de",
    rating: 5,
    time: "3 years ago",
    text: "Dr. Vijay did Root Canal procedure for me with utmost care and precision saving my tooth and relieving me of the severe pain. Very patient and understanding. Thank you very much Vijay Sir.",
  },
  {
    name: "Salma B",
    initial: "S",
    color: "#2d9a8f",
    rating: 5,
    time: "3 years ago",
    text: "I know Dr Vijay for more than a decade, from his Apollo days. My entire family's dental health depends on him. He is more of an artist when it comes to root canal treatment.",
  },
  {
    name: "Selina Samuel",
    initial: "S",
    color: "#0d9488",
    rating: 5,
    time: "1 year ago",
    text: "I consulted Dr for fixing the central incisors and root canal. The doctor is very knowledgeable and trustworthy. The doctor explained the treatment in detail. The clinic is neatly maintained.",
  },
];

export default function ReviewSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = reviews.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [paused, next]);

  const getIndex = (offset: number) => (current + offset) % total;

  return (
    <div
      className="review-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button className="slider-arrow left" onClick={prev} aria-label="Previous review">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="slider-track">
        {[0, 1, 2].map((offset) => {
          const idx = getIndex(offset);
          const r = reviews[idx];
          return (
            <article key={`${idx}-${offset}`} className="review-slide">
              <div className="review-head">
                <div className="review-avatar" style={{ background: r.color }}>{r.initial}</div>
                <div>
                  <h4>{r.name}</h4>
                  <p className="review-meta">{r.time}</p>
                </div>
              </div>
              <div className="review-stars">
                {"★★★★★".slice(0, r.rating)}
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-google">
                <svg className="google-g" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span>Google Review</span>
              </div>
            </article>
          );
        })}
      </div>

      <button className="slider-arrow right" onClick={next} aria-label="Next review">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="slider-dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

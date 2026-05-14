import Image from "next/image";
import Link from "next/link";
import ReviewSlider from "@/components/ReviewSlider";
import Navbar from "@/components/Navbar";

type IconName = "sparkle" | "tooth" | "shield" | "star" | "thumb" | "phone" | "pin" | "clock" | "calendar" | "users" | "heart" | "implant" | "braces";

const navItems = [
  ["#home", "Home"],
  ["#services", "Services"],
  ["#gallery", "Smile Gallery"],
  ["#reviews", "Patient Reviews"],
  ["#about", "About Us"],
  ["#contact", "Contact Us"],
];

const services = [
  ["Preventive Care", "Keep your smile healthy with regular check-ups and professional cleanings.", "/asset/service5.jpeg", "shield"],
  ["Root Canal Treatments", "Relieve pain and save your natural tooth with advanced root canal treatments.", "/asset/service6.jpeg", "star"],
  ["Dental Implants", "Restore missing teeth with durable, natural-looking dental implants that last.", "/asset/service3.jpeg", "implant"],
  ["Teeth Whitening", "Brighten your smile and boost your confidence with advanced whitening solutions.", "/asset/service1.png", "sparkle"],
  ["Cosmetic Procedures", "Enhance your smile with our advanced cosmetic dental solutions.", "/asset/service7.jpeg", "tooth"],
  ["Bonding", "Repair chips, cracks, and gaps with natural-looking, tooth-colored bonding treatments.", "/asset/service2.webp", "tooth"],
] as const;

const gallery = [
  ["DENTAL IMPLANTS", "Restore Function, Restore Confidence", 6, 7, "implant"],
  ["ORTHODONTICS", "Achieving Perfect Alignment", 4, 5, "braces"],
  ["TEETH WHITENING", "A Brighter, Brighter Smile", 0, 1, "tooth"],
  ["COSMETIC BONDING", "Seamless Repair for Chipped Teeth", 2, 3, "sparkle"],
] as const;

const smileCrops = [
  { x: 32, y: 116, w: 329, h: 207 },
  { x: 413, y: 116, w: 320, h: 207 },
  { x: 785, y: 116, w: 320, h: 207 },
  { x: 1157, y: 116, w: 307, h: 207 },
  { x: 32, y: 393, w: 329, h: 211 },
  { x: 413, y: 393, w: 320, h: 211 },
  { x: 785, y: 393, w: 320, h: 211 },
  { x: 1157, y: 393, w: 307, h: 211 },
  { x: 32, y: 676, w: 329, h: 204 },
  { x: 413, y: 676, w: 320, h: 204 },
  { x: 785, y: 676, w: 320, h: 204 },
  { x: 1157, y: 676, w: 307, h: 204 },
];

const stats = [
  ["shield", "15+", "Years of Experience"],
  ["star", "38", "5-Star Rates"],
  ["thumb", "99%", "Patient Satisfaction"],
  ["tooth", "1%", "Pain Promise"],
] as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[140px]">
        <section id="home" className="hero-section">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <Eyebrow>I Invite you to care about<br />the aesthetics of your face</Eyebrow>
              <h1 className="hero-title">Have a shining smile with modern methods!</h1>
              <div className="pill-row">
                {["Teeth Whitening", "Cosmetic Dentistry", "Dental Implants", "Root Canal", "Preventive Care"].map((item) => (
                  <span key={item} className="soft-pill">{item}</span>
                ))}
              </div>
              <p className="body-copy hero-text">
                I am committed to providing exceptional oral care to my patients. With advanced techniques and personalized attention, I ensure your dental health and <strong>well-being.</strong>
              </p>
              <Link href="/book" className="primary-btn">Book Appointment</Link>
            </div>
            <div className="hero-image-wrap">
              <Image src="/asset/ChatGPT Image May 13, 2026, 10_13_34 PM.png" alt="Smiling family" fill priority className="hero-image" sizes="(max-width: 900px) 100vw, 58vw" />
            </div>
          </div>
          <div className="shell">
            <StatsBar />
          </div>
        </section>

        <section id="services" className="section section-blush">
          <div className="shell">
            <div className="section-head center">
              <span className="label-chip">Our Services</span>
              <h2 className="section-title">Comprehensive Dental Care<br />for a Healthier Smile</h2>
              <p className="body-copy center-copy">At Dr. Vijay&apos;s Dental Clinic, we offer a wide range of advanced dental treatments tailored to your needs in a comfortable and caring environment.</p>
              <div className="benefit-row">
                {["Advanced Technology", "Experienced Professionals", "Pain-free Treatments", "Patient-Centric Care"].map((item) => (
                  <span key={item}><b>✓</b>{item}</span>
                ))}
              </div>
            </div>
            <div className="service-grid">
              {services.map(([title, desc, image, icon]) => (
                <article key={title} className="service-card">
                  <div className="card-title">
                    <span className="icon-bubble"><Icon name={icon as IconName} /></span>
                    <h3>{title}</h3>
                  </div>
                  <div className="service-media">
                    <Image src={image} alt={title} fill className="card-image" sizes="(max-width: 800px) 100vw, 33vw" />
                  </div>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="shell">
            <div className="section-head">
              <span className="label-chip">Smile Gallery</span>
              <Eyebrow>See how we&apos;ve changed lives</Eyebrow>
              <h2 className="section-title wide-title">Real Transformations, Beautiful Smiles</h2>
              <p className="body-copy">Explore the remarkable results our precision care and advanced techniques deliver. Witness a gallery of genuine smile transformations.</p>
            </div>
            <div className="gallery-grid">
              {gallery.map(([title, sub, before, after, icon]) => (
                <article key={title} className="gallery-card">
                  <div className="before-after">
                    <SmileTile index={before} label="Before" />
                    <SmileTile index={after} label="After" />
                  </div>
                  <div className="gallery-info">
                    <span className="icon-bubble small"><Icon name={icon as IconName} /></span>
                    <div>
                      <h3>{title} -</h3>
                      <p>{sub}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section reviews-section">
          <div className="shell reviews-hero">
            <div>
              <h2 className="section-title">Hear From Our<br />Happy Patients</h2>
              <p className="body-copy" style={{ marginTop: 20 }}>Authentic stories and transformations from those who have trusted Dr. Vijay with their smiles. With over 5,000 happy patients and a perfect 5.0 rating on Google, our commitment to gentle, pain-free dental care speaks for itself.</p>
            </div>
            <div className="review-collage-shot" role="img" aria-label="Happy patient portraits" />
          </div>
          <div className="shell review-panel">
            <h3>Real Patient Stories, Real Transformations</h3>
            <ReviewSlider />
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="shell about-grid">
            <div>
              <p className="section-kicker">Our Commitment</p>
              <h2 className="section-title">About Us</h2>
              <p className="body-copy about-copy">
                At Dr. Vijay&apos;s Dental Clinic, we believe that a healthy smile leads to a happy life. With years of experience and a patient-first approach, we are dedicated to providing the highest quality dental care in a comfortable and friendly environment.
              </p>
              <div className="divider-star"><span /><Icon name="sparkle" /><span /></div>
              <div className="values-grid">
                {[
                  ["tooth", "Modern Technology"],
                  ["shield", "Safe & Hygienic"],
                  ["users", "Experienced Team"],
                  ["heart", "Patient Centered Care"],
                ].map(([icon, text]) => (
                  <div key={text}>
                    <span className="icon-bubble"><Icon name={icon as IconName} /></span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="doctor-panel">
              <div className="doctor-wrapper">
                <Image src="/asset/Dr._Vijay_Amirtharaj._L_-1.jpg-removebg-preview.png" alt="Dr. Vijay" width={440} height={567} className="doctor-image" />
                <div className="doctor-info-strip">
                  <div className="doc-name">
                    <h3>Dr. Vijay</h3>
                    <p>BDS, MDS</p>
                  </div>
                  <div className="doc-creds">
                    <span>Founder & Chief Dental Surgeon</span>
                    <span>16+ Years of Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shell priority-panel">
            <p className="section-kicker">Why Choose Us</p>
            <h2 className="section-title compact">Your Smile, Our Priority</h2>
            <div className="divider-star centered"><span /><Icon name="sparkle" /><span /></div>
            <p className="body-copy center-copy">We combine advanced technology, expert care, and a gentle approach to deliver the best dental experience for you and your family.</p>
            <Link href="/book" className="primary-btn with-icon"><Icon name="calendar" />Book Appointment</Link>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="shell contact-grid">
            <div>
              <p className="section-kicker">Contact Us</p>
              <h2 className="section-title">We&apos;re here to help you<br />with all your dental needs</h2>
              <span className="accent-line" />
              <p className="body-copy" style={{ marginTop: '20px' }}>Whether you&apos;re looking for a routine check-up, a complete smile makeover, or need urgent dental care — our friendly team is just a call away. With 16+ years of trusted expertise, state-of-the-art technology, and a commitment to pain-free treatments, Dr. Vijay&apos;s Dental Clinic is your family&apos;s partner in oral health. Walk in or book online — your perfect smile journey starts here.</p>
            </div>
            <div className="contact-card">
              <ContactItem icon="phone" title="Call Us" lines={["+91 99947 87165", "+91 98401 36328"]} />
              <ContactItem icon="pin" title="Visit Us" lines={["Dr. Vijay's Dental Clinic", "No.36, Main Rd, Kottivaikkam,", "No.26, Mailath, Kondity Nagar,", "Adambakkam, Chennai,", "Tamil Nadu 600088"]} />
              <ContactItem icon="clock" title="Clinic Timings" lines={["Mon - Sat", "10 AM - 1 PM", "5 PM - 9 PM", "Sunday", "By appointment only"]} />
            </div>
          </div>
          <div className="shell contact-cta">
            <div className="icon-bubble large"><Icon name="calendar" /></div>
            <div>
              <h3>Ready for a healthier smile?</h3>
              <p>Book your appointment online in minutes and take the first step towards a confident, beautiful you.</p>
            </div>
            <Link href="/book" className="primary-btn">Book Appointment</Link>
          </div>
        </section>
      </main>
    </>
  );
}


function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <Icon name="sparkle" />
      <p>{children}</p>
    </div>
  );
}

function SmileTile({ index, label }: { index: number; label: string }) {
  const crop = smileCrops[index];
  const positionX = (crop.x / (1536 - crop.w)) * 100;
  const positionY = (crop.y / (1024 - crop.h)) * 100;

  return (
    <div className="image-tile">
      <div
        className="smile-crop"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/asset/Max_a_extract_all_the_12_p.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: `${(1536 / crop.w) * 100}% ${(1024 / crop.h) * 100}%`,
          backgroundPosition: `${positionX}% ${positionY}%`,
          backgroundColor: "#f5f5f5",
        }}
      />
      <span>{label}</span>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map(([icon, value, label]) => (
        <div key={label} className="stat-item">
          <Icon name={icon as IconName} />
          <div>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactItem({ icon, title, lines }: { icon: IconName; title: string; lines: string[] }) {
  return (
    <div className="contact-item">
      <span className="icon-bubble large"><Icon name={icon} /></span>
      <div>
        <h3>{title}</h3>
        {lines.map((line, index) => (
          <p key={`${title}-${line}`} className={title === "Clinic Timings" && (index === 1 || index === 2) ? "bold-line" : ""}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function Icon({ name }: { name: IconName }) {
  const common = { className: "icon-stroke" };
  if (name === "sparkle") return <svg viewBox="0 0 64 64"><path {...common} d="M28 5l5.9 16.1L50 27l-16.1 5.9L28 49l-5.9-16.1L6 27l16.1-5.9L28 5Z" /><path {...common} d="M49 7l2.3 6.2L58 16l-6.7 2.8L49 25l-2.3-6.2L40 16l6.7-2.8L49 7Z" /></svg>;
  if (name === "tooth") return <svg viewBox="0 0 64 64"><path {...common} d="M31.9 13.2c-4.3-5.6-13.7-5.1-18 .8-5.3 7.2.2 15 2.2 21.9 1.7 5.8 1.4 14.6 6 14.6 4.1 0 3.4-9.8 9.9-9.8 6.4 0 5.7 9.8 9.8 9.8 4.7 0 4.3-8.8 6-14.6 2-6.9 7.5-14.7 2.2-21.9-4.3-5.9-13.7-6.4-18.1-.8Z" /></svg>;
  if (name === "shield") return <svg viewBox="0 0 64 64"><path {...common} d="M32 7l20 7v16c0 13-8.1 22.4-20 27-11.9-4.6-20-14-20-27V14l20-7Z" /><path {...common} d="M32 17v29M21 31h22" /></svg>;
  if (name === "star") return <svg viewBox="0 0 64 64"><path className="fill-brand-pink" d="M32 6l7.6 15.4 17 2.5-12.3 12 2.9 17L32 44.8 16.8 53l2.9-17-12.3-12 17-2.5L32 6Z" /></svg>;
  if (name === "thumb") return <svg viewBox="0 0 64 64"><path {...common} d="M23 55H12V29h11v26ZM23 31l10-21c1.2-2.5 5-1.7 5 1.1V25h12.2c4.1 0 7.2 3.7 6.4 7.8l-3 15.6A8 8 0 0 1 45.7 55H23V31Z" /></svg>;
  if (name === "phone") return <svg viewBox="0 0 64 64"><path {...common} d="M22 12l7 12-5 4c4 8 8 12 16 16l4-5 12 7c-1 6-5 10-11 10-18 0-37-19-37-37 0-6 4-10 14-7Z" /></svg>;
  if (name === "pin") return <svg viewBox="0 0 64 64"><path {...common} d="M32 58s18-17 18-33a18 18 0 0 0-36 0c0 16 18 33 18 33Z" /><circle {...common} cx="32" cy="25" r="6" /></svg>;
  if (name === "clock") return <svg viewBox="0 0 64 64"><circle {...common} cx="32" cy="32" r="23" /><path {...common} d="M32 18v16l10 6" /></svg>;
  if (name === "calendar") return <svg viewBox="0 0 64 64"><rect {...common} x="13" y="16" width="38" height="36" rx="4" /><path {...common} d="M21 10v12M43 10v12M13 28h38M23 37h4M31 37h4M39 37h4M23 45h4M31 45h4M39 45h4" /></svg>;
  if (name === "users") return <svg viewBox="0 0 64 64"><circle {...common} cx="24" cy="24" r="8" /><circle {...common} cx="43" cy="25" r="6" /><path {...common} d="M10 51c2-10 8-15 14-15s12 5 14 15M36 39c6 1 11 5 13 12" /></svg>;
  if (name === "heart") return <svg viewBox="0 0 64 64"><path className="icon-fill" d="M32 53S11 40 11 24c0-8 5.5-13 12.2-13 4 0 7.3 2 8.8 5 1.5-3 4.8-5 8.8-5C47.5 11 53 16 53 24c0 16-21 29-21 29Z" /></svg>;
  if (name === "implant") return <svg viewBox="0 0 64 64"><path {...common} d="M25 8h14v18H25zM22 26h20M26 35h12M24 43h16M27 51h10M29 26v29M35 26v29" /></svg>;
  return <svg viewBox="0 0 64 64"><path {...common} d="M10 31c9-6 35-6 44 0M10 43c9 6 35 6 44 0M17 27v8M27 26v9M37 26v9M47 27v8M17 39v8M27 38v9M37 38v9M47 39v8" /></svg>;
}

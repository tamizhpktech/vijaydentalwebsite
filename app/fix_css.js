const fs = require('fs');
const path = require('path');
const file = path.join('d:', 'tamizh work', 'client', 'vijaydentalwebsite', 'app', 'globals.css');
let css = fs.readFileSync(file, 'utf8');

// Replace Root
css = css.replace(/:root\s*\{[^}]+\}/, `:root {
  --pink-rgb: 47, 128, 237;
  --pink-blush: #EAF6FF;
  --ink: #1F2937;
  --muted: #46484d;
  --pink: #EAF6FF;
  --pink-strong: #2F80ED;
  --band: #F5F7FA;
  --primary-btn: #2F80ED;
  --secondary-btn: #2EC4B6;
  --hero-bg: #EAF6FF;
  --doctor-bg: #F5F7FA;
  --nav-bg: #FFFFFF;
  --line: rgba(16, 17, 19, .1);
  --shadow: 0 12px 26px rgba(0, 0, 0, .12);
  --radius: 14px;
  --container: 1376px;
  --h1: clamp(2.8rem, 4.5vw, 4.15rem);
  --h2: clamp(2.35rem, 4.4vw, 4.5rem);
  --h3: 1.35rem;
  --body: 1.125rem;
  --small: .95rem;
}`);

// Replace Primary Buttons
css = css.replace(
  /\.nav-cta,\s*\.book-nav-cta,\s*\.primary-btn\s*\{[^}]+background:\s*var\(--ink\);[^}]+\}/g,
  `.nav-cta,
.book-nav-cta,
.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--primary-btn);
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  padding: 15px 26px;
  box-shadow: 0 2px 0 rgba(255, 255, 255, .08) inset;
  transition: transform .2s ease, background .2s ease;
}`
);

// Replace Primary Hover
css = css.replace(
  /\.nav-cta:hover,\s*\.book-nav-cta:hover,\s*\.primary-btn:hover\s*\{[^}]+\}/g,
  `.nav-cta:hover,
.book-nav-cta:hover,
.primary-btn:hover {
  background: #1e66c9;
  transform: translateY(-1px);
}`
);

// Replace Soft Pill (Secondary)
css = css.replace(
  /\.soft-pill\s*\{[^}]+\}/g,
  `.soft-pill {
  display: inline-flex;
  border: 1px solid rgba(0, 0, 0, .08);
  border-radius: 999px;
  background: var(--secondary-btn);
  color: #fff;
  padding: 10px 16px;
  font-size: var(--small);
  font-weight: 650;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .04);
  backdrop-filter: blur(8px);
}`
);

fs.writeFileSync(file, css);

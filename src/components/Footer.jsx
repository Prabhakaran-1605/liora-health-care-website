import { Link } from 'react-router-dom';
import { Phone, Mail, Building2 } from 'lucide-react';
import services from '../data/services.js';

// Instagram icon
function InstagramGlyph(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.2"
        cy="6.8"
        r="0.6"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span className="font-serif text-xl">
            Liora{' '}
            <span className="italic font-normal text-sage-light">
              Health Care
            </span>
          </span>

          <p className="text-ivory/70 text-sm leading-relaxed max-w-xs">
            Personalized care for a balanced approach to wellbeing.
          </p>

          {/* Social Media */}
          {/* Social Media */}
<div className="flex items-center gap-3 pt-2">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/liora_healthcare/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Liora Health Care on Instagram"
    className="rounded-full border border-ivory/25 p-2 hover:border-gold hover:text-gold transition-colors"
  >
    <InstagramGlyph />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@Liorahealthcare"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Liora Health Care on YouTube"
    className="rounded-full border border-ivory/25 p-2 hover:border-gold hover:text-gold transition-colors"
  >
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.5 3.8-6.5 3.8Z" />
    </svg>
  </a>
</div>
        </div>

        {/* Quick Links */}
        <nav
          aria-label="Quick links"
          className="flex flex-col gap-3"
        >
          <h3 className="font-serif text-lg mb-1">
            Quick Links
          </h3>

          <Link
            to="/"
            className="text-ivory/70 hover:text-ivory text-sm transition-colors"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-ivory/70 hover:text-ivory text-sm transition-colors"
          >
            About
          </Link>

          <Link
            to="/services"
            className="text-ivory/70 hover:text-ivory text-sm transition-colors"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="text-ivory/70 hover:text-ivory text-sm transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Services */}
        <nav
          aria-label="Services"
          className="flex flex-col gap-3"
        >
          <h3 className="font-serif text-lg mb-1">
            Services
          </h3>

          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services#${s.slug}`}
              className="text-ivory/70 hover:text-ivory text-sm transition-colors"
            >
              {s.name}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-3 min-w-0">
          <h3 className="font-serif text-lg mb-1">
            Contact
          </h3>

          <a
            href="tel:+919843454211"
            className="flex items-center gap-2 text-ivory/70 hover:text-ivory text-sm transition-colors"
          >
            <Phone size={15} strokeWidth={2} />
            98434 54211
          </a>

          <a
            href="mailto:korakernaturals5@gmail.com"
            className="flex items-center gap-2 text-ivory/70 hover:text-ivory text-sm transition-colors break-all"
          >
            <Mail size={15} strokeWidth={2} className="shrink-0" />
            korakernaturals5@gmail.com
          </a>

          <span className="flex items-start gap-2 text-ivory/70 text-sm leading-relaxed">
            <Building2
              size={17}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0 text-sage-light"
            />

            <span>
              13 AKG Nagar Masakalipalayam singanallur opp to NGR School, Coimbatore – 641015
            </span>
          </span>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-ivory/50 text-center">
          &copy; {new Date().getFullYear()} Liora Health Care. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
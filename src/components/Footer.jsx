import { Link } from 'react-router-dom';
import { Phone, Mail, Building2  } from 'lucide-react';
import services from '../data/services.js';

// Lucide no longer ships trademarked brand marks, so these are drawn as
// simple, minimal line glyphs consistent with the rest of the icon set.
function InstagramGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2H15l-.5 3H11.5v6.5h-3V15h-2v-3h2v-2.2C8.5 7.5 10 6 12.5 6H15v2.5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="font-serif text-xl">
            Liora <span className="italic font-normal text-sage-light">Health Care</span>
          </span>
          <p className="text-ivory/70 text-sm leading-relaxed max-w-xs">
            Personalized care for a balanced approach to wellbeing.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
  href="https://www.instagram.com/liora_healthcare/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Liora Health Care on Instagram"
  className="rounded-full border border-ivory/25 p-2 hover:border-gold hover:text-gold transition-colors"
>
  <InstagramGlyph />
</a>
            <a
              href="#"
              aria-label="Liora Health Care on Facebook"
              className="rounded-full border border-ivory/25 p-2 hover:border-gold hover:text-gold transition-colors"
            >
              <FacebookGlyph />
            </a>
          </div>
        </div>

        <nav aria-label="Quick links" className="flex flex-col gap-3">
          <h3 className="font-serif text-lg mb-1">Quick Links</h3>
          <Link to="/" className="text-ivory/70 hover:text-ivory text-sm transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-ivory/70 hover:text-ivory text-sm transition-colors">
            About
          </Link>
          <Link to="/services" className="text-ivory/70 hover:text-ivory text-sm transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-ivory/70 hover:text-ivory text-sm transition-colors">
            Contact
          </Link>
        </nav>

        <nav aria-label="Services" className="flex flex-col gap-3">
          <h3 className="font-serif text-lg mb-1">Services</h3>
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

        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-lg mb-1">Contact</h3>
          <a href="tel:+10000000000" className="flex items-center gap-2 text-ivory/70 hover:text-ivory text-sm transition-colors">
            <Phone size={15} strokeWidth={2} />
            98434 54211
          </a>
          <a href="mailto:hello@example.com" className="flex items-center gap-2 text-ivory/70 hover:text-ivory text-sm transition-colors">
            <Mail size={15} strokeWidth={2} />
            korakernaturals5@gmail.com
          </a>
          <span className="flex items-center gap-2 text-ivory/70 text-sm">
            <Building2
    size={17}
    strokeWidth={1.5}
    className="mt-0.5 shrink-0 text-sage-light"
  />
            1/1, Kamban Nagar, Kamarajar Road, ESI, Vibgiyar School Opp, Coimbatore – 641015
          </span>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-ivory/50 text-center">
  &copy; {new Date().getFullYear()} Liora Health Care. All Rights Reserved.
</div>
      </div>
    </footer>
  );
}

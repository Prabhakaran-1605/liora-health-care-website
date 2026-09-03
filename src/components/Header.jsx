import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button.jsx';
import logo from '../assets/logo_image.jpeg';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-sm border-charcoal/10 py-3'
          : 'bg-ivory/70 backdrop-blur-sm border-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
  to="/"
  className="flex items-center"
  onClick={() => setOpen(false)}
>
  <img
    src={logo}
    alt="Liora Health Care"
    className="h-12 w-auto object-contain sm:h-14"
  />
  
</Link>


        <nav aria-label="Primary" className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative text-[0.95rem] transition-colors duration-200 ${
                  isActive ? 'text-forest' : 'text-charcoal/70 hover:text-forest'
                } after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                  isActive ? 'after:w-full' : 'after:w-0'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary">
            Book an Appointment
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-charcoal/15 p-2.5 text-forest"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-1 px-6 pb-6 pt-2 bg-ivory border-t border-charcoal/10"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 text-lg border-b border-charcoal/5 ${
                  isActive ? 'text-forest font-medium' : 'text-charcoal/75'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4">
            <Button to="/contact" variant="primary" className="w-full">
              Book an Appointment
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

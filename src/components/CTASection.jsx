import Button from './Button.jsx';
import Reveal from './Reveal.jsx';
import images from '../data/images.js';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={images.ctaBackground.src}
        alt={images.ctaBackground.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest-deep/85 to-forest-deep/90" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 sm:py-28 text-center flex flex-col items-center gap-6">
        <Reveal>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl text-ivory leading-tight">
            Begin Your Journey Toward Balance
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-ivory/80 text-[1.05rem] max-w-md">
            Discover a more personalized approach to wellbeing with Liora Health Care.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Button to="/contact" variant="gold" icon={ArrowRight}>
            Book an Appointment
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

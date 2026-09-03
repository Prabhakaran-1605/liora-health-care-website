import { ArrowRight } from 'lucide-react';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import Seo from '../components/Seo.jsx';
import CTASection from '../components/CTASection.jsx';
import services from '../data/services.js';

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Liora Health Care"
        description="Explore Liora Health Care's range of personalized therapies: TCM acupuncture, cupping therapy, cosmetic acupuncture, electro acupuncture and nutrition guidance."
      />

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-16 text-center sm:pt-24 lg:px-10">
        <span className="font-serif italic text-lg text-sage">What We Offer</span>
        <h1 className="mt-4 font-serif font-medium leading-[1.1] text-[2.4rem] sm:text-[3.2rem] text-charcoal">
          Our Services
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-charcoal/70">
          Explore our range of personalized therapies and wellness guidance.
        </p>
      </section>

      {/* SERVICE SECTIONS */}
      <div className="flex flex-col">
        {services.map((service, i) => {
          const reversed = i % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-24 py-16 sm:py-20 ${
                i % 2 === 0 ? 'bg-transparent' : 'bg-ivory-deep/60'
              }`}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div
                  className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                    reversed ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <Reveal>
                    <div className="overflow-hidden rounded-[2rem]">
                      <img
                        src={service.image.src}
                        alt={service.image.alt}
                        loading="lazy"
                        className="h-[340px] w-full object-cover sm:h-[400px]"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={100}>
                    <span className="font-serif italic text-lg text-sage">
                      Service {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-3 font-serif font-medium text-[1.9rem] sm:text-[2.2rem] text-charcoal leading-tight">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-[1.02rem] leading-relaxed text-charcoal/75">
                      {service.intro}
                    </p>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-medium text-forest mb-1.5">
                          What It Involves
                        </h3>
                        <p className="text-sm leading-relaxed text-charcoal/65">
                          {service.involves}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-forest mb-1.5">
                          Who It May Suit
                        </h3>
                        <p className="text-sm leading-relaxed text-charcoal/65">
                          {service.suitableFor}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7">
                      <Button to="/contact" variant="secondary" icon={ArrowRight}>
                        Book an Appointment
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection />
    </>
  );
}

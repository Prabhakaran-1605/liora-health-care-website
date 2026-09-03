import { ArrowRight, HeartHandshake, Leaf as LeafIcon, Users, Sparkles } from 'lucide-react';
import Button from '../components/Button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal from '../components/Reveal.jsx';
import Seo from '../components/Seo.jsx';
import services from '../data/services.js';
import images from '../data/images.js';

const features = [
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    text: 'Every visit is shaped around you \u2014 your history, your goals and how you\u2019re feeling that day.',
  },
  {
    icon: Sparkles,
    title: 'Holistic Perspective',
    text: 'We consider wellbeing from a broader perspective, rather than focusing on a single symptom alone.',
  },
  {
    icon: LeafIcon,
    title: 'Thoughtful Therapies',
    text: 'A considered range of traditional and complementary approaches, chosen to suit the individual.',
  },
  {
    icon: Users,
    title: 'Welcoming Environment',
    text: 'A calm, unhurried space designed so every visit feels comfortable from the moment you arrive.',
  },
];

const journey = [
  {
    step: '01',
    title: 'Understand',
    text: 'We begin with an unhurried conversation about your needs, history and wellbeing goals.',
  },
  {
    step: '02',
    title: 'Personalize',
    text: 'Together, we shape an approach and combination of therapies suited to you individually.',
  },
  {
    step: '03',
    title: 'Support',
    text: 'Your care continues with thoughtful guidance, adapting as your wellness journey evolves.',
  },
];

const testimonials = [
  {
    quote: 'A genuinely calm space \u2014 unhurried, attentive and thoughtfully personalized to what I needed.',
    name: 'Client Testimonial',
    detail: 'Placeholder review \u2014 replace with a real client quote',
  },
  {
    quote: 'I appreciated how much time was taken to understand my goals before any treatment began.',
    name: 'Client Testimonial',
    detail: 'Placeholder review \u2014 replace with a real client quote',
  },
  {
    quote: 'The whole experience, from booking to the session itself, felt considered and welcoming.',
    name: 'Client Testimonial',
    detail: 'Placeholder review \u2014 replace with a real client quote',
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Liora Health Care | Holistic Wellness & TCM Therapies"
        description="Personalized holistic wellness services inspired by Traditional Chinese Medicine, including acupuncture, cupping therapy and nutrition guidance."
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 sm:pb-28 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pt-24">
          <div className="relative z-10 flex flex-col gap-7">
            <span className="font-serif italic text-lg text-sage">Liora Health Care</span>
            <h1 className="font-serif font-medium leading-[1.05] text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] text-charcoal">
              Restore Balance.
              <br />
              Reconnect With Your Wellbeing.
            </h1>
            <p className="max-w-md text-[1.05rem] leading-relaxed text-charcoal/70">
              Personalized holistic care inspired by Traditional Chinese Medicine, combining
              time-honored therapeutic practices with a thoughtful approach to modern
              wellbeing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button to="/contact" variant="primary" icon={ArrowRight}>
                Book an Appointment
              </Button>
              <Button to="/services" variant="secondary">
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-sage-light/40 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-gold-light/30 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(44,61,46,0.4)]">
              <img
                src={images.heroPractitioner.src}
                alt={images.heroPractitioner.alt}
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
            </div>
            <svg
              className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 text-sage/50 sm:block"
              width="120"
              height="40"
              viewBox="0 0 120 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 20C20 5 40 35 60 20C80 5 100 35 118 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={images.introTreatment.src}
                alt={images.introTreatment.alt}
                loading="lazy"
                className="h-[380px] w-full object-cover sm:h-[440px]"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Welcome to Liora Health Care"
              heading="A Thoughtful Approach to Holistic Wellbeing"
              subtitle="Liora Health Care provides personalized wellness services designed around the individual. Our approach brings together Traditional Chinese Medicine practices and complementary therapies in a calm and welcoming environment."
            />
            <div className="pt-6">
              <Button to="/about" variant="ghost" icon={ArrowRight}>
                Learn More About Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ivory-deep/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              align="center"
              heading="Our Services"
              subtitle="Personalized therapies designed to support your journey toward balance and wellbeing."
            />
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LIORA */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10">
        <Reveal>
          <SectionHeading align="center" heading="Care That Begins With You" />
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-forest">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="font-serif text-lg text-charcoal">{title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/65">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TREATMENT EXPERIENCE */}
      <section className="bg-forest py-20 sm:py-28 text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              align="center"
              light
              heading="Your Wellness Journey, Thoughtfully Guided"
            />
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {journey.map(({ step, title, text }, i) => (
              <Reveal key={step} delay={i * 100}>
                <div className="relative flex gap-6 lg:flex-col lg:gap-5">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="font-serif text-3xl text-gold-light">{step}</span>
                    {i < journey.length - 1 && (
                      <span
                        className="mt-2 w-px flex-1 bg-ivory/15 lg:mt-4 lg:h-px lg:w-full lg:flex-none"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="pb-8 lg:pb-0">
                    <h3 className="font-serif text-xl mb-2">{title}</h3>
                    <p className="text-ivory/70 text-sm leading-relaxed max-w-xs">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10">
        <Reveal>
          <SectionHeading align="center" heading="What Our Clients Say" />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

import { ArrowRight, Ear, UserCheck, ScrollText, Sprout, Clock } from 'lucide-react';
import Button from '../components/Button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Seo from '../components/Seo.jsx';
import images from '../data/images.js';

const approach = [
  {
    icon: Ear,
    title: 'Listening to Individual Needs',
    text: 'Every conversation starts with listening \u2014 to your history, your goals and how you\u2019re feeling right now.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Care',
    text: 'No two treatment plans look the same, because no two people are the same.',
  },
  {
    icon: ScrollText,
    title: 'Traditional Approaches',
    text: 'We draw on time-honored Traditional Chinese Medicine practices, applied with care and precision.',
  },
  {
    icon: Sprout,
    title: 'Complementary Therapies',
    text: 'Traditional practices are thoughtfully combined with complementary therapies suited to you.',
  },
  {
    icon: Clock,
    title: 'Long-Term Wellbeing',
    text: 'We think in terms of an ongoing journey, not a single visit \u2014 supporting you over time.',
  },
];

const different = [
  {
    title: 'A Calm, Unhurried Setting',
    text: 'Every session is given the time it needs, in a space designed to feel welcoming rather than clinical.',
  },
  {
    title: 'A Whole-Person View',
    text: 'We look at wellbeing broadly, rather than treating a single concern in isolation.',
  },
  {
    title: 'Considered, Careful Language',
    text: 'We describe our therapies honestly, without exaggerated claims or guarantees.',
  },
  {
    title: 'A Practice, Not a Product',
    text: 'Wellbeing is approached as an ongoing relationship between you and your care.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Liora Health Care | Personalized Wellness"
        description="Learn about Liora Health Care's holistic philosophy, our approach to personalized care, and what makes our practice different."
      />

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-16 text-center sm:pt-24 lg:px-10">
        <span className="font-serif italic text-lg text-sage">Our Story</span>
        <h1 className="mt-4 font-serif font-medium leading-[1.1] text-[2.4rem] sm:text-[3.2rem] text-charcoal">
          About Liora Health Care
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-charcoal/70">
          Personalized care rooted in balance, wellbeing and thoughtful practice.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:pb-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={images.aboutPhilosophy.src}
                alt={images.aboutPhilosophy.alt}
                loading="lazy"
                className="h-[360px] w-full object-cover sm:h-[420px]"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Our Philosophy"
              heading="Wellbeing as an Ongoing Balance"
              subtitle="We see wellbeing as a balance that shifts over time, shaped by rest, movement, nutrition and how we manage the demands of everyday life. Rather than focusing on a single symptom, our practice looks at the fuller picture \u2014 drawing on Traditional Chinese Medicine and complementary therapies to support that balance, one thoughtful step at a time."
            />
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-ivory-deep/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionHeading align="center" heading="Our Approach" />
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="flex flex-col gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-forest">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif text-lg text-charcoal">{title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal/65">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={images.aboutApproach.src}
                alt={images.aboutApproach.alt}
                loading="lazy"
                className="h-[360px] w-full object-cover sm:h-[420px]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionHeading eyebrow="What Makes Us Different" heading="A Practice Built Around You" />
            </Reveal>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {different.map(({ title, text }, i) => (
                <Reveal key={title} delay={i * 60}>
                  <div className="border-l-2 border-sage/50 pl-5">
                    <h3 className="font-serif text-lg text-charcoal mb-1.5">{title}</h3>
                    <p className="text-sm leading-relaxed text-charcoal/65">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center sm:pb-32">
        <Reveal>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl text-charcoal leading-tight">
            Ready to Begin Your Wellness Journey?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              Book an Appointment
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

import { Quote } from 'lucide-react';

export default function TestimonialCard({ quote, name, detail }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-charcoal/10 bg-ivory p-8">
      <Quote size={26} strokeWidth={1.5} className="text-gold" aria-hidden="true" />
      <blockquote className="text-[1.05rem] leading-relaxed text-charcoal/85 font-serif italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex flex-col">
        <span className="text-sm font-medium text-charcoal">{name}</span>
        <span className="text-xs text-charcoal/55">{detail}</span>
      </figcaption>
    </figure>
  );
}

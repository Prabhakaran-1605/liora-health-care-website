import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services#${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-20px_rgba(44,61,46,0.35)] focus-visible:-translate-y-1.5"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image.src}
          alt={service.image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif text-xl text-charcoal">{service.name}</h3>
        <p className="text-sm leading-relaxed text-charcoal/70 flex-1">{service.short}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-forest">
          Explore Service
          <ArrowRight
            size={15}
            strokeWidth={1.75}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

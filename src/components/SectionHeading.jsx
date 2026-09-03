export default function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  align = 'left',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} max-w-xl gap-4`}>
      {eyebrow && (
        <span
          className={`font-serif italic text-lg ${light ? 'text-sage-light' : 'text-sage'}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif font-medium leading-[1.1] text-[2.1rem] sm:text-[2.6rem] ${light ? 'text-ivory' : 'text-charcoal'}`}
      >
        {heading}
      </h2>
      {subtitle && (
        <p className={`text-[1.05rem] leading-relaxed max-w-md ${light ? 'text-ivory/80' : 'text-charcoal/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

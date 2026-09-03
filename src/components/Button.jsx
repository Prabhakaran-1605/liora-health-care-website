import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-forest text-ivory hover:bg-forest-deep border border-forest',
  secondary:
    'bg-transparent text-forest border border-forest hover:bg-forest hover:text-ivory',
  gold:
    'bg-gold text-ivory hover:bg-gold-light border border-gold',
  ghost:
    'bg-transparent text-forest border border-transparent hover:border-forest/30',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  icon: Icon,
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.95rem] font-medium tracking-wide rounded-full transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {Icon && <Icon size={17} strokeWidth={1.75} />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {Icon && <Icon size={17} strokeWidth={1.75} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {Icon && <Icon size={17} strokeWidth={1.75} />}
    </button>
  );
}

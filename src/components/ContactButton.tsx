interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function ContactButton({
  label = 'Contact Me',
  onClick,
  href,
  className = '',
}: ContactButtonProps) {
  const style = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
    outline: '2px solid #E3E3E3',
    outlineOffset: '-3px',
  };

  const baseClass = `inline-flex items-center justify-center rounded-full overflow-hidden
    px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-4.5 lg:px-14 lg:py-5 xl:px-16 xl:py-6
    text-white font-medium uppercase tracking-widest
    text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
    transition-all duration-200 hover:opacity-90 active:opacity-75 hover:scale-[1.02] active:scale-[0.98]
    whitespace-nowrap cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <a href={href} style={style} className={baseClass}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={style} className={baseClass}>
      {label}
    </button>
  );
}

interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function LiveProjectButton({
  href,
  label = 'Live Project',
  onClick,
  className = '',
}: LiveProjectButtonProps) {
  const baseClass = `inline-flex items-center justify-center rounded-full
    border-2 border-[#D7E2EA]
    px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-4.5 lg:px-14 lg:py-5 xl:px-16 xl:py-6
    text-[#D7E2EA] font-medium uppercase tracking-widest
    text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
    transition-all duration-200 hover:bg-[#D7E2EA]/10 active:bg-[#D7E2EA]/20 hover:scale-[1.02] active:scale-[0.98]
    whitespace-nowrap cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {label}
    </button>
  );
}

import { useEffect, useRef } from 'react';

const IMAGES = [
  '/projects/1.png',
  '/projects/2.png',
  '/projects/3.png',
  '/projects/4.png',
  '/projects/5.png',
  '/projects/6.png',
  '/projects/7.png',
  '/projects/8.png',
  '/projects/9.png',
  '/projects/12.png',
];

const ROW_1 = IMAGES.slice(0, 5);
const ROW_2 = IMAGES.slice(5, 9);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollOffsetRef = useRef(0);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrolled = window.scrollY - sectionTop + window.innerHeight;
      const offset = scrolled * 0.3;

      scrollOffsetRef.current = offset;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 360}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 170)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="marquee"
      ref={sectionRef}
      className="w-full overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
        <div className="overflow-hidden w-full">
          <div
            ref={row1Ref}
            className="flex gap-3 sm:gap-4 md:gap-5"
            style={{
              willChange: 'transform',
              transform: 'translateX(-200px)',
            }}
          >
            {[...ROW_1, ...ROW_1, ...ROW_1].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-600 w-[280px] sm:w-[360px] md:w-[380px] lg:w-[420px] xl:w-[460px] h-[180px] sm:h-[230px] md:h-[245px] lg:h-[270px] xl:h-[295px] transition-all duration-300 shadow-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <div
            ref={row2Ref}
            className="flex gap-3 sm:gap-4 md:gap-5"
            style={{
              willChange: 'transform',
              transform: 'translateX(200px)',
            }}
          >
            {[...ROW_2, ...ROW_2, ...ROW_2].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-600 w-[280px] sm:w-[360px] md:w-[380px] lg:w-[420px] xl:w-[460px] h-[180px] sm:h-[230px] md:h-[245px] lg:h-[270px] xl:h-[295px] transition-all duration-300 shadow-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import ContactButton from './ContactButton';
import FadeIn from './FadeIn';

export default function HeroSection() {
  return (
    <section className="min-h-[70vh] sm:min-h-screen flex flex-col overflow-y-visible relative" style={{ overflowX: 'clip' }}>
      <div className="flex flex-col flex-1 px-5 sm:px-8 md:px-12 max-w-[1920px] w-full mx-auto relative z-10 pointer-events-none pt-4 md:pt-28 lg:pt-32">
        <FadeIn delay={0.15} y={40} className="pt-20 md:pt-0 mt-8 sm:mt-6 md:-mt-2 lg:-mt-5 overflow-hidden">
          <h1
            className="hero-heading font-bold uppercase leading-none tracking-tight whitespace-nowrap w-full"
            style={{ fontSize: 'clamp(4.2rem, 15vw, 30rem)' }}
          >
            Hi i&apos;m
          </h1>
          <h1
            className="hero-heading font-bold uppercase leading-none tracking-tight whitespace-nowrap w-full"
            style={{ fontSize: 'clamp(4.2rem, 15vw, 30rem)' }}
          >
            Kartik
          </h1>
        </FadeIn>

        <div className="sm:flex-1 my-8 sm:my-0 min-h-[20px] sm:min-h-[40px] md:min-h-[60px]" />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 sm:gap-4 pb-8 sm:pb-12 md:pb-16 w-full">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug w-full sm:max-w-[240px] md:max-w-[320px] lg:max-w-[420px]"
              style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.5rem)' }}
            >
              A creator obsessed with building sleek, impactful, and unforgettable web experiences.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20} className="pointer-events-auto w-full sm:w-auto flex justify-start sm:justify-end">
            <ContactButton label="Download CV" onClick={() => window?.open('/files/CV.pdf', '_blank')} className="w-full sm:w-auto" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}



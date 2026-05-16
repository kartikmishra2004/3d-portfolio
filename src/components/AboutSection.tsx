import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-24 sm:py-32 relative overflow-hidden">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon icon"
          className="w-[70px] sm:w-[130px] md:w-[180px] lg:w-[220px] xl:w-[260px] h-auto opacity-25 sm:opacity-60 md:opacity-90 lg:opacity-100 transition-opacity duration-300"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          className="w-[60px] sm:w-[110px] md:w-[150px] lg:w-[190px] xl:w-[230px] h-auto opacity-25 sm:opacity-60 md:opacity-90 lg:opacity-100 transition-opacity duration-300"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego icon"
          className="w-[70px] sm:w-[130px] md:w-[180px] lg:w-[220px] xl:w-[260px] h-auto opacity-25 sm:opacity-60 md:opacity-90 lg:opacity-100 transition-opacity duration-300"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group"
          className="w-[75px] sm:w-[140px] md:w-[190px] lg:w-[230px] xl:w-[280px] h-auto opacity-25 sm:opacity-60 md:opacity-90 lg:opacity-100 transition-opacity duration-300"
        />
      </FadeIn>

      <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 lg:gap-28 max-w-7xl xl:max-w-[1600px] w-full relative z-10 mx-auto">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 lg:gap-20 w-full">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text="A full-stack developer driven by crafting sleek, immersive, and unforgettable digital experiences. Passionate about blending modern aesthetics with scalable engineering to build products that are visually striking, performance-focused, and built for real-world impact.

Focused on creating polished web and mobile applications with seamless interactions, clean architecture, and modern user experiences."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0.3} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}

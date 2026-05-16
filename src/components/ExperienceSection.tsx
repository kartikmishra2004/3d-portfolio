import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const experiences = [
  {
    number: '01',
    role: 'Mobile Developer (Contract)',
    company: 'SquarFT',
    period: 'Mar 2026 - Present',
    logoUrl: '/squarft_logo.png',
    href: 'https://squarft.com',
    highlights: [
      'Engineered highly performant, smooth cross-platform mobile interfaces for iOS and Android using React Native for a premier real estate platform.',
      'Integrated robust RESTful APIs and backend services to power real-time property listings, dynamic search filters, and seamless user navigation.',
    ],
  },
  {
    number: '02',
    role: 'Software Development Engineer',
    company: 'Indori Coders Pvt. Ltd.',
    period: 'Jun 2025 - Present',
    logoUrl: '/indoricoders_logo.png',
    href: 'https://www.indoricoders.com/',
    highlights: [
      'Developed scalable web and mobile applications using React, Next.js, and React Native with responsive, user-centric interfaces.',
      'Built and optimized secure RESTful APIs for microservices, ensuring high performance, scalability, and seamless data integration.',
    ],
  },
  {
    number: '03',
    role: 'Frontend Engineer (Contract)',
    company: 'Technobren Pvt. Ltd.',
    period: 'Jul 2025 - Sep 2025',
    logoUrl: '/technobren_logo.png',
    href: 'https://technobren.com/',
    highlights: [
      'Built frontend features and enhanced UX for an Africa-based music streaming app in close collaboration with remote teams and clients.',
      'Integrated REST APIs and backend services for authentication, playlists, and real-time interaction while optimizing application performance.',
    ],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  const borderTopLeftRadius = useTransform(scrollYProgress, [0.2, 1], ['60px', '0px']);
  const borderTopRightRadius = useTransform(scrollYProgress, [0.2, 1], ['60px', '0px']);

  return (
    <motion.section
      id="experience"
      ref={sectionRef}
      className="flex flex-col px-5 sm:px-8 md:px-10 py-12 sm:py-24 md:py-32"
      style={{
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius,
        borderTopRightRadius,
      }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center w-full mb-10 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 10vw, 150px)', color: '#0C0C0C' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="flex flex-col w-full items-center">
        {experiences.map((exp, i) => (
          <FadeIn
            key={exp.number}
            delay={i * 0.1}
            y={30}
            className="flex flex-col items-center w-full max-w-5xl"
          >
            {i > 0 && (
              <div
                className="w-full"
                style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
              />
            )}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-5 sm:gap-8 lg:gap-12 py-6 sm:py-10 md:py-12 w-full border-t border-black/15">
              <div className="flex flex-col gap-2 sm:gap-3 lg:max-w-md w-full">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-[11px] sm:text-xs px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/80 text-white uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>
                <h3
                  className="font-bold text-black/90 uppercase leading-tight tracking-tight mt-1 sm:mt-2"
                  style={{ fontSize: 'clamp(1.3rem, 3vw, 2.5rem)' }}
                >
                  {exp.role}
                </h3>
                <a
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 mt-1 sm:mt-2 pt-2 sm:pt-3 border-t border-black/10 w-fit group cursor-pointer"
                >
                  <img src={exp.logoUrl} alt={exp.company} className="h-10 sm:h-14 w-auto object-contain flex-shrink-0" />
                  <span className="font-bold tracking-wide text-[#0C0C0C]/80 transition-colors duration-200" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}>
                    {exp.company}
                  </span>
                </a>
              </div>

              <div className="flex flex-col gap-3 sm:gap-5 lg:max-w-2xl w-full pt-1 sm:pt-2 lg:pt-0">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 sm:gap-4 group">
                    <span className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0C0C0C]/70 mt-1.5 sm:mt-2 group-hover:scale-125 transition-transform duration-300" />
                    <p
                      className="font-normal leading-relaxed text-[#0C0C0C]/70 transition-colors duration-300"
                      style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    >
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </motion.section>
  );
}


import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FadeIn from './FadeIn';

const projects = [
  {
    number: '01',
    category: 'Roofing Landing Page',
    name: 'Rooftop Heroes',
    href: 'https://rooftop-heroes.vercel.app',
    images: {
      col1: [
        '/images/rooftop-heroes-2.png',
        '/images/rooftop-heroes-3.png',
      ],
      col2: '/images/rooftop-heroes-1.png',
    },
  },
  {
    number: '02',
    category: 'Ecommerce Platform',
    name: 'Zolivine',
    href: 'https://zolivine.vercel.app',
    images: {
      col1: [
        '/images/zolivine-3.png',
        '/images/zolivine-2.png',
      ],
      col2: '/images/zolivine-1.png',
    },
  },
  {
    number: '03',
    category: 'AI Travel Assistant',
    name: 'Voyager',
    href: 'https://tryvoyagerai.com',
    images: {
      col1: [
        '/images/voyager-2.png',
        '/images/voyager-3.png',
      ],
      col2: '/images/voyager-1.png',
    },
  },
  {
    number: '04',
    category: 'Music Collaboration Platform',
    name: 'Ordiio',
    href: 'https://app.ordiio.com',
    images: {
      col1: [
        '/images/ordiio-2.png',
        '/images/ordiio-3.png',
      ],
      col2: '/images/ordiio-1.png',
    },
  },
  {
    number: '05',
    category: 'Real Estate Landing Page',
    name: 'SquarFT',
    href: 'https://play.google.com/store/apps/details?id=com.build.wahu',
    images: {
      col1: [
        '/images/sq2.png',
        '/images/sq3.png',
      ],
      col2: '/images/sq1.png',
    },
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress: radiusProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const borderTopLeftRadius = useTransform(radiusProgress, [0.2, 1], ['60px', '0px']);
  const borderTopRightRadius = useTransform(radiusProgress, [0.2, 1], ['60px', '0px']);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <motion.section
      id="portfolio"
      ref={containerRef}
      className="relative px-1.5 sm:px-8 md:px-12 -mt-10 sm:-mt-12 md:-mt-14 z-10 pb-24 sm:pb-32 md:pb-48"
      style={{
        backgroundColor: '#0C0C0C',
        borderTopLeftRadius,
        borderTopRightRadius,
      }}
    >
      <div className="flex flex-col items-center py-24 sm:py-32 md:py-40">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Portfolio
          </h2>
        </FadeIn>
      </div>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.number}
          project={project}
          index={index}
          totalCards={projects.length}
          progress={scrollYProgress}
        />
      ))}
    </motion.section>
  );
}



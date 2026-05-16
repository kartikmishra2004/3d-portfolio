import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FadeIn from './FadeIn';

const projects = [
  {
    number: '01',
    category: 'Client',
    name: 'Rooftop Heroes',
    href: 'https://rooftop-heroes.vercel.app',
    images: {
      col1: [
        '/images/project-rooftop-heroes.png',
        '/images/project-rooftop-heroes.png',
      ],
      col2: '/images/project-rooftop-heroes.png',
    },
  },
  {
    number: '02',
    category: 'Client',
    name: 'Zolivine',
    href: 'https://zolivine.vercel.app',
    images: {
      col1: [
        '/images/project-zolivine.png',
        '/images/project-zolivine.png',
      ],
      col2: '/images/project-zolivine.png',
    },
  },
  {
    number: '03',
    category: 'Personal',
    name: 'Voyager',
    href: 'https://tryvoyagerai.com',
    images: {
      col1: [
        '/images/project-voyager.png',
        '/images/project-voyager.png',
      ],
      col2: '/images/project-voyager.png',
    },
  },
  {
    number: '04',
    category: 'Client',
    name: 'Ordiio',
    href: 'https://app.ordiio.com',
    images: {
      col1: [
        '/images/project-ordiio.png',
        '/images/project-ordiio.png',
      ],
      col2: '/images/project-ordiio.png',
    },
  },
  {
    number: '05',
    category: 'Client',
    name: 'Wahu Hero',
    href: 'https://play.google.com/store/apps/details?id=com.build.wahu',
    images: {
      col1: [
        '/images/project-wahu.png',
        '/images/project-wahu.png',
      ],
      col2: '/images/project-wahu.png',
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
      id="work"
      ref={containerRef}
      className="relative px-5 sm:px-8 md:px-12 -mt-10 sm:-mt-12 md:-mt-14 z-10 pb-24 sm:pb-32 md:pb-48"
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
            Work
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



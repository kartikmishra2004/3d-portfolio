import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const skills = [
  { label: 'HTML', logoUrl: '/logos/icon-html.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { label: 'CSS', logoUrl: '/logos/icon-css.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { label: 'Javascript', logoUrl: '/logos/icon-javascript.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { label: 'Typescript', logoUrl: '/logos/icon-typescript.svg', url: 'https://www.typescriptlang.org/' },
  { label: 'React', logoUrl: '/logos/icon-react.svg', url: 'https://react.dev/' },
  { label: 'Next.js', logoUrl: '/logos/icon-nextjs.svg', url: 'https://nextjs.org/' },
  { label: 'Node.js', logoUrl: '/logos/icon-nodejs.svg', url: 'https://nodejs.org/en' },
  { label: 'Express.js', logoUrl: '/logos/icon-express.svg', url: 'https://expressjs.com/' },
  { label: 'Socket.io', logoUrl: '/logos/icon-socket.svg', url: 'https://socket.io/' },
  { label: 'PostgreSQL', logoUrl: '/logos/icon-postgresql.svg', url: 'https://www.postgresql.org/' },
  { label: 'MongoDB', logoUrl: '/logos/icon-mongodb.svg', url: 'https://www.mongodb.com/' },
  { label: 'Tailwindcss', logoUrl: '/logos/icon-tailwindcss.svg', url: 'https://tailwindcss.com/' },
  { label: 'Figma', logoUrl: '/logos/icon-figma.svg', url: 'https://www.figma.com/' },
  { label: 'Git', logoUrl: '/logos/icon-git.svg', url: 'https://git-scm.com/' },
  { label: 'Firebase', logoUrl: '/logos/icon-firebase.svg', url: 'https://firebase.google.com/' },
  { label: 'Supabase', logoUrl: '/logos/icon-supabase.svg', url: 'https://supabase.com/' },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  const borderTopLeftRadius = useTransform(scrollYProgress, [0.2, 1], ['60px', '0px']);
  const borderTopRightRadius = useTransform(scrollYProgress, [0.2, 1], ['60px', '0px']);

  return (
    <motion.section
      id="skills"
      ref={sectionRef}
      className="relative flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 z-20"
      style={{
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius,
        borderTopRightRadius,
      }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 10vw, 150px)', color: '#0C0C0C' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="flex flex-col w-full items-center">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-6 max-w-5xl w-full">
          {skills.map((skill, index) => (
            <FadeIn key={skill.label} delay={index * 0.05} y={30} className="w-full">
              <a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 sm:gap-3 p-2.5 sm:p-5 md:p-6 rounded-xl sm:rounded-3xl bg-[#F8F9FA] border border-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(12,12,12,0.1)] hover:border-black/15 group cursor-pointer h-full shadow-sm"
              >
                <div className="w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img src={skill.logoUrl} alt={skill.label} className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-[#0C0C0C] text-[10px] sm:text-base tracking-tight text-center truncate w-full px-0.5 sm:px-1">
                  {skill.label}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

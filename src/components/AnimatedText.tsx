import { useRef, Fragment } from 'react';
import { motion, useScroll, useTransform, UseScrollOptions } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  scrollOffset?: UseScrollOptions['offset'];
}

export default function AnimatedText({
  text,
  className = '',
  style,
  scrollOffset = ['start 0.8', 'end 0.2'],
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: scrollOffset,
  });

  const words = text.split(' ');
  const totalChars = text.replace(/\s+/g, '').length;
  let charCount = 0;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIdx) => (
        <Fragment key={wordIdx}>
          <span className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIdx) => {
              const currentIdx = charCount++;
              return (
                <AnimatedLetter
                  key={charIdx}
                  char={char}
                  scrollYProgress={scrollYProgress}
                  index={currentIdx}
                  total={totalChars}
                />
              );
            })}
          </span>
          {wordIdx < words.length - 1 && ' '}
        </Fragment>
      ))}
    </p>
  );
}

interface AnimatedLetterProps {
  char: string;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  index: number;
  total: number;
}

function AnimatedLetter({
  char,
  scrollYProgress,
  index,
  total,
}: AnimatedLetterProps) {
  const charProgress = index / total;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">
        {char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-[#D7E2EA]"
      >
        {char}
      </motion.span>
    </span>
  );
}


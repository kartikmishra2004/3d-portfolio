import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = ['About', 'Experience', 'Portfolio', 'Skills', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed md:relative top-0 left-0 w-full flex justify-between items-center py-4 md:py-8 px-5 sm:px-8 md:px-0 max-w-[1800px] mx-auto z-50 pointer-events-auto bg-[#0C0C0C] md:bg-transparent border-b border-white/10 md:border-none transition-all duration-300">
      <div className="hidden md:flex justify-between items-center w-full">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] text-sm md:text-base lg:text-lg xl:text-xl font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200 cursor-pointer pointer-events-auto"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex md:hidden justify-between items-center w-full">
        <a href="#" className="text-[#D7E2EA] font-black text-xl tracking-wider uppercase">
          KM
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#D7E2EA] p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer pointer-events-auto z-50"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-full left-0 w-full bg-[#0C0C0C] border-b border-white/10 rounded-none p-6 flex flex-col gap-6 shadow-2xl md:hidden z-50 max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.1, duration: 0.2 }}
                className="text-[#D7E2EA] text-xl font-semibold uppercase tracking-wider py-2 border-b border-white/5 hover:text-white hover:pl-2 transition-all duration-200 cursor-pointer pointer-events-auto flex items-center justify-between"
              >
                <span>{link}</span>
                <span className="text-xs font-light opacity-40">0{i + 1}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


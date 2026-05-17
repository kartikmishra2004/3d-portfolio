import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Github, Linkedin, Facebook, Copy, Check, ExternalLink } from 'lucide-react';
import FadeIn from './FadeIn';

export default function ContactSection() {

  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const contactItems = [
    {
      type: 'email',
      label: 'Email',
      value: 'kmwork2004@gmail.com',
      copyValue: 'kmwork2004@gmail.com',
      icon: Mail,
      href: 'mailto:kmwork2004@gmail.com',
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: '+91 7879063730',
      copyValue: '+917879063730',
      icon: MessageCircle,
      href: 'https://wa.me/917879063730',
    },
    {
      type: 'instagram',
      label: 'Instagram',
      value: '@kmwork.shop',
      copyValue: '@kmwork.shop',
      icon: Instagram,
      href: 'https://instagram.com/kmwork.shop',
    },
    {
      type: 'facebook',
      label: 'Facebook',
      value: 'Kartik Mishra',
      copyValue: 'https://www.facebook.com/profile.php?id=61589475123566',
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61589475123566',
    },
    {
      type: 'github',
      label: 'GitHub',
      value: '@kartikmishra2004',
      copyValue: 'https://github.com/kartikmishra2004',
      icon: Github,
      href: 'https://github.com/kartikmishra2004',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'kartikmishra2004',
      copyValue: 'https://www.linkedin.com/in/kartikmishra2004/',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/kartikmishra2004/',
    },
  ];

  return (
    <motion.section
      id="contact"
      className="relative flex flex-col items-center justify-center py-16 sm:py-36 md:py-20 px-5 -mt-10 sm:-mt-12 md:-mt-14 z-30 w-full text-center rounded-t-[40px] sm:rounded-t-[60px] overflow-hidden"
      style={{
        backgroundColor: '#0C0C0C',
      }}
    >
      <FadeIn delay={0} y={30}>
        <h2 className="font-black uppercase leading-none tracking-tight text-white mb-4 sm:mb-8" style={{ fontSize: 'clamp(1.8rem, 8vw, 90px)' }}>
          Let&apos;s Work Together
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={30}>
        <p className="text-[#D7E2EA] font-light max-w-xl mb-8 sm:mb-16 leading-relaxed text-xs sm:text-base" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.25rem)' }}>
          Have a project in mind or want to explore how we can collaborate? Drop me a message and let&apos;s craft something spectacular.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-2.5 sm:gap-4 w-full max-w-md items-center">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const isCopied = copiedType === item.type;
            const isPlainText = item.type === 'email' || item.type === 'instagram';

          return (
            <FadeIn key={item.type} delay={0.3 + index * 0.1} y={30} className="w-full">
              <div className="flex items-center justify-between gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 w-full group text-left shadow-sm">
                <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#18011F] via-[#B600A8] to-[#BE4C00] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[10px] sm:text-xs text-[#D7E2EA]/60 uppercase tracking-wider font-medium leading-none mb-0.5 sm:mb-1">
                      {item.label}
                    </span>
                    <span
                      className={isPlainText ? 'text-xs sm:text-base font-normal text-[#D7E2EA]/85 truncate leading-none' : 'text-xs sm:text-base font-bold text-white tracking-wide truncate leading-none'}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleCopy(item.copyValue, item.type)}
                    className="p-2 sm:p-2.5 rounded-md sm:rounded-lg bg-white/5 hover:bg-white/15 text-[#D7E2EA] hover:text-white transition-colors duration-200 relative group/btn cursor-pointer"
                    aria-label="Copy to clipboard"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-white/10 shadow-md">
                      {isCopied ? 'Copied!' : 'Copy'}
                    </span>
                  </button>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-md sm:rounded-lg bg-white/5 hover:bg-white/15 text-[#D7E2EA] hover:text-white transition-colors duration-200 cursor-pointer"
                    aria-label={`Open ${item.label}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </motion.section>
  );
}

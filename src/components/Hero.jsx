import { motion } from 'framer-motion';

const mathSymbols = [
  { sym: '∫', x: '8%',  y: '18%', size: '3.5rem', dur: 18 },
  { sym: 'Σ', x: '82%', y: '12%', size: '3rem',   dur: 22 },
  { sym: 'μ', x: '68%', y: '72%', size: '2.5rem', dur: 16 },
  { sym: 'σ', x: '18%', y: '78%', size: '2.8rem', dur: 20 },
  { sym: 'π', x: '92%', y: '48%', size: '3.2rem', dur: 24 },
  { sym: '∞', x: '48%', y: '88%', size: '2.8rem', dur: 19 },
  { sym: 'Δ', x: '38%', y: '8%',  size: '2.5rem', dur: 21 },
  { sym: '√', x: '76%', y: '38%', size: '3rem',   dur: 17 },
  { sym: 'θ', x: '4%',  y: '52%', size: '2.5rem', dur: 23 },
  { sym: 'λ', x: '42%', y: '28%', size: '2.8rem', dur: 15 },
  { sym: 'φ', x: '58%', y: '62%', size: '2.2rem', dur: 25 },
  { sym: '∂', x: '28%', y: '42%', size: '2.5rem', dur: 20 },
];

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0B1C2D 0%, #132D42 50%, #1F7A8C 100%)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating math symbols */}
      {mathSymbols.map((item, i) => (
        <motion.span
          key={i}
          className="absolute select-none pointer-events-none font-serif"
          style={{
            left: item.x,
            top: item.y,
            fontSize: item.size,
            color: 'rgba(212, 175, 55, 0.12)',
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 15, 0, -15, 0],
            rotate: [0, 8, 0, -8, 0],
          }}
          transition={{ duration: item.dur, repeat: Infinity, ease: 'easeInOut' }}
        >
          {item.sym}
        </motion.span>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 md:px-16 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base font-sans font-medium tracking-[0.3em] uppercase text-accent mb-8 md:mb-10"
        >
          Mathematics &amp; Statistics Educator
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 md:mb-10"
          style={{ lineHeight: 1.1 }}
        >
          Sujisha <span className="text-accent">K</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans font-light text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed"
        >
          Simplifying Complex Concepts with Clarity &amp; Precision
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#experience"
            onClick={(e) => scrollTo(e, '#experience')}
            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-lg text-sm font-semibold font-sans tracking-wide bg-accent text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
            id="cta-experience"
          >
            View Experience
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-lg text-sm font-semibold font-sans tracking-wide text-white border border-white/30 bg-white/5 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            id="cta-contact"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center pt-2.5">
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
}

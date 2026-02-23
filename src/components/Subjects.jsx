import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const subjectCategories = [
  {
    category: 'School Level',
    subjects: [
      'IGCSE Mathematics',
      'AS & A Level Mathematics',
      'CBSE Mathematics (Grades 8–12)',
    ],
  },
  {
    category: 'University Level',
    subjects: [
      'UG Statistics',
      'PG Statistics',
      'Probability Theory',
      'Central Limit Theorem',
      'Statistical Inference',
    ],
  },
];

export default function Subjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="subjects" className="chalkboard py-20 md:py-28 lg:py-32 px-6 md:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-[13px] font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Areas of Expertise
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white">
            Subjects
          </h2>
          <div className="axis-divider max-w-[200px] mx-auto mt-7" />
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 max-w-4xl mx-auto">
          {subjectCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <h3 className="font-sans text-lg font-semibold text-accent mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-accent inline-block" />
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {cat.subjects.map((subj, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + j * 0.08 }}
                    className="font-sans text-[13px] md:text-sm font-medium text-white/85 px-6 py-3.5 rounded-lg bg-white/[0.05] border border-white/10 cursor-default transition-all duration-300 hover:-translate-y-0.5"
                    whileHover={{
                      borderColor: 'rgba(212, 175, 55, 0.5)',
                      boxShadow: '0 0 24px rgba(212, 175, 55, 0.08)',
                    }}
                  >
                    {subj}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

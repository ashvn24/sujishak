import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen, FiAward, FiStar } from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { PiCertificate } from 'react-icons/pi';

const educationData = [
  {
    degree: 'B.Ed in Mathematics',
    institution: 'PGP College of Education',
    year: '2025 – Present',
    icon: <HiOutlineAcademicCap size={22} />,
    description: 'Currently pursuing Bachelor of Education specializing in Mathematics pedagogy.',
  },
  {
    degree: 'MSc in Statistics',
    institution: 'Yenepoya University',
    year: '2024',
    icon: <FiAward size={22} />,
    description: 'Master of Science in Statistics with a strong foundation in statistical theory, inference, and data analysis.',
  },
  {
    degree: 'BSc Triple Main (Economics, Statistics, Mathematics)',
    institution: 'St Aloysius Autonomous College',
    year: '2021',
    icon: <FiBookOpen size={22} />,
    description: 'Triple-major undergraduate degree combining Economics, Statistics, and Mathematics.',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Kerala Board',
    year: '84%',
    icon: <PiCertificate size={22} />,
    description: 'Completed higher secondary education under the Kerala State Board with distinction.',
  },
  {
    degree: 'SSLC',
    institution: 'Chinmaya Vidyalaya',
    year: 'CGPA 9.8',
    icon: <FiStar size={22} />,
    description: 'Secured outstanding CGPA of 9.8 in secondary school examinations.',
  },
];

export default function EducationTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="chalkboard py-20 md:py-28 lg:py-32 px-6 md:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-[13px] font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Academic Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white">
            Education
          </h2>
          <div className="axis-divider max-w-[200px] mx-auto mt-7" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-[22px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px origin-top"
            style={{ background: 'rgba(212, 175, 55, 0.25)' }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {educationData.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                  className={`relative flex items-start pl-16 md:pl-0 ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-[14px] md:left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-[3px] border-accent bg-primary z-10 mt-1.5"
                  />

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <div className="p-7 md:p-8 rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1">
                      {/* Badge row */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-11 h-11 rounded-lg bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <span className="font-sans text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-secondary/20 text-secondary">
                          {item.year}
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className="font-serif text-lg font-bold text-white mb-2.5">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="font-sans text-sm font-medium text-accent mb-4">
                        {item.institution}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-[13px] text-white/55 leading-[1.9]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

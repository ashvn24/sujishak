import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMonitor, FiUsers, FiClipboard } from 'react-icons/fi';

const experiences = [
  {
    role: 'Online & Offline Tutor',
    org: 'My Tutor Platform',
    duration: '2023 – Present',
    icon: <FiMonitor size={24} />,
    highlights: [
      'Teaching Mathematics, Statistics, and Economics',
      'Both online and in-person sessions for flexible learning',
      'Catering to IGCSE, AS/A Level, CBSE, and university-level students',
      'Personalized lesson plans tailored to individual learning styles',
    ],
  },
  {
    role: 'Online Tutor',
    org: 'TeacherOn',
    duration: '2023 – Present',
    icon: <FiUsers size={24} />,
    highlights: [
      'Specialized in IGCSE, AS/A Level, and CBSE Mathematics',
      'Teaching undergraduate and postgraduate Statistics',
      'Working with international students across multiple time zones',
      'Exam-focused preparation with structured study plans',
    ],
  },
  {
    role: 'Subject Matter Expert',
    org: 'Tutronics',
    duration: 'Dec 2025 – Present',
    icon: <FiClipboard size={24} />,
    highlights: [
      'Content development and academic solutions in Statistics',
      'Quality assurance for educational materials',
      'Expertise in advanced statistical concepts and methodology',
      'Collaborative work with a team of educators',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="graph-paper-bg py-20 md:py-28 lg:py-32 px-6 md:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-[13px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4">
            Professional Background
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary">
            Teaching Experience
          </h2>
          <div className="axis-divider max-w-[200px] mx-auto mt-7" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group flex flex-col bg-white border border-border rounded-xl p-8 md:p-9 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon row */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-13 h-13 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center transition-colors duration-300 group-hover:bg-secondary group-hover:text-white"
                  style={{ width: '52px', height: '52px' }}
                >
                  {exp.icon}
                </div>
                <span className="font-sans text-[11px] font-semibold tracking-wider uppercase px-3.5 py-2 rounded-full bg-accent/10 text-accent">
                  {exp.duration}
                </span>
              </div>

              {/* Role */}
              <h3 className="font-serif text-xl font-bold text-primary mb-2.5">
                {exp.role}
              </h3>
              <p className="font-sans text-sm font-medium text-secondary mb-8">
                {exp.org}
              </p>

              {/* Highlights */}
              <ul className="mt-auto space-y-4">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3.5">
                    <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0" />
                    <span className="font-sans text-[13px] text-muted leading-[1.8]">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

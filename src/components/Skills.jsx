import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FiMonitor,
  FiEdit3,
  FiBarChart2,
  FiFileText,
  FiCpu,
  FiZap,
  FiMessageCircle,
  FiClock,
  FiTarget,
} from 'react-icons/fi';
import { SiGooglemeet, SiZoom } from 'react-icons/si';

const teachingTools = [
  { name: 'Zoom', icon: <SiZoom size={18} /> },
  { name: 'Google Meet', icon: <SiGooglemeet size={18} /> },
  { name: 'Jamboard', icon: <FiEdit3 size={18} /> },
  { name: 'Whiteboard Apps', icon: <FiMonitor size={18} /> },
  { name: 'MS Excel', icon: <FiBarChart2 size={18} /> },
  { name: 'PowerPoint', icon: <FiFileText size={18} /> },
];

const coreStrengths = [
  { name: 'Analytical Thinking', icon: <FiCpu size={18} /> },
  { name: 'Concept Simplification', icon: <FiZap size={18} /> },
  { name: 'Exam Preparation', icon: <FiTarget size={18} /> },
  { name: 'Strong Communication', icon: <FiMessageCircle size={18} /> },
  { name: 'Flexible Scheduling', icon: <FiClock size={18} /> },
];

function SkillChip({ item, index, inView, variant }) {
  const isTool = variant === 'tool';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.07 }}
      className={`group flex items-center gap-4 px-6 py-4 rounded-xl border border-border cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        isTool ? 'bg-white' : 'bg-secondary/[0.04]'
      }`}
      whileHover={{
        borderColor: isTool ? 'var(--color-secondary)' : 'var(--color-accent)',
      }}
    >
      <span className={`transition-colors duration-300 ${isTool ? 'text-secondary' : 'text-accent'}`}>
        {item.icon}
      </span>
      <span className="font-sans text-sm font-medium text-charcoal">
        {item.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="graph-paper-bg py-20 md:py-28 lg:py-32 px-6 md:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-[13px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4">
            Capabilities
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary">
            Tools &amp; Skills
          </h2>
          <div className="axis-divider max-w-[200px] mx-auto mt-7" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 max-w-5xl mx-auto">
          {/* Teaching Tools */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-lg font-semibold text-secondary mb-8 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-secondary inline-block" />
              Teaching Tools
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {teachingTools.map((item, i) => (
                <SkillChip key={i} item={item} index={i} inView={inView} variant="tool" />
              ))}
            </div>
          </div>

          {/* Core Strengths */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-lg font-semibold text-accent mb-8 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-accent inline-block" />
              Core Strengths
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {coreStrengths.map((item, i) => (
                <SkillChip key={i} item={item} index={i} inView={inView} variant="strength" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

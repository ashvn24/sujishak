import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGlobe, FiBookOpen, FiTarget, FiUsers } from 'react-icons/fi';

const highlights = [
  {
    icon: <FiBookOpen size={24} />,
    title: 'Multi-Curriculum',
    desc: 'IGCSE, AS/A Levels, CBSE (Grades 8–12), UG & PG levels',
  },
  {
    icon: <FiTarget size={24} />,
    title: 'Concept Clarity',
    desc: 'Simplifying complex mathematical & statistical concepts',
  },
  {
    icon: <FiGlobe size={24} />,
    title: 'International Reach',
    desc: 'Students across UAE, Finland, India & the United States',
  },
  {
    icon: <FiUsers size={24} />,
    title: 'Student-Centred',
    desc: 'Personalized approach for exam preparation & mastery',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="graph-paper-bg py-20 md:py-28 lg:py-32 px-6 md:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-[13px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4">
            Introduction
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary">
            About Me
          </h2>
          <div className="axis-divider max-w-[200px] mx-auto mt-7" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-7"
          >
            <p className="font-sans text-[15px] md:text-base text-muted leading-[2]">
              I am an experienced educator specializing in{' '}
              <strong className="text-primary font-semibold">Mathematics</strong>,{' '}
              <strong className="text-primary font-semibold">Statistics</strong>, and{' '}
              <strong className="text-primary font-semibold">Economics</strong>, with a
              passion for making complex concepts accessible and engaging. My teaching
              spans multiple curricula including IGCSE, AS/A Levels, and CBSE for grades
              8 through 12, as well as undergraduate and postgraduate levels.
            </p>
            <p className="font-sans text-[15px] md:text-base text-muted leading-[2]">
              With a student-centred approach, I focus on building strong conceptual
              foundations, sharpening analytical thinking, and providing structured exam
              preparation. I have worked with students from diverse international
              backgrounds — across the UAE, Finland, India, and the United States —
              adapting my teaching methods to suit each learner's unique needs.
            </p>
            <p className="font-sans text-[15px] md:text-base text-muted leading-[2]">
              Whether it is simplifying the Central Limit Theorem, guiding through
              statistical inference, or preparing for board examinations, I bring
              clarity, patience, and academic rigour to every session.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="bg-white border border-border rounded-xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="font-sans text-[15px] font-semibold text-primary mb-3">
                  {item.title}
                </h4>
                <p className="font-sans text-[13px] text-muted leading-[1.8]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PiCertificate } from 'react-icons/pi';

const certifications = [
  {
    title: 'UGC NET – Population Studies',
    issuer: 'NTA – Qualified for Assistant Professorship & Research Eligibility',
  },
  {
    title: 'Good Clinical Practice (GCP)',
    issuer: 'ICH – International Council for Harmonisation',
  },
  {
    title: 'Data Analytics Essentials',
    issuer: 'IBM',
  },
  {
    title: 'Python Programming with ML & AI',
    issuer: 'University of Kerala',
  },
  {
    title: 'Questionnaire Design for Social Surveys',
    issuer: 'University of Michigan',
  },
  {
    title: 'Leadership & Team Effectiveness',
    issuer: 'NPTEL',
  },
  {
    title: 'NIDA Clinical Trials Network Certification',
    issuer: 'NIDA – National Institute on Drug Abuse',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="chalkboard py-20 md:py-28 lg:py-32 px-6 md:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-[13px] font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Professional Development
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white">
            Certifications
          </h2>
          <div className="axis-divider max-w-[200px] mx-auto mt-7" />
        </motion.div>

        {/* Cards */}
        <div className="max-w-3xl mx-auto flex flex-col gap-5 md:gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group flex items-center gap-6 p-7 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-0.5"
              whileHover={{
                borderColor: 'rgba(212, 175, 55, 0.3)',
                background: 'rgba(255,255,255,0.06)',
              }}
            >
              {/* Icon */}
              <div className="w-13 h-13 rounded-lg bg-accent/12 text-accent flex items-center justify-center flex-shrink-0"
                style={{ width: '52px', height: '52px' }}
              >
                <PiCertificate size={24} />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h4 className="font-sans text-[15px] md:text-base font-semibold text-white mb-2">
                  {cert.title}
                </h4>
                <p className="font-sans text-[13px] text-white/50">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

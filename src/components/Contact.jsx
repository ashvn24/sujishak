import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

const contactItems = [
  {
    icon: <FiMail size={24} />,
    label: 'Email',
    value: 'sujishas325@gmail.com',
    href: 'mailto:sujishas325@gmail.com',
  },
  {
    icon: <FiPhone size={24} />,
    label: 'Phone',
    value: '+91 97446 49329',
    href: 'tel:+919744649329',
  },
  {
    icon: <FiLinkedin size={24} />,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/sujishak99/',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <section id="contact" className="graph-paper-bg py-20 md:py-28 lg:py-32 px-6 md:px-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="font-sans text-[13px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary">
              Contact
            </h2>
            <div className="axis-divider max-w-[200px] mx-auto mt-7" />
            <p className="font-sans max-w-md mx-auto text-[15px] text-muted mt-7 leading-relaxed">
              Interested in tutoring sessions or academic collaboration?
              I would love to hear from you.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-7 md:gap-8 max-w-3xl mx-auto">
            {contactItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="group flex flex-col items-center justify-center gap-5 p-10 md:p-12 rounded-xl border border-border bg-white w-full sm:flex-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                whileHover={{ borderColor: 'var(--color-secondary)' }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="font-sans text-[11px] tracking-[0.2em] uppercase font-semibold text-muted">
                  {item.label}
                </span>
                <span className="font-sans text-sm font-medium text-primary text-center leading-snug">
                  {item.value}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 md:py-14 px-6 text-center border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <p className="font-serif text-sm text-white/70 mb-3">
            Sujisha K
            <span className="text-accent mx-2">·</span>
            Mathematics &amp; Statistics Educator
          </p>
          <p className="font-sans text-xs text-white/35">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

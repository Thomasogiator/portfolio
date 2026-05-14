'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="relative py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-accent">/</span> Experience
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-accent text-sm font-medium">{exp.period}</p>
                  </div>

                  {/* Company */}
                  <p className="text-foreground/60 font-medium mb-4">{exp.company}</p>

                  {/* Description */}
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hidx) => (
                      <li
                        key={hidx}
                        className="text-foreground/60 text-sm flex items-start gap-3"
                      >
                        <span className="text-accent font-bold mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

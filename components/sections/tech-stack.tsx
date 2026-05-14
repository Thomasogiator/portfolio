'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/lib/data';

export function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const categories = Object.values(techStack.categories);

  return (
    <section id="skills" className="relative py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-accent">/</span> {techStack.title}
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </motion.div>

          {/* Categories — 2 cols on md, 3 on lg */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-colors"
              >
                <h3 className="text-base font-semibold text-accent mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium hover:bg-accent/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
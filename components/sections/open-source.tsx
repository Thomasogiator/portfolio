'use client';

import { motion } from 'framer-motion';
import { openSource } from '@/lib/data';
import { Star, ExternalLink, Github } from 'lucide-react';

export function OpenSource() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 md:py-32">
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
              <span className="text-accent">/</span> {openSource.title}
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </motion.div>

          {/* Description + GitHub link */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-foreground/70 max-w-2xl">
              {openSource.description}
            </p>
            <a
              href={openSource.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent border border-accent/40 hover:border-accent rounded-lg px-4 py-2 transition-colors shrink-0"
            >
              <Github className="w-4 h-4" />
              View GitHub Profile
            </a>
          </motion.div>

          {/* Repos Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {openSource.projects.map((project) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold text-foreground font-mono">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors shrink-0" />
                </div>

                <p className="text-foreground/60 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-foreground/50">
                  <Star className="w-4 h-4" />
                  <span>
                    {project.stars > 0
                      ? `${project.stars.toLocaleString()} stars`
                      : 'Public repo'}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
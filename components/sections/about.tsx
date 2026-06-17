'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { about } from '@/lib/data';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-10"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-accent">/</span> {about.title}
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </motion.div>

          {/* Location badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-sm text-foreground/60 border border-border/50 rounded-full px-3 py-1">
              <MapPin className="w-3 h-3 text-accent" />
              {about.location}
              {/* {about.openToRemote && (
                <span className="text-accent font-medium">· Open to remote</span>
              )} */}
            </span>
          </motion.div>

          {/* Paragraphs */}
          <div className="space-y-4">
            {about.paragraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
                variants={itemVariants}
                className="text-foreground/70 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/50"
          >
            {about.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </p>
                <p className="text-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Currently block */}
          {/* <motion.div
            variants={itemVariants}
            className="p-5 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm space-y-2"
          >
            <p className="text-sm font-semibold text-accent mb-3">Currently</p>
            <p className="text-foreground/60 text-sm">
              <span className="text-foreground/80 font-medium">Learning: </span>
              {about.currently.learning}
            </p>
            <p className="text-foreground/60 text-sm">
              <span className="text-foreground/80 font-medium">Reading: </span>
              {about.currently.reading}
            </p>
            <p className="text-foreground/60 text-sm">
              <span className="text-foreground/80 font-medium">Excited about: </span>
              {about.currently.excited}
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
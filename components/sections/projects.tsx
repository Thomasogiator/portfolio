'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ProjectModal } from '@/components/ui/project-modal';
import type { Project } from '@/lib/data';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <>
      <section id="projects" className="relative py-20 md:py-32">
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
                <span className="text-accent">/</span> Featured Projects
              </h2>
              <div className="h-1 w-12 bg-accent rounded-full" />
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              {projects.map((project) => (
                <motion.button
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer group text-left p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {project.isPrivate && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <span className="text-accent text-sm font-medium">🔒 Private</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-muted-foreground text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="text-accent text-sm font-medium group-hover:translate-x-2 transition-transform">
                    View Details →
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

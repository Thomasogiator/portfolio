'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/data';
import { ArrowRight, Clock, PenLine } from 'lucide-react';

export function Blog() {
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

  const isComingSoon = (date: string) =>
    date.toLowerCase().includes('coming soon');

  return (
    <section id="blog" className="relative py-20 md:py-32">
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
              <span className="text-accent">/</span> Thinking Out Loud
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </motion.div>

          <motion.p variants={itemVariants} className="text-foreground/60 max-w-2xl">
            Articles I'm working on — covering frontend architecture, performance patterns, and lessons from building production apps.
          </motion.p>

          {/* Blog Posts */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post) => {
              const comingSoon = isComingSoon(post.date);

              const Card = (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover={!comingSoon ? { y: -6 } : {}}
                  className={`group p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm flex flex-col transition-all ${
                    comingSoon
                      ? 'opacity-60 cursor-default'
                      : 'hover:border-accent/50 cursor-pointer'
                  }`}
                >
                  {/* Date / status + read time */}
                  <div className="flex items-center justify-between mb-3 text-sm text-foreground/50">
                    <span className="flex items-center gap-1.5">
                      {comingSoon ? (
                        <>
                          <PenLine className="w-3 h-3" />
                          Coming soon
                        </>
                      ) : (
                        post.date
                      )}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-base font-bold text-foreground mb-3 line-clamp-2 ${!comingSoon ? 'group-hover:text-accent transition-colors' : ''}`}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {!comingSoon && (
                    <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </motion.div>
              );

              return comingSoon ? (
                <div key={post.id}>{Card}</div>
              ) : (
                <a
                  key={post.id}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Card}
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
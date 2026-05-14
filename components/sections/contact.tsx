'use client';

import { motion } from 'framer-motion';
import { contact } from '@/lib/data';
import { Mail, Github, Linkedin, Twitter, Calendar } from 'lucide-react';

export function Contact() {
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

  const getIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github className="w-5 h-5" />;
      case 'LinkedIn': return <Linkedin className="w-5 h-5" />;
      case 'Twitter': return <Twitter className="w-5 h-5" />;
      case 'Email': return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32">
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
              <span className="text-accent">/</span> {contact.title}
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 max-w-2xl"
          >
            {contact.description}
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Send an Email
            </a>

            {contact.calendly && (
              <a
                href={contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/60 hover:border-accent text-foreground/70 hover:text-accent font-medium rounded-lg transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </a>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={containerVariants} className="flex flex-wrap gap-3">
            {contact.social.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg border border-border/50 bg-card/50 text-foreground/60 hover:text-accent hover:border-accent/50 transition-all duration-200"
                aria-label={social.name}
              >
                {getIcon(social.name)}
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="pt-10 border-t border-border/50 text-center text-foreground/40 text-sm space-y-1"
          >
            <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Hosted on Vercel.</p>
            <p>© {new Date().getFullYear()} Thomas Ogiator. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
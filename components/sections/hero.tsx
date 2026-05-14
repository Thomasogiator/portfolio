'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { hero } from '@/lib/data';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter for cycling roles
  useEffect(() => {
    const currentRole = hero.roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedRole.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      }, 60);
    } else if (!isDeleting && displayedRole.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedRole.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
      }, 35);
    } else if (isDeleting && displayedRole.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % hero.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Thomasogiator', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/thomasogiator', icon: Linkedin },
    { name: 'Email', href: 'mailto:thomasogiator@gmail.com', icon: Mail },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Availability badge */}
          {hero.availability && (
            <motion.div variants={item} className="flex justify-center">
              <span className="inline-flex items-center gap-2 text-sm text-foreground/70 border border-border/50 bg-card/50 backdrop-blur-sm rounded-full px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>
          )}

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold leading-tight font-mono"
          >
            {hero.name}
          </motion.h1>

          {/* Static title */}
          <motion.h2
            variants={item}
            className="text-xl md:text-2xl text-foreground/60 font-light"
          >
            {hero.title}
          </motion.h2>

          {/* Typewriter roles */}
          <motion.div
            variants={item}
            className="h-8 flex items-center justify-center"
          >
            <span className="text-accent text-lg md:text-xl font-mono font-medium">
              {displayedRole}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a
              href={hero.ctaLink}
              className="px-8 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
            >
              {hero.cta}
            </a>
            <a
              href={hero.ctaSecondaryLink}
              className="px-8 py-3 border border-border/60 hover:border-accent text-foreground/70 hover:text-accent font-medium rounded-lg transition-all duration-200"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 pt-2"
          >
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target={name !== 'Email' ? '_blank' : undefined}
                rel={name !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={name}
                className="p-2 text-foreground/50 hover:text-accent transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {/* <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-accent/60" />
        </motion.div> */}
      </div>
    </section>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ExternalLink, Github, CheckCircle2, Lightbulb, Target, Wrench } from 'lucide-react';
import type { Project } from '@/lib/data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') handlePrevImage();
      else if (e.key === 'ArrowRight') handleNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  // Support both old string[] and new Screenshot[] shape
  const rawImages = project.images ?? [];
  const images = rawImages.map((img) =>
    typeof img === 'string' ? { src: img, caption: '' } : img
  );
  const fallback = [{ src: project.image, caption: project.title }];
  const displayImages = images.length > 0 ? images : fallback;
  const hasMultipleImages = displayImages.length > 1;
  const currentImage = displayImages[currentImageIndex];
  const { caseStudy } = project;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-1.5 bg-background/80 hover:bg-background border border-border/50 rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable content */}
              <div className="overflow-y-auto flex-1 scrollbar-thin">

                {/* ── IMAGE CAROUSEL ───────────────────────────────── */}
                <div className="relative bg-muted/30 aspect-video overflow-hidden shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      src={currentImage.src}
                      alt={currentImage.caption || `${project.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>

                  {/* Prev / Next */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background border border-border/40 rounded-lg transition-colors cursor-pointer"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background border border-border/40 rounded-lg transition-colors cursor-pointer"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  {/* Counter */}
                  {hasMultipleImages && (
                    <div className="absolute bottom-3 right-3 bg-background/80 border border-border/40 px-2.5 py-1 rounded text-xs text-muted-foreground font-mono">
                      {currentImageIndex + 1} / {displayImages.length}
                    </div>
                  )}
                </div>

                {/* Caption + dot indicators */}
                <div className="px-6 md:px-8 pt-3 pb-1 flex flex-col items-center gap-2">
                  {currentImage.caption && (
                    <p className="text-xs text-muted-foreground text-center">
                      {currentImage.caption}
                    </p>
                  )}
                  {hasMultipleImages && (
                    <div className="flex gap-1.5">
                      {displayImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          aria-label={`Go to screenshot ${idx + 1}`}
                          className={`rounded-full transition-all duration-200 ${
                            idx === currentImageIndex
                              ? 'w-4 h-1.5 bg-accent'
                              : 'w-1.5 h-1.5 bg-border hover:bg-accent/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* ── CONTENT ──────────────────────────────────────── */}
                <div className="px-6 md:px-8 py-6 space-y-8">

                  {/* Title + tags + links */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h2>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Project
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Private notice */}
                  {project.isPrivate && project.privateNote && (
                    <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
                      <p className="text-xs text-accent font-medium mb-0.5">🔒 Private Project</p>
                      <p className="text-sm text-muted-foreground">{project.privateNote}</p>
                    </div>
                  )}

                  {project.note && project.note && (
                    <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
                      <p className="text-sm text-muted-foreground">{project.note}</p>
                    </div>
                  )}

                  {/* Overview */}
                  <div>
                    <p className="text-foreground/75 leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* ── CASE STUDY ─────────────────────────────────── */}
                  {caseStudy && (
                    <div className="space-y-6 pt-2 border-t border-border/50">

                      <p className="text-xs font-semibold text-accent uppercase tracking-widest pt-2">
                        Case Study
                      </p>

                      {/* Problem */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent shrink-0" />
                          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            The Problem
                          </h3>
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed pl-6">
                          {caseStudy.problem}
                        </p>
                      </div>

                      {/* Approach */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-accent shrink-0" />
                          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            My Approach
                          </h3>
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed pl-6">
                          {caseStudy.approach}
                        </p>
                      </div>

                      {/* Key decisions */}
                      {caseStudy.decisions.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Wrench className="w-4 h-4 text-accent shrink-0" />
                            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                              Key Decisions
                            </h3>
                          </div>
                          <ul className="space-y-2 pl-6">
                            {caseStudy.decisions.map((decision, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                                <span className="text-accent font-bold mt-0.5 shrink-0">▸</span>
                                <span className="leading-relaxed">{decision}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Results */}
                      {caseStudy.results.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                              Results
                            </h3>
                          </div>
                          <ul className="space-y-2 pl-6">
                            {caseStudy.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                                <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                                <span className="leading-relaxed">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Keyboard tip + NDA footer */}
                  <div className="pt-4 border-t border-border/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-xs text-muted-foreground">
                      💡 Use arrow keys to navigate screenshots, ESC to close
                    </p>
                    {project.isPrivate && (
                      <p className="text-xs text-muted-foreground italic">
                        Screenshots shared for portfolio purposes only
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
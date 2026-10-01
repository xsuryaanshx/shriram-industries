// ─────────────────────────────────────────────
//  ProjectCard — Premium hoverable project card
// ─────────────────────────────────────────────
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/config/types';

interface ProjectCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

export function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/projects/${project.id}`}
      className={cn('group block relative overflow-hidden bg-[var(--color-card)]', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`View ${project.title} — ${project.category}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={project.image}
          alt={`${project.title}, ${project.location}`}
          className="img-cover"
          loading={priority ? 'eager' : 'lazy'}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-[var(--color-foreground)]"
          animate={{ opacity: hovered ? 0.35 : 0 }}
          transition={{ duration: 0.4 }}
        />
        {/* Category chip */}
        <div className="absolute top-4 left-4">
          <span className="demo-badge bg-black/40 text-white border-white/20">
            {project.category}
          </span>
        </div>
        {/* Arrow */}
        <motion.div
          className="absolute top-4 right-4 w-9 h-9 bg-white flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        >
          <ArrowUpRight size={16} className="text-[var(--color-foreground)]" />
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-serif text-lg font-light text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-label text-[0.65rem] text-[var(--color-muted)] mt-1">
              {project.location} &mdash; {project.year}
            </p>
          </div>
          {project.area && (
            <span className="text-[0.65rem] text-[var(--color-muted)] whitespace-nowrap">
              {project.area}
            </span>
          )}
        </div>
        <p className="text-sm text-[var(--color-muted)] mt-3 leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
}

// ─── Featured Project — large format ─────────
interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={cn(
        'grid md:grid-cols-2 gap-0 group overflow-hidden',
        !isEven && 'md:[direction:rtl]'
      )}
    >
      {/* Image */}
      <Link
        to={`/projects/${project.id}`}
        className="relative overflow-hidden aspect-[4/3] md:aspect-auto min-h-[400px] block"
        style={isEven ? {} : { direction: 'ltr' }}
        tabIndex={-1}
        aria-hidden="true"
      >
        <motion.img
          src={project.image}
          alt={`${project.title}`}
          className="img-cover"
          loading="lazy"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)' }}
        />
      </Link>

      {/* Content */}
      <div
        className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-[var(--color-card)]"
        style={isEven ? {} : { direction: 'ltr' }}
      >
        <span className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-4">
          {project.category} — {project.year}
        </span>
        <h3 className="heading-md text-[var(--color-foreground)] mb-4">
          {project.title}
        </h3>
        <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-2">
          {project.location}
          {project.area && ` — ${project.area}`}
        </p>
        <p className="text-[var(--color-foreground)] leading-relaxed mb-8">
          {project.shortDescription}
        </p>
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-label text-[0.65rem] text-[var(--color-foreground)] border-b border-[var(--color-foreground)] pb-0.5 w-fit hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors duration-300 group/link"
          id={`view-project-${project.id}`}
        >
          View Project
          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </motion.article>
  );
}

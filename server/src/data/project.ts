import { Project } from '../types/Project';   // relative to data/ folder

// In-memory mock data.  Replace or extend as you build real projects.
export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'Full-stack personal site built with React, Express, and TypeScript.',
    tech: ['React', 'TypeScript', 'Express', 'Node.js'],
    github: 'https://github.com/yourname/portfolio-website',
    demo: 'https://yourdomain.com'
  },
  {
    id: 2,
    title: 'Dancord Chat App',
    description:
      'Discord-style real-time chat using Socket.io and Redis pub/sub.',
    tech: ['React', 'Socket.io', 'Redis', 'MongoDB'],
    github: 'https://github.com/yourname/dancord'
  }
];
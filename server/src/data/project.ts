import { Project } from '../types/Project'; 

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'Full-stack personal site built with React, Express, and TypeScript.',
    tech: ['React', 'TypeScript', 'Express', 'Node.js'],
    github: 'https://github.com/dansk-i/Portfolio-Website',
    demo: 'https://yourdomain.com'
  },
  {
    id: 2,
    title: 'Dancord Chat App',
    description:
      'Discord-style real-time chat using Socket.io and Redis pub/sub.',
    tech: ['React', 'Socket.io', 'Redis', 'MongoDB']
  }
];
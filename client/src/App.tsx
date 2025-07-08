import React, { useEffect, useState } from 'react';
import './App.css';

// Define the TypeScript shape of a project (mirrors server/src/types/Project.ts, but duplicated here so the frontend knows the structure too)
interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}


// 2) React component
export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  // Fetch once on mount
  useEffect(() => {
    fetch('/api/project')
      .then(res => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Could not load projects');
        setLoading(false);
      });
  }, []);

  // 3) Render logic
 if (loading) return <p>Loading…</p>;
  if (error)   return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="App">
      <h1>My Portfolio Projects</h1>

      <div className="cards-container">
        {projects.map(p => (
          <article key={p.id} className="card">
            <h2>{p.title}</h2>
            <p>{p.description}</p>

            <strong>Tech stack:</strong>
            <ul>
              {p.tech.map(t => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <a href={p.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {p.demo && (
              <>
                {' · '}
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
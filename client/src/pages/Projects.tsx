import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  useEffect(() => {
    document.title = "Projects - Daniel Sobalski";
  }, []);
  
  useEffect(() => {
    fetch('/api/project')
      .then(res => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((data: Project[]) => { setProjects(data); setLoading(false); })
      .catch(() => { setError('Could not load projects'); setLoading(false); });
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error)   return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <>
      <BackButton />

      <h1 style={{ textAlign: 'center' }}>Projects</h1>

      <div className="cards-container">
        {projects.map(p => (
          <article key={p.id} className="card">
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <strong>Tech:</strong>
            <ul>{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
            <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {p.demo && <> · <a href={p.demo} target="_blank" rel="noopener noreferrer">Live</a></>}
          </article>
        ))}
      </div>
    </>
  );
}
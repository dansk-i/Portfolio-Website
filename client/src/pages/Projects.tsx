import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';

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
    
    <div>
      <div className='absolute left-12 top-10'><BackButton /></div>
      
      <div className='text-white flex flex-col items-center justify-center gap-6 p-6 overflow-hidden w-full h-full'>
    

              <h1>Projects</h1>

              <div className='flex-none w-full max-w-4xl grid grid-cols-2 gap-6'>
                {projects.map(p => (
                  <article key={p.id} className="bg-neutral-800 border border-zinc-600 p-6 rounded-lg hover:border-zinc-400 hover:border-1 transition duration-200">
                    <h2 className='font-bold'>{p.title}</h2>
                    <p>{p.description}</p>
                    <br />
                    <strong>Tech:</strong>
                    <ul>{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
                    <br />
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className='font-bold hover:text-zinc-400'>GitHub</a>
                    {p.demo && <> · <a href={p.demo} target="_blank" rel="noopener noreferrer" className='font-bold hover:text-zinc-400'>Live Site</a></>}
                  </article>
                ))}
              </div>
   
      </div>
    </div>
  );
}
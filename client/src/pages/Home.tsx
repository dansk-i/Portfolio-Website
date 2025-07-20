import { Link } from 'react-router-dom';
import './Home.css'; // optional future styling

export default function Home() {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col items-center justify-center">
      <main className="text-white m-auto p-2 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-rows-8 lg:grid-cols-4 lg:gap-4 lg:max-h-[800px] border-2">
        <div className="bg-zinc-900 border border-zinc-600 hover:border-primary-500 align-start flex-none h-full justify-start relative col-span-1 md:col-span-3 md:row-span-4 p-6"> 
          <div className="flex w-full h-full">
            <div className='flex flex-col justify-between md:max-h-[300px] gap-4'>
              <div className='flex flex-col h-full'>
                <h1 className="text-sm font-light m-0 text-zinc-300">welcome</h1>
              </div>
            </div>
          </div>
        </div>
       

        {/* Navigation “cards” */}
        <section className="border-2">
          <Link to="/projects" className="nav-card">
            <h2>Projects</h2>
            <p>See my portfolio projects</p>
          </Link>

          {/* Placeholder for future pages */}
          <Link to="/about" className="nav-card">
            <h2>About Me</h2>
            <p>Background, skills, interests</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
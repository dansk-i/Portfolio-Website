import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css'; // optional future styling
import './grid-background.css';

export default function Home() {
  
  useEffect(() => {
      document.title = "Home - Daniel Sobalski";
    }, []);

  return (

    <div className="bg-neutral-900 min-h-screen flex flex-col items-center justify-center">
      <main className="text-white m-auto grid grid-cols-4 gap-5 max-w-6xl overflow-hidden relative w-full h-full p-6 h-screen max-h-[800px] border-2">
            
            <div className="bg-neutral-800 border border-zinc-600 col-span-4 row-span-2 align-start flex-none justify-start p-6 rounded-lg hover:border-red-500 hover:border-2 transition duration-200"> 
              <div className="">
                  
                  <div className=''>
                    <h2 className="text-sm font-light m-0 text-zinc-500">welcome</h2>
                  </div>
                  <div className=''>
                    <h1>I'm <span className="font-bold">Daniel Sobalski</span>, a software developer with strong focus on graphics programming</h1>
                  </div>
               
              </div>
            </div>
       
        {/* Navigation “cards” */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-2 p-6 rounded-lg hover:border-red-500 hover:border-2 transition duration-200">
          <Link to="/projects" className="nav-card">
            <h2>Projects</h2>
            <p>See my portfolio projects</p>
          </Link>
          <Link to="/about" className="nav-card">
            <h2>About Me</h2>
            <p>Background, skills, interests</p>
          </Link>
        </section>


      </main>
    </div>
  );
}
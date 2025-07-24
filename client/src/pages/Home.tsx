import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';
import profilePic from '../assets/testimage.png'; 
import {ReactComponent as GithubLogo} from '../assets/github.svg';

export default function Home() {
  
  useEffect(() => {
      document.title = "Home - Daniel Sobalski";
    }, []);

  return (

    <div className="flex flex-col items-center justify-center">
      <main className="text-white m-auto grid grid-cols-4 grid-rows-8 gap-5 max-w-6xl overflow-hidden w-full h-full p-6 h-screen max-h-[800px]">
            
          {/* Main Header */}
          <div className="flex w-full h-full bg-neutral-800 border border-zinc-600 col-span-3 row-span-4 align-start justify-start p-6 pb-10 rounded-lg hover:border-red-500 hover:border-1 transition duration-200"> 
              <div className="flex flex-col justify-between">
                  <div className=''>
                      <h2 className="text-sm font-light m-0 text-zinc-500">welcome</h2>
                  </div>
                  <div className='h-full'>
                      <h1>I'm <span className="font-bold">Daniel Sobalski</span>, a software developer with strong focus on graphics programming</h1>
                  </div>

                    {/* Logo Links */}
                  <div className='flex flex-row gap-4 justify-start place-items-center'>

                    <div className='bg-neutral-950 w-fit px-5 py-3 border border-red-500 border-1 border-r-[3px] border-b-[3px] transition duration-200 rounded-lg text-white hover:text-red-500'>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                             <GithubLogo className="w-5 h-4"/>
                        </a>
                    </div>

                    <div className='bg-neutral-950 w-fit px-5 py-3 border border-red-500 border-1 border-r-[3px] border-b-[3px] transition duration-200 rounded-lg text-white hover:text-red-500'>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                             <GithubLogo className="w-5 h-4"/>
                        </a>
                    </div>

                  </div>

              </div>
                  
                  <img src={profilePic} alt='Profile' className='w-auto max-h-[300px] select-none border-2'/>
                        
            </div>
       

       
        {/* About Me */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-7 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
          <Link to="/projects" className="nav-card">
            <h2>Projects</h2>
            <p>See my portfolio projects</p>
          </Link>
          <Link to="/about" className="nav-card">
            <h2>About Me</h2>
            <p>Background, skills, interests</p>
          </Link>
        </section>
        
       

         {/* Email And Socials */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-4 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
           <h2>Contact Me!</h2>
        </section>

         {/* Clock */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-1 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
           <h2>Time Temp</h2>
        </section>

         {/* Projects */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-3 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
           <h2>Projects</h2>
        </section>

         {/* Now Status */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-3 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
           <h2>Now?</h2>
        </section>

          {/* Colors */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-1 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
           <h2>Colors</h2>
        </section>

          {/* Trademark */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-1 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
           <h2>Trademark</h2>
        </section>



      </main>
    </div>
  );
}
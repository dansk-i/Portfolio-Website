import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react';
import './Home.css';
import profilePic from '../assets/testimage.png'; 
import {ReactComponent as GithubLogo} from '../assets/github.svg';
import {ReactComponent as LinkedinLogo} from '../assets/linkedin.svg';
import {ReactComponent as QuestionLogo} from '../assets/question.svg';
import Clock from '../components/Clock';

export default function Home() {
  
  const [showFact, setShowFact] = useState(false);
  const [factIndex, setFactIndex] = useState(0);

  const facts = [
    "I love shaders.",
    "React is fun.",
    "TypeScript saves lives.",
    "Tailwind makes styling less painful.",
    ];

  const handleMouseDown = () => {
    setFactIndex((prev) => (prev + 1) % facts.length);
    setShowFact(true);
  };

  const handleMouseUp = () => {
    setShowFact(false);
  };

  
  useEffect(() => {
      document.title = "Home - Daniel Sobalski";
    }, []);

  return (

    <div className="flex flex-col items-center justify-center">
      <main className="text-white m-auto grid grid-cols-4 grid-rows-8 gap-4 max-w-6xl overflow-hidden w-full h-full p-6 h-screen max-h-[800px] font-sans-serif">
            
          {/* Main Header */}
          <div className="flex w-full h-full bg-neutral-800 border border-zinc-600 col-span-3 row-span-4 align-start justify-start p-6 pb-10 rounded-lg overflow-hidden hover:border-red-500 hover:border-1 transition duration-200"> 
              <div className="flex flex-col justify-between">
                  <div className=''>
                      <h2 className="text-sm font-light m-0 text-zinc-500">welcome</h2>
                  </div>
                  <div className='h-full font-light'>
                      <span>I'm <b className="font-bold">Daniel Sobalski</b>, a software developer with strong focus on graphics, optimization, and the user experience.</span> <br />

                       <span className='block mt-2'>Feel free to reach out, or to check some the projects I've been working on below.</span>
                  </div>
                  
                  <div className='pb-4 flex justify-center'>
        
                        
                  </div>


                    {/* Logo Links */}
                  <div className='flex flex-row gap-4 justify-start place-items-center'>

                    <div className='w-20'>
                      <button onClick={() => window.open("https://github.com/dansk-i", "_blank")}
                            className="bg-neutral-950 w-fit px-5 py-3 border border-red-500 border-1 border-r-[3px] border-b-[3px] transition duration-200 rounded-bl-xl rounded-tl-lg rounded-br-lg rounded-tr-xl text-white hover:text-red-500 active:border-r-[1px] active:border-b-[1px] active:text-red-500" >
                            <GithubLogo className="w-6 h-5" />
                      </button>
                    </div>


                    <div className='w-20'>
                     <button onClick={() => window.open("https://www.linkedin.com/in/danielsobalski/", "_blank")}
                            className="bg-neutral-950 w-fit px-5 py-3 border border-red-500 border-1 border-r-[3px] border-b-[3px] transition duration-200 rounded-bl-xl rounded-tl-lg rounded-br-lg rounded-tr-xl text-white hover:text-red-500 active:border-r-[1px] active:border-b-[1px] active:text-red-500" >
                            <LinkedinLogo className="w-6 h-5" />
                      </button>
                    </div>
                    
     
                        <div className='w-20 relative'>
                             {/* Quip Box */}
                              {showFact && (
                          
                                <div className='absolute bottom-16 -translate-x-[69px] w-[200px] max-w-[200px]'>
                                    <div className="bg-neutral-950 px-5 py-3 border border-red-500 border-1 border-r-[3px] border-b-[3px] rounded-bl-xl rounded-tl-lg rounded-br-lg rounded-tr-xl text-white text-center
                                    after:rotate-45 after:w-5 after:h-5 after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-2 after:bg-neutral-950 after:border-r-[1px] after:border-b-[1px] after:border-red-500">
                                      {facts[factIndex]}
                                    </div>
                                </div>
                               )}


                            <button  onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="bg-neutral-950 w-fit px-5 py-3 border border-red-500 border-1 border-r-[3px] border-b-[3px] transition duration-200 rounded-bl-xl rounded-tl-lg rounded-br-lg rounded-tr-xl text-white hover:text-red-500 active:border-r-[1px] active:border-b-[1px] active:text-red-500" >
                                <QuestionLogo className="w-6 h-5" />
                            </button>
                        </div>
                    
                  
                  </div>

              </div>
                  
                  <img src={profilePic} alt='Profile' className='w-auto max-h-[300px] select-none border-2'/>
                        
            </div>
       

       
        {/* About Me */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-7 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
          <h2 className='text-lg font-bold pb-2'>About Me</h2>
            <div className='flex flex-col gap-2 text-sm font-light'>
              <p> Hi, I'm Daniel, a graphics programmer from Canada.</p> <br />
              <p> My primary tools of choice includes:</p>
              <ul className='list-disc list-inside pl-1'>
                <li> <b>C/C++</b></li>
                <li> <b>Java</b></li>
                <li> <b>Python</b></li>
                <li> <b>React</b></li>
                <li> <b>Nodejs</b></li>
                <li> <b>TypeScript</b></li>
                <li> <b>TailwindCSS</b></li>
                <li> <b>WebGPU</b></li>
              </ul>
              <br />
              <p>Besides coding, I'm passionate about 3D modelling, animation, weightlifiting, and cinema.</p>
            </div>
        </section>
        
       

         {/* Email And Socials */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-4 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
          <h2 className='text-lg font-bold pb-5'>Let's start working together!</h2>
          <h2 className="italic text-zinc-500 pb-1">Contact Details</h2>
          <p className='italic text-sm pb-5'>daniel.sobalski2036@gmail.com <br />Canada</p>
        
          <h2 className="italic text-zinc-500 pb-1">Socials</h2>
          <ul>
            <li><a href="https://www.linkedin.com/in/danielsobalski/">Linkedin</a></li>
            <li><a href="https://github.com/dansk-i">Github</a></li>
          </ul>
          
        </section>

         {/* Clock */}
        <section className="bg-neutral-800 overflow-hidden border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-1 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
           <Clock />
        </section>

         {/* Projects */}
        <section className="bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-3 p-6 rounded-lg hover:border-red-500 hover:border-1 transition duration-200">
           <h2>Projects</h2>
           <Link to="/projects" className="nav-card">
            <p>See my portfolio projects</p>
          </Link>
          <Link to="/about" className="nav-card">
            <h2>About Me</h2>
            <p>Background, skills, interests</p>
          </Link>
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
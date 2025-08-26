import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import profilePic from '../assets/testimage.png';
import { ReactComponent as GithubLogo } from '../assets/github.svg';
import { ReactComponent as LinkedinLogo } from '../assets/linkedin.svg';
import { ReactComponent as QuestionLogo } from '../assets/question.svg';
import { ReactComponent as ProjectIcon } from '../assets/projects2.svg';
import Clock from '../components/Clock';
import dotsAni from '../assets/dots.gif';
import codingAni from '../assets/coding.gif';



export default function Home() {

  const [showFact, setShowFact] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const [visBlocks, setVisBlocks] = useState<number[]>([]);

  const [bordColor, setBordColor] = useState("red");
  const colorClasses: Record<string, { border: string; text: string; hover: string; groupHover: string; active: string; after: string }> = {
  red:   { border: "border-rose-500", text: "hover:text-rose-500", hover: "hover:border-rose-500", groupHover: "group-hover:text-rose-500", active: "active:text-rose-500", after: "after:border-rose-500"},
  blue:  { border: "border-cyan-500", text: "hover:text-cyan-500", hover: "hover:border-cyan-500", groupHover: "group-hover:text-cyan-500", active: "active:text-cyan-500", after: "after:border-cyan-500"},
  green: { border: "border-emerald-500", text: "hover:text-emerald-500", hover: "hover:border-emerald-500", groupHover: "group-hover:text-emerald-500", active: "active:text-emerald-500", after: "after:border-emerald-500"},
  violet: { border: "border-violet-500", text: "hover:text-violet-500", hover: "hover:border-violet-500", groupHover: "group-hover:text-violet-500", active: "active:text-violet-500", after: "after:border-violet-500"},
};

  const facts = [
    "I love shaders",
    "3D graphics rock!",
    "Can't wait for TIFF 2025!",
    "Math is beautiful",
    "C++ for life",
    "Keep calm and code on",
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

  useEffect(() => {
      const totalBlocks = 8;
      const delay = 200; 
      
      for (let i = 0; i < totalBlocks; i++) {
        setTimeout(() => {
          setVisBlocks((prev) => [...prev, i]);
        }, i * delay);
      }
  }, []);

  return (

    <div className="flex flex-col items-center justify-center">
      <main className="text-white m-auto grid grid-cols-4 grid-rows-8 gap-4 max-w-6xl overflow-hidden w-full h-full p-6 h-screen max-h-[800px] font-mono max-sm:grid-cols-1 max-sm:grid-rows-none max-sm:h-auto max-sm:max-h-none max-sm:overflow-visible">

        {/* Main Header */}
        <div className={`flex w-full h-full bg-neutral-800 border border-zinc-600 col-span-3 row-span-4 max-sm:col-span-1 max-sm:row-span-1 max-sm:min-h-[250px] align-start justify-start p-6 pb-10 rounded-lg overflow-hidden ${colorClasses[bordColor].hover} hover:border-1 transition-all duration-700 ease-out transform ${visBlocks.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          <div className="flex flex-col justify-between">
            <div className=''>
              <h2 className="text-sm font-light m-0 text-zinc-500">welcome</h2>
            </div>
            <div className='h-full font-light'>
              <span>I'm <b className="font-bold">Daniel Sobalski</b>, a software developer with strong focus on graphics, optimization, and the user experience.</span> <br />

              <span className='block mt-2'>Feel free to reach out, or to check some the projects I've been working on below.</span>
            </div>


              {/* Logo Links */}
              <div className='flex flex-row gap-4 justify-start place-items-center'>

                <div className='w-20'>
                  <button onClick={() => window.open("https://github.com/dansk-i", "_blank")}
                    className={`bg-neutral-950 w-fit px-5 py-3 border ${colorClasses[bordColor].border} border-1 border-r-[3px] border-b-[3px] transition duration-200 rounded-bl-xl rounded-tl-lg rounded-br-lg rounded-tr-xl text-white ${colorClasses[bordColor].text} active:border-r-[1px] active:border-b-[1px] ${colorClasses[bordColor].active}`}>
                    <GithubLogo className="w-6 h-5" />
                  </button>
                </div>


                <div className='w-20'>
                  <button onClick={() => window.open("https://www.linkedin.com/in/danielsobalski/", "_blank")}
                    className={`bg-neutral-950 w-fit px-5 py-3 border ${colorClasses[bordColor].border} border-1 border-r-[3px] border-b-[3px] transition duration-200 rounded-bl-xl rounded-tl-lg rounded-br-lg rounded-tr-xl text-white ${colorClasses[bordColor].text} active:border-r-[1px] active:border-b-[1px] ${colorClasses[bordColor].active}`}>
                    <LinkedinLogo className="w-6 h-5" />
                  </button>
                </div>


                <div className='w-20 relative'>
                  {/* Quip Box */}
                  {showFact && (

                    <div className='absolute bottom-16 -translate-x-[69px] w-[200px] max-w-[200px]'>
                      <div className={`bg-neutral-950 px-5 py-3 border ${colorClasses[bordColor].border} border-1 border-r-[3px] border-b-[3px] rounded-bl-xl rounded-tl-lg rounded-br-lg rounded-tr-xl text-white text-center
                                      after:rotate-45 after:w-5 after:h-5 after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-2 after:bg-neutral-950 after:border-r-[1px] after:border-b-[1px] ${colorClasses[bordColor].after}`}>
                        {facts[factIndex]}
                      </div>
                    </div>
                  )}


                  <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`bg-neutral-950 w-fit px-5 py-3 border ${colorClasses[bordColor].border} border-1 border-r-[3px] border-b-[3px] transition duration-200 rounded-bl-xl rounded-tl-lg rounded-br-lg rounded-tr-xl text-white ${colorClasses[bordColor].text} active:border-r-[1px] active:border-b-[1px] ${colorClasses[bordColor].active}`}>
                    <QuestionLogo className="w-6 h-5" />
                  </button>
                </div>

              </div>

            </div>

          <img src={profilePic} alt='Profile' className='w-auto max-h-[300px] select-none border-2' />

        </div>



        {/* About Me */}
        <section className={`bg-neutral-800 overflow-hidden border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-7 max-sm:col-span-1 max-sm:row-span-1 max-sm:min-h-[250px] p-6 rounded-lg ${colorClasses[bordColor].hover} hover:border-1 transition-all duration-700 ease-out transform ${visBlocks.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
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
        <section className={`bg-neutral-800 overflow-hidden border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-4 max-sm:col-span-1 max-sm:row-span-1 max-sm:min-h-[250px] p-6 rounded-lg ${colorClasses[bordColor].hover} hover:border-1 transition-all duration-700 ease-out transform ${visBlocks.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
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
        <section className={`bg-neutral-800 overflow-hidden border border-zinc-600 align-center flex-none h-full justify-center relative col-span-1 row-span-1 max-sm:col-span-1 max-sm:row-span-1 max-sm:min-h-[75px] p-6 rounded-lg ${colorClasses[bordColor].hover} hover:border-1 focus:outline-none focus:ring-2 focus:ring-red-500/40 transition-all duration-700 ease-out transform ${visBlocks.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          <span className="absolute top-4 right-4 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-50"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 opacity-75"></span>
          </span>

          <Clock />
        </section>

        {/* Projects */}
        <Link to="/projects" draggable={false} className={`group overflow-hidden relative bg-neutral-800 border border-zinc-600 align-start flex-none h-full justify-start col-span-1 row-span-3 max-sm:col-span-1 max-sm:row-span-1 max-sm:min-h-[250px] p-2 rounded-lg ${colorClasses[bordColor].hover} hover:border-1 transition-all duration-700 ease-out transform ${visBlocks.includes(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          <img src={codingAni} alt="" className="scale-[3] absolute inset-0 opacity-0 rounded-lg transition-opacity duration-150 group-hover:opacity-20 pointer-events-none" draggable={false} />
          <span className="pointer-events-none absolute right-5 top-5">
            <svg
              className={`h-5 w-5 text-zinc-400 transition-transform transition-colors duration-200
                          ease-out origin-bottom-left group-hover:scale-[1.25] ${colorClasses[bordColor].groupHover}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* keep stroke width visually constant while scaling */}
              <path d="M7 17L17 7" vectorEffect="non-scaling-stroke" />
              <path d="M9 7h8v8" vectorEffect="non-scaling-stroke" />
            </svg>
          </span>

          <section className={`items-center justify-center w-full h-full flex opacity-75 ${colorClasses[bordColor].text} hover:opacity-65`}>
            <ProjectIcon className='absolute w-1/2 h-1/2' />
            <h2 className='text-md font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-5 '>Projects</h2>
            <img src={dotsAni} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-1/2 h-1/2 inset-0 opacity-100 transition-opacity duration-150 group-hover:opacity-50 pointer-events-none" draggable={false} />
          </section>
        </Link>

        {/* Now Status */}
        <section className={`bg-neutral-800 overflow-hidden border border-zinc-600 align-start flex-none h-full justify-start relative col-span-1 row-span-3 max-sm:col-span-1 max-sm:row-span-1 max-sm:min-h-[250px] p-6 rounded-lg ${colorClasses[bordColor].hover} hover:border-1 transition-all duration-700 ease-out transform ${visBlocks.includes(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
            
            <h2 className='text-sm text-zinc-500'>Now?</h2>
          <div className='flex flex-col gap-2 p-1 pt-3 text-sm font-light'>
            <h2>Currently finishing my studies and looking for oppurtunities to collaborate on impactful projects!</h2>
          </div>
          
        </section>

        {/* Colors */}
        <section className={`bg-neutral-800 overflow-hidden border border-zinc-600 align-start flex-none h-full justify-start col-span-1 row-span-1 max-sm:col-span-1 max-sm:row-span-1 max-sm:min-h-[100px] p-6 rounded-lg ${colorClasses[bordColor].hover} hover:border-1 transition-all duration-700 ease-out transform ${visBlocks.includes(6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          <div className='w-full h-full flex flex-row justify-center items-center pt-2'>
              
              <div className='p-2'><button className='w-10 h-10 rounded-full bg-rose-500 hover:border-white hover:border-2' onClick={() => setBordColor("red")}></button></div>
              <div className='p-2'><button className='w-10 h-10 rounded-full bg-violet-500 hover:border-white hover:border-2' onClick={() => setBordColor("violet")}></button></div>
              <div className='p-2'><button className='w-10 h-10 rounded-full bg-cyan-500 hover:border-white hover:border-2' onClick={() => setBordColor("blue")}></button></div>
              <div className='p-2'><button className='w-10 h-10 rounded-full bg-emerald-500 hover:border-white hover:border-2' onClick={() => setBordColor("green")}></button></div>
             
          </div>
        </section>

        {/* Trademark */}
        <section className={`bg-neutral-800 overflow-hidden border border-zinc-600 align-start flex h-full justify-center relative col-span-1 row-span-1 max-sm:col-span-1 max-sm:row-span-1 max-sm:min-h-[75px] p-8 rounded-lg ${colorClasses[bordColor].hover} hover:border-1 transition-all duration-700 ease-out transform ${visBlocks.includes(7) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          <p className='text-xs '>© 2025 · Daniel</p>
        </section>

      </main>
    </div>
  );
}
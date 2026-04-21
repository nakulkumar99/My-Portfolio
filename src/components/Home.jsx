import img from "../assets/gif.webp";
export default function Home() {
  return (
    <div className="
  min-h-screen 
  text-white 
  flex flex-col lg:flex-row 
  items-center text-center lg:text-left
  justify-between 
  gap-10
  bg-main
  px-6 md:px-12 lg:px-24
py-18 md:py-24 lg:pt-8 pb-36
 lg:-mt-25

" id="home">
     
      <div className="max-w-xl animate-fade-left mx-4 md:mx-16 lg:mx-0 my-6 md:my-10 lg:my-0 ">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Hi, I'm <span className="text-purple-400">Nakul Kumar</span>
        </h1>

        <h2 className="text-2xl font-semibold text-gray-300 mb-4  animate-slide-left delay-200">
          Full Stack Web Developer
        </h2>

        
 <p className="text-base sm:text-lg text-gray-400 mb-6 
               w-full max-w-full 
               mx-1 md:mx-18 lg:mx-0 
               whitespace-normal break-normal 
               typing-animation border-r-2 border-purple-400 pr-2">
  Creating immersive web experiences with modern technologies
</p>



        <div className="flex gap-4  mx-15 md:mx-30 lg:mx-0  mt-6">
          <a
            href="https://github.com/nakulkumar99"
            className="px-6 py-3 bg-purple-600 rounded-xl font-semibold shadow-lg hover:scale-105 active:scale-95 hover:bg-purple-700 transition"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-purple-500 rounded-xl font-semibold hover:bg-purple-700/20 hover:scale-105 active:scale-95 transition"
          >
          
            Contact Me
          </a>
        </div>
      </div>

    
<div className="w-full max-w-md fade-in-once mx-auto lg:mx-0 md:w-1/2 py-35 md:-py-50 lg:py-0">
  <img
    src={img}
    alt="Developer Hero"
    className="rounded-2xl shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500"
  />
</div>
     
      <style>{`
 @keyframes fadeInOnce {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .fade-in-once {
    animation: fadeInOnce 0.8s ease-out forwards;

  }
       
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

       
        .animate-fade-left {
          animation: fadeLeft 1s ease forwards;
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

      
        .animate-slide-left {
          animation: slideLeft 1s ease forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

       
        .typing-animation {
          width: 0;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 4s steps(50) forwards, blink 0.7s infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          0% { border-color: transparent; }
          50% { border-color: #a855f7; }
          100% { border-color: transparent; }
        }
      `}</style>
    </div>
  );
}

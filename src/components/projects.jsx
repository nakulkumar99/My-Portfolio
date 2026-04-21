const projects = [
  {
    title: "College Website",
    description:
      "A multipage college website helping users explore courses, campus life, and more....",
    image: "https://i.pinimg.com/originals/fa/a2/ce/faa2ceedb89acc66b807280a0cbd4be9.jpg",
    viewurl:"https://github.com/NKNakulkumar/College-Website",
    demo:"https://nakulkumar99.github.io/College-Website/",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Weather Forecast Application",
    description:
      "A beautiful, real-time Next.js weather app delivering accurate global forecasts,live....",
    image: "https://cdn.dribbble.com/userupload/5015400/file/original-c61751cdfbfdaf884a0cc8493917fc1d.png?resize=1600x1200",
   viewurl:"https://github.com/NKNakulkumar/Weather-application",
    demo:"https://weatherclimateapp.vercel.app/",
    tags: ["Next.js", "DaisyUI", "Axios", "Recharts"],
  },
  {
    title: "Website Blocker Extension",
    description:
      "A Chrome extension that boosts productivity by blocking distracting websites using domain names or URLs....",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    viewurl:"https://github.com/NKNakulkumar/Block-Box-Extension",
    tags: ["HTML", "CSS", "JavaScript"],
  },
   {
    title: "Restaurant Menu Web Application",
    description:
      "An online restaurant menu application that lets customers browse dishes and place food orders seamlessly....",
    image: "https://www.motocms.com/blog/wp-content/uploads/2020/09/Crunchos_107069_menu_tabs.jpg",
    viewurl:"https://github.com/NKNakulkumar/Restaurant_Menu_Appllication..",
    demo:"https://nakulmenuapp.netlify.app/",
    tags: ["React", "CSS", "Tailwind", "Vite","bun"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-main  px-6 md:px-12 lg:px-24 py-24 lg:py-20  text-white" id="projects">
      <h1 className="text-5xl font-bold mb-4">Projects.</h1>
      <p className="text-gray-300 max-w-2xl ">
        My work. Each project is briefly described with links to code repositories
        and live demos. It reflects my ability to solve complex problems, work with
        different technologies, and manage projects effectively.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group perspective opacity-0 translate-y-10 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="relative h-80 w-full rounded-2xl shadow-lg transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            
              <div className="absolute inset-0 pb-30 rounded-2xl overflow-hidden backface-hidden">
                <img
                  src={p.image}
                  alt="project"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 px-5 w-full bg-linear-to-t from-black/70 to-transparent p-2 md:-py-10 lg:py-2">
                  <h2 className="text-lg font-bold    ">{p.title}</h2>
                  <p className="text-gray-300 text-sm mb-10">{p.description}</p>
                </div>
                <div className="absolute bottom-0 w-full  bg-linear-to-t from-black/70 to-transparent p-4">
                   <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-purple-700/40 border border-purple-500 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                </div>
              </div>

           
              <div className="absolute inset-0 p-6 bg-[#0a0f24] rounded-2xl rotate-y-180 backface-hidden flex flex-col justify-between">
                
                <div className="flex gap-4 justify-center mt-10 p-4 pt-20">
                    <a
            href={p.viewurl}  
            className="px-6 py-3 bg-transparent border border-purple-500 rounded-xl font-semibold hover:bg-purple-700/20 hover:scale-105 active:scale-95 transition"
          >
          
            View Code
          </a>
           <a
            href={p.demo}
            className="px-6 py-3 bg-transparent border border-purple-500 rounded-xl font-semibold hover:bg-purple-700/20 hover:scale-105 active:scale-95 transition"
          >
          
            Demo
          </a>
                </div>
               
               
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <style>{`
        .perspective { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease forwards;
        }
      `}</style>
    </div>
  );
}

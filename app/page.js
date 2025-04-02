import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Sample project data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Snipes",
      description: "An eBay web scraper to help find the best deals on Pokemon cards",
      color: "#FFB1A0",
      image: "/project-1-detail-1.png",
      link: "/projects/project-one",
      inProgress: false
    },
    {
      id: 2,
      title: "B'AI'seball",
      description: "Predicts what pitch is coming next for any MLB pitcher",
      color: "#A5E8B0",
      image: "/project-2.png",
      link: "/projects/project-two",
      inProgress: false
    },
    {
      id: 3,
      title: "WIP",
      description: "A work in progress",
      color: "#A0C8FF",
      image: "/project3.jpg",
      link: "/",
      inProgress: true
    },
    {
      id: 4,
      title: "WIP",
      description: "A work in progress",
      color: "#D7B5FF",
      image: "/project4.jpg",
      link: "/",
      inProgress: true
    },
  ];

  return (
    <div className="min-h-screen bg-[#f2e8d9] p-6 md:p-12">
      {/* Header */}
      <header className="mb-16 mt-8">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-center">
          <span className="bg-black text-white px-4 py-2 rotate-[-1deg] inline-block">BABY STEPS</span>
        </h1>
        <p className="text-xl md:text-2xl mt-6 text-center font-mono max-w-xl mx-auto text-gray-600">
          A collection of mini-projects est. 2025
        </p>
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto font-mono">
        {projects.map((project) => (
          <Link 
            href={project.link} 
            key={project.id}
            className="group block"
          >
            <div 
              className="h-64 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                        hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] 
                        transition-all duration-200 
                        hover:translate-x-[-4px] hover:translate-y-[-4px]
                        overflow-hidden relative p-6 flex flex-col justify-between"
              style={{ backgroundColor: project.color }}
            >
              <div className="absolute right-[-20px] top-[-20px] w-32 h-32 rotate-6 group-hover:rotate-[-2deg] transition-all duration-300">
                <div className="relative w-full h-full border-3 border-black bg-white p-1">
                  {project.image && (
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Tape effect for work in progress */}
              {project.inProgress && (
                <>
                <div className="absolute top-5 left-[-30px] w-[170px] h-[30px] bg-[#f7e9a0] 
                              rotate-[-35deg] z-20 flex items-center justify-center
                              shadow-sm before:content-[''] before:absolute before:inset-0 
                              before:bg-[url('/tape-texture.png')] before:opacity-10 before:bg-repeat">
                  <span className="text-black font-black text-sm tracking-wide">WORK IN PROGRESS</span>
                </div>
                <div className="absolute bottom-5 right-[-30px] w-[170px] h-[30px] bg-[#f7e9a0] 
                              rotate-[-35deg] z-20 flex items-center justify-center
                              shadow-sm before:content-[''] before:absolute before:inset-0 
                              before:bg-[url('/tape-texture.png')] before:opacity-10 before:bg-repeat">
                  <span className="text-black font-black text-sm tracking-wide">WORK IN PROGRESS</span>
                </div>
                </>
              )}
              
              <h2 className="text-2xl md:text-3xl font-bold relative z-10">{project.title}</h2>
              <p className="text-lg font-medium bg-white px-3 py-1 border-2 border-black inline-block relative z-10 text-black">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 mb-8 text-center font-mono text-lg">
        <p className="inline-block bg-black text-white px-4 py-2 rotate-[1deg]">
          Adrian Tse 2025
        </p>
      </footer>
    </div>
  );
}

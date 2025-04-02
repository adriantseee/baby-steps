"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";

// Sample project data - you should move this to a shared location
// or fetch from an API/database in a production environment
const projectsData = {
  "project-one": {
    id: "project-one",
    title: "Snipes",
    description: "An eBay web scraper to help find undervalued Pokemon cards. I personally really enjoy collecting Pokemon cards, so this project was a fun way to combine my interest in coding with my lifelong hobby (I can also justify it as an 'investment' to my parents).",
    color: "#FFB1A0",
    createdAt: "February 2025",
    skills: ["JavaScript", "Python", "Web Scraping"],
    images: ["/project-1.png", "/project-1-detail-1.png", "/assets/project-1-detail-2.png"],
    githubUrl: "https://github.com/adriantseee/snipes",
    inProgress: false,
    canViewGithub: false,
    canViewKaggle: false
  },
  "project-two": {
    id: "project-two",
    title: "B'AI'seball",
    description: "Predicts what pitch is coming next for any MLB pitcher. Though it isn't very accurate, it was a fun project to work on. It's hard to predict what pitch is coming next because there are so many factors that can affect a pitcher's decision-making.",
    color: "#A5E8B0",
    createdAt: "February/March 2025",
    skills: ["Python", "Jupyter Notebook", "Data Visualization", "Pandas", "Tensorflow", "Keras"],
    images: ["/project-2.png", "/project-2-detail-1.png", "/project-2-detail-2.png"],
    inProgress: false,
    canViewGithub: false,
    canViewKaggle: true,
    kaggleUrl: "https://www.datacamp.com/datalab/w/ad23ba85-7705-4789-8d57-3ba2adac9480/edit"
  },
  "project-three": {
    id: "project-three",
    title: "Project Three",
    description: "A weird web toy",
    color: "#A0C8FF",
    createdAt: "March 2025",
    skills: ["JavaScript", "Three.js", "WebGL", "Interactive Design"],
    images: ["/project3.jpg", "/project-3-detail-1.jpg", "/project-3-detail-2.jpg"],
    githubUrl: "https://github.com/yourusername/project-three",
    inProgress: true,
    canViewGithub: false,
    canViewKaggle: false
  },
  "project-four": {
    id: "project-four",
    title: "Project Four",
    description: "An interesting calculator",
    color: "#D7B5FF",
    createdAt: "April 2025",
    skills: ["TypeScript", "React", "Tailwind CSS", "Mathematics"],
    images: ["/project4.jpg", "/project-4-detail-1.jpg", "/project-4-detail-2.jpg"],
    githubUrl: "https://github.com/yourusername/project-four",
    inProgress: true,
    canViewGithub: false,
    canViewKaggle: false
  }
};

export default function ProjectPage({ params }) {
  // Unwrap params with React.use() to fix the warning
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  
  const project = projectsData[id];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f2e8d9] p-6 md:p-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="bg-black text-white px-4 py-2 rounded-md">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2e8d9] p-6 md:p-12">
      {/* Navigation */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-block bg-white border-2 border-black px-4 py-2 font-bold 
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] 
                    hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                    transition-all duration-200 text-black"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <header 
        className="border-4 border-black p-6 mb-8 relative overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        {/* Work in Progress Tape (if applicable) */}
        {project.inProgress && (
          <div className="absolute top-5 right-5 w-[170px] h-[30px] bg-[#f7e9a0] 
                        rotate-[5deg] z-20 flex items-center justify-center
                        shadow-sm before:content-[''] before:absolute before:inset-0 
                        before:bg-[url('/tape-texture.png')] before:opacity-10 before:bg-repeat">
            <span className="text-black font-black text-sm tracking-wide">WORK IN PROGRESS</span>
          </div>
        )}

        <h1 className="text-4xl md:text-6xl font-mono font-bold mb-4 relative z-10">{project.title}</h1>
        <p className="text-xl md:text-2xl font-mono font-medium relative z-10">{project.description}</p>
        <div className="mt-4 inline-block bg-white px-4 py-1 border-2 border-black relative z-10">
          <p className="font-mono text-black">{project.createdAt}</p>
        </div>
      </header>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 inline-block bg-black text-white px-3 py-1 rotate-[-1deg]">
          Skills & Technologies learned
        </h2>
        <div className="flex flex-wrap gap-3 mt-4">
          {project.skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-white border-2 border-black px-4 py-2 font-mono 
                        shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Image Collage */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 inline-block bg-black text-white px-3 py-1 rotate-[1deg]">
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((image, index) => (
            <div 
              key={index} 
              className="border-4 border-black bg-white p-3 
                         shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                         transform rotate-0 hover:rotate-1 transition-all duration-300
                         cursor-pointer"
              style={{ 
                transform: `rotate(${(index % 3 - 1) * 2}deg)`,
              }}
              onClick={() => openLightbox(image)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Repository Buttons */}
      <section className="mb-12 flex flex-wrap gap-4 justify-center">
        {project.canViewGithub && (
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white border-3 border-black px-8 py-4 font-bold text-lg
                      shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] 
                      hover:translate-x-[-4px] hover:translate-y-[-4px] 
                      hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]
                      transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </div>
          </a>
        )}
        
        {project.canViewKaggle && (
          <a 
            href={project.kaggleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#20BEFF] text-white border-3 border-black px-8 py-4 font-bold text-lg
                      shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] 
                      hover:translate-x-[-4px] hover:translate-y-[-4px] 
                      hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]
                      transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M5.42 11.094c-.287 0-.542.137-.703.348L3 13.535V5.928A.928.928 0 0 1 3.928 5h16.144a.928.928 0 0 1 .928.928v12.144a.928.928 0 0 1-.928.928H3.928A.928.928 0 0 1 3 18.072v-1.875l1.719-2.092a.704.704 0 0 1 .697-.345c.272.007.55.01.801.347l1.456 1.949 3.151-4.89a.704.704 0 0 1 .598-.337.717.717 0 0 1 .6.337l2.214 3.421 1.222-1.489a.728.728 0 0 1 .572-.276.74.74 0 0 1 .572.276l1.743 2.154v-7.186h-12.4c-.534 0-.535.015-.535.015-.294.054-.52.328-.52.631 0 .313.226.585.52.644 0 0 .096.008.535.008h11.223v1.177H5.42z"/>
              </svg>
              View on Kaggle
            </div>
          </a>
        )}
      </section>

      {/* Lightbox for full-size images */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] border-4 border-black bg-white p-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute -top-5 -right-5 w-10 h-10 bg-black text-white border-2 border-white rounded-full flex items-center justify-center font-bold text-xl z-10"
              onClick={closeLightbox}
            >
              ×
            </button>
            
            <div className="relative w-full h-[80vh] flex items-center justify-center">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Full size image"
                  width={1200}
                  height={800}
                  className="object-contain max-h-full"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
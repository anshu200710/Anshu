import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- Updated Data with your 5 Projects ---
const projects = [
  {
    id: 1,
    title: "VyaapaarNiti",
    category: "Consultancy & Franchise",
    year: "2024",
    tags: ["Business", "Consulting", "Platform"],
    // Placeholder image: Business/Meeting vibe
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop", 
    link: "https://vyaapaarniti.com/"
  },
  {
    id: 2,
    title: "Forever Clothing",
    category: "E-Commerce Store",
    year: "2024",
    tags: ["React", "Shopping", "Fashion"],
    // Placeholder image: Fashion/Clothes
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop", 
    link: "https://forever-frontend-inky-chi.vercel.app/"
  },
  {
    id: 3,
    title: "Job Portal",
    category: "Recruitment Platform",
    year: "2024",
    tags: ["Hiring", "Job Search", "MERN"],
    // Placeholder image: Office/Work
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop", 
    link: "https://job-portal-three-kappa.vercel.app/"
  },
  {
    id: 4,
    title: "LMS Platform",
    category: "EdTech System",
    year: "2023",
    tags: ["Education", "Courses", "Dashboard"],
    // Placeholder image: Study/Laptop
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop", 
    link: "https://lms-drab-pi.vercel.app/"
  },
  {
    id: 5,
    title: "Quick GPT",
    category: "AI Chat Interface",
    year: "2023",
    tags: ["OpenAI", "Clone", "Chatbot"],
    // Placeholder image: AI/Tech
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop", 
    link: "https://quick-gpt-ivory.vercel.app/login"
  }
];

export default function Work() {
  return (
    <section id="work" className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Flex Container: Stacks on mobile, Side-by-side on Desktop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* --- LEFT COLUMN (STICKY) --- */}
          {/* lg:sticky makes it stick only on large screens. top-32 gives it breathing room from top */}
          <div className="w-full lg:w-1/3 lg:h-fit lg:sticky lg:top-32 flex flex-col items-start gap-8 z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[0.9]"
            >
              Selected <br />
              work
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-500 text-lg max-w-xs"
            >
              A showcase of my recent projects, including consultancy platforms, e-commerce solutions, and AI integrations.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-black transition-colors"
            >
              See All Projects
            </motion.button>
          </div>

          {/* --- RIGHT COLUMN (SCROLLABLE PROJECTS) --- */}
          <div className="w-full lg:w-2/3 flex flex-col gap-20 md:gap-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Individual Project Card Component ---
function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group w-full cursor-pointer"
      // Added onClick to open link in new tab
      onClick={() => window.open(project.link, "_blank")}
    >
      {/* Image Container */}
      <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-gray-100 rounded-[2rem] overflow-hidden mb-6 relative border border-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        
        {/* Overlay Button */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-lg">
          <ArrowUpRight size={20} className="text-gray-900" />
        </div>
      </div>

      {/* Content Info */}
      <div className="flex flex-col gap-3">
        {/* Title Row */}
        <div className="flex justify-between items-baseline border-b border-gray-200 pb-4 mb-2">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
            {project.title}
          </h3>
          <span className="text-gray-400 font-medium">{project.year}</span>
        </div>

        {/* Tags Row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-gray-500 font-medium uppercase tracking-wider text-sm">
            {project.category}
          </span>
          
          <div className="flex gap-2">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
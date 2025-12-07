import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRightCircle,
  Linkedin,
  Github,
  Twitter,
  Figma,
  Code2,
  ExternalLink,
  Mail,
  Dribbble,
  Instagram
} from "lucide-react";
import { assets } from "../assets/assets";

// --- Assets & Data ---
// Replace these with your actual assets if available, keeping fallbacks for preview
const PROFILE_IMAGE = assets?.profile || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
const WORK_PREVIEW = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

const BRANDS = [
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "Node", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Antu_mongodb.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" }
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Makes it scroll smoothly instead of jumping
  });
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={scrollToTop}>
            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <span className="font-bold text-lg tracking-tight">ANSHU.DEV</span>
          </div>
          <a href='#contact' className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">
            Book a call
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        // Responsive Padding: pt-24 for mobile, pt-32 for desktop
        className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* --- LEFT COLUMN (Typography) --- */}
          <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col justify-center pt-4">

            {/* Status Pill */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide border border-emerald-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* Main Heading - Responsive Text Sizes */}
            <h1 className="text-5xl sm:text-6xl md:text-[5rem] lg:text-[5.5rem] leading-[0.95] font-extrabold tracking-tight mb-6">
              Hi, I’m a <br />
              Full Stack <br />
              Developer <span className="text-gray-300 font-light text-3xl md:text-4xl align-top">©</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed mb-10">
              I build scalable web applications and seamless digital experiences using the MERN stack and modern cloud technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <motion.a
                href='#contact'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-medium shadow-xl shadow-gray-200"
              >
                Contact Me
                <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <a href="#work" className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium px-4 py-2">
                See my work <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN (Bento Grid) --- */}
          <motion.div variants={itemVariants} className="lg:col-span-6 w-full mt-8 lg:mt-0">
            <div className="flex flex-col gap-5">

              {/* Row 1: Info Card + Large Photo */}
              {/* Responsive Grid: 1 col on mobile, 5 cols on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

                {/* Expert Card */}
                <div className="md:col-span-2 bg-white rounded-3xl p-5 border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col justify-between h-auto min-h-[280px] md:h-[320px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                      <Code2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Anshu</h3>
                      <p className="text-xs text-gray-400">Delhi NCR, India</p>
                    </div>
                  </div>

                  <div className="relative w-full h-32 md:h-28 lg:h-32 rounded-2xl overflow-hidden bg-gray-50 mb-4 border border-gray-100 group">
                    <img src={WORK_PREVIEW} alt="Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="bg-gray-100 text-[10px] font-bold px-2 py-1 rounded text-gray-600">REACT EXPERT</span>
                    <span className="text-sm font-bold text-indigo-600">$40/hr</span>
                  </div>
                </div>

                {/* Profile Photo - FIXED: Added specific height for mobile (h-[400px]) so it shows up */}
                <div className="md:col-span-3 h-[400px] md:h-[320px] rounded-3xl overflow-hidden relative shadow-lg">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Profile"
                    // object-top helps keep the face visible on different aspect ratios
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Row 2: Gradient Banner + Socials */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

                {/* Gradient Brand Card with Infinite Scroll */}
                <div className="md:col-span-8 rounded-3xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden shadow-inner min-h-[160px]"
                  style={{ background: "linear-gradient(110deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)" }}>

                  {/* Background Overlay */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

                  {/* Content Container */}
                  <div className="relative z-10 w-full overflow-hidden">
                    <p className="text-white/90 text-sm font-medium mb-4 ml-1">Tech Stack & Tools</p>

                    {/* --- Marquee Track --- */}
                    <div className="flex w-max marquee-inner hover:[animation-play-state:paused]">

                      {/* Triple the array for seamless looping */}
                      {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                        <div key={i} className="mx-3"> {/* mx-3 adds spacing between items */}

                          {/* Icon Container Style */}
                          <div className="flex items-center justify-center bg-white/20 w-12 h-12 rounded-xl backdrop-blur-sm shadow-sm border border-white/10 hover:bg-white/30 transition-colors"
                            title={brand.name}>
                            <img
                              src={brand.logo}
                              alt={brand.name}
                              className="w-6 h-6 opacity-90 brightness-0 invert"
                            />
                          </div>

                        </div>
                      ))}
                    </div>

                  </div>
                </div>



                {/* Social Icons Grid */}
                <div className="md:col-span-4 grid grid-cols-3 gap-3 h-fit md:h-auto">
                  {[
                    { icon: <Github />, link: "https://github.com/anshu200710" },
                    { icon: <Linkedin />, link: "https://www.linkedin.com/in/anshu-webdeveloper2007/" },
                    { icon: <Mail />, link: "mailto:anshu2007.dev@gmail.com" },
                    // Placeholders - Update these with your actual URLs
                    { icon: <Twitter />, link: "https://twitter.com" },
                    { icon: <Instagram />, link: "https://instagram.com" },
                    { icon: <Dribbble />, link: "https://dribbble.com" }
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target={item.link.startsWith("mailto") ? "_self" : "_blank"} // Don't open new tab for mail
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-md hover:text-black border border-transparent hover:border-gray-200 transition-all cursor-pointer"
                    >
                      {React.cloneElement(item.icon, { size: 20 })}
                    </motion.a>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
}
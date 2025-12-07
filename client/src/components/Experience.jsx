import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- Experience Data ---
const experiences = [
    {
        id: 1,
        company: "D-mac",
        role: "Full-time Full Stack Developer",
        period: "2025 - Present",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
        id: 2,
        company: "Divine Spark Health Care",
        role: "Full-time Web Developer",
        period: "2024 - 2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Grammarly_logo.svg",
    },
    {
        id: 3,
        company: "Frelancer",
        role: "Full-time Web Developer",
        period: "2023 - present",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    },
];

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Experience() {
    return (
        <section className="w-full bg-gray-50 py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >

                    {/* --- CARD 1: TITLE & CTA (Top Left) --- */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between items-start shadow-sm min-h-[320px]"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
                            Wanna see <br />
                            my experience?
                        </h2>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-sm flex items-center gap-2 group hover:bg-black transition-colors shadow-lg shadow-gray-200"
                        >
                            Book a call
                            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.button>
                    </motion.div>

                    {/* --- CARDS 2, 3, 4: EXPERIENCE LIST --- */}
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            // Added 'group' class here so the hover effect on the text works
                            className="group bg-white rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between items-start shadow-sm min-h-[320px] cursor-default transition-all hover:shadow-xl hover:shadow-gray-100"
                        >
                            {/* Logo Area (Now Text) */}
                            <div className="w-full mb-8">
                                <span className="text-3xl font-black tracking-tight text-gray-900 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                    {exp.company}
                                </span>
                            </div>

                            {/* Text Area */}
                            <div className="w-full">
                                {/* Note: Since the company name is now the "Logo" above, 
         you might want to hide this smaller h3 to avoid repetition. 
         I've left it here, but you can remove it if you prefer. 
      */}
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-gray-400 font-semibold text-lg">{exp.company}</h3>
                                </div>

                                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                                    {exp.role}
                                </h4>

                                <p className="text-gray-400 font-medium text-sm border-t border-gray-100 pt-4 mt-2 inline-block w-full">
                                    {exp.period}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
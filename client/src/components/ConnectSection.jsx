import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ConnectSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const createMailtoLink = (email, subject, body) => {
    const params = new URLSearchParams({
      subject: subject,
      body: body,
    });
    return `mailto:${email}?${params.toString()}`;
  };

  return (
    <motion.section
      className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto space-y-8">

        {/* --- Top Section: Contact & Social Cards --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left Card: "Let's connect" */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between lg:col-span-2 min-h-[400px]"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Let’s <br /> connect <br /> and chat
            </h2>
            <a
              href={createMailtoLink(
                "anshu2007.dev@gmail.com",
                "Project Inquiry",
                "Hi Anshu,\n\nI saw your portfolio and would like to chat."
              )}
              className="flex items-center gap-2 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors group w-fit"
            >
              ANSHU2007.DEV@gmail.com
              <span className="bg-black text-white rounded-full p-1 group-hover:bg-gray-700 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </motion.div>

          {/* Right Card: Social Links */}
          <motion.div
            variants={itemVariants}
            className="bg-[#2A9D8F] rounded-[2.5rem] p-10 md:p-14 lg:col-span-3 relative overflow-hidden flex items-center justify-center min-h-[400px]"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 max-w-lg">
              <SocialButton text="FOLLOW ME!" className="border-white text-white" emoji="👀" />
              <SocialButton text="Github" className="border-white text-white" href="https://github.com/anshu200710" />
              <SocialButton text="Linkedin" className="border-white text-white" href='https://www.linkedin.com/in/anshu-webdeveloper2007/' />
              <SocialButton text="Leetcode" className="border-white text-white" href="https://leetcode.com/u/anshu200710/"/>
              <SocialButton text="Facebook" className="border-white text-white" />
              <SocialButton text="Instagram" className="border-white text-white" />
            </div>
          </motion.div>
        </div>

        {/* --- Bottom Section: Footer --- */}
        {/* <motion.div 
          variants={itemVariants}
          className="bg-white rounded-full py-4 px-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-700">C</div>
            <span className="font-bold text-gray-900">COZYDIADORA</span>
          </div>

          <span className="text-gray-500 text-sm">©2024</span>

          <button className="bg-[#3E3E3E] text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors">
            Book a call
          </button>
        </motion.div> */}

      </div>
    </motion.section>
  );
};

// Helper Component for Social Buttons
const SocialButton = ({ text, className, emoji, href }) => (
  <motion.a
    href={href}
    target='_blank'
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`border-2 rounded-full px-6 py-3 font-medium flex items-center gap-2 transition-colors hover:bg-white/10 ${className}`}
  >
    {text}
    {emoji && <span>{emoji}</span>}
  </motion.a>
);

export default ConnectSection;
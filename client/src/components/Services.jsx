import React from 'react';
import { LayoutTemplate, Code2, PenTool, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  // Data for the services grid
  const services = [
    {
      id: "01",
      title: "UI Design",
      description: "We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices.",
      icon: <LayoutTemplate className="w-5 h-5 text-indigo-600" />,
      bgColor: "bg-indigo-50"
    },
    {
      id: "02",
      title: "Development",
      description: "Our team builds reliable, scalable solutions, delivering clean code that powers websites and mobile apps with top-notch performance and security.",
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      bgColor: "bg-blue-50"
    },
    {
      id: "03",
      title: "Graphic Design",
      description: "We design responsive, user-friendly websites that blend aesthetics with functionality, providing a seamless experience across devices and reflecting your brand's identity.",
      icon: <PenTool className="w-5 h-5 text-purple-600" />,
      bgColor: "bg-purple-50"
    },
    {
      id: "04",
      title: "Branding",
      description: "We craft memorable brand identities, from logos to complete strategies, ensuring consistency and a strong connection with your audience across all platforms.",
      icon: <Megaphone className="w-5 h-5 text-pink-600" />,
      bgColor: "bg-pink-50"
    }
  ];

  // Logos for the carousel (using the URLs you provided)
  const companiesLogo = [
    { name: "Framer", logo: "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg" },
    { name: "Huawei", logo: "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg" },
    { name: "Instagram", logo: "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg" },
    { name: "Microsoft", logo: "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg" },
    { name: "Walmart", logo: "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* --- CSS for Marquee Animation --- */}
      <style>{`
        .marquee-inner {
          animation: marqueeScroll 20s linear infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); } /* Adjusted for smoother loop */
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* --- Top Section: Mission & Carousel --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#2A9D8F] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-xl"
        >
          {/* Content */}
          <div className="relative z-20">
            <h1 className="text-3xl md:text-5xl font-medium leading-tight max-w-4xl mb-16">
              My mission is to assist startups and enterprises in creating an emotional bond between their products and satisfied, engaged customers.
            </h1>
          </div>
        </motion.div>


        {/* --- Bottom Section: "How Can I Assist You" Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight sticky top-10">
              How Can I <br /> Assist You?
            </h2>
          </motion.div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[280px]"
              >
                {/* Top: Icon & Description */}
                <div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${service.bgColor}`}>
                    {service.icon}
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-[0.95rem]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom: Title & ID */}
                <div className="flex items-end justify-between mt-8 border-t border-gray-100 pt-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <span className="text-gray-300 font-medium text-lg">
                    {service.id}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: 'beforeChildren', staggerChildren: 0.12, duration: 0.6, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const buttonVariants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export default function Contact() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/api/send-email`, formData);
      alert(res.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappNumber = '918882374849';
  const whatsappMessage = encodeURIComponent(`Hello, I am ${formData.name || 'interested'}. ${formData.message || ''}`);

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Card / hero area */}
      <motion.div
        variants={itemVariants}
        className="w-full max-w-[1200px] rounded-2xl p-12 md:p-16 relative overflow-hidden"
        style={{
          // soft purple gradient with subtle glass effect
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(235,230,255,0.85) 35%, rgba(222,216,255,0.95) 100%)',
          boxShadow: '0 12px 40px rgba(20,18,40,0.08)',
          border: '1px solid rgba(255,255,255,0.6)',
          backdropFilter: 'blur(6px)',
        }}
      >
        {/* Decorative large subtle gradient circles (absolute) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-28 -top-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(150,120,255,0.12), transparent 30%)',
            filter: 'blur(28px)',
            opacity: 0.9,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -bottom-24 w-[520px] h-[520px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 70% 70%, rgba(160,140,255,0.12), transparent 30%)',
            filter: 'blur(40px)',
            opacity: 0.85,
          }}
        />

        {/* Header */}
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Contact with me to sizzle your project
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-300">
            Feel free to contact me if having any questions. I'm available for new projects or just for chatting.
          </p>
        </div>

        {/* Form area */}
        <motion.form
          onSubmit={sendEmail}
          className="relative z-10 mt-10 max-w-4xl mx-auto flex flex-col gap-6"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Two inputs side-by-side */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-5">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              required
              aria-label="Name"
              className="flex-1 min-w-[160px] px-5 py-3 rounded-full border border-transparent shadow-sm
                        bg-white/70 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400
                        transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              required
              aria-label="Email"
              className="flex-1 min-w-[160px] px-5 py-3 rounded-full border border-transparent shadow-sm
                        bg-white/70 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400
                        transition"
            />
          </motion.div>

          {/* Big rounded textarea (glass look) */}
          <motion.textarea
            name="message"
            placeholder="Work Description..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={7}
            disabled={loading}
            aria-label="Message"
            className="w-full p-6 rounded-2xl border border-transparent shadow-inner bg-white/65
                       placeholder-gray-500 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400
                       transition"
            variants={itemVariants}
          />

          {/* Long dark pill submit */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`w-[92%] md:w-[78%] lg:w-[70%] mx-auto py-4 rounded-full font-semibold
                          ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              style={{
                background: 'linear-gradient(180deg, #3c3b46, #2a2a2e)',
                color: 'white',
                boxShadow: 'inset 0 -6px 18px rgba(0,0,0,0.25), 0 10px 30px rgba(18,16,28,0.12)',
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </motion.div>
        </motion.form>

        {/* WhatsApp call-to-action */}
        <motion.div className="relative z-10 mt-8 text-center" variants={itemVariants}>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1 px-6 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition"
            aria-label="Contact via WhatsApp"
          >
            Contact via WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

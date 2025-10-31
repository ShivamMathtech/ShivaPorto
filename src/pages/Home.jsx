import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="section flex flex-col items-center justify-center text-center h-screen"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-display font-extrabold bg-gradient-to-r from-accent via-highlight to-glow text-transparent bg-clip-text"
      >
        Hi, I'm Shivam Singh 👨‍💻
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        Software Developer passionate about crafting interactive and
        high-performance web applications using modern technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 flex space-x-4"
      >
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <a
          href="#contact"
          className="btn-primary bg-highlight hover:bg-pink-500"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

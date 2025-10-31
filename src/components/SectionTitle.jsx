import { motion } from "framer-motion";

function SectionTitle({ title }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-display font-bold mb-10 text-center bg-gradient-to-r from-accent via-highlight to-glow text-transparent bg-clip-text"
    >
      {title}
    </motion.h2>
  );
}

export default SectionTitle;

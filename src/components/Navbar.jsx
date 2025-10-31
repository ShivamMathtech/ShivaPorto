import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-extrabold text-accent tracking-wide">
          Shivam Singh
        </h1>
        <ul className="flex space-x-8 text-gray-300 font-medium">
          {["Home", "Skills", "Projects", "Blogs", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-glow transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main className="pt-20">
        <Home />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

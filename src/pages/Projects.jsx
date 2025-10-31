import SectionTitle from "../components/SectionTitle";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "Personal website showcasing skills and projects.",
      link: "#",
    },
    {
      name: "API Testing Tool",
      desc: "Postman-like tool built using React and Node.js.",
      link: "#",
    },
    {
      name: "3D Interactive Landing",
      desc: "Three.js powered 3D interactive portfolio section.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <SectionTitle title="Projects" />
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="glass p-6 hover:shadow-glow/40 hover:scale-105 transition-all"
          >
            <h3 className="text-xl font-semibold text-accent">{proj.name}</h3>
            <p className="text-gray-400 mt-3 mb-4">{proj.desc}</p>
            <a href={proj.link} className="btn-primary text-sm">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

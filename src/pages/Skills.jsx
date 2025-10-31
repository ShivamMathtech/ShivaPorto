import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "TypeScript",
    "Three.js",
    "TailwindCSS",
  ];

  return (
    <section id="skills" className="section">
      <SectionTitle title="My Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="glass py-6 hover:scale-105 transition-transform"
          >
            <p className="font-semibold text-lg">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

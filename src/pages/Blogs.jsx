import SectionTitle from "../components/SectionTitle";

export default function Blogs() {
  const blogs = [
    { title: "Mastering React", date: "Oct 2025" },
    { title: "Building API Systems", date: "Sept 2025" },
    { title: "Three.js for Beginners", date: "Aug 2025" },
  ];

  return (
    <section id="blogs" className="section">
      <SectionTitle title="Blogs" />
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="glass p-6 hover:bg-slate-800/50 transition-all"
          >
            <h3 className="text-xl font-semibold text-highlight">
              {blog.title}
            </h3>
            <p className="text-gray-400 mt-2">{blog.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

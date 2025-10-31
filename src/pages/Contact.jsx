import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="section text-center">
      <SectionTitle title="Get in Touch" />
      <p className="text-gray-400 mb-6">
        Let’s build something amazing together!
      </p>
      <form className="max-w-md mx-auto glass p-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-slate-800 border border-slate-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-slate-800 border border-slate-700"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="p-3 rounded bg-slate-800 border border-slate-700"
        ></textarea>
        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}

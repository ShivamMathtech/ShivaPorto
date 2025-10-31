function Footer() {
  return (
    <footer className="glass text-center text-sm text-gray-400 py-6 mt-10">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-accent font-semibold">Shivam Singh</span>. All
        Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;

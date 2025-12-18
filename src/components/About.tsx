export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 max-w-6xl mx-auto text-center md:text-left"
    >
      {/* Subtle glowing accent background */}
      <div className="absolute left-0 top-1/3 w-40 h-40 bg-[var(--highlight-color)]/10 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <h2 className="heading text-center mb-8">
        About Us
      </h2>

      {/* Paragraph */}
      <p className="body-text leading-relaxed max-w-4xl mx-auto">
        <span className="font-semibold" style={{ color: "var(--highlight-color)" }}>
          Bombay Facility Services (BFS)
        </span>{" "}
        is a Mumbai-based manpower and security company offering trained and
        reliable professionals for commercial, residential, and event security
        needs.
        <br />
        <br />
        We specialize in providing{" "}
        <strong style={{ color: "var(--highlight-color)" }}>
          Security Guards, Bouncers, Bodyguards, Caretakers, Liftmen, Lady
          Guards, and Drivers
        </strong>
        .
        <br />
        <br />
        Our goal is to ensure safety and peace of mind through discipline,
        integrity, and 24x7 support for our clients.
      </p>
    </section>
  );
}

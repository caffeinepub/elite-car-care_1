export default function Hero() {
  const handleBookNow = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0 0 0 / 0.85) 0%, oklch(0 0 0 / 0.65) 50%, oklch(0 0 0 / 0.8) 100%)",
        }}
      />

      {/* Gold accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.78 0.14 85), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-semibold tracking-widest uppercase"
          style={{
            border: "1px solid oklch(0.78 0.14 85 / 0.4)",
            color: "oklch(0.78 0.14 85)",
            backgroundColor: "oklch(0.78 0.14 85 / 0.08)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "oklch(0.78 0.14 85)" }}
          />
          Premium Auto Detailing
        </div>

        {/* Main Heading */}
        <h1
          className="font-display font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "oklch(0.95 0.01 90)",
          }}
        >
          Elite{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, oklch(0.85 0.12 88), oklch(0.78 0.14 85), oklch(0.65 0.13 82))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Car Care
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl md:text-2xl font-light mb-4 tracking-wide"
          style={{ color: "oklch(0.8 0.01 90)" }}
        >
          Premium Auto Detailing &amp; Car Care Services
        </p>

        <p
          className="text-sm sm:text-base mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ color: "oklch(0.6 0 0)" }}
        >
          We treat every vehicle like our own — delivering showroom-quality
          results with professional-grade products and meticulous attention to
          detail.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            onClick={handleBookNow}
            className="btn-gold min-w-[180px]"
          >
            Book Now
          </button>
          <button
            type="button"
            onClick={handleLearnMore}
            className="btn-outline-gold min-w-[180px]"
          >
            Our Services
          </button>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto pt-12"
          style={{ borderTop: "1px solid oklch(0.78 0.14 85 / 0.2)" }}
        >
          {[
            { value: "500+", label: "Cars Detailed" },
            { value: "5★", label: "Avg. Rating" },
            { value: "15+", label: "Years Experience" },
            { value: "8", label: "Services Offered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold font-display mb-1"
                style={{ color: "oklch(0.78 0.14 85)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs tracking-widest uppercase"
                style={{ color: "oklch(0.55 0 0)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div
          className="text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.5 0 0)" }}
        >
          Scroll
        </div>
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.78 0.14 85), transparent)",
          }}
        />
      </div>
    </section>
  );
}

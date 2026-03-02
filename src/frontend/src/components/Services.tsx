import ScrollReveal from "./ScrollReveal";

const services = [
  {
    name: "Car Wash",
    description:
      "Full exterior wash with premium foam, hand rinse, and streak-free dry finish. Keeps your car looking fresh and clean.",
    duration: "30–45 mins",
    image: "/assets/generated/service-car-wash.dim_600x400.jpg",
  },
  {
    name: "Bike Wash",
    description:
      "Thorough two-wheeler wash with careful attention to chrome parts, tyres, and body panels for a spotless finish.",
    duration: "20–30 mins",
    image: "/assets/generated/service-bike-wash.dim_600x400.jpg",
  },
  {
    name: "Detailing",
    description:
      "Complete interior and exterior detailing — vacuuming, dashboard cleaning, seat conditioning, and exterior decontamination.",
    duration: "2–4 hours",
    image: "/assets/generated/service-detailing.dim_600x400.jpg",
  },
  {
    name: "Polishing",
    description:
      "Machine or hand polishing to remove swirl marks, light scratches, and oxidation, restoring a deep glossy shine.",
    duration: "2–3 hours",
    image: "/assets/generated/service-polishing.dim_600x400.jpg",
  },
  {
    name: "Ceramic Coating",
    description:
      "Long-lasting nano-ceramic protection that bonds to the paint, repelling water, dirt, and UV rays for years of shine.",
    duration: "4–6 hours",
    image: "/assets/generated/service-ceramic-coating.dim_600x400.jpg",
  },
  {
    name: "Window Film",
    description:
      "High-quality tinting film that reduces heat, blocks UV rays, and adds privacy while enhancing your vehicle's look.",
    duration: "1–2 hours",
    image: "/assets/generated/service-window-film.dim_600x400.jpg",
  },
  {
    name: "PPF (Paint Protection Film)",
    description:
      "Self-healing transparent film applied to high-impact zones to protect the paint from stone chips, scratches, and debris.",
    duration: "4–8 hours",
    image: "/assets/generated/service-ppf.dim_600x400.jpg",
  },
  {
    name: "Wrapping",
    description:
      "Full or partial vehicle vinyl wrapping to change colour, add texture, or protect the original paint beneath.",
    duration: "1–3 days",
    image: "/assets/generated/service-wrapping.dim_600x400.jpg",
  },
  {
    name: "Car Accessories",
    description:
      "Wide range of car accessories including seat covers, floor mats, dash cams, LED lights, and custom interior upgrades.",
    duration: "Varies",
    image: "/assets/generated/service-accessories.dim_600x400.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: "oklch(0.1 0 0)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-subheading">What We Offer</p>
          <h2
            className="section-heading"
            style={{ color: "oklch(0.95 0.01 90)" }}
          >
            Our Services
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.78 0.14 85), oklch(0.65 0.13 82))",
            }}
          />
          <p
            className="mt-6 text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.6 0 0)" }}
          >
            From a quick wash to full PPF and wrapping, we have a service
            tailored to every vehicle's needs.
          </p>
        </ScrollReveal>

        {/* Horizontal Cards */}
        <div className="space-y-6" data-ocid="services.list">
          {services.map((service, i) => (
            <ScrollReveal key={service.name}>
              <div
                data-ocid={`services.item.${i + 1}`}
                className="flex flex-col sm:flex-row overflow-hidden"
                style={{
                  background: "oklch(0.13 0 0)",
                  border: "1px solid oklch(0.2 0 0)",
                  borderRadius: "12px",
                }}
              >
                {/* Image */}
                <div className="sm:w-48 md:w-56 shrink-0 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    style={{ transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1)";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-6 py-5 gap-2">
                  {/* Number + Name */}
                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-bold font-display"
                      style={{ color: "oklch(0.78 0.14 85)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-lg font-bold font-display tracking-wide"
                      style={{ color: "oklch(0.95 0.01 90)" }}
                    >
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.6 0 0)" }}
                  >
                    {service.description}
                  </p>

                  {/* Duration badge */}
                  <div className="flex items-center gap-2 mt-1">
                    <svg
                      className="w-4 h-4 shrink-0"
                      style={{ color: "oklch(0.78 0.14 85)" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-label="Duration"
                      role="img"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" />
                      <polyline
                        points="12 6 12 12 16 14"
                        stroke="currentColor"
                      />
                    </svg>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "oklch(0.78 0.14 85)" }}
                    >
                      ⏱ {service.duration}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Bike,
  Car,
  Film,
  Layers,
  Paintbrush,
  Shield,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Car,
    name: "Car Wash",
    subtitle: "Shine & Clean",
    description:
      "Professional hand wash with premium shampoo, wheel cleaning, and streak-free drying for a spotless finish every time.",
  },
  {
    icon: Bike,
    name: "Bike Wash",
    subtitle: "Two-Wheeler Care",
    description:
      "Thorough cleaning for motorcycles and scooters — frame, wheels, engine casing, and chrome polishing included.",
  },
  {
    icon: Sparkles,
    name: "Detailing",
    subtitle: "Inside & Out",
    description:
      "Comprehensive detailing package covering deep interior clean, exterior polish, and every surface treated to perfection.",
  },
  {
    icon: Paintbrush,
    name: "Polishing",
    subtitle: "Mirror Finish",
    description:
      "Multi-stage machine polishing to eliminate swirl marks, light scratches, and oxidation — restoring your paint to a showroom shine.",
  },
  {
    icon: Film,
    name: "Window Film",
    subtitle: "UV & Heat Protection",
    description:
      "High-quality window tinting that blocks UV rays, reduces heat, and enhances privacy while keeping your interior cool.",
  },
  {
    icon: Shield,
    name: "PPF",
    subtitle: "Paint Protection Film",
    description:
      "Self-healing paint protection film that guards against stone chips, scratches, and road debris — invisible armor for your vehicle.",
  },
  {
    icon: Layers,
    name: "Wrapping",
    subtitle: "Custom Vinyl Wrap",
    description:
      "Full or partial vinyl wraps in any color or finish — matte, gloss, satin, or chrome — for a completely transformed look.",
  },
  {
    icon: ShoppingBag,
    name: "Car Accessories",
    subtitle: "All Types Available",
    description:
      "Wide range of car accessories including seat covers, floor mats, dash cams, air fresheners, and more for every vehicle.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: "oklch(0.1 0 0)" }}
    >
      <div className="max-w-7xl mx-auto">
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

        {/* Grid — 2 cols mobile, 3 tablet, 4 desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.name} delay={i * 60}>
                <div
                  className="card-dark p-6 h-full group cursor-default"
                  style={{ borderRadius: "4px" }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "oklch(0.78 0.14 85 / 0.1)",
                      border: "1px solid oklch(0.78 0.14 85 / 0.3)",
                      borderRadius: "4px",
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "oklch(0.78 0.14 85)" }}
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-base font-bold font-display mb-1"
                    style={{ color: "oklch(0.95 0.01 90)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: "oklch(0.78 0.14 85)" }}
                  >
                    {service.subtitle}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "oklch(0.6 0 0)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Basic",
    price: "$79",
    period: "per service",
    description:
      "Perfect for regular maintenance and keeping your car looking its best.",
    features: [
      "Exterior hand wash",
      "Wheel & tire cleaning",
      "Window cleaning",
      "Interior vacuum",
      "Dashboard wipe-down",
      "Air freshener",
    ],
    highlighted: false,
    cta: "Book Basic",
  },
  {
    name: "Standard",
    price: "$149",
    period: "per service",
    description: "Our most popular package — a thorough clean inside and out.",
    features: [
      "Everything in Basic",
      "Clay bar treatment",
      "Hand wax & polish",
      "Interior deep vacuum",
      "Leather conditioning",
      "Tire dressing",
      "Engine bay rinse",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Book Standard",
  },
  {
    name: "Premium",
    price: "$299",
    period: "per service",
    description:
      "The ultimate detailing experience — showroom quality, guaranteed.",
    features: [
      "Everything in Standard",
      "Paint correction (1-stage)",
      "Ceramic sealant coat",
      "Ozone odor treatment",
      "Headlight restoration",
      "Full interior steam clean",
      "Complimentary follow-up",
    ],
    highlighted: false,
    cta: "Book Premium",
  },
];

export default function Pricing() {
  const handleBook = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: "oklch(0.12 0 0)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-subheading">Transparent Pricing</p>
          <h2
            className="section-heading"
            style={{ color: "oklch(0.95 0.01 90)" }}
          >
            Service Packages
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
            No hidden fees. No surprises. Just exceptional results at fair
            prices.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div
                className="relative flex flex-col h-full p-8"
                style={{
                  backgroundColor: plan.highlighted
                    ? "oklch(0.15 0 0)"
                    : "oklch(0.13 0 0)",
                  border: plan.highlighted
                    ? "2px solid oklch(0.78 0.14 85)"
                    : "1px solid oklch(0.25 0 0)",
                  borderRadius: "4px",
                  boxShadow: plan.highlighted
                    ? "0 0 40px oklch(0.78 0.14 85 / 0.15)"
                    : "none",
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold tracking-widest uppercase"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.78 0.14 85), oklch(0.65 0.13 82))",
                      color: "oklch(0.1 0 0)",
                      borderRadius: "2px",
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{
                    color: plan.highlighted
                      ? "oklch(0.78 0.14 85)"
                      : "oklch(0.55 0 0)",
                  }}
                >
                  {plan.name}
                </div>

                {/* Price */}
                <div className="flex items-end gap-2 mb-2">
                  <span
                    className="text-5xl font-bold font-display"
                    style={{ color: "oklch(0.95 0.01 90)" }}
                  >
                    {plan.price}
                  </span>
                </div>
                <div
                  className="text-xs tracking-wider uppercase mb-4"
                  style={{ color: "oklch(0.5 0 0)" }}
                >
                  {plan.period}
                </div>

                <p
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: "oklch(0.6 0 0)" }}
                >
                  {plan.description}
                </p>

                {/* Divider */}
                <div
                  className="h-px mb-6"
                  style={{
                    background: plan.highlighted
                      ? "oklch(0.78 0.14 85 / 0.3)"
                      : "oklch(0.25 0 0)",
                  }}
                />

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.78 0.14 85)" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "oklch(0.7 0 0)" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  onClick={handleBook}
                  className={
                    plan.highlighted
                      ? "btn-gold w-full"
                      : "btn-outline-gold w-full"
                  }
                >
                  {plan.cta}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal>
          <p
            className="text-center text-sm mt-8"
            style={{ color: "oklch(0.45 0 0)" }}
          >
            * Prices may vary based on vehicle size and condition. Contact us
            for a custom quote.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

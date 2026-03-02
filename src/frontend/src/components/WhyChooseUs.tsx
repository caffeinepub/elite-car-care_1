import { Award, Package, ThumbsUp, Truck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  {
    icon: Award,
    title: "15+ Years of Experience",
    description:
      "Our certified detailers bring over 15 years of hands-on expertise with all vehicle types — from daily drivers to exotic supercars. Trusted by thousands of satisfied customers.",
  },
  {
    icon: Package,
    title: "Premium Products",
    description:
      "We use only industry-leading, professional-grade products — including Meguiar's, Chemical Guys, and Gtechniq — for superior results.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "Your satisfaction is our top priority. If you're not 100% happy with the results, we'll make it right — no questions asked.",
  },
  {
    icon: Truck,
    title: "Mobile Service Available",
    description:
      "We come to you. Our fully-equipped mobile detailing unit brings the full salon experience to your home, office, or anywhere you need.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.12 0 0)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.78 0.14 85 / 0.3), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.78 0.14 85 / 0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading */}
          <ScrollReveal>
            <p className="section-subheading">The Elite Difference</p>
            <h2
              className="section-heading"
              style={{ color: "oklch(0.95 0.01 90)" }}
            >
              Why Choose Us
            </h2>
            <div
              className="w-16 h-0.5 mt-4 mb-6"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.78 0.14 85), oklch(0.65 0.13 82))",
              }}
            />
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.6 0 0)" }}
            >
              At Elite Car Care, we don't just clean cars — we restore them to
              their finest form. Our commitment to excellence, premium
              materials, and customer satisfaction sets us apart from the
              competition.
            </p>
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-gold"
            >
              Get a Free Quote
            </button>
          </ScrollReveal>

          {/* Right: Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div
                    className="p-6 h-full"
                    style={{
                      backgroundColor: "oklch(0.15 0 0)",
                      border: "1px solid oklch(0.25 0 0)",
                      borderRadius: "4px",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "oklch(0.78 0.14 85 / 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "oklch(0.25 0 0)";
                    }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center mb-4"
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
                    <h3
                      className="text-sm font-bold font-display mb-2"
                      style={{ color: "oklch(0.95 0.01 90)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "oklch(0.6 0 0)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Quote, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Marcus T.",
    role: "BMW M3 Owner",
    rating: 5,
    review:
      "Absolutely blown away by the results. My M3 looks better than the day I drove it off the lot. The paint correction service removed years of swirl marks — I can see my reflection perfectly. Worth every penny.",
  },
  {
    name: "Sarah L.",
    rating: 5,
    role: "Range Rover Owner",
    review:
      "I've tried several detailing services in the area, but Elite Car Care is on another level. The interior deep clean was incredible — they got stains out I thought were permanent. Highly recommend!",
  },
  {
    name: "James R.",
    rating: 5,
    role: "Porsche 911 Owner",
    review:
      "Had the ceramic coating done on my 911 and the hydrophobic effect is unreal. Water just beads right off. The team was professional, thorough, and clearly passionate about their craft.",
  },
  {
    name: "Priya M.",
    rating: 5,
    role: "Tesla Model S Owner",
    review:
      "The mobile service is a game-changer. They came to my office, and by the time I finished my meetings, my car was spotless. The attention to detail is second to none. I'm a customer for life.",
  },
  {
    name: "David K.",
    rating: 5,
    role: "Mercedes S-Class Owner",
    review:
      "Booked the Premium package for my S-Class and the results were phenomenal. The team treated my car with the utmost care and the finish is absolutely flawless. Exceptional service.",
  },
  {
    name: "Olivia W.",
    rating: 5,
    role: "Audi Q7 Owner",
    review:
      "My Q7 had years of family wear and tear. After the full detail, it looks brand new inside and out. The kids were amazed! Friendly staff, fair pricing, and outstanding results.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <Star
          key={`star-${n}`}
          className="w-4 h-4 fill-current"
          style={{ color: "oklch(0.78 0.14 85)" }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: "oklch(0.1 0 0)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-subheading">Client Reviews</p>
          <h2
            className="section-heading"
            style={{ color: "oklch(0.95 0.01 90)" }}
          >
            What Our Clients Say
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.78 0.14 85), oklch(0.65 0.13 82))",
            }}
          />
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <div
                className="p-7 h-full flex flex-col"
                style={{
                  backgroundColor: "oklch(0.13 0 0)",
                  border: "1px solid oklch(0.22 0 0)",
                  borderRadius: "4px",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "oklch(0.78 0.14 85 / 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "oklch(0.22 0 0)";
                }}
              >
                {/* Quote icon */}
                <Quote
                  className="w-8 h-8 mb-4 opacity-40"
                  style={{ color: "oklch(0.78 0.14 85)" }}
                />

                {/* Stars */}
                <StarRating count={t.rating} />

                {/* Review */}
                <p
                  className="text-sm leading-relaxed mt-4 flex-1"
                  style={{ color: "oklch(0.65 0 0)" }}
                >
                  "{t.review}"
                </p>

                {/* Author */}
                <div
                  className="mt-6 pt-5 flex items-center gap-3"
                  style={{ borderTop: "1px solid oklch(0.22 0 0)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.78 0.14 85 / 0.2), oklch(0.65 0.13 82 / 0.2))",
                      border: "1px solid oklch(0.78 0.14 85 / 0.3)",
                      color: "oklch(0.78 0.14 85)",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.9 0.01 90)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.5 0 0)" }}
                    >
                      {t.role}
                    </div>
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

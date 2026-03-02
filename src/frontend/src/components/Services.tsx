import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    image: "/assets/generated/service-car-wash.dim_600x400.jpg",
    name: "Car Wash",
    subtitle: "Shine & Clean",
    description:
      "Professional hand wash with premium shampoo, wheel cleaning, and streak-free drying for a spotless finish every time.",
  },
  {
    image: "/assets/generated/service-bike-wash.dim_600x400.jpg",
    name: "Bike Wash",
    subtitle: "Two-Wheeler Care",
    description:
      "Thorough cleaning for motorcycles and scooters — frame, wheels, engine casing, and chrome polishing included.",
  },
  {
    image: "/assets/generated/service-detailing.dim_600x400.jpg",
    name: "Detailing",
    subtitle: "Inside & Out",
    description:
      "Comprehensive detailing package covering deep interior clean, exterior polish, and every surface treated to perfection.",
  },
  {
    image: "/assets/generated/service-polishing.dim_600x400.jpg",
    name: "Polishing",
    subtitle: "Mirror Finish",
    description:
      "Multi-stage machine polishing to eliminate swirl marks, light scratches, and oxidation — restoring your paint to a showroom shine.",
  },
  {
    image: "/assets/generated/service-ceramic-coating.dim_600x400.jpg",
    name: "Ceramic Coating",
    subtitle: "Long-Lasting Protection",
    description:
      "Professional-grade ceramic coating that bonds to your paint, providing years of hydrophobic protection, deep gloss, and resistance to contaminants.",
  },
  {
    image: "/assets/generated/service-window-film.dim_600x400.jpg",
    name: "Window Film",
    subtitle: "UV & Heat Protection",
    description:
      "High-quality window tinting that blocks UV rays, reduces heat, and enhances privacy while keeping your interior cool.",
  },
  {
    image: "/assets/generated/service-ppf.dim_600x400.jpg",
    name: "PPF",
    subtitle: "Paint Protection Film",
    description:
      "Self-healing paint protection film that guards against stone chips, scratches, and road debris — invisible armor for your vehicle.",
  },
  {
    image: "/assets/generated/service-wrapping.dim_600x400.jpg",
    name: "Wrapping",
    subtitle: "Custom Vinyl Wrap",
    description:
      "Full or partial vinyl wraps in any color or finish — matte, gloss, satin, or chrome — for a completely transformed look.",
  },
  {
    image: "/assets/generated/service-accessories.dim_600x400.jpg",
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

        {/* Carousel */}
        <ScrollReveal>
          <Carousel
            data-ocid="services.carousel"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, i) => (
                <CarouselItem
                  key={service.name}
                  data-ocid={`services.item.${i + 1}`}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div
                    className="group cursor-default overflow-hidden h-full flex flex-col"
                    style={{
                      background: "oklch(0.13 0 0)",
                      border: "1px solid oklch(0.2 0 0)",
                      borderRadius: "8px",
                    }}
                  >
                    {/* Photo */}
                    <div
                      className="relative overflow-hidden"
                      style={{ height: "200px" }}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, oklch(0.13 0 0) 0%, transparent 60%)",
                        }}
                      />
                      {/* Subtitle badge */}
                      <div
                        className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold tracking-wider uppercase"
                        style={{
                          background: "oklch(0.78 0.14 85 / 0.15)",
                          border: "1px solid oklch(0.78 0.14 85 / 0.4)",
                          borderRadius: "4px",
                          color: "oklch(0.78 0.14 85)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {service.subtitle}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3
                        className="text-base font-bold font-display mb-2"
                        style={{ color: "oklch(0.95 0.01 90)" }}
                      >
                        {service.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "oklch(0.6 0 0)" }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation buttons */}
            <CarouselPrevious
              data-ocid="services.prev_button"
              className="hidden sm:flex -left-5 size-10 border-0"
              style={{
                background: "oklch(0.78 0.14 85 / 0.15)",
                color: "oklch(0.78 0.14 85)",
                border: "1px solid oklch(0.78 0.14 85 / 0.4)",
              }}
            />
            <CarouselNext
              data-ocid="services.next_button"
              className="hidden sm:flex -right-5 size-10 border-0"
              style={{
                background: "oklch(0.78 0.14 85 / 0.15)",
                color: "oklch(0.78 0.14 85)",
                border: "1px solid oklch(0.78 0.14 85 / 0.4)",
              }}
            />
          </Carousel>

          {/* Mobile swipe hint */}
          <p
            className="text-center text-xs mt-4 sm:hidden"
            style={{ color: "oklch(0.45 0 0)" }}
          >
            Swipe to explore all services →
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

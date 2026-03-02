import { Sparkles, Droplets, Sofa, Shield, Layers, Wrench } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Sparkles,
    name: 'Full Detail',
    subtitle: 'Interior + Exterior',
    description:
      'Our comprehensive detailing package covers every inch of your vehicle — from a deep interior clean to a flawless exterior polish.',
  },
  {
    icon: Droplets,
    name: 'Exterior Wash & Wax',
    subtitle: 'Shine & Protection',
    description:
      'Hand wash, clay bar treatment, and premium carnauba wax application for a brilliant, long-lasting shine.',
  },
  {
    icon: Sofa,
    name: 'Interior Deep Clean',
    subtitle: 'Fresh & Spotless',
    description:
      'Steam cleaning, leather conditioning, carpet shampooing, and odor elimination for a like-new interior.',
  },
  {
    icon: Shield,
    name: 'Paint Correction',
    subtitle: '& Protection',
    description:
      'Multi-stage machine polishing to remove swirl marks, scratches, and oxidation — restoring your paint to perfection.',
  },
  {
    icon: Layers,
    name: 'Ceramic Coating',
    subtitle: 'Long-Term Defense',
    description:
      'Professional-grade nano-ceramic coating that bonds to your paint, providing years of hydrophobic protection.',
  },
  {
    icon: Wrench,
    name: 'Engine Bay Cleaning',
    subtitle: 'Under the Hood',
    description:
      'Safe degreasing and detailing of your engine bay — improving aesthetics and making maintenance easier.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6" style={{ backgroundColor: 'oklch(0.1 0 0)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-subheading">What We Offer</p>
          <h2 className="section-heading" style={{ color: 'oklch(0.95 0.01 90)' }}>
            Our Services
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{ background: 'linear-gradient(90deg, oklch(0.78 0.14 85), oklch(0.65 0.13 82))' }}
          />
          <p className="mt-6 text-base max-w-xl mx-auto" style={{ color: 'oklch(0.6 0 0)' }}>
            From a quick wash to a full concours-level detail, we have a service tailored to your needs.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.name} delay={i * 80}>
                <div
                  className="card-dark p-8 h-full group cursor-default"
                  style={{ borderRadius: '4px' }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'oklch(0.78 0.14 85 / 0.1)',
                      border: '1px solid oklch(0.78 0.14 85 / 0.3)',
                      borderRadius: '4px',
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: 'oklch(0.78 0.14 85)' }} />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold font-display mb-1"
                    style={{ color: 'oklch(0.95 0.01 90)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: 'oklch(0.78 0.14 85)' }}
                  >
                    {service.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.6 0 0)' }}>
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

import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const galleryImages = [
  {
    src: '/assets/generated/gallery-1.dim_800x600.jpg',
    alt: 'Exterior hand wax to mirror shine',
    label: 'Exterior Detailing',
  },
  {
    src: '/assets/generated/gallery-2.dim_800x600.jpg',
    alt: 'Pristine car interior',
    label: 'Interior Deep Clean',
  },
  {
    src: '/assets/generated/gallery-3.dim_800x600.jpg',
    alt: 'Paint correction under workshop lights',
    label: 'Paint Correction',
  },
  {
    src: '/assets/generated/gallery-4.dim_800x600.jpg',
    alt: 'Ceramic coating application',
    label: 'Ceramic Coating',
  },
  {
    src: '/assets/generated/gallery-5.dim_800x600.jpg',
    alt: 'Spotless engine bay after cleaning',
    label: 'Engine Bay Cleaning',
  },
  {
    src: '/assets/generated/gallery-6.dim_800x600.jpg',
    alt: 'Before and after paint polish',
    label: 'Before & After',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6" style={{ backgroundColor: 'oklch(0.1 0 0)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-subheading">Portfolio</p>
          <h2 className="section-heading" style={{ color: 'oklch(0.95 0.01 90)' }}>
            Our Work
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4"
            style={{ background: 'linear-gradient(90deg, oklch(0.78 0.14 85), oklch(0.65 0.13 82))' }}
          />
          <p className="mt-6 text-base max-w-xl mx-auto" style={{ color: 'oklch(0.6 0 0)' }}>
            Every vehicle tells a story. Here's a glimpse of the transformations we've delivered.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 80}>
              <div
                className="relative overflow-hidden group cursor-pointer"
                style={{ borderRadius: '4px', aspectRatio: '4/3' }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ backgroundColor: 'oklch(0.78 0.14 85 / 0.75)' }}
                >
                  <ZoomIn className="w-8 h-8 mb-2" style={{ color: 'oklch(0.1 0 0)' }} />
                  <span
                    className="text-sm font-bold tracking-widest uppercase"
                    style={{ color: 'oklch(0.1 0 0)' }}
                  >
                    {img.label}
                  </span>
                </div>
                {/* Label badge */}
                <div
                  className="absolute bottom-3 left-3 px-3 py-1 text-xs font-semibold tracking-wider uppercase"
                  style={{
                    backgroundColor: 'oklch(0 0 0 / 0.7)',
                    color: 'oklch(0.78 0.14 85)',
                    borderRadius: '2px',
                  }}
                >
                  {img.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'oklch(0 0 0 / 0.92)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 transition-colors"
            style={{ color: 'oklch(0.78 0.14 85)' }}
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain"
            style={{ borderRadius: '4px', border: '1px solid oklch(0.78 0.14 85 / 0.3)' }}
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 text-sm font-semibold tracking-widest uppercase"
            style={{ color: 'oklch(0.78 0.14 85)' }}
          >
            {galleryImages[lightbox].label}
          </div>
        </div>
      )}
    </section>
  );
}

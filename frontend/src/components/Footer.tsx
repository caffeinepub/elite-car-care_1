import { Car, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'elite-car-care'
  );

  return (
    <footer
      style={{
        backgroundColor: 'oklch(0.08 0 0)',
        borderTop: '1px solid oklch(0.78 0.14 85 / 0.2)',
      }}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.78 0.14 85), oklch(0.65 0.13 82))',
                  borderRadius: '4px',
                }}
              >
                <Car className="w-5 h-5" style={{ color: 'oklch(0.1 0 0)' }} />
              </div>
              <span
                className="font-display font-bold text-lg"
                style={{ color: 'oklch(0.95 0.01 90)' }}
              >
                Elite <span style={{ color: 'oklch(0.78 0.14 85)' }}>Car Care</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'oklch(0.5 0 0)' }}>
              Premium auto detailing and car care services. We bring showroom quality to your
              doorstep.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: SiFacebook, label: 'Facebook', href: '#' },
                { Icon: SiInstagram, label: 'Instagram', href: '#' },
                { Icon: SiX, label: 'X (Twitter)', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                  style={{
                    backgroundColor: 'oklch(0.15 0 0)',
                    border: '1px solid oklch(0.25 0 0)',
                    borderRadius: '4px',
                    color: 'oklch(0.55 0 0)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.78 0.14 85)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(0.78 0.14 85 / 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.55 0 0)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(0.25 0 0)';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: 'oklch(0.78 0.14 85)' }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'oklch(0.5 0 0)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.78 0.14 85)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.5 0 0)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: 'oklch(0.78 0.14 85)' }}
            >
              Hours of Operation
            </h4>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li key={h.day} className="flex items-start gap-2">
                  <Clock
                    className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                    style={{ color: 'oklch(0.78 0.14 85)' }}
                  />
                  <div>
                    <div className="text-xs font-medium" style={{ color: 'oklch(0.7 0 0)' }}>
                      {h.day}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: h.time === 'Closed' ? 'oklch(0.5 0 0)' : 'oklch(0.55 0 0)' }}
                    >
                      {h.time}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: 'oklch(0.78 0.14 85)' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: 'oklch(0.78 0.14 85)' }}
                />
                <span className="text-sm" style={{ color: 'oklch(0.5 0 0)' }}>
                  1234 Prestige Blvd
                  <br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'oklch(0.78 0.14 85)' }} />
                <a
                  href="tel:+15551234567"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'oklch(0.5 0 0)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.78 0.14 85)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.5 0 0)')}
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'oklch(0.78 0.14 85)' }} />
                <a
                  href="mailto:hello@elitecarcare.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'oklch(0.5 0 0)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.78 0.14 85)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.5 0 0)')}
                >
                  hello@elitecarcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{ borderTop: '1px solid oklch(0.15 0 0)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'oklch(0.4 0 0)' }}>
            © {new Date().getFullYear()} Elite Car Care. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'oklch(0.4 0 0)' }}>
            Built with{' '}
            <span style={{ color: 'oklch(0.78 0.14 85)' }}>♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'oklch(0.78 0.14 85)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.85 0.12 88)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.78 0.14 85)')}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

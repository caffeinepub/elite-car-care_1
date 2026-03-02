import { Car, Heart, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "elite-car-care",
  );

  return (
    <footer
      className="pt-16 pb-8 px-4 sm:px-6 relative"
      style={{
        backgroundColor: "oklch(0.08 0 0)",
        borderTop: "1px solid oklch(0.78 0.14 85 / 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 mb-4"
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-sm"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.14 85), oklch(0.65 0.13 82))",
                }}
              >
                <Car className="w-5 h-5" style={{ color: "oklch(0.1 0 0)" }} />
              </div>
              <span
                className="font-display font-bold text-lg tracking-wide"
                style={{ color: "oklch(0.95 0.01 90)" }}
              >
                Elite{" "}
                <span style={{ color: "oklch(0.78 0.14 85)" }}>Car Care</span>
              </span>
            </button>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.5 0 0)" }}
            >
              Premium auto detailing and car care services in Silchar. We treat
              every vehicle like our own.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: SiFacebook, href: "#", label: "Facebook" },
                { Icon: SiInstagram, href: "#", label: "Instagram" },
                { Icon: SiX, href: "#", label: "X (Twitter)" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                  style={{
                    backgroundColor: "oklch(0.15 0 0)",
                    border: "1px solid oklch(0.25 0 0)",
                    borderRadius: "4px",
                    color: "oklch(0.55 0 0)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.78 0.14 85)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.78 0.14 85 / 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.55 0 0)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.25 0 0)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.78 0.14 85)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "oklch(0.5 0 0)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "oklch(0.78 0.14 85)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "oklch(0.5 0 0)";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.78 0.14 85)" }}
            >
              Business Hours
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm gap-4">
                <span style={{ color: "oklch(0.5 0 0)" }}>Mon – Sun</span>
                <span style={{ color: "oklch(0.75 0 0)" }}>9am – 10pm</span>
              </div>
              <p className="text-xs mt-4" style={{ color: "oklch(0.4 0 0)" }}>
                Open every day of the week. Book in advance for guaranteed
                slots.
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.78 0.14 85)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.78 0.14 85)" }}
                />
                <a
                  href="tel:9954018547"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "oklch(0.5 0 0)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "oklch(0.78 0.14 85)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "oklch(0.5 0 0)";
                  }}
                >
                  9954018547
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.78 0.14 85)" }}
                />
                <span className="text-sm" style={{ color: "oklch(0.5 0 0)" }}>
                  Silchar, Assam
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.78 0.14 85 / 0.2), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: "oklch(0.4 0 0)" }}
        >
          <p>
            © {year} Elite Car Care. All rights reserved. | Owner: Suyev
            Mohammad (Sumon)
          </p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <Heart
              className="w-3 h-3 fill-current"
              style={{ color: "oklch(0.78 0.14 85)" }}
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "oklch(0.78 0.14 85)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "oklch(0.85 0.12 88)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "oklch(0.78 0.14 85)";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

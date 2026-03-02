import { Car, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 shadow-2xl" : "py-5"
        }`}
        style={{
          backgroundColor: scrolled ? "oklch(0.1 0 0)" : "transparent",
          borderBottom: scrolled
            ? "1px solid oklch(0.78 0.14 85 / 0.15)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
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

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium tracking-wider uppercase transition-colors duration-200"
                style={{ color: "oklch(0.75 0 0)", letterSpacing: "0.08em" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "oklch(0.78 0.14 85)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "oklch(0.75 0 0)";
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="btn-gold text-xs px-5 py-2.5"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 transition-colors"
            style={{ color: "oklch(0.78 0.14 85)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "oklch(0 0 0 / 0.7)" }}
          role="button"
          tabIndex={0}
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setMobileOpen(false);
          }}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundColor: "oklch(0.12 0 0)",
            borderLeft: "1px solid oklch(0.78 0.14 85 / 0.2)",
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-3 px-4 text-sm font-medium tracking-wider uppercase transition-all duration-200 rounded"
                style={{ color: "oklch(0.75 0 0)", letterSpacing: "0.08em" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "oklch(0.78 0.14 85)";
                  e.currentTarget.style.backgroundColor =
                    "oklch(0.78 0.14 85 / 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "oklch(0.75 0 0)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="btn-gold w-full text-xs py-3"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

# Specification

## Summary
**Goal:** Build a premium single-page business website for "Elite Car Care" — an auto detailing service — with a dark/gold luxury theme, multiple content sections, a booking form, and a Motoko backend to store submissions.

**Planned changes:**
- Sticky navbar with transparent-to-dark scroll transition, anchor links to all sections, and a mobile hamburger menu
- Full-screen Hero section with business name, tagline, "Book Now" CTA, and a hero background image with dark overlay
- Services section displaying six service cards in a responsive grid with icons, names, descriptions, and gold hover effects
- "Why Choose Us" section with four differentiator blocks (icon + heading + description) using gold accents
- Gallery "Our Work" section with six car detailing images in a responsive grid with gold hover overlay
- Pricing section with three tier cards (Basic, Standard, Premium), highlighted Standard tier, and "Book Now" CTAs
- Testimonials section with at least four customer review cards showing gold star ratings, quotes, and names
- Contact/Booking form with fields for name, email, phone, service selection, preferred date, and message; shows success confirmation on submit
- Footer with business name/tagline, section nav links, social media icons (Facebook, Instagram, X), hours of operation, and address
- Smooth scroll, fade-in/slide-up entrance animations, and fully responsive layout across mobile, tablet, and desktop
- Motoko backend actor with `submitBooking` (stores booking data in stable memory) and `getBookings` (returns all bookings) functions

**User-visible outcome:** Visitors can browse Elite Car Care's services, view the gallery and pricing, read testimonials, and submit a booking request that is persisted on the backend.

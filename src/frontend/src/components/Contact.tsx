import { AlertCircle, CheckCircle, Loader2, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useSubmitBooking } from "../hooks/useQueries";
import ScrollReveal from "./ScrollReveal";

const services = [
  "Car Wash",
  "Bike Wash",
  "Detailing",
  "Polishing",
  "Window Film",
  "PPF (Paint Protection Film)",
  "Wrapping",
  "Car Accessories",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  preferredDate: "",
  message: "",
};

const goldColor = "oklch(0.78 0.14 85)";
const goldFocus = "oklch(0.78 0.14 85 / 0.6)";
const neutralBorder = "oklch(0.25 0 0)";
const errorBorder = "oklch(0.55 0.15 25)";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const submitBooking = useSubmitBooking();

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.preferredDate)
      newErrors.preferredDate = "Please select a preferred date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    submitBooking.mutate(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        preferredDate: form.preferredDate,
        message: form.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(initialForm);
        },
      },
    );
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 relative"
      style={{ backgroundColor: "oklch(0.12 0 0)" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.78 0.14 85 / 0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-subheading">Get In Touch</p>
          <h2
            className="section-heading"
            style={{ color: "oklch(0.95 0.01 90)" }}
          >
            Book a Service
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
            Ready to give your vehicle the care it deserves? Fill out the form
            below and we'll get back to you promptly.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Panel */}
          <ScrollReveal className="lg:col-span-2">
            <div
              className="p-8 h-full"
              style={{
                backgroundColor: "oklch(0.13 0 0)",
                border: "1px solid oklch(0.25 0 0)",
                borderRadius: "4px",
              }}
            >
              <h3
                className="text-xl font-bold font-display mb-6"
                style={{ color: "oklch(0.95 0.01 90)" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "oklch(0.78 0.14 85 / 0.1)",
                      border: "1px solid oklch(0.78 0.14 85 / 0.3)",
                      borderRadius: "4px",
                    }}
                  >
                    <Phone
                      className="w-4 h-4"
                      style={{ color: "oklch(0.78 0.14 85)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-1"
                      style={{ color: "oklch(0.5 0 0)" }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:9954018547"
                      className="text-sm font-medium transition-colors"
                      style={{ color: "oklch(0.85 0.01 90)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = goldColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "oklch(0.85 0.01 90)";
                      }}
                    >
                      9954018547
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "oklch(0.78 0.14 85 / 0.1)",
                      border: "1px solid oklch(0.78 0.14 85 / 0.3)",
                      borderRadius: "4px",
                    }}
                  >
                    <MapPin
                      className="w-4 h-4"
                      style={{ color: "oklch(0.78 0.14 85)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-1"
                      style={{ color: "oklch(0.5 0 0)" }}
                    >
                      Location
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.85 0.01 90)" }}
                    >
                      Silchar, Assam
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div
                className="mt-8 pt-8"
                style={{ borderTop: "1px solid oklch(0.25 0 0)" }}
              >
                <h4
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "oklch(0.78 0.14 85)" }}
                >
                  Business Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "oklch(0.6 0 0)" }}>
                      Monday – Sunday
                    </span>
                    <span style={{ color: "oklch(0.85 0.01 90)" }}>
                      9am – 10pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="lg:col-span-3" delay={100}>
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full py-16 text-center"
                style={{
                  backgroundColor: "oklch(0.13 0 0)",
                  border: "1px solid oklch(0.25 0 0)",
                  borderRadius: "4px",
                }}
              >
                <CheckCircle
                  className="w-16 h-16 mb-6"
                  style={{ color: "oklch(0.78 0.14 85)" }}
                />
                <h3
                  className="text-2xl font-bold font-display mb-3"
                  style={{ color: "oklch(0.95 0.01 90)" }}
                >
                  Booking Received!
                </h3>
                <p
                  className="text-sm max-w-sm"
                  style={{ color: "oklch(0.6 0 0)" }}
                >
                  Thank you for reaching out. We'll confirm your appointment
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-gold mt-8 text-xs px-6 py-2.5"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 space-y-5"
                style={{
                  backgroundColor: "oklch(0.13 0 0)",
                  border: "1px solid oklch(0.25 0 0)",
                  borderRadius: "4px",
                }}
              >
                {submitBooking.isError && (
                  <div
                    className="flex items-center gap-3 p-4 text-sm"
                    style={{
                      backgroundColor: "oklch(0.2 0.05 25 / 0.3)",
                      border: "1px solid oklch(0.5 0.15 25 / 0.4)",
                      borderRadius: "4px",
                      color: "oklch(0.75 0.1 25)",
                    }}
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: "oklch(0.6 0 0)" }}
                    >
                      Full Name{" "}
                      <span style={{ color: "oklch(0.78 0.14 85)" }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        backgroundColor: "oklch(0.1 0 0)",
                        border: `1px solid ${errors.name ? errorBorder : neutralBorder}`,
                        borderRadius: "4px",
                        color: "oklch(0.9 0 0)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = goldFocus;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = errors.name
                          ? errorBorder
                          : neutralBorder;
                      }}
                    />
                    {errors.name && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: "oklch(0.65 0.15 25)" }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: "oklch(0.6 0 0)" }}
                    >
                      Phone{" "}
                      <span style={{ color: "oklch(0.78 0.14 85)" }}>*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        backgroundColor: "oklch(0.1 0 0)",
                        border: `1px solid ${errors.phone ? errorBorder : neutralBorder}`,
                        borderRadius: "4px",
                        color: "oklch(0.9 0 0)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = goldFocus;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = errors.phone
                          ? errorBorder
                          : neutralBorder;
                      }}
                    />
                    {errors.phone && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: "oklch(0.65 0.15 25)" }}
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: "oklch(0.6 0 0)" }}
                  >
                    Email Address{" "}
                    <span style={{ color: "oklch(0.78 0.14 85)" }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      backgroundColor: "oklch(0.1 0 0)",
                      border: `1px solid ${errors.email ? errorBorder : neutralBorder}`,
                      borderRadius: "4px",
                      color: "oklch(0.9 0 0)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = goldFocus;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = errors.email
                        ? errorBorder
                        : neutralBorder;
                    }}
                  />
                  {errors.email && (
                    <p
                      className="text-xs mt-1"
                      style={{ color: "oklch(0.65 0.15 25)" }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Service */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: "oklch(0.6 0 0)" }}
                    >
                      Service{" "}
                      <span style={{ color: "oklch(0.78 0.14 85)" }}>*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                      style={{
                        backgroundColor: "oklch(0.1 0 0)",
                        border: `1px solid ${errors.service ? errorBorder : neutralBorder}`,
                        borderRadius: "4px",
                        color: form.service
                          ? "oklch(0.9 0 0)"
                          : "oklch(0.45 0 0)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = goldFocus;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = errors.service
                          ? errorBorder
                          : neutralBorder;
                      }}
                    >
                      <option
                        value=""
                        disabled
                        style={{ color: "oklch(0.45 0 0)" }}
                      >
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option
                          key={s}
                          value={s}
                          style={{
                            backgroundColor: "oklch(0.15 0 0)",
                            color: "oklch(0.9 0 0)",
                          }}
                        >
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: "oklch(0.65 0.15 25)" }}
                      >
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="contact-date"
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: "oklch(0.6 0 0)" }}
                    >
                      Preferred Date{" "}
                      <span style={{ color: "oklch(0.78 0.14 85)" }}>*</span>
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      name="preferredDate"
                      value={form.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        backgroundColor: "oklch(0.1 0 0)",
                        border: `1px solid ${errors.preferredDate ? errorBorder : neutralBorder}`,
                        borderRadius: "4px",
                        color: form.preferredDate
                          ? "oklch(0.9 0 0)"
                          : "oklch(0.45 0 0)",
                        colorScheme: "dark",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = goldFocus;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = errors.preferredDate
                          ? errorBorder
                          : neutralBorder;
                      }}
                    />
                    {errors.preferredDate && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: "oklch(0.65 0.15 25)" }}
                      >
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: "oklch(0.6 0 0)" }}
                  >
                    Message{" "}
                    <span style={{ color: "oklch(0.45 0 0)" }}>(Optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any special requests or notes..."
                    rows={4}
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      backgroundColor: "oklch(0.1 0 0)",
                      border: "1px solid oklch(0.25 0 0)",
                      borderRadius: "4px",
                      color: "oklch(0.9 0 0)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = goldFocus;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = neutralBorder;
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitBooking.isPending}
                  className="btn-gold w-full flex items-center justify-center gap-2 py-4"
                >
                  {submitBooking.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Book Appointment"
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useSubmitBooking } from '../hooks/useQueries';

const services = [
  'Full Detail (Interior + Exterior)',
  'Exterior Wash & Wax',
  'Interior Deep Clean',
  'Paint Correction & Protection',
  'Ceramic Coating',
  'Engine Bay Cleaning',
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
  name: '',
  email: '',
  phone: '',
  service: '',
  preferredDate: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const submitBooking = useSubmitBooking();

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.service) newErrors.service = 'Please select a service';
    if (!form.preferredDate) newErrors.preferredDate = 'Please select a preferred date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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

    try {
      await submitBooking.mutateAsync({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service,
        preferredDate: form.preferredDate,
        message: form.message.trim(),
      });
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      // error handled by mutation state
    }
  };

  const inputStyle = {
    backgroundColor: 'oklch(0.17 0 0)',
    border: '1px solid oklch(0.28 0 0)',
    color: 'oklch(0.95 0.01 90)',
    borderRadius: '4px',
    padding: '0.75rem 1rem',
    width: '100%',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.875rem',
    transition: 'border-color 0.3s ease',
    outline: 'none',
  };

  const errorStyle = {
    color: 'oklch(0.65 0.2 25)',
    fontSize: '0.75rem',
    marginTop: '0.25rem',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    marginBottom: '0.5rem',
    color: 'oklch(0.7 0 0)',
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: 'oklch(0.12 0 0)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <ScrollReveal>
            <p className="section-subheading">Get In Touch</p>
            <h2 className="section-heading" style={{ color: 'oklch(0.95 0.01 90)' }}>
              Book Your Detail
            </h2>
            <div
              className="w-16 h-0.5 mt-4 mb-6"
              style={{ background: 'linear-gradient(90deg, oklch(0.78 0.14 85), oklch(0.65 0.13 82))' }}
            />
            <p className="text-base leading-relaxed mb-10" style={{ color: 'oklch(0.6 0 0)' }}>
              Ready to give your vehicle the care it deserves? Fill out the form and we'll get back
              to you within 24 hours to confirm your appointment.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                { label: 'Phone', value: '(555) 123-4567' },
                { label: 'Email', value: 'hello@elitecarcare.com' },
                { label: 'Address', value: '1234 Prestige Blvd, Beverly Hills, CA 90210' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-1 h-full min-h-[2rem] flex-shrink-0"
                    style={{ backgroundColor: 'oklch(0.78 0.14 85)' }}
                  />
                  <div>
                    <div
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: 'oklch(0.78 0.14 85)' }}
                    >
                      {item.label}
                    </div>
                    <div className="text-sm" style={{ color: 'oklch(0.7 0 0)' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={150}>
            <div
              className="p-8"
              style={{
                backgroundColor: 'oklch(0.13 0 0)',
                border: '1px solid oklch(0.25 0 0)',
                borderRadius: '4px',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle
                    className="w-16 h-16 mx-auto mb-4"
                    style={{ color: 'oklch(0.78 0.14 85)' }}
                  />
                  <h3
                    className="text-2xl font-bold font-display mb-3"
                    style={{ color: 'oklch(0.95 0.01 90)' }}
                  >
                    Booking Received!
                  </h3>
                  <p className="text-sm mb-6" style={{ color: 'oklch(0.6 0 0)' }}>
                    Thank you for choosing Elite Car Care. We'll contact you within 24 hours to
                    confirm your appointment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-gold text-xs px-6 py-2.5"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        style={{
                          ...inputStyle,
                          borderColor: errors.name ? 'oklch(0.65 0.2 25)' : 'oklch(0.28 0 0)',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'oklch(0.78 0.14 85)';
                          e.target.style.boxShadow = '0 0 0 2px oklch(0.78 0.14 85 / 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.name ? 'oklch(0.65 0.2 25)' : 'oklch(0.28 0 0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.name && <p style={errorStyle}>{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        style={{
                          ...inputStyle,
                          borderColor: errors.email ? 'oklch(0.65 0.2 25)' : 'oklch(0.28 0 0)',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'oklch(0.78 0.14 85)';
                          e.target.style.boxShadow = '0 0 0 2px oklch(0.78 0.14 85 / 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.email ? 'oklch(0.65 0.2 25)' : 'oklch(0.28 0 0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.email && <p style={errorStyle}>{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        style={{
                          ...inputStyle,
                          borderColor: errors.phone ? 'oklch(0.65 0.2 25)' : 'oklch(0.28 0 0)',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'oklch(0.78 0.14 85)';
                          e.target.style.boxShadow = '0 0 0 2px oklch(0.78 0.14 85 / 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.phone ? 'oklch(0.65 0.2 25)' : 'oklch(0.28 0 0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
                    </div>

                    {/* Service */}
                    <div>
                      <label style={labelStyle}>Service *</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        style={{
                          ...inputStyle,
                          borderColor: errors.service ? 'oklch(0.65 0.2 25)' : 'oklch(0.28 0 0)',
                          cursor: 'pointer',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'oklch(0.78 0.14 85)';
                          e.target.style.boxShadow = '0 0 0 2px oklch(0.78 0.14 85 / 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.service ? 'oklch(0.65 0.2 25)' : 'oklch(0.28 0 0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <option value="" style={{ backgroundColor: 'oklch(0.17 0 0)' }}>
                          Select a service...
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} style={{ backgroundColor: 'oklch(0.17 0 0)' }}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.service && <p style={errorStyle}>{errors.service}</p>}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label style={labelStyle}>Preferred Date *</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={form.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        style={{
                          ...inputStyle,
                          borderColor: errors.preferredDate ? 'oklch(0.65 0.2 25)' : 'oklch(0.28 0 0)',
                          colorScheme: 'dark',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'oklch(0.78 0.14 85)';
                          e.target.style.boxShadow = '0 0 0 2px oklch(0.78 0.14 85 / 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.preferredDate ? 'oklch(0.65 0.2 25)' : 'oklch(0.28 0 0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.preferredDate && <p style={errorStyle}>{errors.preferredDate}</p>}
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label style={labelStyle}>Message / Notes</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your vehicle, any specific concerns, or special requests..."
                        rows={4}
                        style={{
                          ...inputStyle,
                          resize: 'vertical',
                          minHeight: '100px',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'oklch(0.78 0.14 85)';
                          e.target.style.boxShadow = '0 0 0 2px oklch(0.78 0.14 85 / 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'oklch(0.28 0 0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Error from mutation */}
                  {submitBooking.isError && (
                    <div
                      className="mt-4 flex items-center gap-2 p-3 text-sm"
                      style={{
                        backgroundColor: 'oklch(0.65 0.2 25 / 0.1)',
                        border: '1px solid oklch(0.65 0.2 25 / 0.3)',
                        borderRadius: '4px',
                        color: 'oklch(0.75 0.15 25)',
                      }}
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitBooking.isPending}
                    className="btn-gold w-full mt-6 flex items-center justify-center gap-2"
                    style={{
                      opacity: submitBooking.isPending ? 0.7 : 1,
                      cursor: submitBooking.isPending ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {submitBooking.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Request a Quote'
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

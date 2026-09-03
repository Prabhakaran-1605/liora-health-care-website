import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import services from '../data/services.js';

const infoItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: '98434 54211',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'korakernaturals5@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value:
      '1/1, Kamban Nagar, Kamarajar Road, ESI, Vibgiyar School Opp, Coimbatore – 641015',
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value:
      'Monday – Saturday: 10:30 AM – 1:30 PM & 3:00 PM – 7:30 PM | Sunday: Closed',
  },
];

const getToday = () => {
  const today = new Date();
  const offset = today.getTimezoneOffset();
  const localDate = new Date(today.getTime() - offset * 60 * 1000);

  return localDate.toISOString().split('T')[0];
};

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: '',
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your full name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.phone && !/^[\d\s()+-]{7,}$/.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please add a short message.';
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((v) => ({
      ...v,
      [name]: value,
    }));

    // Remove previous success/error messages
    // when the user starts editing again.
    setSubmitted(false);
    setSendError('');

    // Remove field error when user starts correcting it.
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = validate(values);

    setErrors(nextErrors);
    setSubmitted(false);
    setSendError('');

    // Stop submission if validation fails.
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSending(true);

  const templateParams = {
  name: values.name,
  email: values.email,
  phone: values.phone || 'Not provided',
  service: values.service || 'Not selected',
  date: values.date || 'Not specified',
  message: values.message,
};

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      // Email successfully sent
      setSubmitted(true);

      // Clear the form
      setValues(initialForm);

      // Clear validation errors
      setErrors({});
    } catch (error) {
      console.error('EmailJS Error:', error);

      setSendError(
        'Unable to send your enquiry right now. Please try again or contact us directly.'
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <Seo
        title="Contact Liora Health Care | Book an Appointment"
        description="Get in touch with Liora Health Care to ask a question or book an appointment for TCM acupuncture, cupping therapy or nutrition guidance."
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-16 text-center sm:pt-24 lg:px-10">
        <span className="font-serif italic text-lg text-sage">
          Get In Touch
        </span>

        <h1 className="mt-4 font-serif font-medium leading-[1.1] text-[2.4rem] text-charcoal sm:text-[3.2rem]">
          Let&rsquo;s Connect
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-charcoal/70">
          Have questions or would like to learn more about our services?
          We&rsquo;d love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          
          {/* Contact Information */}
          <Reveal>
            <div className="flex flex-col gap-8">
              <h2 className="font-serif text-2xl text-charcoal">
                Contact Information
              </h2>

              <ul className="flex flex-col gap-6">
                {infoItems.map(({ icon: Icon, label, value }) => (
                  <li
                    key={label}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-sage/15 text-forest">
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                      />
                    </span>

                    <div>
                      <p className="text-sm font-medium text-charcoal">
                        {label}
                      </p>

                      <p className="text-sm leading-relaxed text-charcoal/60">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Enquiry Form */}
          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-charcoal/10 bg-white/50 p-7 sm:p-10">
              
              <h2 className="mb-1 font-serif text-2xl text-charcoal">
                Send an Enquiry
              </h2>

              <p className="mb-8 text-sm text-charcoal/60">
                Fields marked with <span className="text-gold">*</span> are
                required. We&rsquo;ll get back to you as soon as we can.
              </p>

              {/* Success Message */}
              {submitted && (
                <div
                  role="status"
                  className="mb-8 flex items-start gap-3 rounded-xl border border-sage/40 bg-sage/10 p-4 text-sm text-forest"
                >
                  <CheckCircle2
                    size={19}
                    strokeWidth={1.75}
                    className="mt-0.5 flex-none"
                  />

                  <span>
                    Thank you for your enquiry. Your message has been sent
                    successfully. We&rsquo;ll get back to you as soon as
                    possible.
                  </span>
                </div>
              )}

              {/* Error Message */}
              {sendError && (
                <div
                  role="alert"
                  className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                >
                  {sendError}
                </div>
              )}

              <form
                noValidate
                onSubmit={handleSubmit}
                className="grid gap-6 sm:grid-cols-2"
              >
                
                {/* Full Name */}
                <Field
                  label="Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                  full
                />

                {/* Email */}
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />

                {/* Phone */}
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />

                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-charcoal"
                  >
                    Service Interested In
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    className="rounded-lg border border-charcoal/20 bg-ivory px-4 py-3 text-sm text-charcoal focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    <option value="">
                      Select a service (optional)
                    </option>

                    {services.map((s) => (
                      <option
                        key={s.slug}
                        value={s.name}
                      >
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <Field
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                  min={getToday()}
                />

                {/* Message */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-charcoal"
                  >
                    Message <span className="text-gold">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message
                        ? 'message-error'
                        : undefined
                    }
                    className="rounded-lg border border-charcoal/20 bg-ivory px-4 py-3 text-sm text-charcoal focus-visible:outline-2 focus-visible:outline-gold"
                  />

                  {errors.message && (
                    <span
                      id="message-error"
                      className="text-xs text-red-700"
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full rounded-full bg-forest px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors duration-300 hover:bg-forest-deep disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
                  >
                    {isSending ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/**
 * Reusable Form Field
 */
function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  required = false,
  full = false,
  min
}) {
  return (
    <div
      className={`flex flex-col gap-1.5 ${
        full ? 'sm:col-span-2' : ''
      }`}
    >
      <label
        htmlFor={name}
        className="text-sm font-medium text-charcoal"
      >
        {label}{' '}
        {required && (
          <span className="text-gold">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : undefined
        }
        className="rounded-lg border border-charcoal/20 bg-ivory px-4 py-3 text-sm text-charcoal focus-visible:outline-2 focus-visible:outline-gold"
      />

      {error && (
        <span
          id={`${name}-error`}
          className="text-xs text-red-700"
        >
          {error}
        </span>
      )}
    </div>
  );
}
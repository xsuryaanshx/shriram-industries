// ─────────────────────────────────────────────
//  ContactPage — Atelier 27
// ─────────────────────────────────────────────
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '@/components/ui/SEO';

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import { siteConfig } from '@/config/site';
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '@/animations/motion/variants';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const { contact, social, isDemo } = siteConfig;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Demo: simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  return (
    <>
      <SEO
        title="Contact — Atelier 27"
        description="Get in touch with Atelier 27 to discuss your architecture or interior design project."
        suffix={siteConfig.businessName}
      />

      {/* Header */}
      <div className="pt-36 pb-16 md:pt-44 md:pb-20 border-b border-[var(--color-border)]">
        <div className="container-ami">
          <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-4"
            >
              Let's Talk
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="heading-xl text-[var(--color-foreground)] max-w-2xl"
            >
              Tell us about your project.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[var(--color-muted)] mt-4 max-w-md leading-relaxed">
              We respond to every enquiry personally, usually within two working days.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding">
        <div className="container-ami">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            {/* Contact info */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-serif text-xl font-light text-[var(--color-foreground)] mb-8">
                Get in Touch
              </h2>

              <div className="space-y-5">
                {contact.email && (
                  <div className="flex items-start gap-3">
                    <Mail size={15} className="text-[var(--color-accent)] mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.12em] mb-1">Email</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-[var(--color-foreground)] text-sm hover:text-[var(--color-accent)] transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                )}
                {contact.phone && (
                  <div className="flex items-start gap-3">
                    <Phone size={15} className="text-[var(--color-accent)] mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.12em] mb-1">Phone / WhatsApp</p>
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className="text-[var(--color-foreground)] text-sm hover:text-[var(--color-accent)] transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                )}
                {contact.address && (
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-[var(--color-accent)] mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.12em] mb-1">Studio</p>
                      <p className="text-[var(--color-foreground)] text-sm">
                        {contact.address}
                        {contact.city && <><br />{contact.city}</>}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Social */}
              <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                <p className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.12em] mb-4">Follow</p>
                <div className="flex gap-3">
                  {social.instagram && (
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-foreground)] transition-all"
                      aria-label="Atelier 27 on Instagram"
                    >
                      <InstagramIcon />
                    </a>
                  )}
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-foreground)] transition-all"
                      aria-label="Atelier 27 on LinkedIn"
                    >
                      <LinkedinIcon />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {isDemo && (
                <div className="demo-badge mb-8">
                  <span aria-hidden="true">◆</span>
                  Demo — form submissions are simulated, not sent
                </div>
              )}

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center"
                >
                  <div className="w-12 h-12 bg-[var(--color-accent)] flex items-center justify-center mx-auto mb-6">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[var(--color-foreground)] mb-3">
                    Message received.
                  </h3>
                  <p className="text-[var(--color-muted)]">
                    Thank you for reaching out. We'll respond within two working days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry form">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.12em] block mb-2"
                      >
                        Full Name <span className="text-[var(--color-accent)]" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] text-sm placeholder:text-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                        placeholder="Your full name"
                        autoComplete="name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.12em] block mb-2"
                      >
                        Email <span className="text-[var(--color-accent)]" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] text-sm placeholder:text-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                        placeholder="your@email.com"
                        autoComplete="email"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.12em] block mb-2"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] text-sm placeholder:text-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                      />
                    </div>

                    {/* Project type */}
                    <div>
                      <label
                        htmlFor="contact-project-type"
                        className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.12em] block mb-2"
                      >
                        Project Type
                      </label>
                      <select
                        id="contact-project-type"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none"
                      >
                        <option value="">Select a type</option>
                        <option value="architecture">Architecture</option>
                        <option value="interior-design">Interior Design</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Space</option>
                        <option value="renovation">Renovation</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-5">
                    <label
                      htmlFor="contact-message"
                      className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.12em] block mb-2"
                    >
                      Tell us about your project <span className="text-[var(--color-accent)]" aria-label="required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] text-sm placeholder:text-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                      placeholder="Describe your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center px-8 py-4 bg-[var(--color-foreground)] text-[var(--color-background)] text-label text-[0.65rem] hover:bg-[var(--color-accent)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                      id="contact-submit"
                    >
                      {status === 'submitting' ? 'Sending…' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("Phone") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Name, email, and message are required.");
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
    const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;

    if (!apiKey || !baseId) {
      setStatus("error");
      setErrorMessage("Contact form is not configured. Please try again later.");
      return;
    }

    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${baseId}/Contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: name,
                  Email: email,
                  Message: message,
                  ...(phone ? { Phone: phone } : {}),
                },
              },
            ],
          }),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error?.message || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body text-brand-gold text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Take the First Step
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">
            Start Your Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.08 }}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.4, ease: "easeOut" }}>
              <label htmlFor="name" className="block font-body text-sm font-medium text-brand-navy mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-body text-brand-slate text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all focus:-translate-y-px"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.4, ease: "easeOut" }}>
              <label htmlFor="email" className="block font-body text-sm font-medium text-brand-navy mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-body text-brand-slate text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all focus:-translate-y-px"
                placeholder="you@example.com"
              />
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.4, ease: "easeOut" }}>
              <label htmlFor="phone" className="block font-body text-sm font-medium text-brand-navy mb-1.5">
                Phone <span className="text-brand-slate/50">(optional)</span>
              </label>
              <input
                type="tel"
                id="Phone"
                name="Phone"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-body text-brand-slate text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all focus:-translate-y-px"
                placeholder="(555) 123-4567"
              />
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.4, ease: "easeOut" }}>
              <label htmlFor="message" className="block font-body text-sm font-medium text-brand-navy mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-body text-brand-slate text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all focus:-translate-y-px resize-none"
                placeholder="Tell us about yourself and what you're looking for..."
              />
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.4, ease: "easeOut" }}>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-brand-gold hover:bg-brand-gold-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-full text-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,151,62,0.3)]"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </motion.div>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  key="success"
                  className="text-center text-sm font-body text-green-700 bg-green-50 rounded-xl py-3 px-4"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  Thank you! Your message has been sent. We&apos;ll be in touch soon.
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  key="error"
                  className="text-center text-sm font-body text-red-700 bg-red-50 rounded-xl py-3 px-4"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Contact info */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="font-heading text-2xl font-semibold text-brand-navy mb-4">
              Get in Touch
            </h3>
            <p className="font-body text-brand-slate leading-relaxed mb-8">
              Whether you&apos;re ready to start the journey or just want to learn more,
              we&apos;d love to hear from you. Reach out and take the first step toward
              faith, wellness, and brotherhood.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:thecrosswalkmentors@gmail.com"
                className="flex items-center gap-4 group"
              >
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <FaEnvelope size={18} />
                </span>
                <span className="font-body text-brand-slate group-hover:text-brand-navy transition-colors">
                  thecrosswalkmentors@gmail.com
                </span>
              </a>

              <a
                href="tel:+19515328010"
                className="flex items-center gap-4 group"
              >
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <FaPhone size={18} />
                </span>
                <span className="font-body text-brand-slate group-hover:text-brand-navy transition-colors">
                  (951) 532-8010
                </span>
              </a>

              <a
                href="https://instagram.com/thecross_walk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <FaInstagram size={18} />
                </span>
                <span className="font-body text-brand-slate group-hover:text-brand-navy transition-colors">
                  @thecross_walk
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

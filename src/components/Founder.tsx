"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Founder() {
  return (
    <section id="founder" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-body text-brand-gold text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Meet the Founder
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              Bruce Hooks
            </h2>
            <p className="font-body text-brand-slate leading-relaxed mb-4">
              Faith Leader, Minister, and Mental Wellness Advocate — Bruce Hooks is
              dedicated to empowering young men by sharing his journey of faith and
              mental wellness, encouraging them to pursue personal growth and resilience.
            </p>
            <p className="font-body text-brand-slate leading-relaxed mb-8">
              Through Crosswalk, Bruce guides participants in building a strong foundation
              where spiritual connection nurtures daily life and relationships, while
              prioritizing mental well-being fosters the resilience needed to navigate
              life&apos;s storms. His approach centers on understanding your value through
              a faith-based perspective — embracing your true worth as God sees you.
            </p>

            {/* Pull quote */}
            <motion.blockquote
              className="border-l-4 border-brand-gold pl-6 py-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <p className="font-heading text-brand-navy text-lg italic leading-relaxed">
                &ldquo;Building a strong foundation in faith and wellness is essential.
                When we prioritize both, we foster the resilience and personal growth
                every young man deserves.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 md:order-2 relative aspect-[3/4] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Bruce Hooks, founder of Crosswalk"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

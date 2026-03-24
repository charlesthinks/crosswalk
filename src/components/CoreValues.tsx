"use client";

import { FaShieldAlt, FaHandsHelping, FaUsers, FaCompass } from "react-icons/fa";
import { motion } from "motion/react";

const values = [
  {
    icon: FaShieldAlt,
    title: "Strength Through Skill",
    description:
      "Real strength isn't about suppressing emotion — it's about mastering it with proven tools rooted in dialectical behavior therapy.",
  },
  {
    icon: FaHandsHelping,
    title: "Faith in Action",
    description:
      "Move from abstract belief to practical faith that works in daily life. Nurture a spiritual connection that strengthens your relationships.",
  },
  {
    icon: FaUsers,
    title: "Brotherhood",
    description:
      "You don't have to figure it out alone. Join a band of brothers on the same path, building each other up through shared experience.",
  },
  {
    icon: FaCompass,
    title: "Clarity & Purpose",
    description:
      "Cut through the noise and define a life of meaning. Navigate life's challenges with resilience and a deep sense of direction.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CoreValues() {
  return (
    <section id="values" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body text-brand-gold text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Our Foundation
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">
            What We Stand For
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              className="bg-white rounded-2xl p-8 text-center shadow-sm group cursor-default"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-gold/10 text-brand-gold mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-gold/20">
                <value.icon size={26} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-navy mb-3">
                {value.title}
              </h3>
              <p className="font-body text-brand-slate text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

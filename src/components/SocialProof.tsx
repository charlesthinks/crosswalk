"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BASE_PATH } from "@/lib/config";

const images = [
  {
    src: `${BASE_PATH}/images/img1.jpeg`,
    alt: "Community gathering and fellowship",
    className: "col-span-1 row-span-1",
  },
  {
    src: `${BASE_PATH}/images/img2.JPEG`,
    alt: "Mentoring session with young men",
    className: "col-span-1 row-span-1",
  },
  {
    src: `${BASE_PATH}/images/img3.JPEG`,
    alt: "Group discussion and personal growth",
    className: "col-span-1 row-span-1",
  },
  {
    src: `${BASE_PATH}/images/img4.JPG`,
    alt: "Brotherhood and community support",
    className: "col-span-1 row-span-1",
  },
  {
    src: `${BASE_PATH}/images/img5.JPEG`,
    alt: "Faith in action and spiritual connection",
    className: "col-span-1 row-span-1 hidden sm:block",
  },
  {
    src: `${BASE_PATH}/images/img6.JPEG`,
    alt: "Young men building connections together",
    className: "col-span-1 row-span-1 hidden sm:block",
  },
  {
    src: `${BASE_PATH}/images/img7.JPEG`,
    alt: "Mentorship and personal growth moments",
    className: "col-span-1 row-span-1 hidden lg:block",
  },
  {
    src: `${BASE_PATH}/images/img8.JPEG`,
    alt: "Crosswalk community experience",
    className: "col-span-1 row-span-1 hidden lg:block",
  },
  {
    src: `${BASE_PATH}/images/img9.JPEG`,
    alt: "The journey towards faith and wellness",
    className: "col-span-1 row-span-1 hidden lg:block",
  },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body text-brand-gold text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            The Experience
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">
            The Journey in Action
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.06 }}
        >
          {images.map((image) => (
            <motion.div
              key={image.alt}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden group ${image.className}`}
              variants={imageVariants}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <Image
        src={`${BASE_PATH}/images/hero_bg.png`}
        alt="Young men walking together outdoors"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-navy/70" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-body text-brand-gold text-sm sm:text-base font-semibold uppercase tracking-[0.25em] mb-6">
          A 10-Week Hybrid Mentor Journey
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold !text-white tracking-tighter leading-tight mb-6">
          Guiding Young Men Toward Faith &amp; Mental Wellness
        </h1>
        <p className="font-body text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Where personal growth intersects with spiritual development and mental health.
          A journey designed to empower you with resilience, clarity, and a deep sense of purpose.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-brand-gold hover:bg-brand-gold-light text-white font-semibold px-8 py-3.5 rounded-full text-base transition-colors duration-300 w-full sm:w-auto"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full text-base transition-colors duration-300 w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

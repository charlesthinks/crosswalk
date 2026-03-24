"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { BASE_PATH } from "@/lib/config";

const navLinks = [
  { label: "Values", href: "#values" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className={`flex flex-row items-center gap-x-4 font-heading text-xl md:text-2xl font-bold tracking-wide transition-colors duration-300 ${scrolled ? "text-brand-navy" : "text-white"
              }`}
          >
            <Image
              src={`${BASE_PATH}/images/HCW.png`}
              alt="Young men walking together outdoors"
              width={40}
              height={40}
              priority
            />
            CROSSWALK
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-body font-medium tracking-wide uppercase transition-colors duration-300 hover:text-brand-gold ${scrolled ? "text-brand-navy" : "text-white/90"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-gold hover:bg-brand-gold-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden transition-colors duration-300 ${scrolled ? "text-brand-navy" : "text-white"
              }`}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-brand-navy font-medium text-base py-2 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-brand-gold hover:bg-brand-gold-light text-white font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

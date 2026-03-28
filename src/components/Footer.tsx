import { FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa";
import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

const footerNavLinks = [
  { label: "Values", href: "#values" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex flex-row items-center gap-x-3 mb-4">
              <Image
                src={`${BASE_PATH}/images/HCW.png`}
                alt="Young men walking together outdoors"
                width={32}
                height={32}
                priority
              />
              <p className="font-heading text-xl font-bold text-white tracking-wide mb-1">
                CROSSWALK
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-body font-bold text-white/50 text-sm">
                Mind. Faith. Purpose.
              </p>
              <p className="font-body text-white/50 text-sm">
                Guidance for young men towards faith and mental wellness.
              </p>
            </div>
          </div>

          <nav className="flex flex-row md:flex-col items-center md:items-start gap-2">
            {footerNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-white/50 hover:text-brand-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:d.hooks@crosswalkwellness.com"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-gold hover:text-white hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={16} />
            </a>
            <a
              href="https://instagram.com/minbhooks"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-gold hover:text-white hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="tel:+19515328010"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-gold hover:text-white hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Phone"
            >
              <FaPhone size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="font-body text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Crosswalk Mentors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

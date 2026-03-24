import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const highlights = [
  "Weekly mentor-led sessions",
  "Faith-centered curriculum",
  "DBT-informed mental wellness tools",
  "Brotherhood community support",
  "Emotional regulation strategies",
  "Resilience & self-esteem building",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
              alt="Young men in a mentoring discussion circle"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-brand-gold text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              About the Journey
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
              10 Weeks That Change Everything
            </h2>
            <p className="font-body text-brand-slate leading-relaxed mb-4">
              Crosswalk represents a pivotal path where personal growth intersects with
              spiritual development and mental health. It is a place of transition,
              encouraging young men to move forward with purpose by integrating core DBT
              skills with a foundation of faith.
            </p>
            <p className="font-body text-brand-slate leading-relaxed mb-8">
              This hybrid journey is designed to empower participants to navigate life&apos;s
              challenges with resilience, clarity, and a deep sense of meaning — fostering
              both inner strength and a connection to something greater than themselves.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <FaCheck className="text-brand-gold text-xs" />
                  </span>
                  <span className="font-body text-brand-slate text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FaShieldAlt, FaHandsHelping, FaUsers, FaCompass } from "react-icons/fa";

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

export default function CoreValues() {
  return (
    <section id="values" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body text-brand-gold text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Our Foundation
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                <value.icon size={26} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-navy mb-3">
                {value.title}
              </h3>
              <p className="font-body text-brand-slate text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

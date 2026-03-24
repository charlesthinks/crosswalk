"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const weeks = [
  {
    week: 1,
    title: "Foundations",
    subtitle: "Building a strong foundation in faith and wellness",
    topics: [
      {
        name: "Spiritual Connection",
        description:
          "Nurturing faith strengthens our daily lives and relationships.",
      },
      {
        name: "Mental Well-Being",
        description:
          "Prioritizing mental health fosters resilience and personal growth.",
      },
      {
        name: "Self-Esteem",
        description:
          "Understanding your value through a faith-based perspective. Embracing your true worth is essential for growth, as faith teaches you to see yourself through God's loving eyes.",
      },
    ],
  },
  {
    week: 2,
    title: "Self-Worth & Resilience",
    subtitle: "Discovering your strengths and learning to bounce back",
    topics: [
      {
        name: "Positive Affirmations",
        description:
          "Encourage growth by speaking kind words to yourself daily.",
      },
      {
        name: "Identifying Strengths",
        description:
          "Recognize and celebrate your unique talents and abilities.",
      },
      {
        name: "Resilience",
        description:
          "In moments of adversity, find strength through faith and community — learning to seek support and reframe challenges as growth opportunities.",
      },
    ],
  },
  {
    week: 3,
    title: "Emotional Regulation",
    subtitle: "Mastering your emotions with proven DBT tools",
    topics: [
      {
        name: "Understanding Emotions",
        description:
          "Learn to identify, name, and understand the purpose behind your emotions.",
      },
      {
        name: "Distress Tolerance",
        description:
          "Build skills to navigate intense moments without being overwhelmed.",
      },
      {
        name: "Mindfulness Practice",
        description:
          "Ground yourself in the present moment through faith-centered mindfulness.",
      },
    ],
  },
  {
    week: 4,
    title: "Faith in Action",
    subtitle: "Moving from abstract belief to practical daily faith",
    topics: [
      {
        name: "Daily Devotion",
        description:
          "Develop a personal practice that connects scripture to everyday decisions.",
      },
      {
        name: "Prayer as a Tool",
        description:
          "Use prayer not just for comfort, but as a strategy for clarity and direction.",
      },
      {
        name: "Living Your Values",
        description:
          "Align your actions with your beliefs so faith becomes a way of life, not just a Sunday practice.",
      },
    ],
  },
  {
    week: 5,
    title: "Relationships & Communication",
    subtitle: "Building healthy connections with those around you",
    topics: [
      {
        name: "Interpersonal Effectiveness",
        description:
          "Learn DBT-based skills for expressing your needs while maintaining respect.",
      },
      {
        name: "Conflict Resolution",
        description:
          "Navigate disagreements with friends, family, and partners with grace and honesty.",
      },
      {
        name: "Setting Boundaries",
        description:
          "Protect your peace by learning to say no without guilt.",
      },
    ],
  },
  {
    week: 6,
    title: "Brotherhood",
    subtitle: "You don't have to figure it out alone",
    topics: [
      {
        name: "Vulnerability & Trust",
        description:
          "Break the cycle of isolation by opening up with a band of brothers on the same path.",
      },
      {
        name: "Accountability",
        description:
          "Build mutual accountability that strengthens commitment to personal growth.",
      },
      {
        name: "Community Impact",
        description:
          "Explore how showing up for others multiplies your own purpose and healing.",
      },
    ],
  },
  {
    week: 7,
    title: "Clarity & Purpose",
    subtitle: "Cut through the noise and define a life of meaning",
    topics: [
      {
        name: "Defining Your Vision",
        description:
          "Identify what a purposeful life looks like for you — beyond societal expectations.",
      },
      {
        name: "Goal Setting",
        description:
          "Translate your vision into concrete, faith-aligned goals with actionable steps.",
      },
      {
        name: "Overcoming Distractions",
        description:
          "Develop strategies to stay focused when the world pulls you in every direction.",
      },
    ],
  },
  {
    week: 8,
    title: "Mental Wellness Habits",
    subtitle: "Creating sustainable practices for lifelong well-being",
    topics: [
      {
        name: "Routine & Discipline",
        description:
          "Design a daily rhythm that nurtures your mind, body, and spirit.",
      },
      {
        name: "Stress Management",
        description:
          "Practical tools for managing pressure at work, school, and in relationships.",
      },
      {
        name: "Asking for Help",
        description:
          "Normalize seeking professional and community support as a sign of strength.",
      },
    ],
  },
  {
    week: 9,
    title: "Leadership & Legacy",
    subtitle: "Becoming the man others can look up to",
    topics: [
      {
        name: "Leading by Example",
        description:
          "Explore what it means to lead with integrity, humility, and faith.",
      },
      {
        name: "Mentoring Others",
        description:
          "Learn how your journey equips you to guide the next generation.",
      },
      {
        name: "Building Your Legacy",
        description:
          "Define the lasting impact you want to leave on your family and community.",
      },
    ],
  },
  {
    week: 10,
    title: "The Crosswalk Forward",
    subtitle: "Stepping into your future with resilience, clarity, and faith",
    topics: [
      {
        name: "Reflection & Growth",
        description:
          "Look back on your transformation and celebrate how far you've come.",
      },
      {
        name: "Commitment Ceremony",
        description:
          "Make a personal declaration of the man you're choosing to become.",
      },
      {
        name: "Continuing the Journey",
        description:
          "Leave with a plan, a brotherhood, and the tools to navigate whatever comes next.",
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export default function Timeline() {
  const [activeWeek, setActiveWeek] = useState(0);

  return (
    <section id="journey" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-body text-brand-gold text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            The 10-Week Journey
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">
            Your Path Forward
          </h2>
          <p className="font-body text-brand-slate mt-4 max-w-2xl mx-auto leading-relaxed">
            Each week builds on the last — integrating DBT skills with a
            foundation of faith to help you grow with resilience, clarity, and
            purpose.
          </p>
        </motion.div>

        {/* Week selector pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {weeks.map((w, i) => (
            <motion.button
              key={w.week}
              onClick={() => setActiveWeek(i)}
              className={`
                px-4 py-2 rounded-full text-sm font-semibold font-body transition-all duration-300
                ${
                  activeWeek === i
                    ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20"
                    : "bg-brand-cream text-brand-slate hover:bg-brand-navy/10"
                }
              `}
              whileTap={{ scale: 0.95 }}
            >
              Week {w.week}
            </motion.button>
          ))}
        </div>

        {/* Active week content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWeek}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Timeline line + dot */}
              <div className="relative pl-8 md:pl-12 border-l-2 border-brand-gold/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-gold ring-4 ring-brand-gold/20" />

                <div className="mb-2">
                  <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                    Week {weeks[activeWeek].week}
                  </span>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-navy mb-2">
                  {weeks[activeWeek].title}
                </h3>
                <p className="font-body text-brand-slate text-lg mb-8">
                  {weeks[activeWeek].subtitle}
                </p>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-5"
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
                >
                  {weeks[activeWeek].topics.map((topic) => (
                    <motion.div
                      key={topic.name}
                      className="bg-brand-cream rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
                      variants={cardVariants}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <h4 className="font-heading text-base font-bold text-brand-navy mb-2">
                        {topic.name}
                      </h4>
                      <p className="font-body text-brand-slate text-sm leading-relaxed">
                        {topic.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicator */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="font-body text-xs text-brand-slate">
              Week {weeks[activeWeek].week} of 10
            </span>
            <span className="font-body text-xs text-brand-gold font-semibold">
              {weeks[activeWeek].week * 10}% Complete
            </span>
          </div>
          <div className="h-1.5 bg-brand-cream rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-gold rounded-full"
              animate={{ width: `${weeks[activeWeek].week * 10}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const images = [
  {
    src: "/images/img1.jpeg",
    alt: "Community gathering and fellowship",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/img2.JPEG",
    alt: "Mentoring session with young men",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/img3.JPEG",
    alt: "Group discussion and personal growth",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/img4.JPG",
    alt: "Brotherhood and community support",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/img5.JPEG",
    alt: "Faith in action and spiritual connection",
    className: "col-span-1 row-span-1 hidden sm:block",
  },
  {
    src: "/images/img6.JPEG",
    alt: "Young men building connections together",
    className: "col-span-1 row-span-1 hidden sm:block",
  },
  {
    src: "/images/img7.JPEG",
    alt: "Mentorship and personal growth moments",
    className: "col-span-1 row-span-1 hidden lg:block",
  },
  {
    src: "/images/img8.JPEG",
    alt: "Crosswalk community experience",
    className: "col-span-1 row-span-1 hidden lg:block",
  },
  {
    src: "/images/img9.JPEG",
    alt: "The journey towards faith and wellness",
    className: "col-span-1 row-span-1 hidden lg:block",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body text-brand-gold text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            The Experience
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">
            The Journey in Action
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.alt}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden group ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

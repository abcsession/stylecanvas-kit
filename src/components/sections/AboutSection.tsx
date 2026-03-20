import { siteConfig } from "@/config/siteConfig";

export default function AboutSection() {
  const { aboutSection } = siteConfig;

  // Parse heading: "about" in regular, rest in bold uppercase
  const parts = aboutSection.heading.split(" ");
  const first = parts[0];
  const rest = parts.slice(1).join(" ");

  return (
    <section className="lg:grid lg:grid-cols-2">
      {/* Image - shows first on mobile */}
      <div className="aspect-square lg:aspect-auto lg:order-2">
        <img
          src={aboutSection.image}
          alt="About the brand"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="p-8 lg:p-16 flex flex-col justify-center lg:order-1">
        <h2 className="text-2xl lg:text-4xl mb-6 lg:mb-8" style={{ lineHeight: 1.15 }}>
          <span className="font-light">{first} </span>
          <span className="font-semibold uppercase">{rest}</span>
        </h2>
        <p className="body-s text-muted-foreground leading-[1.7] max-w-[60ch]">
          {aboutSection.body}
        </p>
      </div>
    </section>
  );
}

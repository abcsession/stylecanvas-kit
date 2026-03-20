import { useCarousel } from "@/hooks/useCarousel";
import { siteConfig } from "@/config/siteConfig";

export default function HeroCarousel() {
  const slides = siteConfig.heroCarousel;
  const { current, goTo, setIsPaused } = useCarousel(slides.length, 5000);

  return (
    <section
      className="relative w-full h-[70vh] lg:h-[85vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={slide.imageDesktop} />
            <img
              src={slide.imageMobile}
              alt={slide.heading}
              className="w-full h-full object-cover"
            />
          </picture>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Text content */}
          <div
            className={`absolute bottom-12 lg:bottom-20 left-6 lg:left-16 max-w-lg transition-all duration-700 delay-200 ${
              i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="label-xs text-secondary/80 mb-3 block">{slide.label}</span>
            <h1 className="heading-l text-secondary mb-3" style={{ textWrap: "balance" }}>
              {slide.heading}
            </h1>
            <p className="body-s text-secondary/80 mb-6 max-w-md">{slide.description}</p>
            <a href={slide.link} className="btn-editorial-inverted">
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-secondary w-6" : "bg-secondary/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

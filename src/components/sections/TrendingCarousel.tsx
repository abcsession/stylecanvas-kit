import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function TrendingCarousel() {
  const { trendingSection } = siteConfig;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="px-6 lg:px-16 mb-8 flex items-center justify-between">
        <h2 className="label-xs font-semibold tracking-[0.2em]">{trendingSection.title}</h2>
        <div className="hidden lg:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 lg:px-16"
      >
        {trendingSection.items.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="snap-start flex-shrink-0 w-[260px] lg:w-[300px] group"
          >
            <div className="overflow-hidden aspect-[3/4] mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="label-s text-muted-foreground font-normal mt-0.5">{item.subtitle}</p>
            <p className="text-sm mt-1">{item.price}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

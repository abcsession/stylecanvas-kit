import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function PromoBar() {
  const [visible, setVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    const speed = 0.5;
    let raf: number;
    const scroll = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(scroll);
    };
    raf = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!siteConfig.topBar.enabled || !visible) return null;

  const messages = siteConfig.topBar.messages;

  return (
    <div className="relative bg-primary text-primary-foreground">
      <div
        ref={scrollRef}
        className="overflow-hidden whitespace-nowrap scrollbar-hide"
      >
        <div className="inline-flex">
          {[...messages, ...messages, ...messages, ...messages].map((msg, i) => (
            <a
              key={i}
              href={msg.link}
              className="inline-block px-8 py-2 label-xs text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              {msg.text}
            </a>
          ))}
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Close promo bar"
      >
        <X size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
}

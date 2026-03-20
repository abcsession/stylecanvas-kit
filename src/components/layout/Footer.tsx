import { useState } from "react";
import { ChevronDown, Facebook, Instagram, Twitter, Youtube, Music, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap = {
  Facebook, Instagram, Twitter, Youtube, Music, Linkedin,
} as const;

export default function Footer() {
  const { footer, brand } = siteConfig;
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="px-6 lg:px-16 py-12 lg:py-16">
        {/* Desktop columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="label-xs font-semibold mb-6">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="label-s font-normal text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordions */}
        <div className="lg:hidden space-y-0 divide-y divide-primary-foreground/20">
          {footer.columns.map((col, i) => (
            <div key={col.title}>
              <button
                className="flex items-center justify-between w-full py-4 label-xs font-semibold"
                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
              >
                {col.title}
                <ChevronDown
                  size={16}
                  strokeWidth={1.5}
                  className={`transition-transform duration-300 ${openAccordion === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: openAccordion === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2.5 pb-4">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="label-s font-normal text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-6">
            {footer.bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="label-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5">
            {footer.social.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  aria-label={s.platform}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        <p className="label-xs text-primary-foreground/40 mt-8">
          © 2026 {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

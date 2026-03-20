import { useState } from "react";

interface MegaMenuProps {
  open: boolean;
  megamenu: {
    tabs: Array<{
      label: string;
      shopAllLink: string;
      columns: Array<{
        heading: string;
        links: Array<{ label: string; href: string }>;
      }>;
      featuredImage: {
        src: string;
        alt: string;
        link: string;
      };
    }>;
  };
}

export default function MegaMenu({ open, megamenu }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!open) return null;

  const tab = megamenu.tabs[activeTab];

  return (
    <div className="absolute left-0 w-full bg-background editorial-border border-x-0 border-t-0 z-50 transition-opacity duration-200">
      {/* Tabs */}
      <div className="flex border-b border-border">
        {megamenu.tabs.map((t, i) => (
          <button
            key={t.label}
            onMouseEnter={() => setActiveTab(i)}
            className={`px-6 py-3 label-xs transition-colors border-r border-border last:border-r-0 ${
              i === activeTab
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex px-6 py-8 gap-12">
        {/* Columns */}
        <div className="flex gap-12 flex-1">
          {tab.columns.map((col, ci) => (
            <div key={ci}>
              {col.heading && (
                <h4 className="label-xs font-semibold mb-4 text-foreground">{col.heading}</h4>
              )}
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="label-s text-muted-foreground hover:text-foreground transition-colors font-normal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {ci === 0 && (
                <a
                  href={tab.shopAllLink}
                  className="inline-block mt-6 label-xs font-semibold text-foreground border-b border-foreground pb-0.5"
                >
                  SHOP ALL
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Featured image */}
        <a href={tab.featuredImage.link} className="block w-64 flex-shrink-0 group">
          <div className="overflow-hidden">
            <img
              src={tab.featuredImage.src}
              alt={tab.featuredImage.alt}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="label-xs mt-3 text-muted-foreground group-hover:text-foreground transition-colors">
            {tab.featuredImage.alt}
          </p>
        </a>
      </div>
    </div>
  );
}

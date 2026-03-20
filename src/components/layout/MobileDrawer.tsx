import { useState } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

type MenuLevel = "root" | "submenu" | "tab";

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [level, setLevel] = useState<MenuLevel>("root");
  const [activeMenuIdx, setActiveMenuIdx] = useState(0);
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const { navigation } = siteConfig;

  const handleBack = () => {
    if (level === "tab") setLevel("submenu");
    else if (level === "submenu") setLevel("root");
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setLevel("root");
      setActiveMenuIdx(0);
      setActiveTabIdx(0);
    }, 300);
  };

  if (!open) return null;

  const menuItem = navigation.mainMenu[activeMenuIdx];
  const tab = menuItem?.megamenu?.tabs[activeTabIdx];

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/30" onClick={handleClose} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-background animate-slide-in-right flex flex-col">
        {/* Header */}
        {level !== "root" && (
          <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
            <button onClick={handleBack} className="flex items-center gap-1 label-xs">
              <ChevronLeft size={16} strokeWidth={1.5} />
              {level === "submenu" ? "Menu" : menuItem?.label}
            </button>
            <button onClick={handleClose} aria-label="Close">
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
        )}

        {level === "root" && (
          <div className="flex items-center justify-between px-4 py-4 border-b border-border">
            <span className="label-s font-bold tracking-[0.2em]">{siteConfig.brand.name}</span>
            <button onClick={handleClose} aria-label="Close menu">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {level === "root" && (
            <nav className="py-2">
              {navigation.mainMenu.map((item, i) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between w-full px-6 py-4 label-m text-left hover:bg-muted transition-colors"
                  onClick={() => {
                    if (item.megamenu) {
                      setActiveMenuIdx(i);
                      setLevel("submenu");
                    }
                  }}
                >
                  {item.label}
                  {item.megamenu && <ChevronRight size={18} strokeWidth={1.5} />}
                </button>
              ))}
              <div className="border-t border-border mt-4 pt-4 px-6 space-y-3">
                {navigation.topLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block label-xs text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          )}

          {level === "submenu" && menuItem?.megamenu && (
            <div className="py-2">
              {menuItem.megamenu.tabs.map((t, i) => (
                <button
                  key={t.label}
                  className="flex items-center justify-between w-full px-6 py-4 label-m text-left hover:bg-muted transition-colors"
                  onClick={() => {
                    setActiveTabIdx(i);
                    setLevel("tab");
                  }}
                >
                  {t.label}
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
              ))}
            </div>
          )}

          {level === "tab" && tab && (
            <div className="py-4 px-6 space-y-6">
              <a
                href={tab.shopAllLink}
                className="block label-xs font-semibold border-b border-foreground pb-0.5 w-fit"
              >
                SHOP ALL {tab.label.toUpperCase()}
              </a>
              {tab.columns.map((col, ci) => (
                <div key={ci}>
                  {col.heading && (
                    <h4 className="label-xs font-semibold mb-3">{col.heading}</h4>
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

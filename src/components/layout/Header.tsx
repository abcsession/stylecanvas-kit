import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartCount] = useState(0);

  const { navigation, brand } = siteConfig;
  const shopItem = navigation.mainMenu.find((m) => m.megamenu);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background editorial-border border-t-0 border-x-0">
        {/* Top mini bar - desktop only */}
        <div className="hidden lg:flex items-center justify-end px-6 py-1.5 editorial-border border-t-0 border-x-0">
          <div className="flex items-center gap-6">
            {navigation.topLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="label-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="label-xs text-muted-foreground">
              {navigation.countrySelector.code}
              <span className="lowercase">{navigation.countrySelector.language}</span>
            </span>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="flex items-center justify-between h-14 lg:h-16 px-4 lg:px-6">
          {/* Left: logo */}
          <a href="/" className="flex-shrink-0 lg:flex-1">
            <img
              src={brand.logoUrl}
              alt={brand.name}
              className="h-8 lg:h-10 w-auto"
            />
          </a>

          {/* Center: main menu (desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.mainMenu.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => item.megamenu && setMegaOpen(true)}
                onMouseLeave={() => item.megamenu && setMegaOpen(false)}
              >
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    if (item.megamenu) {
                      e.preventDefault();
                      setMegaOpen(!megaOpen);
                    }
                  }}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </nav>

          {/* Right: icons */}
          <div className="flex items-center gap-4 lg:flex-1 lg:justify-end">
            <button className="text-foreground hover:text-muted-foreground transition-colors" aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="relative text-foreground hover:text-muted-foreground transition-colors" aria-label="Cart">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-foreground text-background text-[9px] flex items-center justify-center rounded-full font-medium">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="lg:hidden text-foreground hover:text-muted-foreground transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        {shopItem?.megamenu && (
          <div
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <MegaMenu open={megaOpen} megamenu={shopItem.megamenu} />
          </div>
        )}
      </header>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-accepted");
    if (!dismissed) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] bg-primary text-primary-foreground px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="body-s text-primary-foreground/80">{siteConfig.cookie.message}</p>
      <div className="flex gap-3 flex-shrink-0">
        <button onClick={accept} className="btn-editorial-inverted text-[11px] px-6 py-2">
          {siteConfig.cookie.acceptText}
        </button>
        <button className="btn-editorial-ghost text-primary-foreground border-primary-foreground/40 text-[11px] px-6 py-2 hover:bg-primary-foreground hover:text-primary">
          {siteConfig.cookie.customizeText}
        </button>
      </div>
    </div>
  );
}

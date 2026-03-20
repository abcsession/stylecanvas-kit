import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function NewsletterForm() {
  const { newsletter } = siteConfig;
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="bg-primary text-primary-foreground py-16 lg:py-24 px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="label-m font-semibold mb-4 tracking-[0.15em]">{newsletter.heading}</h2>
        <p className="body-s text-primary-foreground/70 mb-2">{newsletter.description}</p>
        <p className="body-s text-primary-foreground/90 italic mb-10">{newsletter.incentive}</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <input
              type="email"
              placeholder="Email *"
              required
              className="bg-transparent border-b border-primary-foreground/40 pb-2 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground transition-colors text-primary-foreground"
            />
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent border-b border-primary-foreground/40 pb-2 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground transition-colors text-primary-foreground"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-transparent border-b border-primary-foreground/40 pb-2 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground transition-colors text-primary-foreground"
            />
          </div>

          <div className="flex items-start gap-3 text-left max-w-md mx-auto lg:mx-0">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 border border-primary-foreground/40 bg-transparent appearance-none checked:bg-primary-foreground checked:border-primary-foreground cursor-pointer flex-shrink-0"
              id="privacy"
            />
            <label htmlFor="privacy" className="label-xs text-primary-foreground/60 cursor-pointer leading-relaxed">
              {newsletter.privacyText}
            </label>
          </div>

          <div className="text-left lg:text-left">
            <button type="submit" className="btn-editorial-inverted">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

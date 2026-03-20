export const siteConfig = {
  brand: {
    name: "YOUR BRAND",
    logoUrl: "/logo.svg",
    favicon: "/favicon.png",
    tagline: "The Original Sportswear Brand",
  },
  colors: {
    primary: "#000000",
    secondary: "#FFFFFF",
    accent: "#1A1A1A",
    border: "#E5E5E5",
    hover: "#333333",
  },
  topBar: {
    enabled: true,
    messages: [
      { text: "EASY RETURNS", link: "/returns" },
      { text: "FREE SHIPPING OVER $200", link: "/shipping" },
      { text: "NEW COLLECTION AVAILABLE", link: "/new-in" },
    ],
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  navigation: {
    topLinks: [
      { label: "PARTNER STUDIO", href: "https://example.com", external: true },
      { label: "Login / Register", href: "/login", external: false },
    ],
    mainMenu: [
      {
        label: "Shop",
        href: "/shop",
        megamenu: {
          tabs: [
            {
              label: "Main Collection",
              shopAllLink: "/shop/main-collection",
              columns: [
                {
                  heading: "Clothing",
                  links: [
                    { label: "Jackets & Coats", href: "/shop/jackets" },
                    { label: "Overshirts", href: "/shop/overshirts" },
                    { label: "Blazers", href: "/shop/blazers" },
                    { label: "Shirts", href: "/shop/shirts" },
                    { label: "Sweatshirts", href: "/shop/sweatshirts" },
                    { label: "Knitwear", href: "/shop/knitwear" },
                    { label: "T-shirts & Polos", href: "/shop/tshirts" },
                    { label: "Trousers", href: "/shop/trousers" },
                    { label: "Tracksuits & Shorts", href: "/shop/tracksuits" },
                  ],
                },
                {
                  heading: "Accessories",
                  links: [
                    { label: "Hats", href: "/shop/hats" },
                    { label: "Backpacks & Bags", href: "/shop/bags" },
                    { label: "Shoes", href: "/shop/shoes" },
                    { label: "Other Accessories", href: "/shop/accessories" },
                  ],
                },
              ],
              featuredImage: {
                src: "/images/menu-main.jpg",
                alt: "Main Collection",
                link: "/shop/main-collection",
              },
            },
            {
              label: "Metropolis Collection",
              shopAllLink: "/shop/metropolis",
              columns: [
                {
                  heading: "Metropolis Series",
                  links: [
                    { label: "Jackets", href: "/shop/metropolis/jackets" },
                    { label: "Knitwear", href: "/shop/metropolis/knitwear" },
                    { label: "Accessories", href: "/shop/metropolis/accessories" },
                  ],
                },
              ],
              featuredImage: {
                src: "/images/menu-metropolis.jpg",
                alt: "Metropolis Series",
                link: "/shop/metropolis",
              },
            },
          ],
        },
      },
      { label: "NEW IN", href: "/new-in" },
      { label: "Icons", href: "/icons" },
      { label: "Brand", href: "/brand" },
    ],
    countrySelector: { code: "US", language: "en" },
  },
  heroCarousel: [
    {
      id: 1,
      label: "Spring Summer 026",
      heading: "Mackintosh x Brand",
      description: "A shared vision shaped by craftsmanship, innovation, and contemporary design.",
      imageDesktop: "/images/hero-1-desktop.jpg",
      imageMobile: "/images/hero-1-mobile.jpg",
      link: "/collaboration",
      buttonText: "Discover",
    },
    {
      id: 2,
      label: "Spring Summer 026",
      heading: "Coating & Dyeing Research",
      description: "An innovative approach to fabric treatment.",
      imageDesktop: "/images/hero-2-desktop.jpg",
      imageMobile: "/images/hero-2-mobile.jpg",
      link: "/research",
      buttonText: "Explore",
    },
  ],
  trendingSection: {
    title: "Trending now",
    items: [
      {
        image: "/images/trending-1.jpg",
        title: "Goggle Jacket",
        subtitle: "Chrome-R / Garment Dyed",
        link: "/shop/goggle",
        price: "$850",
      },
      {
        image: "/images/trending-2.jpg",
        title: "Lens Sweatshirt",
        subtitle: "Diagonal Raised Fleece",
        link: "/shop/lens-sweatshirt",
        price: "$320",
      },
      {
        image: "/images/trending-3.jpg",
        title: "Shell-R Jacket",
        subtitle: "Garment Dyed",
        link: "/shop/shell-r",
        price: "$720",
      },
      {
        image: "/images/trending-4.jpg",
        title: "Cargo Pants",
        subtitle: "Stretch Sateen",
        link: "/shop/cargo",
        price: "$280",
      },
    ],
  },
  aboutSection: {
    heading: "about YOUR BRAND",
    body: "Founded in 1971, this brand pioneered a hybrid style merging military, workwear, and sportswear influences. For over 50 years it has been at the forefront of fabric innovation and garment dyeing technology. This fusion of functional design and textile research lies at the core of the brand and continues to shape every garment that carries its name.",
    image: "/images/about.jpg",
  },
  newsletter: {
    heading: "Subscribe to the newsletter",
    description: "Join our community and get access to exclusive content, previews and special offers.",
    incentive: "For you, 10% off your first order.",
    fields: ["email", "firstName", "lastName"] as const,
    privacyText: "I have read and understood the Privacy Policy.",
  },
  footer: {
    columns: [
      {
        title: "Brand",
        links: [
          { label: "Our Story", href: "/our-story" },
          { label: "Garment Dyeing", href: "/garment-dyeing" },
          { label: "Iconic Garments", href: "/icons" },
          { label: "Careers", href: "/careers" },
          { label: "Sustainability", href: "/sustainability" },
        ],
      },
      {
        title: "Customer Care",
        links: [
          { label: "Fit Guide", href: "/fit-guide" },
          { label: "Track Orders", href: "/track-orders" },
          { label: "Fix & Repair", href: "/repair" },
          { label: "Contact Us", href: "/contact" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      {
        title: "Legal Area",
        links: [
          { label: "Shipping", href: "/shipping" },
          { label: "Returns", href: "/returns" },
          { label: "Payment", href: "/payment" },
          { label: "Conditions of Sale", href: "/conditions" },
          { label: "Conditions of Use", href: "/terms" },
        ],
      },
    ],
    bottomLinks: [
      { label: "Store Locator", href: "/stores" },
      { label: "Authenticity", href: "/authenticity" },
    ],
    social: [
      { platform: "Facebook", url: "https://facebook.com/yourbrand", icon: "Facebook" as const },
      { platform: "Instagram", url: "https://instagram.com/yourbrand", icon: "Instagram" as const },
      { platform: "X", url: "https://x.com/yourbrand", icon: "Twitter" as const },
      { platform: "YouTube", url: "https://youtube.com/yourbrand", icon: "Youtube" as const },
      { platform: "TikTok", url: "https://tiktok.com/@yourbrand", icon: "Music" as const },
      { platform: "LinkedIn", url: "https://linkedin.com/company/yourbrand", icon: "Linkedin" as const },
    ],
  },
  cookie: {
    message: "We use cookies to ensure you get the best experience on our website.",
    acceptText: "Accept",
    customizeText: "Customize",
  },
};

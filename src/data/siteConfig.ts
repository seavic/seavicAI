export const siteConfig = {
  siteUrl: "https://staging.seavicai.com",
  legalName: "SeaVic Consulting LLC",
  corporateName: "SeaVic Consulting",
  brandName: "SeavicAI",
  marketingDomain: "SeavicAI.com",
  contactEmail: "hello@seavicai.com",
  linkedInUrl: "https://www.linkedin.com/company/seavic-consulting",
  copyrightYear: 2026,
  flags: {
    showInsightsNav: false,
    showCinderLabsAttribution: false,
    showFuturePlatformModule: false,
    enableContactForm: false,
    enableBookingLink: false,
    enableAnalytics: false
  },
  bookingUrl: "",
  formEndpoint: ""
} as const;

export type SiteConfig = typeof siteConfig;

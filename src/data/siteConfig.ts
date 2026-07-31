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
    showKosmoy: false,
    showCinderLabsAttribution: false,
    showFuturePlatformModule: false,
    stageNoindex: true,
    enableContactForm: false,
    enableBookingLink: false,
    enableGA4: false,
    enableClarity: false,
    enableCloudflareWebAnalytics: false,
    analyticsConsentMode: false
  },
  ga4MeasurementId: "",
  clarityProjectId: "",
  cloudflareWebAnalyticsToken: "",
  googleSiteVerification: "",
  bookingUrl: "",
  formEndpoint: ""
} as const;

export type SiteConfig = typeof siteConfig;

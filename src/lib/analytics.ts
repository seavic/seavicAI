import { siteConfig } from "../data/siteConfig";

export type AnalyticsEventName =
  | "cta_discovery_click"
  | "cta_how_we_work_click"
  | "contact_email_click"
  | "service_page_view"
  | "faq_open";

type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>;

export const analyticsEvents: Record<AnalyticsEventName, { purpose: string; piiAllowed: false }> = {
  cta_discovery_click: {
    purpose: "Track intent to start a SeaVic Discovery Call.",
    piiAllowed: false
  },
  cta_how_we_work_click: {
    purpose: "Track interest in the SeaVic delivery method.",
    piiAllowed: false
  },
  contact_email_click: {
    purpose: "Track email-fallback contact intent without collecting message content.",
    piiAllowed: false
  },
  service_page_view: {
    purpose: "Track aggregate service-page interest.",
    piiAllowed: false
  },
  faq_open: {
    purpose: "Track aggregate FAQ engagement.",
    piiAllowed: false
  }
};

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload = {}) {
  if (!analyticsEvents[name]) return;
  if (!siteConfig.flags.enableGA4 && !siteConfig.flags.enableClarity && !siteConfig.flags.enableCloudflareWebAnalytics) return;

  const safePayload = Object.fromEntries(
    Object.entries(payload).filter((entry): entry is [string, string | number | boolean] =>
      ["string", "number", "boolean"].includes(typeof entry[1])
    )
  );

  if (siteConfig.flags.enableGA4 && siteConfig.ga4MeasurementId && "gtag" in window) {
    window.gtag?.("event", name, safePayload);
  }
}

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, parameters?: Record<string, string | number | boolean>) => void;
  }
}

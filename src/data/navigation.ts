import { siteConfig } from "./siteConfig";

export const primaryNavigation = [
  { label: "AI Security and Governance", href: "/ai-security-governance/" },
  { label: "AI Management and Control", href: "/ai-management-control/" },
  { label: "AI Enablement and Transformation", href: "/ai-enablement-transformation/" },
  { label: "How We Work", href: "/how-we-work/" },
  { label: "About", href: "/about/" },
  ...(siteConfig.flags.showInsightsNav ? [{ label: "Insights", href: "/insights/" }] : [])
];

export const footerNavigation = [
  { label: "Privacy Notice", href: "/privacy/" },
  { label: "Website Terms", href: "/terms/" },
  { label: "LinkedIn", href: siteConfig.linkedInUrl },
  { label: "Contact", href: "/contact/" }
];

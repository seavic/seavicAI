import { siteConfig } from "./siteConfig";

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Governance", href: "/ai-governance-risk-compliance-advisory/" },
  { label: "Security", href: "/ai-security-governance/" },
  { label: "Kosmoy", href: "/ai-management-control/" },
  { label: "Managed Services", href: "/managed-ai-governance-services/" },
  { label: "Transformation", href: "/ai-enablement-transformation/" },
  { label: "How We Work", href: "/how-we-work/" },
  { label: "About", href: "/about/" },
  ...(siteConfig.flags.showInsightsNav ? [{ label: "Insights", href: "/insights/" }] : []),
  { label: "Contact", href: "/contact/" }
];

export const footerNavigation = [
  { label: "Privacy Notice", href: "/privacy/" },
  { label: "Website Terms", href: "/terms/" },
  { label: "LinkedIn", href: siteConfig.linkedInUrl },
  { label: "Contact", href: "/contact/" }
];

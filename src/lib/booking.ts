import { siteConfig } from "../data/siteConfig";
import { localPath } from "./urls";

export const bookingEnabled = siteConfig.flags.enableBookingLink && Boolean(siteConfig.bookingUrl);
export const bookingHref = bookingEnabled ? siteConfig.bookingUrl : localPath("/contact/");

export const bookingLinkAttributes = bookingEnabled
  ? {
      target: "_blank",
      rel: "noopener noreferrer",
      "data-calendly-booking-link": "true",
    }
  : {};

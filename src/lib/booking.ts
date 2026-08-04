import { siteConfig } from "../data/siteConfig";
import { localPath } from "./urls";

export const bookingEnabled = siteConfig.flags.enableBookingLink && Boolean(siteConfig.bookingUrl);
export const bookingHref = bookingEnabled ? siteConfig.bookingUrl : localPath("/contact/");

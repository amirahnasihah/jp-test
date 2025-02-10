export const COOKIE_CONSENT_NAME = "cookie-consent";

export const BASE_COOKIE_OPTIONS = {
  maxAge: 60 * 60 * 24 * 365, // 1 year
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

export const SERVER_COOKIE_OPTIONS = {
  ...BASE_COOKIE_OPTIONS,
  httpOnly: true,
};

export const CLIENT_COOKIE_OPTIONS = {
  ...BASE_COOKIE_OPTIONS,
  expires: new Date(
    Date.now() + BASE_COOKIE_OPTIONS.maxAge * 1000
  ).toUTCString(),
};

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface ConsentPreferences {
  necessary: boolean; // Always true
  analytics?: boolean;
  marketing?: boolean;
}

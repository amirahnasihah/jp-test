"use client";

import { CLIENT_COOKIE_OPTIONS } from "./cookieConfig";

export function getClientCookie(name: string) {
  const value = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
  return value ? value.pop() : undefined;
}

export function setClientCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; ${Object.entries(CLIENT_COOKIE_OPTIONS)
    .map(([key, val]) => `${key}=${val}`)
    .join("; ")}`;
}

export function deleteClientCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

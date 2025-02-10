"use server";

import { cookies } from "next/headers";
import { SERVER_COOKIE_OPTIONS } from "./cookieConfig";

// Server-side functions
export async function getServerCookie(name: string) {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}

export async function setServerCookie(name: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set(name, value, SERVER_COOKIE_OPTIONS);
}

export async function deleteServerCookie(name: string) {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}

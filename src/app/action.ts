"use server";

import { cookies } from "next/headers";

// Set a cookie
export async function setCookie(name: string, value: string) {
  (await cookies()).set(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });
}

// Get a cookie
export async function getCookie(name: string) {
  const cookieStore = await cookies();
  return cookieStore.get(name);
}

// Delete a cookie
export async function deleteCookie(name: string) {
  (await cookies()).delete(name);
}

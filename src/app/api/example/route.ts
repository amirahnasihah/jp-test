import { getServerCookie, setServerCookie } from "@/lib/cookies";

export async function GET() {
  const consent = await getServerCookie("cookie-consent");

  return Response.json({ consent });
}

export async function POST() {
  await setServerCookie("cookie-consent", "true");

  return Response.json({ success: true });
}

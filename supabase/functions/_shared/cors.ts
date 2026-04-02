const allowedOrigins = Deno.env.get("ALLOWED_ORIGINS")?.split(",") ?? [];

function isAllowed(origin: string): boolean {
  if (allowedOrigins.includes(origin)) return true;
  // Accept any Vercel preview deployment
  if (origin.endsWith(".vercel.app") && origin.startsWith("https://")) return true;
  return false;
}

export function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("Origin") ?? "";
  const allowed = isAllowed(origin) ? origin : allowedOrigins[0] ?? "";

  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

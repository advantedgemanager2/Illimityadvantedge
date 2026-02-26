import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export async function verifyAdmin(
  req: Request,
  corsHeaders: Record<string, string>
): Promise<{ adminClient: ReturnType<typeof createClient>; error?: Response }> {
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return {
      adminClient: null!,
      error: new Response(
        JSON.stringify({ error: "Missing Authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      ),
    };
  }

  const adminClient = createClient(supabaseUrl, supabaseServiceKey);

  // Allow service role key to bypass user auth (for server-to-server calls)
  const token = authHeader.replace("Bearer ", "").trim();
  try {
    const payloadB64 = token.split(".")[1];
    if (payloadB64) {
      const payload = JSON.parse(atob(payloadB64));
      if (payload.role === "service_role") {
        return { adminClient };
      }
    }
  } catch (_) {
    // Not a valid JWT, fall through to user auth
  }

  const callerClient = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: authHeader } },
  });

  const { data: { user: caller }, error: getUserError } = await callerClient.auth.getUser();

  if (getUserError || !caller) {
    return {
      adminClient: null!,
      error: new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      ),
    };
  }

  const { data: roleData } = await adminClient
    .from("user_roles")
    .select("role")
    .eq("user_id", caller.id)
    .eq("role", "admin")
    .maybeSingle();

  if (!roleData) {
    return {
      adminClient: null!,
      error: new Response(
        JSON.stringify({ error: "Forbidden: admin role required" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      ),
    };
  }

  return { adminClient };
}

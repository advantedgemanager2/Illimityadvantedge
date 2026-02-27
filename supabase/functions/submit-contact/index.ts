import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders } from "../_shared/cors.ts";

const NOTIFY_EMAIL = "pietro.cn@advantedgetoolkit.com";

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, role, message, page_slug } = await req.json();

    // Validate required fields
    if (!name || !email || !role || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const adminClient = createClient(supabaseUrl, supabaseServiceKey);

    // Store in database
    const { error: insertError } = await adminClient
      .from("contact_requests")
      .insert({
        name,
        email,
        role,
        message,
        page_slug: page_slug || null,
      });

    if (insertError) {
      console.error("DB insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save request" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email notification via Resend (if API key is configured)
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "AdvantEdge Toolkit <noreply@advantedgetoolkit.com>",
            to: [NOTIFY_EMAIL],
            subject: `New Contact Request from ${name}`,
            html: `
              <h2>New Contact Request</h2>
              <table style="border-collapse:collapse;width:100%;max-width:500px">
                <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(name)}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
                <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Role</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(role)}</td></tr>
                ${page_slug ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Page</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(page_slug)}</td></tr>` : ""}
              </table>
              <h3 style="margin-top:16px">Message</h3>
              <p style="white-space:pre-wrap;background:#f9f9f9;padding:12px;border-radius:6px">${escapeHtml(message)}</p>
            `,
          }),
        });

        if (!emailRes.ok) {
          console.error("Resend error:", await emailRes.text());
        }
      } catch (emailErr) {
        // Email is best-effort — request is already stored in DB
        console.error("Email send error:", emailErr);
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

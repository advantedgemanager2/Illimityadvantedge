import { getCorsHeaders } from "../_shared/cors.ts";
import { verifyAdmin } from "../_shared/auth.ts";

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Setup admin function called');

    const { adminClient: supabaseAdmin, error: authError } = await verifyAdmin(req, corsHeaders);
    if (authError) return authError;

    const { email } = await req.json();
    console.log('Looking up user with email:', email);
    
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Look up user by email using admin API
    const { data: usersData, error: userError } = await supabaseAdmin.auth.admin.listUsers();
    
    if (userError) {
      console.error('Error listing users:', userError);
      throw userError;
    }

    const user = usersData?.users.find(u => u.email === email);
    
    if (!user) {
      console.log('User not found with email:', email);
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    console.log('Found user:', user.id);

    // Insert admin role (upsert to avoid duplicates)
    const { error: roleError } = await supabaseAdmin
      .from('user_roles')
      .upsert(
        { user_id: user.id, role: 'admin' }, 
        { onConflict: 'user_id,role' }
      );

    if (roleError) {
      console.error('Error inserting role:', roleError);
      throw roleError;
    }

    console.log('Admin role assigned successfully to:', email);

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Admin role assigned to ${email}`,
      user_id: user.id 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error: unknown) {
    console.error('Error in setup-admin function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});

import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, Clock, Edit2, UserPlus, Trash2, Users, Loader2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigation } from "@/hooks/useNavigation";

const FALLBACK_PAGE_GROUPS = [
  {
    title: "Know-How",
    pages: [
      { slug: "know-how/transition-finance", title: "Transition Finance" },
      { slug: "know-how/transition-risks", title: "Transition Risks" },
      { slug: "know-how/greenwashing-risks", title: "Greenwashing Risks" },
      { slug: "know-how/credible-transition-plans", title: "Credible Transition Plans" },
      { slug: "know-how/risk-assessment", title: "Risk Assessment" },
      { slug: "know-how/solutions-deployment", title: "Solutions Deployment" },
      { slug: "know-how/litigation-risk", title: "Litigation Risk" },
    ],
  },
  {
    title: "Governance",
    pages: [
      { slug: "governance/prudential-planning", title: "Prudential Planning" },
      { slug: "governance/net-zero-management", title: "Net Zero Management" },
      { slug: "governance/finance-framework", title: "Finance Framework" },
    ],
  },
  {
    title: "Products",
    pages: [
      { slug: "products/kpis-criteria", title: "KPIs & Criteria" },
      { slug: "products/corporate-loans", title: "Corporate Loans" },
      { slug: "products/sll", title: "SLL" },
      { slug: "products/contractual-solutions", title: "Contractual Solutions" },
      { slug: "products/loan-policy", title: "Loan Policy" },
    ],
  },
  {
    title: "Sectors",
    pages: [
      { slug: "sectors/steel", title: "Steel" },
      { slug: "sectors/cement", title: "Cement" },
      { slug: "sectors/automotive", title: "Automotive" },
      { slug: "sectors/shipping", title: "Shipping" },
    ],
  },
];

interface ManagedUser {
  id: string;
  email: string;
  role: string;
  created_at: string;
  last_sign_in_at: string | null;
}

function generateSlug(title: string, categorySlug: string): string {
  const pageSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${categorySlug}/${pageSlug}`;
}

export default function AdminDashboard() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();
  const { data: navCategories } = useNavigation();

  // User management state
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("viewer");

  // Page creation state
  const [createPageOpen, setCreatePageOpen] = useState(false);
  const [newPageTitle, setNewPageTitle] = useState("");
  const [newPageSlug, setNewPageSlug] = useState("");
  const [newPageCategory, setNewPageCategory] = useState("");
  const [newPageDescription, setNewPageDescription] = useState("");

  const { data: categories } = useQuery({
    queryKey: ["admin-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("page_categories")
        .select("id, name, slug, sort_order")
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const { data: pages } = useQuery({
    queryKey: ["admin-pages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pages")
        .select("id, slug, title, updated_at, category_id, is_published, sort_order")
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const pageGroups = useMemo(() => {
    if (!categories || categories.length === 0 || !pages || pages.length === 0) return FALLBACK_PAGE_GROUPS;
    return categories.map((cat) => ({
      title: cat.name,
      pages: pages
        .filter((p) => p.category_id === cat.id)
        .map((p) => ({ slug: p.slug, title: p.title, id: p.id, updated_at: p.updated_at, is_published: p.is_published })),
    }));
  }, [categories, pages]);

  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke("manage-users", {
        body: { action: "list" },
      });
      if (error) {
        const context = (error as any).context;
        if (context && typeof context.json === "function") {
          try {
            const body = await context.json();
            throw new Error(body.error || error.message);
          } catch (e) {
            if (e instanceof Error && e.message !== error.message) throw e;
          }
        }
        throw error;
      }
      return data.users as ManagedUser[];
    },
  });

  const createUserMutation = useMutation({
    mutationFn: async ({ email, password, role }: { email: string; password: string; role: string }) => {
      const { data, error } = await supabase.functions.invoke("manage-users", {
        body: { action: "create", email, password, role },
      });
      if (error) {
        const context = (error as any).context;
        if (context && typeof context.json === "function") {
          try {
            const body = await context.json();
            throw new Error(body.error || error.message);
          } catch (e) {
            if (e instanceof Error && e.message !== error.message) throw e;
          }
        }
        throw error;
      }
      if (data.error) throw new Error(data.error);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      setCreateDialogOpen(false);
      setNewEmail("");
      setNewPassword("");
      setNewRole("viewer");
      toast({ title: "User created", description: "The user account has been created." });
    },
    onError: (error: Error) => {
      toast({ title: "Failed to create user", description: error.message, variant: "destructive" });
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: async (userId: string) => {
      const { data, error } = await supabase.functions.invoke("manage-users", {
        body: { action: "delete", userId },
      });
      if (error) {
        const context = (error as any).context;
        if (context && typeof context.json === "function") {
          try {
            const body = await context.json();
            throw new Error(body.error || error.message);
          } catch (e) {
            if (e instanceof Error && e.message !== error.message) throw e;
          }
        }
        throw error;
      }
      if (data.error) throw new Error(data.error);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      toast({ title: "User deleted", description: "The user account has been removed." });
    },
    onError: (error: Error) => {
      toast({ title: "Failed to delete user", description: error.message, variant: "destructive" });
    },
  });

  const createPageMutation = useMutation({
    mutationFn: async (params: { title: string; slug: string; category_id: string; description: string }) => {
      const maxSort = pages?.filter((p) => p.category_id === params.category_id)
        .reduce((max, p) => Math.max(max, p.sort_order ?? 0), 0) ?? 0;
      const { error } = await supabase.from("pages").insert({
        title: params.title,
        slug: params.slug,
        description: params.description || null,
        category_id: params.category_id,
        sort_order: maxSort + 1,
        is_published: true,
      });
      if (error) throw error;
      return params.slug;
    },
    onSuccess: (slug) => {
      queryClient.invalidateQueries({ queryKey: ["admin-pages"] });
      queryClient.invalidateQueries({ queryKey: ["navigation"] });
      setCreatePageOpen(false);
      setNewPageTitle("");
      setNewPageSlug("");
      setNewPageCategory("");
      setNewPageDescription("");
      toast({ title: "Page created" });
      navigate(`/admin/edit/${slug}`);
    },
    onError: (error: Error) => {
      toast({ title: "Failed to create page", description: error.message, variant: "destructive" });
    },
  });

  const deletePageMutation = useMutation({
    mutationFn: async (pageId: string) => {
      const { error } = await supabase.from("pages").delete().eq("id", pageId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-pages"] });
      queryClient.invalidateQueries({ queryKey: ["navigation"] });
      toast({ title: "Page deleted" });
    },
    onError: (error: Error) => {
      toast({ title: "Failed to delete page", description: error.message, variant: "destructive" });
    },
  });

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    createUserMutation.mutate({ email: newEmail, password: newPassword, role: newRole });
  };

  const handleCreatePage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPageCategory) return;
    createPageMutation.mutate({
      title: newPageTitle,
      slug: newPageSlug,
      category_id: newPageCategory,
      description: newPageDescription,
    });
  };

  const totalPages = pages?.length ?? pageGroups.reduce((acc, g) => acc + g.pages.length, 0);
  const publishedPages = pages?.filter((p) => p.is_published).length ?? 0;

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage all page content from here
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Pages</CardDescription>
              <CardTitle className="text-4xl">{totalPages}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Published</CardDescription>
              <CardTitle className="text-4xl text-green-600">{publishedPages}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Drafts</CardDescription>
              <CardTitle className="text-4xl text-amber-600">{totalPages - publishedPages}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* User Management */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold text-foreground">User Management</h2>
            </div>
            <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Create User
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New User</DialogTitle>
                  <DialogDescription>
                    Create a new user account. The user will be able to sign in immediately.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateUser}>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-email">Email</Label>
                      <Input
                        id="new-email"
                        type="email"
                        placeholder="user@example.com"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="Minimum 6 characters"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        minLength={6}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-role">Role</Label>
                      <Select value={newRole} onValueChange={setNewRole}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="viewer">Viewer</SelectItem>
                          <SelectItem value="editor">Editor</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" disabled={createUserMutation.isPending}>
                      {createUserMutation.isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        "Create User"
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Sign In</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usersLoading ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                      </TableCell>
                    </TableRow>
                  ) : users && users.length > 0 ? (
                    users.map((u) => (
                      <TableRow key={u.id}>
                        <TableCell className="font-medium">{u.email}</TableCell>
                        <TableCell>
                          <Badge variant={u.role === "admin" ? "default" : "secondary"}>
                            {u.role}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(u.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {u.last_sign_in_at
                            ? new Date(u.last_sign_in_at).toLocaleDateString()
                            : "Never"}
                        </TableCell>
                        <TableCell>
                          {u.id !== currentUser?.id && (
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete user?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will permanently delete the account for {u.email}. This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => deleteUserMutation.mutate(u.id)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        No users found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Page Groups */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Pages</h2>
            <Dialog open={createPageOpen} onOpenChange={setCreatePageOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Page
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Page</DialogTitle>
                  <DialogDescription>
                    Add a new page to the knowledge base.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreatePage}>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select value={newPageCategory} onValueChange={(v) => {
                        setNewPageCategory(v);
                        const cat = categories?.find((c) => c.id === v);
                        if (cat && newPageTitle) {
                          setNewPageSlug(generateSlug(newPageTitle, cat.slug));
                        }
                      }}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          {categories?.map((c) => (
                            <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        placeholder="Page title"
                        value={newPageTitle}
                        onChange={(e) => {
                          setNewPageTitle(e.target.value);
                          const cat = categories?.find((c) => c.id === newPageCategory);
                          if (cat) {
                            setNewPageSlug(generateSlug(e.target.value, cat.slug));
                          }
                        }}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Slug</Label>
                      <Input
                        placeholder="category/page-slug"
                        value={newPageSlug}
                        onChange={(e) => setNewPageSlug(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">URL path for this page</p>
                    </div>
                    <div className="space-y-2">
                      <Label>Description (optional)</Label>
                      <Textarea
                        placeholder="Brief description of this page"
                        value={newPageDescription}
                        onChange={(e) => setNewPageDescription(e.target.value)}
                        rows={2}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" disabled={createPageMutation.isPending || !newPageCategory}>
                      {createPageMutation.isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        "Create Page"
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {pageGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-medium text-foreground mb-4">{group.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.pages.map((page: any) => {
                  const dbPage = pages?.find((p) => p.slug === page.slug);
                  const status = dbPage ? (dbPage.is_published ? "published" : "draft") : "draft";
                  return (
                    <Card key={page.slug} className="group hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <CardTitle className="text-base">{page.title}</CardTitle>
                          </div>
                          <Badge variant={status === "published" ? "default" : "secondary"}>
                            {status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          {(dbPage || page.updated_at) && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {new Date((dbPage?.updated_at || page.updated_at)).toLocaleDateString()}
                            </div>
                          )}
                          <div className="flex items-center gap-1 ml-auto">
                            <Link to={`/admin/edit/${page.slug}`}>
                              <Button size="sm" variant="ghost">
                                <Edit2 className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                            </Link>
                            {dbPage && (
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete page?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will permanently delete "{page.title}" and all its sections, sources, and version history. This cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => deletePageMutation.mutate(dbPage.id)}
                                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

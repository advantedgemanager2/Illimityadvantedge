import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GripVertical, Save, Loader2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import DynamicIcon from "@/components/docs/DynamicIcon";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";

interface CategoryWithPages {
  id: string;
  name: string;
  slug: string;
  icon: string;
  sort_order: number;
  pages: {
    id: string;
    title: string;
    slug: string;
    sort_order: number;
  }[];
}

function SortableCategory({
  category,
  onPagesReorder,
}: {
  category: CategoryWithPages;
  onPagesReorder: (categoryId: string, pages: CategoryWithPages["pages"]) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: category.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handlePageDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = category.pages.findIndex((p) => p.id === active.id);
    const newIndex = category.pages.findIndex((p) => p.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const reordered = arrayMove(category.pages, oldIndex, newIndex).map((p, i) => ({
      ...p,
      sort_order: i,
    }));
    onPagesReorder(category.id, reordered);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn("mb-6", isDragging && "opacity-50")}
    >
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <button
              className="cursor-grab active:cursor-grabbing touch-none text-muted-foreground hover:text-foreground"
              {...attributes}
              {...listeners}
              aria-label={`Drag to reorder ${category.name}`}
            >
              <GripVertical className="h-5 w-5" />
            </button>
            <DynamicIcon name={category.icon} className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg">{category.name}</CardTitle>
            <span className="text-xs text-muted-foreground ml-auto">
              {category.pages.length} page{category.pages.length !== 1 ? "s" : ""}
            </span>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handlePageDragEnd}
          >
            <SortableContext
              items={category.pages.map((p) => p.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-1">
                {category.pages.map((page) => (
                  <SortablePage key={page.id} page={page} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </CardContent>
      </Card>
    </div>
  );
}

function SortablePage({ page }: { page: CategoryWithPages["pages"][number] }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: page.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md border border-border bg-background",
        isDragging && "opacity-50 shadow-lg"
      )}
    >
      <button
        className="cursor-grab active:cursor-grabbing touch-none text-muted-foreground hover:text-foreground"
        {...attributes}
        {...listeners}
        aria-label={`Drag to reorder ${page.title}`}
      >
        <GripVertical className="h-4 w-4" />
      </button>
      <span className="text-sm">{page.title}</span>
      <span className="text-xs text-muted-foreground ml-auto font-mono">
        /{page.slug}
      </span>
    </div>
  );
}

export default function ReorderPages() {
  const queryClient = useQueryClient();

  const { data: initialData, isLoading } = useQuery({
    queryKey: ["admin-reorder"],
    queryFn: async (): Promise<CategoryWithPages[]> => {
      const { data, error } = await supabase
        .from("page_categories")
        .select(`
          id, name, slug, icon, sort_order,
          pages(id, title, slug, sort_order)
        `)
        .order("sort_order");
      if (error) throw error;

      return (data || []).map((cat) => ({
        ...cat,
        sort_order: cat.sort_order ?? 0,
        pages: ((cat.pages as CategoryWithPages["pages"]) || [])
          .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)),
      }));
    },
  });

  const [categories, setCategories] = useState<CategoryWithPages[] | null>(null);

  // Use local state if user has made changes, otherwise use fetched data
  const displayCategories = categories ?? initialData;

  // Track whether there are unsaved changes
  const hasChanges = categories !== null;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleCategoryDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id || !displayCategories) return;

    const oldIndex = displayCategories.findIndex((c) => c.id === active.id);
    const newIndex = displayCategories.findIndex((c) => c.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const reordered = arrayMove(displayCategories, oldIndex, newIndex).map((c, i) => ({
      ...c,
      sort_order: i,
    }));
    setCategories(reordered);
  };

  const handlePagesReorder = useCallback(
    (categoryId: string, newPages: CategoryWithPages["pages"]) => {
      setCategories((prev) => {
        const base = prev ?? initialData;
        if (!base) return prev;
        return base.map((cat) =>
          cat.id === categoryId ? { ...cat, pages: newPages } : cat
        );
      });
    },
    [initialData]
  );

  const saveMutation = useMutation({
    mutationFn: async (data: CategoryWithPages[]) => {
      // Update category sort_order values
      const categoryUpdates = data.map((cat, i) =>
        supabase
          .from("page_categories")
          .update({ sort_order: i })
          .eq("id", cat.id)
      );

      // Update page sort_order values within each category
      const pageUpdates = data.flatMap((cat) =>
        cat.pages.map((page, i) =>
          supabase
            .from("pages")
            .update({ sort_order: i })
            .eq("id", page.id)
        )
      );

      const results = await Promise.all([...categoryUpdates, ...pageUpdates]);
      const errors = results.filter((r) => r.error);
      if (errors.length > 0) {
        throw new Error(errors.map((e) => e.error!.message).join(", "));
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-reorder"] });
      queryClient.invalidateQueries({ queryKey: ["navigation"] });
      queryClient.invalidateQueries({ queryKey: ["admin-pages"] });
      queryClient.invalidateQueries({ queryKey: ["admin-categories"] });
      setCategories(null);
      toast({ title: "Order saved", description: "Sidebar order has been updated." });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to save order",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSave = () => {
    if (!displayCategories) return;
    saveMutation.mutate(displayCategories);
  };

  const handleReset = () => {
    setCategories(null);
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/admin">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">Reorder Pages</h1>
            <p className="text-muted-foreground mt-1">
              Drag and drop to reorder categories and pages in the sidebar
            </p>
          </div>
          <div className="flex items-center gap-2">
            {hasChanges && (
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
            )}
            <Button
              onClick={handleSave}
              disabled={!hasChanges || saveMutation.isPending}
            >
              {saveMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Order
                </>
              )}
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : displayCategories && displayCategories.length > 0 ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleCategoryDragEnd}
          >
            <SortableContext
              items={displayCategories.map((c) => c.id)}
              strategy={verticalListSortingStrategy}
            >
              {displayCategories.map((category) => (
                <SortableCategory
                  key={category.id}
                  category={category}
                  onPagesReorder={handlePagesReorder}
                />
              ))}
            </SortableContext>
          </DndContext>
        ) : (
          <p className="text-muted-foreground text-center py-12">
            No categories found in the database.
          </p>
        )}
      </div>
    </AdminLayout>
  );
}

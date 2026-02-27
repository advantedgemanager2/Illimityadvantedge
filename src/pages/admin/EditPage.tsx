import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Loader2, Save, Plus, Trash2, ArrowLeft, ExternalLink, GripVertical, Undo2, Redo2, Check, Clock, History, RotateCcw, Copy, ClipboardPaste, X } from "lucide-react";
import ImageUploader from "@/components/admin/ImageUploader";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useUndoRedo } from "@/hooks/useUndoRedo";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Json } from "@/integrations/supabase/types";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface PageSection {
  id?: string;
  section_id: string;
  section_type: string;
  title: string;
  content: Json;
  sort_order: number;
}

const sectionTypes = [
  { value: "heading", label: "Heading" },
  { value: "paragraph", label: "Paragraph" },
  { value: "callout", label: "Callout" },
  { value: "list", label: "List" },
  { value: "accordion", label: "Accordion" },
  { value: "table", label: "Table" },
  { value: "blockquote", label: "Blockquote" },
  { value: "diagram", label: "Diagram/Infographic" },
  { value: "card_grid", label: "Card Grid" },
  { value: "kpi_metric", label: "KPI / Metric Boxes" },
  { value: "image_media", label: "Image / Media" },
  { value: "cta_button", label: "CTA Button" },
];

const diagramTypes = [
  { value: "BaselPillarsDiagram", label: "Basel Pillars Diagram" },
  { value: "TransitionPlanDiagram", label: "Transition Plan Diagram" },
  { value: "CarbonLockInDiagram", label: "Carbon Lock-In Diagram" },
  { value: "StrategyDecisionPlanDiagram", label: "Strategy Decision Plan Diagram" },
];

interface PageSource {
  id?: string;
  source_id: string;
  source_number: number;
  title: string;
  author: string;
  year: string;
  url: string;
}

interface SortableSectionCardProps {
  section: PageSection;
  index: number;
  sectionTypes: { value: string; label: string }[];
  updateSection: (index: number, updates: Partial<PageSection>) => void;
  removeSection: (index: number) => void;
  copySection: (index: number) => void;
  renderSectionEditor: (section: PageSection, index: number) => React.ReactNode;
}

function SortableSectionCard({
  section,
  index,
  sectionTypes,
  updateSection,
  removeSection,
  copySection,
  renderSectionEditor,
}: SortableSectionCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: section.section_id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card ref={setNodeRef} style={style} className={isDragging ? "ring-2 ring-primary" : ""}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4">
          <button
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-1 hover:bg-muted rounded"
            type="button"
          >
            <GripVertical className="h-5 w-5 text-muted-foreground" />
          </button>
          <Input
            value={section.title}
            onChange={(e) => updateSection(index, { title: e.target.value })}
            placeholder="Section title (optional)"
            className="flex-1"
          />
          <Select
            value={section.section_type}
            onValueChange={(v) => updateSection(index, { section_type: v, content: {} })}
          >
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sectionTypes.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => copySection(index)}
            title="Copy section"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeSection(index)}
            className="text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>{renderSectionEditor(section, index)}</CardContent>
    </Card>
  );
}

interface SortableSourceCardProps {
  source: PageSource;
  index: number;
  updateSource: (index: number, updates: Partial<PageSource>) => void;
  removeSource: (index: number) => void;
}

function SortableSourceCard({
  source,
  index,
  updateSource,
  removeSource,
}: SortableSourceCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: source.source_id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card ref={setNodeRef} style={style} className={isDragging ? "ring-2 ring-primary" : ""}>
      <CardContent className="pt-4">
        <div className="flex items-start gap-4">
          <button
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-1 hover:bg-muted rounded mt-1"
            type="button"
          >
            <GripVertical className="h-5 w-5 text-muted-foreground" />
          </button>
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center mt-1">
            {index + 1}
          </span>
          <div className="flex-1 space-y-3">
            <Input
              value={source.title}
              onChange={(e) => updateSource(index, { title: e.target.value })}
              placeholder="Source title (required)"
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                value={source.author}
                onChange={(e) => updateSource(index, { author: e.target.value })}
                placeholder="Author"
              />
              <Input
                value={source.year}
                onChange={(e) => updateSource(index, { year: e.target.value })}
                placeholder="Year"
              />
            </div>
            <Input
              value={source.url}
              onChange={(e) => updateSource(index, { url: e.target.value })}
              placeholder="URL (optional)"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeSource(index)}
            className="text-destructive mt-1"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface HistoryState {
  sections: PageSection[];
  sources: PageSource[];
}

interface SavedState {
  title: string;
  description: string;
  sections: PageSection[];
  sources: PageSource[];
}

interface LocalBackup {
  title: string;
  description: string;
  sections: PageSection[];
  sources: PageSource[];
  timestamp: number;
}

interface PageVersion {
  id: string;
  page_id: string;
  title: string;
  description: string | null;
  sections_snapshot: PageSection[];
  sources_snapshot: PageSource[];
  created_at: string;
  created_by: string | null;
}

const AUTOSAVE_INTERVAL = 30000; // 30 seconds

export default function EditPage() {
  const { "*": slug } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState<PageSection[]>([]);
  const [sources, setSources] = useState<PageSource[]>([]);
  
  // Autosave state
  const [lastSavedState, setLastSavedState] = useState<SavedState | null>(null);
  const [lastSaveTime, setLastSaveTime] = useState<Date | null>(null);
  const [showRestoreDialog, setShowRestoreDialog] = useState(false);
  const [localBackup, setLocalBackup] = useState<LocalBackup | null>(null);
  const [showVersionHistory, setShowVersionHistory] = useState(false);
  const [versionToRestore, setVersionToRestore] = useState<PageVersion | null>(null);
  const [copiedSection, setCopiedSection] = useState<PageSection | null>(null);
  const localStorageKey = `page-draft-${slug}`;
  const localBackupTimer = useRef<NodeJS.Timeout | null>(null);
  
  // Undo/Redo history
  const {
    current: historyState,
    push: pushHistory,
    undo,
    redo,
    reset: resetHistory,
    canUndo,
    canRedo,
    isUndoRedo,
  } = useUndoRedo<HistoryState>({ sections: [], sources: [] });

  // Debounce timer for text changes
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  
  // Track unsaved changes
  const hasUnsavedChanges = useMemo(() => {
    if (!lastSavedState) return false;
    return (
      title !== lastSavedState.title ||
      description !== lastSavedState.description ||
      JSON.stringify(sections) !== JSON.stringify(lastSavedState.sections) ||
      JSON.stringify(sources) !== JSON.stringify(lastSavedState.sources)
    );
  }, [title, description, sections, sources, lastSavedState]);

  // Sync state from history when undo/redo occurs
  useEffect(() => {
    if (isUndoRedo()) {
      setSections(historyState.sections);
      setSources(historyState.sources);
    }
  }, [historyState, isUndoRedo]);

  // Push to history with debouncing for text changes
  const pushToHistory = useCallback((newSections: PageSection[], newSources: PageSource[], immediate = false) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    
    if (immediate) {
      pushHistory({ sections: newSections, sources: newSources });
    } else {
      debounceTimer.current = setTimeout(() => {
        pushHistory({ sections: newSections, sources: newSources });
      }, 500);
    }
  }, [pushHistory]);

  // Keyboard shortcuts for undo/redo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modifier = isMac ? e.metaKey : e.ctrlKey;
      
      if (modifier && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        if (canUndo) undo();
      }
      if (modifier && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        if (canRedo) redo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canUndo, canRedo, undo, redo]);

  // Fetch existing page data
  const { data: pageData, isLoading } = useQuery({
    queryKey: ["admin-page", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pages")
        .select(`*, page_sections(*), page_sources(*)`)
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
  
  // Fetch version history
  const { data: versions, refetch: refetchVersions } = useQuery({
    queryKey: ["page-versions", pageData?.id],
    queryFn: async () => {
      if (!pageData?.id) return [];
      const { data, error } = await supabase
        .from("page_versions")
        .select("*")
        .eq("page_id", pageData.id)
        .order("created_at", { ascending: false })
        .limit(50);
      if (error) throw error;
      // Map database response to PageVersion type
      return (data || []).map(v => ({
        ...v,
        sections_snapshot: v.sections_snapshot as unknown as PageSection[],
        sources_snapshot: v.sources_snapshot as unknown as PageSource[],
      })) as PageVersion[];
    },
    enabled: !!pageData?.id,
  });

  useEffect(() => {
    if (pageData) {
      const newTitle = pageData.title;
      const newDescription = pageData.description || "";
      setTitle(newTitle);
      setDescription(newDescription);
      const sortedSections = (pageData.page_sections || [])
        .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
        .map((s) => ({
          id: s.id,
          section_id: s.section_id,
          section_type: s.section_type,
          title: s.title || "",
          content: s.content,
          sort_order: s.sort_order || 0,
        }));
      setSections(sortedSections);

      // Load sources
      const sortedSources = (pageData.page_sources || [])
        .sort((a, b) => (a.source_number || 0) - (b.source_number || 0))
        .map((s) => ({
          id: s.id,
          source_id: s.id || `source-${s.source_number}`,
          source_number: s.source_number,
          title: s.title,
          author: s.author || "",
          year: s.year || "",
          url: s.url || "",
        }));
      setSources(sortedSources);

      // Set saved state to match DB data so unsaved changes tracking works correctly
      setLastSavedState({ title: newTitle, description: newDescription, sections: sortedSections, sources: sortedSources });

      // Initialize history
      resetHistory({ sections: sortedSections, sources: sortedSources });
    } else if (!isLoading && slug) {
      const defaultTitle = slug
        .split("/")
        .pop()
        ?.split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ") || "";
      setTitle(defaultTitle);
    }
  }, [pageData, isLoading, slug]);

  // Save mutation
  const saveMutation = useMutation({
    mutationFn: async (isAutosave: boolean = false) => {
      const { data: page, error: pageError } = await supabase
        .from("pages")
        .upsert(
          {
            slug: slug!,
            title,
            description,
            last_updated: new Date().toISOString().split("T")[0],
          },
          { onConflict: "slug" }
        )
        .select()
        .single();

      if (pageError) throw pageError;

      // Save sections
      await supabase.from("page_sections").delete().eq("page_id", page.id);

      if (sections.length > 0) {
        const sectionsToInsert = sections.map((s, idx) => ({
          page_id: page.id,
          section_id: s.section_id || `section-${idx}`,
          section_type: s.section_type,
          title: s.title,
          content: s.content,
          sort_order: idx,
        }));
        const { error: sectionsError } = await supabase.from("page_sections").insert(sectionsToInsert);
        if (sectionsError) throw sectionsError;
      }

      // Save sources
      await supabase.from("page_sources").delete().eq("page_id", page.id);

      if (sources.length > 0) {
        const sourcesToInsert = sources.map((s, idx) => ({
          page_id: page.id,
          source_number: idx + 1,
          title: s.title,
          author: s.author || null,
          year: s.year || null,
          url: s.url || null,
        }));
        const { error: sourcesError } = await supabase.from("page_sources").insert(sourcesToInsert);
        if (sourcesError) throw sourcesError;
      }
      
      // Create version snapshot (only for manual saves, not autosaves)
      if (!isAutosave) {
        const { data: userData } = await supabase.auth.getUser();
        await supabase.from("page_versions").insert({
          page_id: page.id,
          title,
          description,
          sections_snapshot: sections as unknown as Json,
          sources_snapshot: sources as unknown as Json,
          created_by: userData.user?.id || null,
        });
      }

      return { page, isAutosave };
    },
    onSuccess: (result) => {
      setLastSaveTime(new Date());

      // Clear localStorage backup after successful save
      localStorage.removeItem(localStorageKey);

      // Re-fetch page data — the useEffect on pageData will update lastSavedState
      // to match the DB state (with correct IDs), keeping hasUnsavedChanges accurate
      queryClient.invalidateQueries({ queryKey: ["admin-page", slug] });
      queryClient.invalidateQueries({ queryKey: ["admin-pages"] });

      if (!result.isAutosave) {
        refetchVersions();
        toast({ title: "Saved", description: "Page content has been saved." });
      }
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  // Restore a version
  const restoreVersion = useCallback((version: PageVersion) => {
    setTitle(version.title);
    setDescription(version.description || "");
    setSections(version.sections_snapshot);
    setSources(version.sources_snapshot);
    resetHistory({ sections: version.sections_snapshot, sources: version.sources_snapshot });
    setVersionToRestore(null);
    setShowVersionHistory(false);
    toast({ 
      title: "Version restored", 
      description: "The page has been restored to the selected version. Don't forget to save your changes." 
    });
  }, [resetHistory]);
  
  // Autosave interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (hasUnsavedChanges && !saveMutation.isPending) {
        saveMutation.mutate(true);
      }
    }, AUTOSAVE_INTERVAL);
    
    return () => clearInterval(interval);
  }, [hasUnsavedChanges, saveMutation.isPending]);
  
  // localStorage backup (debounced)
  useEffect(() => {
    if (!slug || !lastSavedState) return;
    
    if (localBackupTimer.current) {
      clearTimeout(localBackupTimer.current);
    }
    
    localBackupTimer.current = setTimeout(() => {
      if (hasUnsavedChanges) {
        const backup: LocalBackup = {
          title,
          description,
          sections,
          sources,
          timestamp: Date.now(),
        };
        localStorage.setItem(localStorageKey, JSON.stringify(backup));
      }
    }, 1000);
    
    return () => {
      if (localBackupTimer.current) {
        clearTimeout(localBackupTimer.current);
      }
    };
  }, [title, description, sections, sources, hasUnsavedChanges, localStorageKey, slug, lastSavedState]);
  
  // Check for localStorage backup on page load — only show if backup differs from DB data
  useEffect(() => {
    if (!slug || !pageData) return;

    const backupStr = localStorage.getItem(localStorageKey);
    if (backupStr) {
      try {
        const backup: LocalBackup = JSON.parse(backupStr);
        // Only offer restore if backup content differs from what's in the DB
        const dbTitle = pageData.title;
        const dbDescription = pageData.description || "";
        if (backup.title !== dbTitle || backup.description !== dbDescription) {
          setLocalBackup(backup);
          setShowRestoreDialog(true);
        } else {
          // Backup matches DB — discard it
          localStorage.removeItem(localStorageKey);
        }
      } catch {
        localStorage.removeItem(localStorageKey);
      }
    }
  }, [slug, localStorageKey, pageData]);
  
  // Warn before leaving with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);
  
  // Restore draft from localStorage
  const restoreDraft = useCallback(() => {
    if (localBackup) {
      setTitle(localBackup.title);
      setDescription(localBackup.description);
      setSections(localBackup.sections);
      setSources(localBackup.sources);
      resetHistory({ sections: localBackup.sections, sources: localBackup.sources });
      toast({ title: "Draft restored", description: "Your unsaved changes have been restored." });
    }
    setShowRestoreDialog(false);
    setLocalBackup(null);
  }, [localBackup, resetHistory]);
  
  // Discard draft from localStorage
  const discardDraft = useCallback(() => {
    localStorage.removeItem(localStorageKey);
    setShowRestoreDialog(false);
    setLocalBackup(null);
  }, [localStorageKey]);

  // Copy section to clipboard
  const copySection = useCallback((index: number) => {
    setCopiedSection(sections[index]);
    toast({ 
      title: "Section copied", 
      description: "Click 'Paste here' to insert a copy." 
    });
  }, [sections]);

  // Paste section at specific index
  const pasteSection = useCallback((atIndex: number) => {
    if (!copiedSection) return;
    
    const newSection: PageSection = {
      ...copiedSection,
      section_id: `section-${Date.now()}`,
      id: undefined, // Remove database ID so it creates a new record
    };
    
    const newSections = [
      ...sections.slice(0, atIndex),
      newSection,
      ...sections.slice(atIndex),
    ];
    
    setSections(newSections);
    pushToHistory(newSections, sources, true);
    toast({ title: "Section pasted" });
  }, [copiedSection, sections, sources, pushToHistory]);
  
  // Format relative time
  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    
    if (diffSec < 10) return "just now";
    if (diffSec < 60) return `${diffSec}s ago`;
    if (diffMin < 60) return `${diffMin}m ago`;
    return date.toLocaleTimeString();
  };
  
  // Format backup timestamp
  const formatBackupTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };
  
  // Format version date
  const formatVersionDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMin = Math.floor(diffMs / (1000 * 60));
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    
    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return `${diffMin} min ago`;
    if (diffHour < 24) return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
    if (diffDay < 7) return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString(undefined, { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  const addSection = () => {
    const newSection: PageSection = {
      section_id: `section-${Date.now()}`,
      section_type: "paragraph",
      title: "",
      content: { text: "" },
      sort_order: sections.length,
    };
    const newSections = [...sections, newSection];
    setSections(newSections);
    pushToHistory(newSections, sources, true);
  };

  const updateSection = (index: number, updates: Partial<PageSection>) => {
    const newSections = [...sections];
    newSections[index] = { ...newSections[index], ...updates };
    setSections(newSections);
    // Debounce for text changes, immediate for structural changes
    const isStructural = 'section_type' in updates;
    pushToHistory(newSections, sources, isStructural);
  };

  const removeSection = (index: number) => {
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
    pushToHistory(newSections, sources, true);
  };

  // Source management
  const addSource = () => {
    const newSource: PageSource = {
      source_id: `source-${Date.now()}`,
      source_number: sources.length + 1,
      title: "",
      author: "",
      year: "",
      url: "",
    };
    const newSources = [...sources, newSource];
    setSources(newSources);
    pushToHistory(sections, newSources, true);
  };

  const updateSource = (index: number, updates: Partial<PageSource>) => {
    const newSources = [...sources];
    newSources[index] = { ...newSources[index], ...updates };
    setSources(newSources);
    pushToHistory(sections, newSources, false);
  };

  const removeSource = (index: number) => {
    const newSources = sources.filter((_, i) => i !== index);
    setSources(newSources);
    pushToHistory(sections, newSources, true);
  };

  const getContentValue = (content: Json, key: string): string => {
    if (content && typeof content === "object" && !Array.isArray(content)) {
      return ((content as Record<string, unknown>)[key] as string) || "";
    }
    return "";
  };

  const getContentItems = (content: Json): string[] => {
    if (content && typeof content === "object" && !Array.isArray(content)) {
      return ((content as Record<string, unknown>).items as string[]) || [];
    }
    return [];
  };

  const renderSectionEditor = (section: PageSection, index: number) => {
    const content = section.content || {};

    switch (section.section_type) {
      case "heading":
      case "paragraph":
        return (
          <Textarea
            placeholder={section.section_type === "heading" ? "Heading text..." : "Paragraph content..."}
            value={getContentValue(content, "text")}
            onChange={(e) =>
              updateSection(index, { content: { ...(content as object), text: e.target.value } })
            }
            rows={section.section_type === "heading" ? 2 : 5}
          />
        );
      case "callout":
        return (
          <div className="space-y-2">
            <Select
              value={getContentValue(content, "type") || "info"}
              onValueChange={(v) => updateSection(index, { content: { ...(content as object), type: v } })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Callout type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="tip">Tip</SelectItem>
                <SelectItem value="important">Important</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Callout title (optional, defaults to type label)"
              value={getContentValue(content, "title")}
              onChange={(e) =>
                updateSection(index, { content: { ...(content as object), title: e.target.value } })
              }
            />
            <Textarea
              placeholder="Callout content..."
              value={getContentValue(content, "text")}
              onChange={(e) =>
                updateSection(index, { content: { ...(content as object), text: e.target.value } })
              }
              rows={3}
            />
          </div>
        );
      case "list":
        return (
          <div className="space-y-2">
            <Select
              value={getContentValue(content, "listType") || "bullet"}
              onValueChange={(v) => updateSection(index, { content: { ...(content as object), listType: v } })}
            >
              <SelectTrigger>
                <SelectValue placeholder="List type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bullet">Bullet</SelectItem>
                <SelectItem value="number">Numbered</SelectItem>
                <SelectItem value="check">Check</SelectItem>
                <SelectItem value="arrow">Arrow</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="One item per line..."
              value={getContentItems(content).join("\n")}
              onChange={(e) =>
                updateSection(index, {
                  content: { ...(content as object), items: e.target.value.split("\n").filter(Boolean) },
                })
              }
              rows={5}
            />
          </div>
        );
      case "accordion":
        return (
          <Textarea
            placeholder='JSON format: [{"title": "...", "content": "..."}]'
            value={JSON.stringify(getContentItems(content), null, 2)}
            onChange={(e) => {
              try {
                const items = JSON.parse(e.target.value);
                updateSection(index, { content: { ...(content as object), items } });
              } catch {
                // Allow invalid JSON while typing
              }
            }}
            rows={6}
            className="font-mono text-sm"
          />
        );
      case "table":
        return (
          <Textarea
            placeholder='JSON format: {"headers": [...], "rows": [[...], [...]]}'
            value={JSON.stringify(content, null, 2)}
            onChange={(e) => {
              try {
                const data = JSON.parse(e.target.value);
                updateSection(index, { content: data });
              } catch {
                // Allow invalid JSON while typing
              }
            }}
            rows={6}
            className="font-mono text-sm"
          />
        );
      case "blockquote":
        return (
          <div className="space-y-2">
            <Textarea
              placeholder="Quote text..."
              value={getContentValue(content, "text")}
              onChange={(e) =>
                updateSection(index, { content: { ...(content as object), text: e.target.value } })
              }
              rows={3}
            />
            <Input
              placeholder="Citation author (e.g., European Commission)"
              value={getContentValue(content, "author")}
              onChange={(e) =>
                updateSection(index, { content: { ...(content as object), author: e.target.value } })
              }
            />
          </div>
        );
      case "diagram":
        return (
          <Select
            value={getContentValue(content, "diagramType") || ""}
            onValueChange={(v) => updateSection(index, { content: { diagramType: v } })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select diagram type" />
            </SelectTrigger>
            <SelectContent>
              {diagramTypes.map((d) => (
                <SelectItem key={d.value} value={d.value}>
                  {d.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "card_grid": {
        const cards = ((content as Record<string, unknown>)?.cards as Array<Record<string, string>>) || [];
        const gridColumns = ((content as Record<string, unknown>)?.columns as number) || 3;
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Label className="text-xs">Columns</Label>
              <Select value={String(gridColumns)} onValueChange={(v) =>
                updateSection(index, { content: { ...(content as object), columns: parseInt(v) } })
              }>
                <SelectTrigger className="w-20 h-8"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {cards.map((card, ci) => (
              <Card key={ci} className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">Card {ci + 1}</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-destructive" onClick={() => {
                    const next = [...cards]; next.splice(ci, 1);
                    updateSection(index, { content: { ...(content as object), cards: next } });
                  }}><X className="h-3 w-3" /></Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Icon (e.g. Factory)" className="h-8 text-sm" value={card.icon || ""} onChange={(e) => {
                    const next = [...cards]; next[ci] = { ...next[ci], icon: e.target.value };
                    updateSection(index, { content: { ...(content as object), cards: next } });
                  }} />
                  <Input placeholder="Title" className="h-8 text-sm" value={card.title || ""} onChange={(e) => {
                    const next = [...cards]; next[ci] = { ...next[ci], title: e.target.value };
                    updateSection(index, { content: { ...(content as object), cards: next } });
                  }} />
                </div>
                <Textarea placeholder="Description" rows={2} className="text-sm" value={card.description || ""} onChange={(e) => {
                  const next = [...cards]; next[ci] = { ...next[ci], description: e.target.value };
                  updateSection(index, { content: { ...(content as object), cards: next } });
                }} />
                <Select value={card.color || ""} onValueChange={(v) => {
                  const next = [...cards]; next[ci] = { ...next[ci], color: v };
                  updateSection(index, { content: { ...(content as object), cards: next } });
                }}>
                  <SelectTrigger className="w-32 h-8"><SelectValue placeholder="Color" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary">Primary</SelectItem>
                    <SelectItem value="emerald">Emerald</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="amber">Amber</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="purple">Purple</SelectItem>
                  </SelectContent>
                </Select>
              </Card>
            ))}
            <Button variant="outline" size="sm" onClick={() => {
              const next = [...cards, { icon: "", title: "", description: "", color: "" }];
              updateSection(index, { content: { ...(content as object), cards: next } });
            }}><Plus className="h-3 w-3 mr-1" /> Add Card</Button>
          </div>
        );
      }
      case "kpi_metric": {
        const metrics = ((content as Record<string, unknown>)?.metrics as Array<Record<string, string>>) || [];
        const kpiColumns = ((content as Record<string, unknown>)?.columns as number) || 3;
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Label className="text-xs">Columns</Label>
              <Select value={String(kpiColumns)} onValueChange={(v) =>
                updateSection(index, { content: { ...(content as object), columns: parseInt(v) } })
              }>
                <SelectTrigger className="w-20 h-8"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {metrics.map((metric, mi) => (
              <Card key={mi} className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">Metric {mi + 1}</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-destructive" onClick={() => {
                    const next = [...metrics]; next.splice(mi, 1);
                    updateSection(index, { content: { ...(content as object), metrics: next } });
                  }}><X className="h-3 w-3" /></Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Value (e.g. 23%)" className="h-8 text-sm" value={metric.value || ""} onChange={(e) => {
                    const next = [...metrics]; next[mi] = { ...next[mi], value: e.target.value };
                    updateSection(index, { content: { ...(content as object), metrics: next } });
                  }} />
                  <Input placeholder="Label" className="h-8 text-sm" value={metric.label || ""} onChange={(e) => {
                    const next = [...metrics]; next[mi] = { ...next[mi], label: e.target.value };
                    updateSection(index, { content: { ...(content as object), metrics: next } });
                  }} />
                </div>
                <Input placeholder="Description (optional)" className="h-8 text-sm" value={metric.description || ""} onChange={(e) => {
                  const next = [...metrics]; next[mi] = { ...next[mi], description: e.target.value };
                  updateSection(index, { content: { ...(content as object), metrics: next } });
                }} />
                <div className="grid grid-cols-3 gap-2">
                  <Select value={metric.trend || ""} onValueChange={(v) => {
                    const next = [...metrics]; next[mi] = { ...next[mi], trend: v };
                    updateSection(index, { content: { ...(content as object), metrics: next } });
                  }}>
                    <SelectTrigger className="h-8"><SelectValue placeholder="Trend" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="up">Up</SelectItem>
                      <SelectItem value="down">Down</SelectItem>
                      <SelectItem value="stable">Stable</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Trend label" className="h-8 text-sm" value={metric.trendLabel || ""} onChange={(e) => {
                    const next = [...metrics]; next[mi] = { ...next[mi], trendLabel: e.target.value };
                    updateSection(index, { content: { ...(content as object), metrics: next } });
                  }} />
                  <Select value={metric.color || ""} onValueChange={(v) => {
                    const next = [...metrics]; next[mi] = { ...next[mi], color: v };
                    updateSection(index, { content: { ...(content as object), metrics: next } });
                  }}>
                    <SelectTrigger className="h-8"><SelectValue placeholder="Color" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="amber">Amber</SelectItem>
                      <SelectItem value="primary">Primary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>
            ))}
            <Button variant="outline" size="sm" onClick={() => {
              const next = [...metrics, { value: "", label: "", description: "", trend: "", trendLabel: "", color: "" }];
              updateSection(index, { content: { ...(content as object), metrics: next } });
            }}><Plus className="h-3 w-3 mr-1" /> Add Metric</Button>
          </div>
        );
      }
      case "image_media": {
        const imgSrc = getContentValue(content, "src");
        return (
          <div className="space-y-3">
            {imgSrc ? (
              <div className="space-y-2">
                <img src={imgSrc} alt="" className="rounded-lg max-h-48 object-contain border border-border" />
                <Button variant="destructive" size="sm" onClick={() =>
                  updateSection(index, { content: { ...(content as object), src: "" } })
                }><Trash2 className="h-3 w-3 mr-1" /> Remove Image</Button>
              </div>
            ) : (
              <ImageUploader onUpload={(url) =>
                updateSection(index, { content: { ...(content as object), src: url } })
              } />
            )}
            <Input placeholder="Alt text (for accessibility)" value={getContentValue(content, "alt")} onChange={(e) =>
              updateSection(index, { content: { ...(content as object), alt: e.target.value } })
            } />
            <Input placeholder="Caption (optional)" value={getContentValue(content, "caption")} onChange={(e) =>
              updateSection(index, { content: { ...(content as object), caption: e.target.value } })
            } />
            <div className="grid grid-cols-2 gap-2">
              <Select value={getContentValue(content, "width") || "full"} onValueChange={(v) =>
                updateSection(index, { content: { ...(content as object), width: v } })
              }>
                <SelectTrigger className="h-8"><SelectValue placeholder="Width" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">Full</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="small">Small</SelectItem>
                </SelectContent>
              </Select>
              <Select value={getContentValue(content, "alignment") || "center"} onValueChange={(v) =>
                updateSection(index, { content: { ...(content as object), alignment: v } })
              }>
                <SelectTrigger className="h-8"><SelectValue placeholder="Alignment" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="left">Left</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="right">Right</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      }
      case "cta_button":
        return (
          <div className="space-y-3">
            <Input
              placeholder="Button text (e.g. Contact Us)"
              value={getContentValue(content, "buttonText")}
              onChange={(e) =>
                updateSection(index, { content: { ...(content as object), buttonText: e.target.value } })
              }
            />
            <div className="space-y-1">
              <Input
                placeholder="URL (leave empty for contact form, or enter https://...)"
                value={getContentValue(content, "url")}
                onChange={(e) =>
                  updateSection(index, { content: { ...(content as object), url: e.target.value } })
                }
              />
              {!getContentValue(content, "url") && (
                <p className="text-xs text-muted-foreground">Opens a contact form (name, email, role, message)</p>
              )}
            </div>
            <Textarea
              placeholder="Description text (shown next to or above the button)"
              value={getContentValue(content, "description")}
              onChange={(e) =>
                updateSection(index, { content: { ...(content as object), description: e.target.value } })
              }
              rows={2}
            />
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label className="text-xs mb-1 block">Placement</Label>
                <Select
                  value={getContentValue(content, "placement") || "inline"}
                  onValueChange={(v) =>
                    updateSection(index, { content: { ...(content as object), placement: v } })
                  }
                >
                  <SelectTrigger className="h-8"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inline">Bottom / Inline</SelectItem>
                    <SelectItem value="side">Side Panel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs mb-1 block">Style</Label>
                <Select
                  value={getContentValue(content, "variant") || "default"}
                  onValueChange={(v) =>
                    updateSection(index, { content: { ...(content as object), variant: v } })
                  }
                >
                  <SelectTrigger className="h-8"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Primary</SelectItem>
                    <SelectItem value="secondary">Secondary</SelectItem>
                    <SelectItem value="outline">Outline</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs mb-1 block">Size</Label>
                <Select
                  value={getContentValue(content, "size") || "default"}
                  onValueChange={(v) =>
                    updateSection(index, { content: { ...(content as object), size: v } })
                  }
                >
                  <SelectTrigger className="h-8"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sm">Small</SelectItem>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="lg">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <Textarea
            placeholder="Content..."
            value={getContentValue(content, "text")}
            onChange={(e) =>
              updateSection(index, { content: { ...(content as object), text: e.target.value } })
            }
            rows={4}
          />
        );
    }
  };

  // Drag and drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.section_id === active.id);
      const newIndex = sections.findIndex((s) => s.section_id === over.id);
      const newSections = arrayMove(sections, oldIndex, newIndex);
      setSections(newSections);
      pushToHistory(newSections, sources, true);
    }
  };

  const handleSourceDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = sources.findIndex((s) => s.source_id === active.id);
      const newIndex = sources.findIndex((s) => s.source_id === over.id);
      const newSources = arrayMove(sources, oldIndex, newIndex);
      setSources(newSources);
      pushToHistory(sections, newSources, true);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-8 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate("/admin")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Edit Page</h1>
            <p className="text-sm text-muted-foreground">/{slug}</p>
          </div>
          <a
            href={`/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <ExternalLink className="h-4 w-4" />
            Preview
          </a>
          
          <TooltipProvider>
            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={undo}
                    disabled={!canUndo}
                  >
                    <Undo2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Undo (Ctrl+Z)</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={redo}
                    disabled={!canRedo}
                  >
                    <Redo2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Redo (Ctrl+Y)</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
          
          {/* Save status indicator */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {saveMutation.isPending ? (
              <>
                <Loader2 className="h-3 w-3 animate-spin" />
                <span>Saving...</span>
              </>
            ) : hasUnsavedChanges ? (
              <>
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <span>Unsaved</span>
              </>
            ) : lastSaveTime ? (
              <>
                <Check className="h-3 w-3 text-green-500" />
                <span>{formatRelativeTime(lastSaveTime)}</span>
              </>
            ) : null}
          </div>
          
          {/* Version History Button */}
          <Sheet open={showVersionHistory} onOpenChange={setShowVersionHistory}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <History className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Version History</SheetTitle>
                <SheetDescription>
                  View and restore previous versions of this page
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-140px)] mt-4">
                {!versions || versions.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <History className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No saved versions yet</p>
                    <p className="text-sm">Versions are created when you save manually</p>
                  </div>
                ) : (
                  <div className="space-y-2 pr-4">
                    {versions.map((version, idx) => (
                      <Card 
                        key={version.id} 
                        className={`cursor-pointer transition-colors hover:bg-muted/50 ${idx === 0 ? 'border-primary/50' : ''}`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-medium truncate">{version.title}</span>
                                {idx === 0 && (
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                    Latest
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{formatVersionDate(version.created_at)}</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {version.sections_snapshot?.length || 0} sections, {version.sources_snapshot?.length || 0} sources
                              </p>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setVersionToRestore(version)}
                            >
                              <RotateCcw className="h-4 w-4 mr-1" />
                              Restore
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </SheetContent>
          </Sheet>
          
          <Button onClick={() => saveMutation.mutate(false)} disabled={saveMutation.isPending}>
            {saveMutation.isPending ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            Save
          </Button>
        </div>
        
        {/* Restore version confirmation dialog */}
        <AlertDialog open={!!versionToRestore} onOpenChange={(open) => !open && setVersionToRestore(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Restore this version?</AlertDialogTitle>
              <AlertDialogDescription>
                This will replace your current content with the version from{' '}
                {versionToRestore && formatVersionDate(versionToRestore.created_at)}.
                Your current unsaved changes will be lost.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => versionToRestore && restoreVersion(versionToRestore)}>
                Restore Version
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Restore draft dialog */}
        <AlertDialog open={showRestoreDialog} onOpenChange={setShowRestoreDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Restore unsaved draft?</AlertDialogTitle>
              <AlertDialogDescription>
                We found unsaved changes from {localBackup ? formatBackupTime(localBackup.timestamp) : ''}.
                Would you like to restore them?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={discardDraft}>Discard draft</AlertDialogCancel>
              <AlertDialogAction onClick={restoreDraft}>Restore</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Page Meta */}
        <Card className="mb-6">
          <CardHeader>
            <h3 className="text-lg font-semibold">Page Details</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Page title"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of this page"
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Content Sections</h2>
            <Button variant="outline" size="sm" onClick={addSection}>
              <Plus className="h-4 w-4 mr-1" />
              Add Section
            </Button>
          </div>

          {/* Paste here button at the top */}
          {copiedSection && sections.length > 0 && (
            <button
              onClick={() => pasteSection(0)}
              className="w-full py-2 px-4 border-2 border-dashed border-primary/40 rounded-lg text-sm text-primary hover:bg-primary/5 hover:border-primary/60 transition-colors flex items-center justify-center gap-2"
            >
              <ClipboardPaste className="h-4 w-4" />
              Paste here
            </button>
          )}

          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={sections.map((s) => s.section_id)} strategy={verticalListSortingStrategy}>
              {sections.map((section, index) => (
                <div key={section.section_id} className="space-y-2">
                  <SortableSectionCard
                    section={section}
                    index={index}
                    sectionTypes={sectionTypes}
                    updateSection={updateSection}
                    removeSection={removeSection}
                    copySection={copySection}
                    renderSectionEditor={renderSectionEditor}
                  />
                  {/* Paste here button after each section */}
                  {copiedSection && (
                    <button
                      onClick={() => pasteSection(index + 1)}
                      className="w-full py-2 px-4 border-2 border-dashed border-primary/40 rounded-lg text-sm text-primary hover:bg-primary/5 hover:border-primary/60 transition-colors flex items-center justify-center gap-2"
                    >
                      <ClipboardPaste className="h-4 w-4" />
                      Paste here
                    </button>
                  )}
                </div>
              ))}
            </SortableContext>
          </DndContext>

          {sections.length === 0 && (
            <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
              <p>No content sections yet.</p>
              <Button variant="link" onClick={addSection}>
                Add your first section
              </Button>
            </div>
          )}
        </div>

        {/* Sources */}
        <div className="space-y-4 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Source Citations</h2>
            <Button variant="outline" size="sm" onClick={addSource}>
              <Plus className="h-4 w-4 mr-1" />
              Add Source
            </Button>
          </div>

          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleSourceDragEnd}>
            <SortableContext items={sources.map((s) => s.source_id)} strategy={verticalListSortingStrategy}>
              {sources.map((source, index) => (
                <SortableSourceCard
                  key={source.source_id}
                  source={source}
                  index={index}
                  updateSource={updateSource}
                  removeSource={removeSource}
                />
              ))}
            </SortableContext>
          </DndContext>

          {sources.length === 0 && (
            <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
              <p>No source citations yet.</p>
              <Button variant="link" onClick={addSource}>
                Add your first source
              </Button>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

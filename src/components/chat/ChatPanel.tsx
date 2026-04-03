import { useEffect, useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useChat } from "@/hooks/useChat";
import AcumenBird from "./AcumenBird";
import AcumenEntrance from "./AcumenEntrance";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface ChatPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ChatPanel({ open, onOpenChange }: ChatPanelProps) {
  const { messages, isStreaming, sendMessage, stopStreaming, clearMessages } =
    useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const hasEntered = useRef(false);
  const [showEntrance, setShowEntrance] = useState(false);
  const [entranceDone, setEntranceDone] = useState(false);

  // Trigger entrance animation on first open
  useEffect(() => {
    if (open && !hasEntered.current) {
      hasEntered.current = true;
      setShowEntrance(true);
    }
  }, [open]);

  // Handle link clicks: close panel, navigate, and scroll to hash
  const handleLinkClick = useCallback(
    (href: string) => {
      onOpenChange(false);
      // Split path and hash
      const [path, hash] = href.split("#");
      navigate(path);
      // Scroll to section after page renders
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    },
    [navigate, onOpenChange]
  );

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 flex flex-col gap-0"
      >
        {/* Entrance animation overlay — fixed to match the Sheet's fixed positioning */}
        {showEntrance && !entranceDone && (
          <AcumenEntrance
            onComplete={() => {
              setEntranceDone(true);
              setShowEntrance(false);
            }}
          />
        )}

        {/* Header */}
        <SheetHeader className="px-4 py-3 border-b border-border flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <AcumenBird size={20} />
              </div>
              <div>
                <SheetTitle className="text-base">Acumen</SheetTitle>
                <SheetDescription className="text-xs">
                  Ask anything about transition finance
                </SheetDescription>
              </div>
            </div>
            {messages.length > 0 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearMessages}
                disabled={isStreaming}
                className="h-8 w-8"
                aria-label="Clear chat"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </SheetHeader>

        {/* Messages */}
        <ScrollArea className="flex-1 min-h-0">
          <div ref={scrollRef} className="p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-12 px-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <AcumenBird size={32} />
                </div>
                <p className="text-sm font-medium text-foreground mb-2">
                  How can I help?
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                  I can answer questions about transition finance, regulations, risk
                  assessment, sector analysis, and more — all from the toolkit content.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  {[
                    "What are CRREM pathways?",
                    "How should a bank assess transition risk?",
                    "What KPIs matter for steel sector lending?",
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-xs text-left px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg, i) => (
                <ChatMessage
                  key={msg.id}
                  message={msg}
                  isStreaming={
                    isStreaming &&
                    msg.role === "assistant" &&
                    i === messages.length - 1
                  }
                  onLinkClick={handleLinkClick}
                />
              ))
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <ChatInput
          onSend={sendMessage}
          onStop={stopStreaming}
          isStreaming={isStreaming}
        />
      </SheetContent>
    </Sheet>
  );
}

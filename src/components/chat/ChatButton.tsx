import { useState } from "react";
import { Button } from "@/components/ui/button";
import AcumenBird from "./AcumenBird";
import ChatPanel from "./ChatPanel";

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        size="icon"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg chat-button-enter hover:scale-105 transition-transform bg-background/80 backdrop-blur-sm border border-border"
        aria-label="Open chat assistant"
      >
        <AcumenBird size={28} />
      </Button>

      <ChatPanel open={open} onOpenChange={setOpen} />
    </>
  );
}

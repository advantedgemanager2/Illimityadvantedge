import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "@/hooks/useChat";

interface ChatMessageProps {
  message: ChatMessageType;
  isStreaming?: boolean;
  onLinkClick?: (href: string) => void;
}

// Parse markdown links [Title](/slug#section) into clickable elements
// Also handles basic bold (**text**)
function renderContent(content: string, onLinkClick?: (href: string) => void) {
  const linkRegex = /\[([^\]]+)\]\((\/([\w/-]+(?:#[\w-]+)?))\)/g;
  const parts: Array<string | { text: string; href: string }> = [];
  let lastIndex = 0;

  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    parts.push({ text: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts.map((part, i) => {
    if (typeof part === "string") {
      return <TextSegment key={i} text={part} />;
    }
    return (
      <a
        key={i}
        href={part.href}
        onClick={(e) => {
          e.preventDefault();
          onLinkClick?.(part.href);
        }}
        className="text-primary hover:underline underline-offset-2 font-medium cursor-pointer"
      >
        {part.text}
      </a>
    );
  });
}

// Render text with bold formatting
function TextSegment({ text }: { text: string }) {
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const parts: Array<string | { bold: string }> = [];
  let lastIndex = 0;

  let match;
  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push({ bold: match[1] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <strong key={i} className="font-semibold">
            {part.bold}
          </strong>
        )
      )}
    </>
  );
}

export default function ChatMessage({ message, isStreaming, onLinkClick }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 chat-message-enter",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground"
        )}
      >
        {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
      </div>

      {/* Bubble */}
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "bg-primary text-primary-foreground rounded-br-md"
            : "bg-muted text-foreground rounded-bl-md"
        )}
      >
        <div className="whitespace-pre-wrap break-words">
          {renderContent(message.content, onLinkClick)}
          {isStreaming && !message.content && (
            <span className="typing-indicator">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

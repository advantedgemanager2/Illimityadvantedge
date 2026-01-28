import { useEffect, useState } from "react";
import { Search, Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchDialog from "@/components/search/SearchDialog";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      <header className="sticky top-0 z-50 h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex h-full items-center justify-between px-4 lg:px-6">
          {/* Left: Menu toggle + Logo */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={onMenuToggle}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">TF</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-foreground">Transition Finance</span>
                <span className="ml-1.5 text-sm text-muted-foreground">Toolkit</span>
              </div>
            </a>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <button
              onClick={() => setSearchOpen(true)}
              className="relative w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-muted border-0 text-left text-sm text-muted-foreground hover:bg-muted/80 transition-colors"
            >
              <Search className="h-4 w-4" />
              <span className="flex-1">Search documentation...</span>
              <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right: Language toggle */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">EN</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <span className="mr-2">🇬🇧</span> English
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="mr-2">🇮🇹</span> Italiano
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

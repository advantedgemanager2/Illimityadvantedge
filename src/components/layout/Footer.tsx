import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Footer = () => {
  const { isAdmin } = useAuth();

  return (
    <footer className="border-t border-border bg-muted/30 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Transition Finance Toolkit. Tutti i diritti riservati.
          </div>
          
          <nav className="flex items-center gap-6 text-sm">
            <a href="/contatti" className="text-muted-foreground hover:text-foreground transition-colors">
              Contatti
            </a>
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/credits" className="text-muted-foreground hover:text-foreground transition-colors">
              Credits
            </a>
            <Link 
              to={isAdmin ? "/admin" : "/admin/login"} 
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Settings className="h-3.5 w-3.5" />
              <span>Admin</span>
              {isAdmin && (
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              )}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

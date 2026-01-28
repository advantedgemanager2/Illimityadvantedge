import { useState, ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ReadingProgress from "./ReadingProgress";
import SkipToContent from "./SkipToContent";

interface DocsLayoutProps {
  children: ReactNode;
  showProgress?: boolean;
}

const DocsLayout = ({ children, showProgress = true }: DocsLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SkipToContent />
      {showProgress && <ReadingProgress />}
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main 
          id="main-content" 
          className="flex-1 lg:ml-[280px] min-h-[calc(100vh-4rem)]"
          role="main"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            {children}
          </div>
        </main>
      </div>
      
      <div className="lg:ml-[280px]">
        <Footer />
      </div>
    </div>
  );
};

export default DocsLayout;

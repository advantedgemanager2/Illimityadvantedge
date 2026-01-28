import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Know-How Tool
import TransitionFinance from "./pages/know-how/TransitionFinance";
import TransitionRisks from "./pages/know-how/TransitionRisks";
import GreenwashingRisks from "./pages/know-how/GreenwashingRisks";
import CredibleTransitionPlans from "./pages/know-how/CredibleTransitionPlans";
import RiskAssessment from "./pages/know-how/RiskAssessment";
import SolutionsDeployment from "./pages/know-how/SolutionsDeployment";
import LitigationRisk from "./pages/know-how/LitigationRisk";

// Governance Tool
import PrudentialPlanning from "./pages/governance/PrudentialPlanning";
import NetZeroManagement from "./pages/governance/NetZeroManagement";
import FinanceFramework from "./pages/governance/FinanceFramework";

// Products
import KPIsCriteria from "./pages/products/KPIsCriteria";
import CorporateLoans from "./pages/products/CorporateLoans";
import SLL from "./pages/products/SLL";
import ContractualSolutions from "./pages/products/ContractualSolutions";
import LoanPolicy from "./pages/products/LoanPolicy";

// Sectors
import Steel from "./pages/sectors/Steel";
import Cement from "./pages/sectors/Cement";
import Automotive from "./pages/sectors/Automotive";
import Shipping from "./pages/sectors/Shipping";

// Admin
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import EditPage from "./pages/admin/EditPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Know-How Tool */}
            <Route path="/know-how/transition-finance" element={<TransitionFinance />} />
            <Route path="/know-how/transition-risks" element={<TransitionRisks />} />
            <Route path="/know-how/greenwashing-risks" element={<GreenwashingRisks />} />
            <Route path="/know-how/credible-transition-plans" element={<CredibleTransitionPlans />} />
            <Route path="/know-how/risk-assessment" element={<RiskAssessment />} />
            <Route path="/know-how/solutions-deployment" element={<SolutionsDeployment />} />
            <Route path="/know-how/litigation-risk" element={<LitigationRisk />} />
            
            {/* Governance Tool */}
            <Route path="/governance/prudential-planning" element={<PrudentialPlanning />} />
            <Route path="/governance/net-zero-management" element={<NetZeroManagement />} />
            <Route path="/governance/finance-framework" element={<FinanceFramework />} />
            
            {/* Products */}
            <Route path="/products/kpis-criteria" element={<KPIsCriteria />} />
            <Route path="/products/corporate-loans" element={<CorporateLoans />} />
            <Route path="/products/sll" element={<SLL />} />
            <Route path="/products/contractual-solutions" element={<ContractualSolutions />} />
            <Route path="/products/loan-policy" element={<LoanPolicy />} />
            
            {/* Sectors */}
            <Route path="/sectors/steel" element={<Steel />} />
            <Route path="/sectors/cement" element={<Cement />} />
            <Route path="/sectors/automotive" element={<Automotive />} />
            <Route path="/sectors/shipping" element={<Shipping />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/edit/*"
              element={
                <ProtectedRoute>
                  <EditPage />
                </ProtectedRoute>
              }
            />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AuthenticatedRoute from "@/components/auth/AuthenticatedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
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
import AdminDashboard from "./pages/admin/Dashboard";
import EditPage from "./pages/admin/EditPage";

// Dynamic pages
import DynamicPage from "./pages/DynamicPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Login */}
            <Route path="/login" element={<Login />} />

            {/* Home */}
            <Route path="/" element={<AuthenticatedRoute><Index /></AuthenticatedRoute>} />

            {/* Know-How Tool */}
            <Route path="/know-how/transition-finance" element={<AuthenticatedRoute><TransitionFinance /></AuthenticatedRoute>} />
            <Route path="/know-how/transition-risks" element={<AuthenticatedRoute><TransitionRisks /></AuthenticatedRoute>} />
            <Route path="/know-how/greenwashing-risks" element={<AuthenticatedRoute><GreenwashingRisks /></AuthenticatedRoute>} />
            <Route path="/know-how/credible-transition-plans" element={<AuthenticatedRoute><CredibleTransitionPlans /></AuthenticatedRoute>} />
            <Route path="/know-how/risk-assessment" element={<AuthenticatedRoute><RiskAssessment /></AuthenticatedRoute>} />
            <Route path="/know-how/solutions-deployment" element={<AuthenticatedRoute><SolutionsDeployment /></AuthenticatedRoute>} />
            <Route path="/know-how/litigation-risk" element={<AuthenticatedRoute><LitigationRisk /></AuthenticatedRoute>} />

            {/* Governance Tool */}
            <Route path="/governance/prudential-planning" element={<AuthenticatedRoute><PrudentialPlanning /></AuthenticatedRoute>} />
            <Route path="/governance/net-zero-management" element={<AuthenticatedRoute><NetZeroManagement /></AuthenticatedRoute>} />
            <Route path="/governance/finance-framework" element={<AuthenticatedRoute><FinanceFramework /></AuthenticatedRoute>} />

            {/* Products */}
            <Route path="/products/kpis-criteria" element={<AuthenticatedRoute><KPIsCriteria /></AuthenticatedRoute>} />
            <Route path="/products/corporate-loans" element={<AuthenticatedRoute><CorporateLoans /></AuthenticatedRoute>} />
            <Route path="/products/sll" element={<AuthenticatedRoute><SLL /></AuthenticatedRoute>} />
            <Route path="/products/contractual-solutions" element={<AuthenticatedRoute><ContractualSolutions /></AuthenticatedRoute>} />
            <Route path="/products/loan-policy" element={<AuthenticatedRoute><LoanPolicy /></AuthenticatedRoute>} />

            {/* Sectors */}
            <Route path="/sectors/steel" element={<AuthenticatedRoute><Steel /></AuthenticatedRoute>} />
            <Route path="/sectors/cement" element={<AuthenticatedRoute><Cement /></AuthenticatedRoute>} />
            <Route path="/sectors/automotive" element={<AuthenticatedRoute><Automotive /></AuthenticatedRoute>} />
            <Route path="/sectors/shipping" element={<AuthenticatedRoute><Shipping /></AuthenticatedRoute>} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Navigate to="/login" replace />} />
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

            {/* Dynamic page route for DB-created pages */}
            <Route
              path="/*"
              element={
                <AuthenticatedRoute>
                  <DynamicPage />
                </AuthenticatedRoute>
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

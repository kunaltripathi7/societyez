import { ThemeProvider } from "./components/providers/theme-provider";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

import AppLayout from "./components/layouts/AppLayout";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Index";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/Profile";
import SocietyDetailsLayout from "./components/society/SocietyDetailsLayout";
import SocietyOverviewTab from "./components/society/SocietyOverviewTab";
import SocietyPaymentsTab from "./components/society/SocietyPaymentsTab";
import SocietyLedgerTab from "./components/society/SocietyLedgerTab";
import SocietyRolesTab from "./components/society/SocietyRolesTab";
import SocietySubscriptionTab from "./components/society/SocietySubscriptionTab";
import Ledger from "./pages/Ledger";
import Societies from "./pages/Societies";
import AccessRequests from "./pages/AccessRequests";
import SocietyTechnicalTab from "./components/society/SocietyTechnicalTab";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster />
      <Router>
        <Routes>
          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes with AppLayout */}
          <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/societies" element={<Societies />} />
            <Route path="/access-requests" element={<AccessRequests />} />
            <Route path="/ledger" element={<Ledger />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* Society routes with nested tabs */}
            <Route path="/society/:id" element={<SocietyDetailsLayout />}>
              <Route index element={<SocietyOverviewTab />} />
              <Route path="payments" element={<SocietyPaymentsTab />} />
              <Route path="ledger" element={<SocietyLedgerTab />} />
              <Route path="roles" element={<SocietyRolesTab />} />
              <Route path="subscription" element={<SocietySubscriptionTab />} />
              <Route path="support" element={<SocietyTechnicalTab />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

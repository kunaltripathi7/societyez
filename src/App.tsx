import { ThemeProvider } from "./components/providers/theme-provider";
import Login from "./pages/auth/Login";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import { Toaster } from "./components/ui/sonner";
import Dashboard from "./pages/dashboard";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Signup from "./pages/auth/Signup";
import SocietyDetailsLayout from "./components/society/SocietyDetailsLayout";
import SocietyOverviewTab from "./components/society/SocietyOverviewTab";
import SocietyPaymentsTab from "./components/society/SocietyPaymentsTab";
import SocietyLedgerTab from "./components/society/SocietyLedgerTab";
import SocietyRolesTab from "./components/society/SocietyRolesTab";
import SocietySubscriptionTab from "./components/society/SocietySubscriptionTab";
import Profile from "./pages/Profile";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />

          {/* Society routes with nested tabs */}
          <Route path="/society/:id" element={<SocietyDetailsLayout />}>
            <Route index element={<SocietyOverviewTab />} />
            <Route path="overview" element={<SocietyOverviewTab />} />
            <Route path="payments" element={<SocietyPaymentsTab />} />
            <Route path="ledger" element={<SocietyLedgerTab />} />
            <Route path="roles" element={<SocietyRolesTab />} />
            <Route path="subscription" element={<SocietySubscriptionTab />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

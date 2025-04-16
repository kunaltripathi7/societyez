import { ThemeProvider } from "./components/providers/theme-provider";
import Login from "./pages/auth/Login";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import { Toaster } from "./components/ui/sonner";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/society/:id" element={<SocietyDetail />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

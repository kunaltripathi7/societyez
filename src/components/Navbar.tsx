import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { House, Layout, User, Menu, X, Settings } from "lucide-react";
import logo from "../assets/logo.svg"; 

import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

interface NavbarProps {
  activePage?: "home" | "dashboard";
  userRole?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  activePage = "home",
  userRole = "SuperAdmin",
}) => {
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <>
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="/home" className="flex items-center">
              <img
                src={logo}
                alt="SocietyEz Logo"
                className="h-12 w-auto"
              />
            </a>
          {/* Desktop Navigation - Moved to the right */}
          <nav className="hidden md:flex items-center gap-6 mr-auto ml-16">
            <a
              href="/home"
              className={`${
                activePage === "home"
                  ? "text-orange-500 font-medium"
                  : "text-slate-600 hover:text-orange-500 transition-colors"
              } flex items-center gap-2`}
            >
              <House className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a
              href="/dashboard"
              className={`${
                activePage === "dashboard"
                  ? "text-orange-500 font-medium"
                  : "text-slate-600 hover:text-orange-500 transition-colors"
              } flex items-center gap-2`}
            >
              <Layout className="h-4 w-4" />
              <span>Dashboard</span>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-sm">{userRole}</span>

            {/* User profile icon - Made clickable */}
            <div
              className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-300 transition-colors"
              onClick={handleProfileClick}
            >
              <User className="h-4 w-4" />
            </div>

            {/* Settings Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Settings className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Account Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  Edit Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Notification Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              {mobileNavOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Updated to match desktop changes */}
      {mobileNavOpen && (
        <div className="fixed inset-0 top-16 z-20 bg-white md:hidden">
          <nav className="container py-6 flex flex-col gap-4">
            <a
              href="/"
              className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                activePage === "home"
                  ? "bg-orange-50 text-orange-500 font-medium"
                  : "hover:bg-slate-100 text-slate-600"
              }`}
              onClick={() => setMobileNavOpen(false)}
            >
              <House className="h-5 w-5" />
              <span>Home</span>
            </a>
            <a
              href="/dashboard"
              className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                activePage === "dashboard"
                  ? "bg-orange-50 text-orange-500 font-medium"
                  : "hover:bg-slate-100 text-slate-600"
              }`}
              onClick={() => setMobileNavOpen(false)}
            >
              <Layout className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a
              href="/profile"
              className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-slate-100"
              onClick={() => setMobileNavOpen(false)}
            >
              <User className="h-5 w-5 text-slate-600" />
              <span className="text-slate-600">Profile</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;

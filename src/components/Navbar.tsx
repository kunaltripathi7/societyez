import  { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { House, Layout, Menu, X, Settings, LogOut, Bell, User, ChevronDown } from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);


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
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-primary font-medium"
                  : "text-slate-600 hover:text-primary transition-colors"
              }`
            }
          >
            <House className="h-4 w-4" />
            <span className="tracking-wide">Home</span>
          </NavLink>
          
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-primary font-medium"
                  : "text-slate-600 hover:text-primary transition-colors"
              }`
            }
          >
            <Layout className="h-4 w-4" />
            <span className="tracking-wide">Dashboard</span>
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {/* User Profile with Avatar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 px-3 py-2 h-auto hover:bg-slate-50 rounded-lg transition-colors"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/path-to-user-image.jpg" alt="Username" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-semibold">
                    U
                  </AvatarFallback>
                </Avatar>
                <span className="text-slate-700 text-sm font-medium hidden sm:block">Username</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Username</p>
                    <p className="text-xs leading-none text-muted-foreground">
                    user@example.com
                    </p>
                  </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => navigate("/profile")}
                  >
                  <User className="mr-2 h-4 w-4 hover:text-white" />
                  Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                  <Bell className="mr-2 h-4 w-4 hover:text-white" />
                  Notifications
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4 hover:text-white" />
                  Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                  className="text-red-600 cursor-pointer hover:bg-red-500 hover:text-white focus:bg-red-600 focus:text-white"
                  onClick={() => navigate("/login")}
                  >
                  <LogOut className="mr-2 h-4 w-4 hover:text-white" />
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
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-orange-50 text-orange-500 font-medium"
                  : "hover:bg-slate-100 text-slate-600"
              }`
            }
            onClick={() => setMobileNavOpen(false)}
          >
            <House className="h-5 w-5" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-orange-50 text-orange-500 font-medium"
                  : "hover:bg-slate-100 text-slate-600"
              }`
            }
            onClick={() => setMobileNavOpen(false)}
          >
            <Layout className="h-5 w-5" />
            <span>Dashboard</span>
          </NavLink>
        </nav>
      </div>
    )}
  </>
);
}

export default Navbar;

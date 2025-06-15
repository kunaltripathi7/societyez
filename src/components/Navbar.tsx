import  { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { House, Layout, Menu, X, LogOut, Bell, User, ChevronDown } from "lucide-react";
import logo from "../assets/logo.svg"; 

import { Button } from "@/components/ui/button"; 
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
   const [user] = useState({
    username: 'John Doe',
    email: 'john@example.com',
    avatarUrl: '/default-avatar.png'
  });


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
            <DropdownMenuTrigger className="cursor-pointer">
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 px-3 py-2 h-auto hover:bg-slate-50 rounded-lg transition-colors"
              >

                <Avatar className="h-8 w-8">
                <AvatarImage 
                  src={user?.avatarUrl || '/default-avatar.png'} 
                  alt={user?.username || 'User'}
                  onError={(e) => {
                    e.currentTarget.src = '/default-avatar.jpg'
                  }}
                />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-semibold">
                    {/* Show first letter of username or default to U */}
                    {user?.username?.[0]?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <span className="text-slate-700 text-sm font-medium hidden sm:block">Username</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 z-50">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none select-none">Username</p>
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
            className="md:hidden cursor-pointer"
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

{mobileNavOpen && (
 <>
   {/* Backdrop */}
   <div 
     className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-20 md:hidden"
     onClick={() => setMobileNavOpen(false)}
   />
   
   {/* Side Menu */}
   <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white shadow-xl z-30 md:hidden transform transition-transform duration-300 ease-out">
     <div className="flex flex-col h-full">
       {/* Header */}
       <div className="px-6 py-4 border-b border-slate-200">
         <h2 className="text-lg font-semibold text-slate-900">Navigation</h2>
       </div>
       
       {/* Navigation */}
       <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
         <NavLink
           to="/home"
           className={({ isActive }) =>
             `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
               isActive
                 ? "bg-secondary text-primary font-medium shadow-sm"
                 : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
             }`
           }
           onClick={() => setMobileNavOpen(false)}
         >
           <div className={`p-1 rounded-lg ${
             ({ isActive }: { isActive: boolean }) => isActive ? "bg-primary/10" : "bg-slate-100"
           }`}>
             <House className="h-5 w-5" />
           </div>
           <span className="font-medium">Home</span>
         </NavLink>

         <NavLink
           to="/dashboard"
           className={({ isActive }) =>
             `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
               isActive
                 ? "bg-secondary text-primary font-medium shadow-sm"
                 : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
             }`
           }
           onClick={() => setMobileNavOpen(false)}
         >
           <div className={`p-1 rounded-lg ${
             ({ isActive } : {isActive : boolean}) => isActive ? "bg-primary/10" : "bg-slate-100"
           }`}>
             <Layout className="h-5 w-5" />
           </div>
           <span className="font-medium">Dashboard</span>
         </NavLink>
       </nav>
       
       {/* Footer */}
       <div className="px-6 py-4 border-t border-slate-200">
         <p className="text-xs text-slate-500">© 2024 Your App</p>
       </div>
     </div>
   </div>
 </>
)}
  </>
);
}

export default Navbar;

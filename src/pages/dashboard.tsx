import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Building2,
  CircleDollarSign,
  Users,
  Bell,
  Key,
  ScrollText,
  ArrowUp,
  ArrowDown,
  Clock,
  ChevronRight,
} from "lucide-react";

import Navbar from "../components/Navbar";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Define card navigation destinations
  const cardDestinations = {
    societies: "/societies",
    payments: "/payments",
    users: "/users",
    notifications: "/notifications",
    access: "/access-requests",
    ledger: "/ledger",
  };

  const handleCardClick = (destination: string) => {
    navigate(destination);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Use the Navbar component with activePage set to "dashboard" */}
      <Navbar activePage="dashboard" userRole="SuperAdmin" />

      <div className="container mx-auto py-4 px-4">
        <div className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome, Super Admin</h1>
              <p className="text-muted-foreground">
                Here's what's happening with your societies today
              </p>
            </div>
          </div>

          {/* Top row of cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              className={`group cursor-pointer transition-all duration-300 ${
                hoveredCard === "societies" ? "border-orange-300 shadow-md" : ""
              }`}
              onMouseEnter={() => setHoveredCard("societies")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(cardDestinations.societies)}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Societies
                </CardTitle>
                <Building2 className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold">248</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>12% from last month</span>
                </div>
                <ChevronRight className="absolute right-2 bottom-2 h-5 w-5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
              </CardContent>
            </Card>

            <Card
              className={`group cursor-pointer transition-all duration-300 ${
                hoveredCard === "payments" ? "border-orange-300 shadow-md" : ""
              }`}
              onMouseEnter={() => setHoveredCard("payments")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(cardDestinations.payments)}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Payments
                </CardTitle>
                <CircleDollarSign className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold">₹4,28,650</div>
                <div className="flex items-center text-sm text-red-500">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  <span>8% from last month</span>
                </div>
                <ChevronRight className="absolute right-2 bottom-2 h-5 w-5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
              </CardContent>
            </Card>

            <Card
              className={`group cursor-pointer transition-all duration-300 ${
                hoveredCard === "users" ? "border-orange-300 shadow-md" : ""
              }`}
              onMouseEnter={() => setHoveredCard("users")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(cardDestinations.users)}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Users
                </CardTitle>
                <Users className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold">1,849</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>24% from last month</span>
                </div>
                <ChevronRight className="absolute right-2 bottom-2 h-5 w-5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
              </CardContent>
            </Card>
          </div>

          {/* Bottom row of cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              className={`group cursor-pointer transition-all duration-300 ${
                hoveredCard === "notifications"
                  ? "border-orange-300 shadow-md"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCard("notifications")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(cardDestinations.notifications)}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Unread Notifications
                </CardTitle>
                <Bell className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold">36</div>
                <div className="flex items-center text-sm text-amber-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Last hour</span>
                </div>
                <ChevronRight className="absolute right-2 bottom-2 h-5 w-5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
              </CardContent>
            </Card>

            <Card
              className={`group cursor-pointer transition-all duration-300 ${
                hoveredCard === "access" ? "border-orange-300 shadow-md" : ""
              }`}
              onMouseEnter={() => setHoveredCard("access")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(cardDestinations.access)}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Access Requests
                </CardTitle>
                <Key className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold">12</div>
                <div className="flex items-center text-sm text-amber-500">
                  <span className="h-2 w-2 bg-amber-500 rounded-full mr-1"></span>
                  <span>Pending approval</span>
                </div>
                <ChevronRight className="absolute right-2 bottom-2 h-5 w-5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
              </CardContent>
            </Card>

            <Card
              className={`group cursor-pointer transition-all duration-300 ${
                hoveredCard === "ledger" ? "border-orange-300 shadow-md" : ""
              }`}
              onMouseEnter={() => setHoveredCard("ledger")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(cardDestinations.ledger)}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Monthly Ledger
                </CardTitle>
                <ScrollText className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent className="relative">
                <div className="text-2xl font-bold">₹12.4L</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>18% from last month</span>
                </div>
                <ChevronRight className="absolute right-2 bottom-2 h-5 w-5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
              </CardContent>
            </Card>
          </div>

          {/* Activity Section */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  You have 14 activities this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0 hover:bg-slate-50 p-2 rounded-md cursor-pointer transition-colors"
                      onClick={() => navigate("/activity-details")}
                    >
                      <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">
                          New society registered
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Green Valley Apartments joined the platform
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        2h ago
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

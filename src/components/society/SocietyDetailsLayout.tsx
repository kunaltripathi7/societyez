import { useEffect, useState } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { Building2, Calendar, FileText, Users, Settings } from "lucide-react";
import TabNavigation from "./TabNavigation";
import { SocietyData, Tab } from "../../types/society";
import Navbar from "../Navbar";

function SocietyDetailsLayout(): React.ReactNode {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [societyData] = useState<SocietyData>({
    name: "Green Valley Apartments",
    id: "GVA-2025-001",
    registrationDate: "Jan 15, 2025",
    adminInCharge: "Robert Wilson",
    address: {
      street: "123 Green Valley Road",
      sector: "Sector 15, Downtown",
      city: "New York, NY 10001",
    },
  });

  // Extract the current tab from the URL
  const currentPath = location.pathname;
  const pathParts = currentPath.split("/");
  const activeTab = pathParts.length > 3 ? pathParts[3] : "overview";

  // Define tabs
  const tabs: Tab[] = [
    { id: "overview", label: "Overview", icon: <Building2 size={16} /> },
    { id: "payments", label: "Payments", icon: <Calendar size={16} /> },
    { id: "ledger", label: "Ledger", icon: <FileText size={16} /> },
    { id: "roles", label: "Roles & Access", icon: <Users size={16} /> },
    {
      id: "subscription",
      label: "Subscription & Demo",
      icon: <Settings size={16} />,
    },
  ];

  // Handle tab change
  const handleTabChange = (tabId: string): void => {
    if (tabId === "overview") {
      navigate(`/society/${id}`);
    } else {
      navigate(`/society/${id}/${tabId}`);
    }
  };

  // Fetch society data effect - would be replaced with an actual API call
  useEffect(() => {
    // In a real application, you would fetch data based on the ID
    // Example: fetchSocietyData(id).then(data => setSocietyData(data));
    console.log(`Fetching data for society with ID: ${id}`);
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-6">
          Society Details - {societyData.name}
        </h1>

        <TabNavigation
          activeTab={activeTab}
          tabs={tabs}
          onTabChange={handleTabChange}
        />

        <div className="mt-6">
          <Outlet context={{ societyData }} />
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-gray-500 border-t">
        © 2025 SocietyEZ. All rights reserved.
      </footer>
    </div>
  );
}

export default SocietyDetailsLayout;

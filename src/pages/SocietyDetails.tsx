import {
  Building2,
  Calendar,
  User,
  Download,
  MessageSquare,
  Edit,
} from "lucide-react";

import TabNavigation from "../components/society/TabNavigation";
import Card from "../components/society/Card";
import InfoRow from "../components/society/InfoRow";
import { Button } from "@/components/ui/button";
import { SocietyDetails } from "../types/types";


export default function SocietyDetailsPage() {
  const societyData: SocietyDetails = {
    name: "Green Valley Apartments",
    id: "GVA-2025-001",
    registrationDate: "Jan 15, 2025",
    adminInCharge: "Robert Wilson",
    address: {
      street: "123 Green Valley Road",
      sector: "Sector 15, Downtown",
      city: "New York, NY 10001",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Society Details - {societyData.name}
        </h1>

        <TabNavigation
          activeTab="overview"
          tabs={[
            {
              id: "overview",
              label: "Overview",
              icon: <Building2 size={16} />,
            },
            { id: "payments", label: "Payments", icon: <Calendar size={16} /> },
            { id: "ledger", label: "Ledger", icon: <Building2 size={16} /> },
            { id: "roles", label: "Roles & Access", icon: <User size={16} /> },
            {
              id: "subscription",
              label: "Subscription & Demo",
              icon: <Building2 size={16} />,
            },
          ]}
          onTabChange={(tabId: string): void => {
            console.log(`Tab changed to: ${tabId}`);
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card title="Society Information">
            <InfoRow label="Society ID" value={societyData.id} />
            <InfoRow
              label="Registration Date"
              value={societyData.registrationDate}
            />
            <InfoRow
              label="Admin in Charge"
              value={societyData.adminInCharge}
            />

            <div className="flex gap-2 mt-6">
              <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
                <MessageSquare size={16} />
                Contact Society
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                Download Details
              </Button>
            </div>
          </Card>

          <Card title="Address Details">
            <InfoRow label={null} value={societyData.address.street} />
            <InfoRow label={null} value={societyData.address.sector} />
            <InfoRow label={null} value={societyData.address.city} />

            <Button
              variant="ghost"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600 mt-4 pl-0"
            >
              <Edit size={16} />
              Edit Address
            </Button>
          </Card>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-gray-500 border-t">
        © 2023 SocietyAdmin Portal. All rights reserved.
      </footer>
    </div>
  );
}

import React from "react";
import { useOutletContext } from "react-router-dom";
import { MessageSquare, Download, Edit } from "lucide-react";
import Card from "./Card";
import InfoRow from "./InfoRow";
import { Button } from "../../components/ui/button";
import { OutletContextType } from "../../types/society";

function SocietyOverviewTab(): React.ReactNode {
  const { societyData } = useOutletContext<OutletContextType>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Society Information">
        <InfoRow label="Society ID" value={societyData.id} />
        <InfoRow
          label="Registration Date"
          value={societyData.registrationDate}
        />
        <InfoRow label="Admin in Charge" value={societyData.adminInCharge} />

        <div className="flex gap-2 mt-6">
          <Button className="flex items-center gap-2 bg-primary hover:bg-accent cursor-pointer">
            <MessageSquare size={16} />
            Contact Society
          </Button>
          <Button variant="outline" className="flex items-center gap-2 cursor-pointer">
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
          className="flex items-center gap-2 text-white bg-primary cursor-pointer mt-4 pl-0"
        >
          <Edit size={16} />
          Edit Address
        </Button>
      </Card>
    </div>
  );
}

export default SocietyOverviewTab;

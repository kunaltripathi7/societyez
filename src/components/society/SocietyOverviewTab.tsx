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

        <div className="flex flex-col sm:flex-row gap-2 mt-6 w-full">
          <Button className="flex items-center justify-center gap-1 sm:gap-2 bg-primary hover:bg-accent cursor-pointer text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2 md:px-4 flex-1 min-w-0">
            <MessageSquare size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="truncate">Contact Society</span>
          </Button>
          <Button variant="outline" className="flex items-center justify-center gap-1 sm:gap-2 cursor-pointer text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2 md:px-4 flex-1 min-w-0">
            <Download size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="truncate">Download Details</span>
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
import React from "react";
import { useOutletContext } from "react-router-dom";
import { MessageSquare, Download, Edit, MapPin } from "lucide-react";
import Card from "./Card";
import InfoRow from "./InfoRow";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { OutletContextType } from "../../types/society";

function SocietyOverviewTab(): React.ReactNode {
  const { societyData } = useOutletContext<OutletContextType>();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card title="Society Information" className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
        
        <div className="relative space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
              ID: {societyData.id}
            </Badge>
          </div>

          <InfoRow
            label="Registration Date"
            value={societyData.registrationDate}
            className="py-3 border-b border-gray-100 last:border-b-0"
          />
          <InfoRow
            label="Admin in Charge"
            value={societyData.adminInCharge}
            className="py-3 border-b border-gray-100 last:border-b-0"
          />

          <div className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="group bg-primary hover:bg-primary/90 transition-all duration-300 text-white font-medium h-12 px-6 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                <MessageSquare className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Contact Society
              </Button>
              <Button 
                variant="outline" 
                className="group border-2 border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-medium h-12 px-6 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" />
                Download Details
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Address Details" className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-50/80 via-transparent to-gray-100/60 pointer-events-none" />
        
        <div className="relative">
          <div className="flex items-center gap-2 mb-6 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Location Details</span>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100/60 space-y-3">
            <div className="text-gray-800 font-medium">
              {societyData.address.street}
            </div>
            <div className="text-gray-700">
              {societyData.address.sector}
            </div>
            <div className="text-gray-600 font-medium">
              {societyData.address.city}
            </div>
          </div>

          <Button
            variant="ghost"
            className="group mt-6 text-primary hover:text-primary/80 hover:bg-primary/10 transition-all duration-300 font-medium h-11 px-4 rounded-lg border border-transparent hover:border-primary/20"
          >
            <Edit className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Edit Address
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default SocietyOverviewTab;
import React from "react";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function PageHeader(): React.ReactNode {
  return (
    <header className="bg-white border-b border-gray-200 py-2 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 text-white font-bold p-1 rounded">
            S
          </div>
          <span className="font-bold text-lg">SocietyAdmin</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt="User avatar" />
            <AvatarFallback className="bg-blue-200 text-blue-800">
              JA
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">John Admin</span>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;

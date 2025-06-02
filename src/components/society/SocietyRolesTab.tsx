// import { useParams } from "react-router-dom";
import { Edit, Trash, Plus, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import user1 from "../../assets/avatars/user1.jpg";
import user2 from "../../assets/avatars/user2.jpg"; 
import user3 from "../../assets/avatars/user3.jpg";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

function SocietyRolesTab(): React.ReactNode {
  // const { id } = useParams<{ id: string }>();

  // Mock users data
  const users = [
    {
      id: 1,
      name: "Robert Smith",
      role: "Committee President",
      status: "Active",
      avatar: user1,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Society Admin",
      status: "Active",
      avatar: user2,
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Accountant",
      status: "Inactive",
      avatar: user3,
    },
  ];

  return (
    <div className="p-4">
      {/* Search and Filter Controls */}
      <div className="flex justify-between mb-6">
        <div className="flex gap-3">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <Input placeholder="Search users..." className="pl-10 w-64" />
          </div>
          <Select>
                <SelectTrigger className="w-[180px] cursor-pointer">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
              <SelectGroup >
              <SelectLabel>Roles</SelectLabel>
              <SelectItem value="all" className="cursor-pointer">All Roles</SelectItem>
              <SelectItem value="president" className="cursor-pointer">Committee President</SelectItem>
              <SelectItem value="admin" className="cursor-pointer">Society Admin</SelectItem>
              <SelectItem value="accountant" className="cursor-pointer">Accountant</SelectItem>
                  </SelectGroup>
                </SelectContent>
          </Select>
        </div>
        <Button className="bg-primary hover:bg-accent flex items-center gap-2">
          <Plus size={16} />
          Add New User
        </Button>
      </div>

      {/* Users List */}
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-md border p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {user.status}
              </span>
              <Button
                variant="ghost"
                className="text-gray-500 hover:text-white cursor-pointer"
              >
                <Edit size={16} />
              </Button>
              <Button
                variant="ghost"
                className="text-gray-500 hover:text-white cursor-pointer"
              >
                <Trash size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
           <div className="flex justify-between mt-4 items-center">
        <div className="text-sm text-gray-500">
          Showing 1 to 3 of 12 entries
        </div>
        <div className="flex gap-2 ">
          <Button variant="outline" className="text-sm cursor-pointer">
            Previous
          </Button>
          <Button
            variant="outline"
            className="text-sm bg-primary text-white cursor-pointer"
          >
            1
          </Button>
          <Button variant="outline" className="text-sm cursor-pointer">
            2
          </Button>
          <Button variant="outline" className="text-sm cursor-pointer">
            3
          </Button>
          <Button variant="outline" className="text-sm cursor-pointer">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SocietyRolesTab;

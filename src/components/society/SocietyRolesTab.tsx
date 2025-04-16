import { useParams } from "react-router-dom";
import { Edit, Trash, Plus, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

function SocietyRolesTab(): React.ReactNode {
  const { id } = useParams<{ id: string }>();

  // Mock users data
  const users = [
    {
      id: 1,
      name: "Robert Smith",
      role: "Committee President",
      status: "Active",
      avatar: "/avatars/user2.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Society Admin",
      status: "Active",
      avatar: "/avatars/user1.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Accountant",
      status: "Inactive",
      avatar: "/avatars/user3.jpg",
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
          <select className="border rounded-md px-3 py-2">
            <option>All Roles</option>
          </select>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2">
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
                className="text-gray-500 hover:text-gray-700"
              >
                <Edit size={16} />
              </Button>
              <Button
                variant="ghost"
                className="text-gray-500 hover:text-gray-700"
              >
                <Trash size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-6 items-center">
        <div className="text-sm text-gray-500">Showing 1-3 of 12 users</div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-sm">
            Previous
          </Button>
          <Button
            variant="outline"
            className="text-sm bg-orange-500 text-white"
          >
            1
          </Button>
          <Button variant="outline" className="text-sm">
            2
          </Button>
          <Button variant="outline" className="text-sm">
            3
          </Button>
          <Button variant="outline" className="text-sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SocietyRolesTab;

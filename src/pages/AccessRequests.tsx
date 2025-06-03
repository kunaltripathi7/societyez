import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, X, Info, Search, Filter } from "lucide-react";

interface AccessRequest {
  id: string;
  employee: {
    name: string;
    id: string;
  };
  role: string;
  department: string;
  requestDate: string;
  requestTime: string;
  status: 'pending' | 'approved' | 'rejected' | 'more-info-needed';
}

const accessRequests: AccessRequest[] = [
  {
    id: '1',
    employee: { name: 'Michael Johnson', id: 'EMP-5421' },
    role: 'Society Admin',
    department: 'Finance Department',
    requestDate: 'Jun 2, 2023',
    requestTime: '09:45 AM',
    status: 'pending',
  },
  {
    id: '2',
    employee: { name: 'Sarah Parker', id: 'EMP-3892' },
    role: 'Building Manager',
    department: 'Operations',
    requestDate: 'Jun 1, 2023',
    requestTime: '03:22 PM',
    status: 'more-info-needed',
  },
  {
    id: '3',
    employee: { name: 'Robert Wilson', id: 'EMP-7245' },
    role: 'Security Manager',
    department: 'Security Department',
    requestDate: 'May 29, 2023',
    requestTime: '11:10 AM',
    status: 'approved',
  },
  {
    id: '4',
    employee: { name: 'Emily Thompson', id: 'EMP-1034' },
    role: 'Event Coordinator',
    department: 'Community Relations',
    requestDate: 'May 28, 2023',
    requestTime: '02:15 PM',
    status: 'rejected',
  },
  {
    id: '5',
    employee: { name: 'David Chen', id: 'EMP-6529' },
    role: 'Maintenance Supervisor',
    department: 'Facilities',
    requestDate: 'May 26, 2023',
    requestTime: '10:30 AM',
    status: 'pending',
  },
];

const AccessRequests = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Access Requests</h1>
      
      {/* Filters Section */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search by name or ID..." 
            className="pl-10"
          />
        </div>
        
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All Requests" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Requests</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
            <SelectItem value="more-info-needed">More Info Needed</SelectItem>
          </SelectContent>
        </Select>
        
        <div className="flex items-center gap-2">
          <Input type="date" className="w-40" />
          <span className="text-sm text-gray-500">to</span>
          <Input type="date" className="w-40" />
        </div>
        
        <Button variant="outline" className="cursor-pointer">
          <Filter className="w-4 h-4 mr-2" />
          Apply Filters
        </Button>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>EMPLOYEE</TableHead>
            <TableHead>ROLE</TableHead>
            <TableHead>REQUEST DATE</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accessRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">
                      {request.employee.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{request.employee.name}</div>
                    <div className="text-sm text-gray-500">ID: {request.employee.id}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{request.role}</div>
                  <div className="text-sm text-gray-500">{request.department}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div>{request.requestDate}</div>
                  <div className="text-sm text-gray-500">{request.requestTime}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant="outline"
                  className={`${request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    request.status === 'approved' ? 'bg-green-100 text-green-800' : 
                    request.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                    request.status === 'more-info-needed' ? 'bg-blue-100 text-blue-800' : ''
                  }`}
                >
                  {request.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" className="cursor-pointer bg-green-100 text-green-800 hover:bg-green-500 hover:text-white rounded-lg">
                    <Check className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="cursor-pointer bg-rose-100 text-rose-700 hover:bg-rose-500 hover:text-white rounded-lg">
                    <X className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="cursor-pointer bg-secondary text-blue-800 hover:bg-blue-500 hover:text-white rounded-lg">
                    <Info className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Showing 1 to 5 of 12 results</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="cursor-pointer">Previous</Button>
          <Button variant="outline" size="sm" className="cursor-pointer">1</Button>
          <Button variant="outline" size="sm" className="cursor-pointer">2</Button>
          <Button variant="outline" size="sm" className="cursor-pointer">3</Button>
          <span className="text-sm text-gray-500">...</span>
          <Button variant="outline" size="sm" className="cursor-pointer">Next</Button>
        </div>
      </div>
    </div>
  )
};
export default AccessRequests;

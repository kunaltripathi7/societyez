import { useState } from "react";
import { Check, X, Info, Search, Filter, Calendar, Briefcase } from "lucide-react";

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
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      'more-info-needed': 'bg-blue-100 text-blue-800'
    };

    const statusLabels = {
      'more-info-needed': 'More Info Needed',
      pending: 'Pending',
      approved: 'Approved',
      rejected: 'Rejected'
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles]}`}>
        {statusLabels[status as keyof typeof statusLabels]}
      </span>
    );
  };

  // Mobile Card Component
  const RequestCard = ({ request }: { request: AccessRequest }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4 shadow-sm">
      {/* Header with employee info */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-medium text-sm">
              {request.employee.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{request.employee.name}</h3>
            <p className="text-sm text-gray-500">ID: {request.employee.id}</p>
          </div>
        </div>
        {getStatusBadge(request.status)}
      </div>

      {/* Details */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Briefcase className="w-4 h-4 text-gray-400" />
          <div>
            <span className="font-medium text-gray-900">{request.role}</span>
            <span className="text-gray-500 ml-1">• {request.department}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-gray-400" />
          <div>
            <span className="text-gray-900">{request.requestDate}</span>
            <span className="text-gray-500 ml-1">at {request.requestTime}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
        <button 
          className="p-2 bg-green-100 text-green-800 hover:bg-green-500 hover:text-white rounded-lg transition-colors"
          title="Approve"
        >
          <Check className="w-4 h-4" />
        </button>
        <button 
          className="p-2 bg-rose-100 text-rose-700 hover:bg-rose-500 hover:text-white rounded-lg transition-colors"
          title="Reject"
        >
          <X className="w-4 h-4" />
        </button>
        <button 
          className="p-2 bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
          title="More Info"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4 lg:p-6 space-y-6">
      <h1 className="text-2xl lg:text-3xl font-semibold">Access Requests</h1>
      
      {/* Filters Section */}
      <div className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text"
            placeholder="Search by name or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full lg:w-48 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Requests</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
          <option value="more-info-needed">More Info Needed</option>
        </select>
        
        <div className="flex items-center gap-2">
          <input 
            type="date" 
            className="flex-1 lg:w-40 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-sm text-gray-500">to</span>
          <input 
            type="date" 
            className="flex-1 lg:w-40 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <button className="w-full lg:w-auto inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
          <Filter className="w-4 h-4 mr-2" />
          Apply Filters
        </button>
      </div>

      {/* Mobile/Tablet Cards View (hidden on lg+ screens) */}
      <div className="lg:hidden space-y-4">
        {accessRequests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>

      {/* Desktop Table View (hidden on smaller screens) */}
      <div className="hidden lg:block overflow-x-auto bg-white rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Request Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {accessRequests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
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
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="font-medium">{request.role}</div>
                    <div className="text-sm text-gray-500">{request.department}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div>{request.requestDate}</div>
                    <div className="text-sm text-gray-500">{request.requestTime}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(request.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 bg-green-100 text-green-800 hover:bg-green-500 hover:text-white rounded-lg transition-colors">
                      <Check className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 bg-rose-100 text-rose-700 hover:bg-rose-500 hover:text-white rounded-lg transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white rounded-lg transition-colors">
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">Showing 1 to 5 of 12 results</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm font-medium text-gray-400 bg-white border border-gray-200 rounded-lg cursor-not-allowed">
            Previous
          </button>
          <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg">
            1
          </button>
          <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            3
          </button>
          <span className="text-sm text-gray-500">...</span>
          <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessRequests;
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from '@/components/ui/select';
import { 
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
 Search,
 Edit,
 Trash2,
 ChevronDown,
 HelpCircle,
 ChevronLeft,
 ChevronRight
} from 'lucide-react';

const SocietyRolesTab = () => {
//  const [selectedUser, setSelectedUser] = useState('');
 const [selectedRole, setSelectedRole] = useState('');
 const [remarks, setRemarks] = useState('');
 const [searchUser, setSearchUser] = useState('');

 const roles = [
   { id: 'admin', label: 'Admin', color: 'bg-blue-100 text-blue-800' },
   { id: 'manager', label: 'Manager', color: 'bg-yellow-100 text-yellow-800' },
   { id: 'staff', label: 'Staff', color: 'bg-green-100 text-green-800' },
   { id: 'security', label: 'Security', color: 'bg-red-100 text-red-800' },
   { id: 'accountant', label: 'Accountant', color: 'bg-purple-100 text-purple-800' }
 ];

 const currentAssignments = [
   {
     id: '#USR-2458',
     name: 'Sarah Johnson',
     email: 'sarah.j@example.com',
     role: 'Admin',
     roleColor: 'bg-blue-100 text-blue-800',
     assignedBy: 'John Doe (Super Admin)',
     assignedOn: 'May 12, 2023'
   },
   {
     id: '#USR-1854',
     name: 'Robert Miller',
     email: 'robert.m@example.com',
     role: 'Manager',
     roleColor: 'bg-yellow-100 text-yellow-800',
     assignedBy: 'Sarah Johnson (Admin)',
     assignedOn: 'Jun 3, 2023'
   },
   {
     id: '#USR-3672',
     name: 'Emily Davis',
     email: 'emily.d@example.com',
     role: 'Staff',
     roleColor: 'bg-green-100 text-green-800',
     assignedBy: 'Robert Miller (Manager)',
     assignedOn: 'Jun 15, 2023'
   },
   {
     id: '#USR-4982',
     name: 'Michael Wilson',
     email: 'michael.w@example.com',
     role: 'Security',
     roleColor: 'bg-red-100 text-red-800',
     assignedBy: 'Sarah Johnson (Admin)',
     assignedOn: 'Jul 2, 2023'
   },
   {
     id: '#USR-5214',
     name: 'Jessica Brown',
     email: 'jessica.b@example.com',
     role: 'Accountant',
     roleColor: 'bg-purple-100 text-purple-800',
     assignedBy: 'John Doe (Super Admin)',
     assignedOn: 'Jul 10, 2023'
   }
 ];

 return (
   <div className="p-6 space-y-6">
     {/* Header */}
     <div className="flex items-center justify-between">
       <div>
         <h1 className="text-2xl font-semibold text-gray-900">Role Management</h1>
         <p className="text-gray-600 mt-1">Assign and manage roles for users in this society.</p>
       </div>
       <Button variant="outline" size="sm" className="flex items-center gap-2 cursor-pointer">
         <HelpCircle className="h-4 w-4" />
         Role definitions
       </Button>
     </div>

     {/* Assign New Role Card */}
     <Card>
       <CardHeader>
         <CardTitle>Assign New Role</CardTitle>
       </CardHeader>
       <CardContent>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
           {/* Select User */}
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">Select User</label>
             <div className="relative">
               <Input
                 placeholder="Search by name or email"
                 value={searchUser}
                 onChange={(e) => setSearchUser(e.target.value)}
                 className="pr-10"
               />
               <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
             </div>
           </div>

           {/* Select Role */}
           <div className='flex gap-0 md:gap-8'>

           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-700">Select Role</label>
             <Select value={selectedRole} onValueChange={setSelectedRole}>
               <SelectTrigger>
                 <SelectValue placeholder="Select a role" />
               </SelectTrigger>
               <SelectContent>
                 {roles.map((role) => (
                   <SelectItem key={role.id} value={role.id}>
                     {role.label}
                   </SelectItem>
                 ))}
               </SelectContent>
             </Select>
           </div>
           <div className="flex items-end">
             <Button className="w-full bg-blue-600 hover:bg-blue-700">
               Assign Role
             </Button>
           </div>
          </div>

           {/* Assign Button */}
           
         </div>

         {/* Remarks */}
         <div className="space-y-2">
           <label className="text-sm font-medium text-gray-700">
             Remarks <span className="text-gray-400">(Optional)</span>
           </label>
           <Textarea
             placeholder="Add any notes about this role assignment"
             value={remarks}
             onChange={(e) => setRemarks(e.target.value)}
             className="min-h-[80px]"
           />
         </div>
       </CardContent>
     </Card>

     {/* Current Role Assignments */}
     <Card>
       <CardHeader>
         <div className="flex items-center justify-between">
           <CardTitle>Current Role Assignments</CardTitle>
           <div className="flex items-center gap-3">
             <DropdownMenu>
               <DropdownMenuTrigger asChild>
                 <Button variant="outline" size="sm" className="flex items-center gap-2">
                   All Roles
                   <ChevronDown className="h-4 w-4" />
                 </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                 <DropdownMenuItem>All Roles</DropdownMenuItem>
                 <DropdownMenuItem>Admin</DropdownMenuItem>
                 <DropdownMenuItem>Manager</DropdownMenuItem>
                 <DropdownMenuItem>Staff</DropdownMenuItem>
                 <DropdownMenuItem>Security</DropdownMenuItem>
                 <DropdownMenuItem>Accountant</DropdownMenuItem>
               </DropdownMenuContent>
             </DropdownMenu>
             <div className="relative">
               <Input
                 placeholder="Search users"
                 className="w-64 pr-10"
               />
               <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
             </div>
           </div>
         </div>
       </CardHeader>
       <CardContent>
         {/* Table Header */}
         <div className="grid grid-cols-6 gap-4 py-3 text-sm font-medium text-gray-500 border-b">
           <div>USER ID</div>
           <div>NAME</div>
           <div>ROLE</div>
           <div>ASSIGNED BY</div>
           <div>ASSIGNED ON</div>
           <div>ACTIONS</div>
         </div>

         {/* Table Rows */}
         <div className="space-y-1">
           {currentAssignments.map((assignment) => (
             <div key={assignment.id} className="grid grid-cols-6 gap-4 py-4 items-center hover:bg-gray-50 rounded-lg">
               <div className="text-blue-600 font-medium">{assignment.id}</div>
               <div className="flex items-center gap-3">
                 <Avatar className="h-8 w-8">
                   <AvatarImage src="/api/placeholder/32/32" />
                   <AvatarFallback>
                     {assignment.name.split(' ').map(n => n[0]).join('')}
                   </AvatarFallback>
                 </Avatar>
                 <div>
                   <div className="font-medium text-gray-900">{assignment.name}</div>
                   <div className="text-sm text-gray-500">{assignment.email}</div>
                 </div>
               </div>
               <div>
                 <Badge className={assignment.roleColor}>
                   {assignment.role}
                 </Badge>
               </div>
               <div className="text-sm text-gray-600">{assignment.assignedBy}</div>
               <div className="text-sm text-gray-600">{assignment.assignedOn}</div>
               <div className="flex items-center gap-2">
                 <Button variant="ghost" size="sm" className="text-blue-600 hover:text-white cursor-pointer">
                   <Edit className="h-4 w-4 mr-1" />
                   Change
                 </Button>
                 <Button variant="ghost" size="sm" className="text-red-600 hover:text-white hover:bg-red-500 cursor-pointer">
                   <Trash2 className="h-4 w-4 mr-1" />
                   Revoke
                 </Button>
               </div>
             </div>
           ))}
         </div>

         {/* Pagination */}
         <div className="flex items-center justify-between mt-6 pt-4 border-t">
           <div className="text-sm text-gray-600">
             Showing 1 to 5 of 12 results
           </div>
           <div className="flex items-center gap-2">
             <Button variant="outline" size="sm">
               <ChevronLeft className="h-4 w-4" />
             </Button>
             <Button variant="outline" size="sm" className="bg-primary text-white cursor-pointer">
               1
             </Button>
             <Button variant="outline" size="sm" className="cursor-pointer">
               2
             </Button>
             <Button variant="outline" size="sm" className="cursor-pointer">
               3
             </Button>
             <Button variant="outline" size="sm" className="cursor-pointer">
               <ChevronRight className="h-4 w-4" />
             </Button>
           </div>
         </div>
       </CardContent>
     </Card>
   </div>
 );
};

export default SocietyRolesTab;
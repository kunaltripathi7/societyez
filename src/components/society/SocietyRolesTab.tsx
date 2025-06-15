import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
 ChevronRight,
 Users,
 UserPlus
} from 'lucide-react';

const SocietyRolesTab = () => {
 const [selectedRole, setSelectedRole] = useState('');
 const [remarks, setRemarks] = useState('');
 const [searchUser, setSearchUser] = useState('');
 const [filterRole, setFilterRole] = useState('all');
 const [searchAssignments, setSearchAssignments] = useState('');

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

 const handleAssignRole = () => {
   // Handle role assignment logic here
   console.log('Assigning role:', selectedRole, 'to user:', searchUser);
 };

 const handleRoleFilter = (role) => {
   setFilterRole(role);
 };

 const filteredAssignments = currentAssignments.filter(assignment => {
   const matchesRole = filterRole === 'all' || assignment.role.toLowerCase() === filterRole.toLowerCase();
   const matchesSearch = assignment.name.toLowerCase().includes(searchAssignments.toLowerCase()) ||
                        assignment.email.toLowerCase().includes(searchAssignments.toLowerCase()) ||
                        assignment.id.toLowerCase().includes(searchAssignments.toLowerCase());
   return matchesRole && matchesSearch;
 });

 return (
   <div className="min-h-screen bg-gray-50/50 p-3 sm:p-4 lg:p-6">
     <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
       {/* Header */}
       <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
         <div className="space-y-1">
           <div className="flex items-center gap-2">
             <Users className="h-6 w-6 text-blue-600" />
             <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">Role Management</h1>
           </div>
           <p className="text-sm sm:text-base text-gray-600">Assign and manage roles for users in this society.</p>
         </div>
         <Button variant="outline" size="sm" className="flex items-center gap-2 self-start shrink-0">
           <HelpCircle className="h-4 w-4" />
           <span className="hidden sm:inline">Role definitions</span>
           <span className="sm:hidden">Help</span>
         </Button>
       </div>

       {/* Assign New Role Card */}
       <Card className="shadow-sm">
         <CardHeader className="pb-4">
           <CardTitle className="flex items-center gap-2 text-lg">
             <UserPlus className="h-5 w-5 text-blue-600" />
             Assign New Role
           </CardTitle>
         </CardHeader>
         <CardContent className="space-y-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
             <div className="space-y-2">
               <label className="text-sm font-medium text-gray-700">Select Role</label>
               <div className="flex flex-col sm:flex-row gap-2">
                 <Select value={selectedRole} onValueChange={setSelectedRole}>
                   <SelectTrigger className="flex-1">
                     <SelectValue placeholder="Select a role" />
                   </SelectTrigger>
                   <SelectContent>
                     {roles.map((role) => (
                       <SelectItem key={role.id} value={role.id}>
                         <div className="flex items-center gap-2">
                           <div className={`w-2 h-2 rounded-full ${role.color.split(' ')[0]}`}></div>
                           {role.label}
                         </div>
                       </SelectItem>
                     ))}
                   </SelectContent>
                 </Select>
                 <Button 
                   onClick={handleAssignRole}
                   className="bg-blue-600 hover:bg-blue-700 shrink-0 sm:w-auto w-full"
                   disabled={!selectedRole || !searchUser}
                 >
                   <UserPlus className="h-4 w-4 mr-2" />
                   Assign Role
                 </Button>
               </div>
             </div>
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
               className="min-h-[80px] resize-none"
             />
           </div>
         </CardContent>
       </Card>

       {/* Current Role Assignments */}
       <Card className="shadow-sm">
         <CardHeader className="pb-4">
           <div className="flex flex-col gap-4">
             <CardTitle className="text-lg">Current Role Assignments ({filteredAssignments.length})</CardTitle>
             
             {/* Filters - Mobile First */}
             <div className="flex flex-col sm:flex-row gap-3">
               <DropdownMenu>
                 <DropdownMenuTrigger asChild>
                   <Button variant="outline" size="sm" className="flex items-center gap-2 justify-between sm:w-auto w-full">
                     <span>{filterRole === 'all' ? 'All Roles' : roles.find(r => r.id === filterRole)?.label || 'All Roles'}</span>
                     <ChevronDown className="h-4 w-4" />
                   </Button>
                 </DropdownMenuTrigger>
                 <DropdownMenuContent align="start" className="w-48">
                   <DropdownMenuItem onClick={() => handleRoleFilter('all')}>
                     All Roles
                   </DropdownMenuItem>
                   {roles.map(role => (
                     <DropdownMenuItem key={role.id} onClick={() => handleRoleFilter(role.id)}>
                       <div className="flex items-center gap-2">
                         <div className={`w-2 h-2 rounded-full ${role.color.split(' ')[0]}`}></div>
                         {role.label}
                       </div>
                     </DropdownMenuItem>
                   ))}
                 </DropdownMenuContent>
               </DropdownMenu>
               
               <div className="relative flex-1 sm:max-w-xs">
                 <Input
                   placeholder="Search users..."
                   value={searchAssignments}
                   onChange={(e) => setSearchAssignments(e.target.value)}
                   className="pr-10"
                 />
                 <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
               </div>
             </div>
           </div>
         </CardHeader>
         
         <CardContent className="p-0">
           {/* Desktop Table */}
           <div className="hidden lg:block">
             <div className="px-6 py-3 bg-gray-50/50 border-b">
               <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                 <div className="col-span-2">User ID</div>
                 <div className="col-span-3">Name</div>
                 <div className="col-span-2">Role</div>
                 <div className="col-span-2">Assigned By</div>
                 <div className="col-span-2">Assigned On</div>
                 <div className="col-span-1">Actions</div>
               </div>
             </div>
             
             <div className="divide-y divide-gray-100">
               {filteredAssignments.map((assignment) => (
                 <div key={assignment.id} className="px-6 py-4 hover:bg-gray-50/50 transition-colors">
                   <div className="grid grid-cols-12 gap-4 items-center">
                     <div className="col-span-2">
                       <span className="text-blue-600 font-medium text-sm">{assignment.id}</span>
                     </div>
                     <div className="col-span-3">
                       <div className="flex items-center gap-3">
                         <Avatar className="h-8 w-8 shrink-0">
                           <AvatarFallback className="text-xs">
                             {assignment.name.split(' ').map(n => n[0]).join('')}
                           </AvatarFallback>
                         </Avatar>
                         <div className="min-w-0">
                           <div className="font-medium text-gray-900 text-sm truncate">{assignment.name}</div>
                           <div className="text-xs text-gray-500 truncate">{assignment.email}</div>
                         </div>
                       </div>
                     </div>
                     <div className="col-span-2">
                       <Badge className={`${assignment.roleColor} text-xs`}>
                         {assignment.role}
                       </Badge>
                     </div>
                     <div className="col-span-2">
                       <span className="text-xs text-gray-600">{assignment.assignedBy}</span>
                     </div>
                     <div className="col-span-2">
                       <span className="text-xs text-gray-600">{assignment.assignedOn}</span>
                     </div>
                     <div className="col-span-1">
                       <DropdownMenu>
                         <DropdownMenuTrigger>
                           <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                             <ChevronDown className="h-4 w-4" />
                           </Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent align="end">
                           <DropdownMenuItem className="text-blue-600">
                             <Edit className="h-4 w-4 mr-2 hover:text-white" />
                             Change Role
                           </DropdownMenuItem>
                           <DropdownMenuItem className="text-red-600" variant='destructive'>
                             <Trash2 className="h-4 w-4 mr-2 hover:text-white" />
                             Revoke Access
                           </DropdownMenuItem>
                         </DropdownMenuContent>
                       </DropdownMenu>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Tablet View */}
           <div className="hidden md:block lg:hidden px-4">
             <div className="space-y-3">
               {filteredAssignments.map((assignment) => (
                 <div key={assignment.id} className="bg-white border rounded-lg p-4 hover:shadow-sm transition-shadow">
                   <div className="flex items-start justify-between gap-4">
                     <div className="flex items-center gap-3 flex-1 min-w-0">
                       <Avatar className="h-10 w-10 shrink-0">
                         <AvatarFallback className="text-sm">
                           {assignment.name.split(' ').map(n => n[0]).join('')}
                         </AvatarFallback>
                       </Avatar>
                       <div className="min-w-0 flex-1">
                         <div className="flex items-center gap-2 mb-1">
                           <span className="font-medium text-gray-900 truncate">{assignment.name}</span>
                           <Badge className={`${assignment.roleColor} text-xs shrink-0`}>
                             {assignment.role}
                           </Badge>
                         </div>
                         <div className="text-sm text-gray-500 truncate">{assignment.email}</div>
                         <div className="text-xs text-gray-400 mt-1">
                           {assignment.id} • Assigned by {assignment.assignedBy} • {assignment.assignedOn}
                         </div>
                       </div>
                     </div>
                     <DropdownMenu>
                       <DropdownMenuTrigger>
                         <Button variant="ghost" size="sm" className="shrink-0">
                           <ChevronDown className="h-4 w-4" />
                         </Button>
                       </DropdownMenuTrigger>
                       <DropdownMenuContent align="end">
<DropdownMenuItem className="text-blue-600">
                             <Edit className="h-4 w-4 mr-2 hover:text-white" />
                             Change Role
                           </DropdownMenuItem>
                           <DropdownMenuItem className="text-red-600" variant='destructive'>
                             <Trash2 className="h-4 w-4 mr-2 hover:text-white" />
                             Revoke Access
                           </DropdownMenuItem>
                       </DropdownMenuContent>
                     </DropdownMenu>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Mobile Cards */}
           <div className="md:hidden px-4">
             <div className="space-y-3">
               {filteredAssignments.map((assignment) => (
                 <Card key={assignment.id} className="shadow-sm">
                   <CardContent className="p-4">
                     <div className="flex items-start gap-3 mb-3">
                       <Avatar className="h-10 w-10 shrink-0">
                         <AvatarFallback className="text-sm">
                           {assignment.name.split(' ').map(n => n[0]).join('')}
                         </AvatarFallback>
                       </Avatar>
                       <div className="flex-1 min-w-0">
                         <div className="font-medium text-gray-900 mb-1">{assignment.name}</div>
                         <div className="text-sm text-gray-500 truncate mb-2">{assignment.email}</div>
                         <Badge className={`${assignment.roleColor} text-xs`}>
                           {assignment.role}
                         </Badge>
                       </div>
                     </div>
                     
                     <div className="space-y-1 mb-4 text-xs text-gray-500">
                       <div>ID: {assignment.id}</div>
                       <div>Assigned by: {assignment.assignedBy}</div>
                       <div>Assigned on: {assignment.assignedOn}</div>
                     </div>
                     
                     <div className="flex gap-2">
                       <Button variant="outline" size="sm" className="flex-1 text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                         <Edit className="h-4 w-4 mr-1" />
                         Change
                       </Button>
                       <Button variant="outline" size="sm" className="flex-1 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-600">
                         <Trash2 className="h-4 w-4 mr-1" />
                         Revoke
                       </Button>
                     </div>
                   </CardContent>
                 </Card>
               ))}
             </div>
           </div>

           {/* Empty State */}
           {filteredAssignments.length === 0 && (
             <div className="text-center py-12 px-4">
               <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
               <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
               <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
             </div>
           )}

           {/* Pagination */}
           {filteredAssignments.length > 0 && (
             <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 border-t bg-gray-50/50 gap-4">
               <div className="text-sm text-gray-600 text-center sm:text-left">
                 Showing 1 to {Math.min(5, filteredAssignments.length)} of {filteredAssignments.length} results
               </div>
               <div className="flex items-center justify-center gap-1">
                 <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                   <ChevronLeft className="h-4 w-4" />
                 </Button>
                 <Button variant="outline" size="sm" className="h-8 px-3 bg-blue-600 text-white border-blue-600">
                   1
                 </Button>
                 <Button variant="outline" size="sm" className="h-8 px-3">
                   2
                 </Button>
                 <Button variant="outline" size="sm" className="h-8 px-3">
                   3
                 </Button>
                 <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                   <ChevronRight className="h-4 w-4" />
                 </Button>
               </div>
             </div>
           )}
         </CardContent>
       </Card>
     </div>
   </div>
 );
};

export default SocietyRolesTab;
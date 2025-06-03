import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Search, Plus, RotateCcw, Calendar, ChevronUp, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface Society {
  id: string
  name: string
  address: string
  dueDate: string
  daysLeft: string
  lastReminderSent: string
  status: 'Active' | 'Inactive' | 'Overdue' | 'No dues'
}

const mockSocieties: Society[] = [
  {
    id: '1',
    name: 'Green Meadows',
    address: '12 Oak Street, Downtown',
    dueDate: '22 Jun 2025',
    daysLeft: '7 days left',
    lastReminderSent: '15 Jun 2025',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Sunrise Estate',
    address: '45 Valley Road, Eastside',
    dueDate: '10 Jun 2025',
    daysLeft: 'Overdue by 3 days',
    lastReminderSent: '08 Jun 2025',
    status: 'Overdue'
  },
  {
    id: '3',
    name: 'Lakeview Condos',
    address: '88 Lake Ave, Uptown',
    dueDate: '01 Jul 2025',
    daysLeft: 'No dues',
    lastReminderSent: '-',
    status: 'No dues'
  },
  {
    id: '4',
    name: 'Heritage Towers',
    address: '120 Museum Lane, Midtown',
    dueDate: '18 Jun 2025',
    daysLeft: '14 days left',
    lastReminderSent: '10 Jun 2025',
    status: 'Active'
  }
]

const Societies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState<string>('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const navigate = useNavigate();

  const getStatusBadge = (status: Society['status']) => {
    const statusConfig = {
      'Active': 'bg-green-100 text-green-700 hover:bg-green-100',
      'Inactive': 'bg-gray-100 text-gray-700 hover:bg-gray-100',
      'Overdue': 'bg-red-100 text-red-700 hover:bg-red-100',
      'No dues': 'bg-blue-100 text-blue-700 hover:bg-blue-100'
    }
    return statusConfig[status]
  }

  const getDaysLeftColor = (daysLeft: string) => {
    if (daysLeft.includes('Overdue')) return 'text-red-600'
    if (daysLeft.includes('No dues')) return 'text-blue-600'
    return 'text-green-600'
  }

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const SortIcon = ({ field }: { field: string }) => {
    if (sortField !== field) return null
    return sortDirection === 'asc' ? 
      <ChevronUp className="h-4 w-4 ml-1" /> : 
      <ChevronDown className="h-4 w-4 ml-1" />
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Societies</h1>
        <Button className="bg-primary hover:bg-primary/90 cursor-pointer" onClick={() => navigate("/home")}>
          <Plus className="h-4 w-4 mr-2" />
          Add Society
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Search */}
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name or address"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Status Filter */}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
              <SelectItem value="Overdue">Overdue</SelectItem>
              <SelectItem value="No dues">No dues</SelectItem>
            </SelectContent>
          </Select>

          {/* Date Filters */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="date"
                placeholder="dd-mm-yyyy"
                className="pl-8 w-40"
              />
            </div>
            <span className="text-gray-500">-</span>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="date"
                placeholder="dd-mm-yyyy"
                className="pl-8 w-40"
              />
            </div>
          </div>

          {/* Reset Filters */}
          <Button variant="outline" size="sm" className='cursor-pointer' onClick={() => {
            setSearchTerm('');
            setStatusFilter('All');
            setCurrentPage(1);
          }}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset filters
          </Button>
        </div>
      </Card>

      {/* Table */}
      <Card className='px-2'>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead 
                className="cursor-pointer select-none"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center">
                  Society Name
                  <SortIcon field="name" />
                </div>
              </TableHead>
              <TableHead>Address</TableHead>
              <TableHead 
                className="cursor-pointer select-none"
                onClick={() => handleSort('dueDate')}
              >
                <div className="flex items-center">
                  Due Date
                  <SortIcon field="dueDate" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer select-none"
                onClick={() => handleSort('daysLeft')}
              >
                <div className="flex items-center">
                  Days Left
                  <SortIcon field="daysLeft" />
                </div>
              </TableHead>
              <TableHead>Last Reminder Sent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right pr-14">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSocieties.map((society) => (
              <TableRow key={society.id} className="hover:bg-gray-50/50">
                <TableCell className="font-medium text-primary cursor-pointer hover:underline">
                  {society.name}
                </TableCell>
                <TableCell className="text-gray-600">{society.address}</TableCell>
                <TableCell>{society.dueDate}</TableCell>
                <TableCell className={getDaysLeftColor(society.daysLeft)}>
                  {society.daysLeft}
                </TableCell>
                <TableCell className="text-gray-600">{society.lastReminderSent}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusBadge(society.status)}>
                    {society.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" className="bg-primary hover:bg-accent text-white cursor-pointer">
                    Send Reminder
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 whitespace-nowrap ">
          Showing 1-4 of 24 societies
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            <PaginationItem className='cursor-pointer'>
              <PaginationLink 
          onClick={() => setCurrentPage(1)} 
          isActive={currentPage === 1}
          className={currentPage === 1 ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}
              >
          1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className='cursor-pointer'>
              <PaginationLink 
          onClick={() => setCurrentPage(2)} 
          isActive={currentPage === 2}
          className={currentPage === 2 ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}
              >
          2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext 
          onClick={() => setCurrentPage(currentPage + 1)}
          className="cursor-pointer"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default Societies;
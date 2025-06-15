import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Search, Plus, RotateCcw, Calendar, ChevronUp, ChevronDown, MapPin, Clock, Bell } from 'lucide-react'

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
    dueDate: '2025-06-22',
    daysLeft: '7 days left',
    lastReminderSent: '2025-06-15',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Sunrise Estate',
    address: '45 Valley Road, Eastside',
    dueDate: '2025-06-10',
    daysLeft: 'Overdue by 3 days',
    lastReminderSent: '2025-06-08',
    status: 'Overdue'
  },
  {
    id: '3',
    name: 'Lakeview Condos',
    address: '88 Lake Ave, Uptown',
    dueDate: '2025-07-01',
    daysLeft: 'No dues',
    lastReminderSent: '-',
    status: 'No dues'
  },
  {
    id: '4',
    name: 'Heritage Towers',
    address: '120 Museum Lane, Midtown',
    dueDate: '2025-06-18',
    daysLeft: '14 days left',
    lastReminderSent: '2025-06-10',
    status: 'Active'
  },
  {
    id: '5',
    name: 'Palm Gardens',
    address: '75 Palm Avenue, Westside',
    dueDate: '2025-06-25',
    daysLeft: '10 days left',
    lastReminderSent: '2025-06-12',
    status: 'Active'
  },
  {
    id: '6',
    name: 'Royal Heights',
    address: '200 King Street, Central',
    dueDate: '2025-06-05',
    daysLeft: 'Overdue by 10 days',
    lastReminderSent: '2025-06-03',
    status: 'Overdue'
  }
]

const Societies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState<string>('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const itemsPerPage = 4

  // Helper function to format date for display
  const formatDateForDisplay = (dateString: string) => {
    if (dateString === '-') return '-'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    })
  }

  // Helper function to check if date is in range
  const isDateInRange = (dateString: string) => {
    if (!startDate && !endDate) return true
    if (dateString === '-') return true
    
    const date = new Date(dateString)
    const start = startDate ? new Date(startDate) : null
    const end = endDate ? new Date(endDate) : null
    
    if (start && end) {
      return date >= start && date <= end
    } else if (start) {
      return date >= start
    } else if (end) {
      return date <= end
    }
    return true
  }

  // Filter and sort societies based on search term and filters
  const filteredAndSortedSocieties = useMemo(() => {
    const filtered = mockSocieties.filter(society => {
      const matchesSearch = searchTerm === '' || 
        society.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        society.address.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = statusFilter === 'All' || society.status === statusFilter
      const matchesDateRange = isDateInRange(society.dueDate)
      
      return matchesSearch && matchesStatus && matchesDateRange
    })

    // Sort the filtered results
    if (sortField) {
      filtered.sort((a, b) => {
        let aValue: any = a[sortField as keyof Society]
        let bValue: any = b[sortField as keyof Society]
        
        // Special handling for date sorting
        if (sortField === 'dueDate') {
          aValue = new Date(aValue).getTime()
          bValue = new Date(bValue).getTime()
        }
        
        // Handle string comparison
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          aValue = aValue.toLowerCase()
          bValue = bValue.toLowerCase()
        }
        
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
        return 0
      })
    }

    return filtered
  }, [searchTerm, statusFilter, sortField, sortDirection, startDate, endDate])

  // Paginate the filtered results
  const paginatedSocieties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredAndSortedSocieties.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredAndSortedSocieties, currentPage])

  const totalPages = Math.ceil(filteredAndSortedSocieties.length / itemsPerPage)

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

  const handleReset = () => {
    setSearchTerm('')
    setStatusFilter('All')
    setCurrentPage(1)
    setSortField('')
    setSortDirection('asc')
    setStartDate('')
    setEndDate('')
  }

  const handleSendReminder = (societyId: string, societyName: string) => {
    // Mock function for sending reminder
    alert(`Reminder sent to ${societyName}`)
  }

  const SortIcon = ({ field }: { field: string }) => {
    if (sortField !== field) return null
    return sortDirection === 'asc' ? 
      <ChevronUp className="h-4 w-4 ml-1" /> : 
      <ChevronDown className="h-4 w-4 ml-1" />
  }

  // Mobile Card Component
  const SocietyCard = ({ society }: { society: Society }) => (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-blue-600 hover:underline cursor-pointer">
              {society.name}
            </h3>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="truncate">{society.address}</span>
            </div>
          </div>
          <Badge variant="secondary" className={`${getStatusBadge(society.status)} ml-2 flex-shrink-0`}>
            {society.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-gray-600">Due Date:</span>
            </div>
            <span className="font-medium">{formatDateForDisplay(society.dueDate)}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-gray-600">Days Left:</span>
            </div>
            <span className={`font-medium ${getDaysLeftColor(society.daysLeft)}`}>
              {society.daysLeft}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Bell className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-gray-600">Last Reminder:</span>
            </div>
            <span className="font-medium text-gray-600">
              {formatDateForDisplay(society.lastReminderSent)}
            </span>
          </div>
          
          <div className="pt-2 border-t">
            <Button 
              size="sm" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => handleSendReminder(society.id, society.name)}
            >
              Send Reminder
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Societies</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Add Society
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="space-y-4">
          {/* Search - Full width on mobile */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name or address"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1) // Reset to first page when searching
              }}
              className="pl-10"
            />
          </div>

          {/* Row 2: Status and Reset */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={statusFilter} onValueChange={(value) => {
              setStatusFilter(value)
              setCurrentPage(1) // Reset to first page when filtering
            }}>
              <SelectTrigger className="w-full sm:w-40">
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

            <Button 
              variant="outline" 
              size="sm" 
              className="cursor-pointer w-full sm:w-auto" 
              onClick={handleReset}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset filters
            </Button>
          </div>

          {/* Row 3: Date Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="w-full sm:w-40">
              <Input
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full"
              />
            </div>
            <span className="text-gray-500 hidden sm:inline">to</span>
            <div className="w-full sm:w-40">
              <Input
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Search Results Info */}
      {(searchTerm || statusFilter !== 'All' || startDate || endDate) && (
        <div className="text-sm text-gray-600">
          {filteredAndSortedSocieties.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No societies found matching your search criteria.</p>
              {searchTerm && (
                <p className="text-sm text-gray-400 mt-1">
                  Try searching for "{searchTerm}" with different filters or check the spelling.
                </p>
              )}
            </div>
          ) : (
            <p>
              Found {filteredAndSortedSocieties.length} society{filteredAndSortedSocieties.length !== 1 ? 'ies' : ''} 
              {searchTerm && ` matching "${searchTerm}"`}
              {statusFilter !== 'All' && ` with status "${statusFilter}"`}
              {(startDate || endDate) && ` within date range`}
            </p>
          )}
        </div>
      )}

      {/* Mobile Cards View (hidden on lg and up) */}
      <div className="block lg:hidden">
        {paginatedSocieties.map((society) => (
          <SocietyCard key={society.id} society={society} />
        ))}
      </div>

      {/* Desktop Table View (hidden on mobile, shown on lg and up) */}
      <Card className="px-2 hidden lg:block">
        <div className="w-full">
          <div className="bg-gray-50/50">
            <div className="grid grid-cols-7 gap-4 p-3 text-sm font-medium text-gray-700">
              <div 
                className="cursor-pointer select-none hover:bg-gray-100/50 p-2 rounded flex items-center"
                onClick={() => handleSort('name')}
              >
                Society Name
                <SortIcon field="name" />
              </div>
              <div className="p-2">Address</div>
              <div 
                className="cursor-pointer select-none hover:bg-gray-100/50 p-2 rounded flex items-center"
                onClick={() => handleSort('dueDate')}
              >
                Due Date
                <SortIcon field="dueDate" />
              </div>
              <div className="p-2">Days Left</div>
              <div className="p-2">Last Reminder Sent</div>
              <div className="p-2">Status</div>
              <div className="p-2 text-right pr-14">Actions</div>
            </div>
          </div>
          <div className="divide-y">
            {paginatedSocieties.map((society) => (
              <div key={society.id} className="grid grid-cols-7 gap-4 p-3 hover:bg-gray-50/50 items-center">
                <div className="font-medium text-blue-600 cursor-pointer hover:underline">
                  {society.name}
                </div>
                <div className="text-gray-600 text-sm">{society.address}</div>
                <div>{formatDateForDisplay(society.dueDate)}</div>
                <div className={getDaysLeftColor(society.daysLeft)}>
                  {society.daysLeft}
                </div>
                <div className="text-gray-600">{formatDateForDisplay(society.lastReminderSent)}</div>
                <div>
                  <Badge variant="secondary" className={getStatusBadge(society.status)}>
                    {society.status}
                  </Badge>
                </div>
                <div className="text-right">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleSendReminder(society.id, society.name)}
                  >
                    Send Reminder
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Footer */}
      {filteredAndSortedSocieties.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500 text-center sm:text-left">
            Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, filteredAndSortedSocieties.length)} of {filteredAndSortedSocieties.length} societies
          </div>
          
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
                {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                  const pageNum = i + 1
                  return (
                    <PaginationItem key={pageNum} className="cursor-pointer">
                      <PaginationLink 
                        onClick={() => setCurrentPage(pageNum)} 
                        isActive={currentPage === pageNum}
                        className={currentPage === pageNum ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  )
                })}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      )}
    </div>
  )
}

export default Societies;
import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { BanknoteArrowUp, BanknoteArrowDown, Scale, Calendar, Building2, FileText, TrendingUp, Wallet } from 'lucide-react';

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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { ArrowLeft, Download, Search } from 'lucide-react'

// TypeScript interfaces
interface LedgerEntry {
  id: string
  date: string
  description: string
  societyId: string,
  societyName: string,
  type: 'Credit' | 'Debit'
  amount: number
  balance: number
}

interface LedgerSummary {
  totalCredits: number
  totalDebits: number
  closingBalance: number
}

// Mock data
const mockLedgerData: LedgerEntry[] = [
  {
    id: '1',
    date: '2025-06-01',
    societyId: '1',
    societyName: 'Greenwood Society',
    description: 'Maintenance Fee',
    type: 'Credit',
    amount: 5000,
    balance: 69500
  },
  {
    id: '2',
    date: '2025-05-30',
    societyId: '2',
    societyName: 'Bluewater Society',
    description: 'Security Expenses',
    type: 'Debit',
    amount: 2000,
    balance: 64500
  },
  {
    id: '3',
    date: '2025-05-28',
    societyId: '3',
    societyName: 'Lakeside Society',
    description: 'Interest Received',
    type: 'Credit',
    amount: 500,
    balance: 66500
  },
  {
    id: '4',
    date: '2025-05-25',
    societyId: '4',
    societyName: 'Riverside Society',
    description: 'Electricity Charges',
    type: 'Debit',
    amount: 1500,
    balance: 66000
  },
  {
    id: '5',
    date: '2025-05-22',
    societyId: '5',
    societyName: 'Clubhouse Society',
    description: 'Clubhouse Revenue',
    type: 'Credit',
    amount: 1000,
    balance: 67500
  },
  {
    id: '6',
    date: '2025-05-20',
    societyId: '6',
    societyName: 'Water Tanker Society',
    description: 'Water Tanker Payment',
    type: 'Debit',
    amount: 2000,
    balance: 66500
  },
]

const LedgerPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState<string>('All Types')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  const summary: LedgerSummary = useMemo(() => {
    const totalCredits = mockLedgerData
      .filter(entry => entry.type === 'Credit')
      .reduce((sum, entry) => sum + entry.amount, 0)
    
    const totalDebits = mockLedgerData
      .filter(entry => entry.type === 'Debit')
      .reduce((sum, entry) => sum + entry.amount, 0)
    
    return {
      totalCredits,
      totalDebits,
      closingBalance: 69500 
    }
  }, [])

  const filteredData = useMemo(() => {
    return mockLedgerData.filter(entry => {
      const matchesSearch = entry.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = typeFilter === 'All Types' || entry.type === typeFilter
      return matchesSearch && matchesType
    })
  }, [searchTerm, typeFilter])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const formatCurrency = (amount: number) => {
    return `₹ ${amount.toLocaleString()}`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  // Mobile Card Component
  const MobileEntryCard = ({ entry }: { entry: LedgerEntry }) => (
    <Card key={entry.id} className="mb-4 shadow-sm border-l-4 border-l-blue-500">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{formatDate(entry.date)}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">#{entry.societyId}</span>
              <span className="text-sm font-medium">{entry.societyName}</span>
            </div>
          </div>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            entry.type === 'Credit' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {entry.type}
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <FileText className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{entry.description}</span>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Amount</div>
              <div className={`text-sm font-bold ${
                entry.type === 'Credit' ? 'text-green-600' : 'text-red-600'
              }`}>
                {formatCurrency(entry.amount)}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-muted-foreground" />
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Balance</div>
              <div className="text-sm font-bold text-blue-600">
                {formatCurrency(entry.balance)}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className='cursor-pointer hover:text-white'>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl sm:text-2xl font-semibold text-primary">Ledger</h1>
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Select defaultValue="dd-mm-yy">
            <SelectTrigger className="w-full sm:w-32 cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dd-mm-yy">dd-mm-yy</SelectItem>
              <SelectItem value="mm-dd-yy">mm-dd-yy</SelectItem>
              <SelectItem value="yy-mm-dd">yy-mm-dd</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="default" size="sm" className='cursor-pointer'>
            <Download className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Download</span>
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className='flex items-center justify-between'>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Credits
              </CardTitle>
              <BanknoteArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-green-500">{formatCurrency(summary.totalCredits)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className='flex items-center justify-between'>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Debits
              </CardTitle>
              <BanknoteArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-red-500">{formatCurrency(summary.totalDebits)}</div>
          </CardContent>
        </Card>
        
        <Card className="sm:col-span-2 lg:col-span-1">
          <CardHeader className="pb-2">
            <div className='flex items-center justify-between'>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Closing Balance
              </CardTitle>
              <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-green-500">{formatCurrency(summary.closingBalance)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search description"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full sm:w-64"
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Types">All Types</SelectItem>
              <SelectItem value="Credit">Credit</SelectItem>
              <SelectItem value="Debit">Debit</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-muted-foreground">
          Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
        </div>
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="block lg:hidden">
        {paginatedData.length > 0 ? (
          <div className="space-y-4">
            {paginatedData.map((entry) => (
              <MobileEntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="text-muted-foreground">No entries found matching your criteria.</div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <Card className='px-2'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Society ID</TableHead>
                <TableHead>Society Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>{formatDate(entry.date)}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-secondary text-gray-800">
                    #{entry.societyId}
                    </span>
                  </TableCell>
                  <TableCell>{entry.societyName}</TableCell>
                  <TableCell>{entry.description}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                      entry.type === 'Credit' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {entry.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(entry.amount)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(entry.balance)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </div>
        <Pagination>
          <PaginationContent className="flex-wrap">
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default LedgerPage;
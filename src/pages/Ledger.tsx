import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { BanknoteArrowUp, BanknoteArrowDown, Scale  } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className='cursor-pointer hover:text-white' onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-semibold text-primary">Ledger</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="dd-mm-yy">
            <SelectTrigger className="w-32 cursor-pointer">
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
            Download
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className='flex items-center justify-between'>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Credits
            </CardTitle>
          <BanknoteArrowUp className="h-6 w-6 text-green-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(summary.totalCredits)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className='flex items-center justify-between'>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Debits
            </CardTitle>
            <BanknoteArrowDown className="h-6 w-6 text-red-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(summary.totalDebits)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className='flex items-center justify-between'>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Closing Balance
            </CardTitle>
            <Scale className="h-6 w-6 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(summary.closingBalance)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search description"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-32">
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
          Showing 1-10 of {filteredData.length} entries
        </div>
      </div>

      {/* Table */}
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

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </div>
        <Pagination>
          <PaginationContent>
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
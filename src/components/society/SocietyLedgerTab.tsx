import { Download } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardContent } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

function SocietyLedgerTab(): React.ReactNode {
  const transactions = [
    {
      date: "Jan 15, 2025",
      description: "Monthly Maintenance Collection",
      category: "Maintenance",
      financialPeriod: "Mar 2025 - Feb 2026",
      type: "Income",
      amount: "+₹45,000",
    },
    {
      date: "Jan 12, 2025",
      description: "Security Staff Salary",
      category: "Salary",
      financialPeriod: "Mar 2025 - Feb 2026",
      type: "Expense",
      amount: "-₹25,000",
    },
    {
      date: "Jan 10, 2025",
      description: "Electricity Bill Payment",
      category: "Utilities",
      financialPeriod: "Mar 2025 - Feb 2026",
      type: "Expense",
      amount: "-₹18,000",
    },
  ];

  return (
    <div className="p-4">
      {/* Filters and Export */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="January 2025" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="jan2025" className="cursor-pointer">January 2025</SelectItem>
                <SelectItem value="feb2025" className="cursor-pointer">February 2025</SelectItem>
                <SelectItem value="mar2025" className="cursor-pointer">March 2025</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all" className="cursor-pointer">All Categories</SelectItem>
                <SelectItem value="maintenance" className="cursor-pointer">Maintenance</SelectItem>
                <SelectItem value="salary" className="cursor-pointer">Salary</SelectItem>
                <SelectItem value="utilities" className="cursor-pointer">Utilities</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-primary hover:bg-accent flex items-center gap-2 cursor-pointer">
          <Download size={16} />
          Export
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div className="bg-white p-6 rounded-md shadow-sm">
          <div className="text-gray-600 mb-2">Total Income</div>
          <div className="text-green-500 text-2xl font-bold mb-1">
            ₹2,45,000
          </div>
          <div className="text-green-500 text-sm">+12.5% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-sm">
          <div className="text-gray-600 mb-2">Total Expense</div>
          <div className="text-red-500 text-2xl font-bold mb-1">₹1,12,000</div>
          <div className="text-red-500 text-sm">-8.3% from last month</div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-sm">
          <div className="text-gray-600 mb-2">Net Balance</div>
          <div className="text-primary text-2xl font-bold mb-1">
            ₹1,33,000
          </div>
          <div className="text-gray-400 text-sm">Updated today at 2:30 PM</div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-md shadow-sm p-6">
        <h2 className="font-bold text-lg mb-4">Recent Transactions</h2>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>DATE</TableHead>
                <TableHead>DESCRIPTION</TableHead>
                <TableHead>Financial Period</TableHead>
                <TableHead>CATEGORY</TableHead>
                <TableHead>TYPE</TableHead>
                <TableHead className="text-right">AMOUNT</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell className="font-medium text-blue-600">
                    {transaction.description}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {transaction.financialPeriod}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {transaction.category}
                  </TableCell>
                  <TableCell>
                    <span
                      className={
                        transaction.type === "Income"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {transaction.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        transaction.amount.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {transaction.amount}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile and Tablet Cards */}
        <div className="lg:hidden space-y-4">
          {transactions.map((transaction, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="font-medium text-blue-600 truncate">{transaction.description}</div>
                    <div className="text-sm text-muted-foreground">{transaction.date}</div>
                    <div className="text-xs text-muted-foreground mt-1 hidden sm:block">
                      {transaction.financialPeriod}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span
                      className={`text-lg font-semibold ${
                        transaction.amount.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.amount}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    {transaction.category}
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      transaction.type === "Income"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transaction.type}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between mt-4 items-center gap-4">
          <div className="text-sm text-gray-500">
            Showing 1 to 3 of 12 entries
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm" className="bg-primary text-white">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocietyLedgerTab;
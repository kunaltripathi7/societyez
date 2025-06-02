// import { useParams } from "react-router-dom";
import { Download } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

function SocietyLedgerTab(): React.ReactNode {
  // const { id } = useParams<{ id: string }>();

  // Mock transaction data
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
      <div className="flex justify-between mb-6">
        <div className="flex gap-3">
            <Select>
            <SelectTrigger className="w-[180px]">
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
            <SelectTrigger className="w-[180px]">
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
      <div className="grid grid-cols-3 gap-6 mb-8">
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

        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                DATE
              </th>
              <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                DESCRIPTION
              </th>
              <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Financial Period
              </th>
              <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                CATEGORY
              </th>
              <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                TYPE
              </th>
              <th className="text-right py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b">
                <td className="py-4 text-sm">{transaction.date}</td>
                <td className="py-4 text-sm font-medium text-blue-600">
                  {transaction.description}
                </td>
                <td className="py-4 text-sm text-gray-600">
                  {transaction.financialPeriod}
                </td>
                <td className="py-4 text-sm text-gray-600">
                  {transaction.category}
                </td>
                <td className="py-4 text-sm">
                  <span
                    className={
                      transaction.type === "Income"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {transaction.type}
                  </span>
                </td>
                <td className="py-4 text-sm text-right">
                  <span
                    className={
                      transaction.amount.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {transaction.amount}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
              <div className="flex justify-between mt-4 items-center">
        <div className="text-sm text-gray-500">
          Showing 1 to 3 of 12 entries
        </div>
        <div className="flex gap-2 ">
          <Button variant="outline" className="text-sm cursor-pointer">
            Previous
          </Button>
          <Button
            variant="outline"
            className="text-sm bg-primary text-white cursor-pointer"
          >
            1
          </Button>
          <Button variant="outline" className="text-sm cursor-pointer">
            2
          </Button>
          <Button variant="outline" className="text-sm cursor-pointer">
            3
          </Button>
          <Button variant="outline" className="text-sm cursor-pointer">
            Next
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SocietyLedgerTab;

// import { useParams } from "react-router-dom";
import { Download, Plus, Filter } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

interface Payment {
  id: string;
  date: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
  method: string;
}

function SocietyPaymentsTab(): React.ReactNode {
  // const { id } = useParams<{ id: string }>();

  // Mock payments data to match the image
  const payments: Payment[] = [
    {
      id: "#RCP-001",
      date: "Jan 15, 2025",
      amount: "$1,200.00",
      status: "Paid",
      method: "Credit Card",
    },
    {
      id: "#RCP-002",
      date: "Feb 15, 2025",
      amount: "$1,200.00",
      status: "Pending",
      method: "Bank Transfer",
    },
    {
      id: "#RCP-003",
      date: "Mar 15, 2025",
      amount: "$1,200.00",
      status: "Failed",
      method: "Credit Card",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <Button className="flex items-center gap-2 bg-primary hover:bg-accent cursor-pointer">
            <Plus size={16} />
            New Payment
          </Button>
          <Button variant="outline" className="flex items-center gap-2 cursor-pointer">
            Send Reminder
          </Button>
        </div>

        <div className="flex gap-2">
          <Input placeholder="Search payments..." className="w-64" />
          <Button variant="outline" className="flex items-center gap-2 cursor-pointer">
            <Filter size={16} />
            Filter
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Receipt ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Method
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {payment.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : payment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.method}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-white cursor-pointer"
                  >
                    <Download size={16} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
  );
}

export default SocietyPaymentsTab;

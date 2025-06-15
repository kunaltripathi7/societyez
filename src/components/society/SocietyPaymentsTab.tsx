import { Download, Plus, Filter } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

interface Payment {
  id: string;
  date: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
  method: string;
}

function SocietyPaymentsTab(): React.ReactNode {
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
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Button className="flex items-center gap-2 bg-primary hover:bg-accent">
            <Plus size={16} />
            New Payment
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Send Reminder
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Input placeholder="Search payments..." className="sm:w-64" />
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Receipt ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.id}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Download size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {payments.map((payment) => (
          <Card key={payment.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-medium">{payment.id}</div>
                  <div className="text-sm text-muted-foreground">{payment.date}</div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download size={16} />
                </Button>
              </div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">{payment.amount}</span>
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
              </div>
              
              <div className="text-sm text-muted-foreground">
                Payment Method: {payment.method}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between mt-4 items-center gap-4">
        <div className="text-sm text-muted-foreground">
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
  );
}

export default SocietyPaymentsTab;
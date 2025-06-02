// import { useParams } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react";
import { DatePicker } from "../ui/datePicker";


function SocietySubscriptionTab(): React.ReactNode {
  // const { id } = useParams<{ id: string }>();
   const [date, setDate] = React.useState<Date>();

  // Mock subscription history data
  const subscriptionHistory = [
    {
      date: "Jan 15, 2025",
      plan: "Premium Quarterly",
      amount: "$299",
      status: "Paid",
    },
    {
      date: "Oct 15, 2024",
      plan: "Premium Quarterly",
      amount: "$299",
      status: "Paid",
    },
  ];

  const subscriptionPlans = [2, 7, 15, 30, 60, 90, 180].map((days) => ({
    label: `${days} Day${days > 1 ? "s" : ""}`,
    value: days,
  }));

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-8">
        {/* Current Subscription Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Current Subscription</h2>

          <div className="bg-orange-50 border border-orange-100 rounded-md p-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-primary font-medium">
                  Premium Quarterly Plan
                </h3>
                <p className="text-sm text-gray-600">
                  Valid until March 15, 2025
                </p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
                Active
              </span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <Check size={18} className="text-green-500" />
              <span>Unlimited users</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} className="text-green-500" />
              <span>Advanced analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} className="text-green-500" />
              <span>Priority support</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="bg-primary hover:bg-accent cursor-pointer">
              Upgrade Plan
            </Button>
            <Button variant="outline" className="cursor-pointer">
              Cancel Subscription
            </Button>
          </div>
        </div>

        {/* Assign Demo Access Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Assign Demo Access</h2>

          <div className="space-y-4">
            <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Duration
  </label>
  <Select>
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select duration" />
    </SelectTrigger>
    <SelectContent>
      {subscriptionPlans.map((plan) => (
        <SelectItem 
          key={plan.value} 
          value={plan.value.toString()}
          className="cursor-pointer"
        >
          {plan.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>

             <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <DatePicker date={date} setDate={setDate} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Features
              </label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="basic-features" defaultChecked />
                  <label htmlFor="basic-features" className="cursor-pointer">Basic features</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="premium-features" defaultChecked />
                  <label htmlFor="premium-features" className="cursor-pointer">Premium features</label>
                </div>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-accent mt-4 cursor-pointer">
              Assign Demo Access
            </Button>
          </div>
        </div>
      </div>

      {/* Subscription History Section */}
      <div className="mt-8">
        <h2 className="font-bold text-lg mb-4">Subscription History</h2>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscriptionHistory.map((entry, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {entry.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  {entry.plan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {entry.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SocietySubscriptionTab;

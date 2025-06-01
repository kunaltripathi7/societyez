import React from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search } from "lucide-react";

import Navbar from "../../components/Navbar"; 
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { toast } from "sonner";

const societyFormSchema = z.object({
  societyName: z.string().min(1, { message: "Society name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  pincode: z.string().min(1, { message: "Pincode is required" }),
  committeeMemberName: z
    .string()
    .min(1, { message: "Committee member name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Please enter a valid phone number" }),
});

type SocietyFormValues = z.infer<typeof societyFormSchema>;

interface Society {
  id: number;
  name: string;
  location: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");

  const form = useForm<SocietyFormValues>({
    resolver: zodResolver(societyFormSchema),
    defaultValues: {
      societyName: "",
      address: "",
      city: "",
      pincode: "",
      committeeMemberName: "",
      email: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: SocietyFormValues) {
    console.log("Society created:", values);
    toast.success("Society created successfully!");
    form.reset();
  }

  const handleSocietyClick = (societyId: number) => {
    navigate(`/society/${societyId}`);
  };

  const societies: Society[] = Array.from({ length: 20 }, (_, i) => {
    const locations = [
      "Mumbai, Maharashtra",
      "Pune, Maharashtra",
      "Bangalore, Karnataka",
      "Delhi, NCR",
      "Chennai, Tamil Nadu",
      "Hyderabad, Telangana",
      "Kolkata, West Bengal",
    ];

    const names = [
      "Sunshine Residency",
      "Green Valley Apartments",
      "Royal Heights",
      "Serenity Gardens",
      "Harmony Towers",
      "Paradise Enclave",
      "Riverside View",
    ];

    return {
      id: i + 1,
      name: `${names[i % names.length]} ${Math.floor(i / names.length) + 1}`,
      location: locations[i % locations.length],
    };
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Using the Navbar component with the active page set to "home" */}
      <Navbar activePage="home" userRole="SuperAdmin" />

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">
                Create New Society
              </h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="societyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Society Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter society name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter city" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pincode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pincode</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter pincode" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="committeeMemberName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Committee Member Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter committee member name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter email address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Create Society
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Existing Societies */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">
                Existing Societies
              </h2>

              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    type="search"
                    className="pl-10"
                    placeholder="Search societies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Scrollable area using shadcn ScrollArea */}
              <ScrollArea className="h-96">
                <div className="space-y-2 pr-2">
                  {societies
                    .filter(
                      (society) =>
                        society.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        society.location
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                    )
                    .map((society) => (
                      <div
                        key={society.id}
                        className="border border-slate-200 rounded-md hover:border-orange-300 cursor-pointer transition-colors relative"
                        onClick={() => handleSocietyClick(society.id)}
                      >
                        <div className="p-4">
                          <h3 className="font-medium text-slate-800">
                            {society.name}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {society.location}
                          </p>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-slate-400"
                          >
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                      </div>
                    ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;

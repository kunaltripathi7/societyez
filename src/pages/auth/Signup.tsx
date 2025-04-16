import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Checkbox } from "../../components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import { toast } from "sonner";

const formSchema = z
  .object({
    fullName: z.string().min(3, { message: "Full name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password" }),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept terms and conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const Signup = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically register the user
    // For demo purposes, let's just navigate to login
    navigate("/");
    toast.success("Account created successfully!");
  }

  return (
    <div className="flex h-screen">
      <Carousel />

      <div className="w-full lg:w-[40%] flex flex-col justify-center mx-auto p-5 sm:p-8 md:p-16 lg:p-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex mb-8">
            <div className="w-8 h-5 bg-orange-500 transform skew-x-[-20deg] mr-1"></div>
            <div className="w-8 h-5 bg-slate-900 transform skew-x-[-20deg]"></div>
          </div>

          <div className="space-y-2 mb-10">
            <h2 className="text-2xl font-bold">Create Your Account</h2>
            <p className="text-slate-500 text-sm">
              Join us and start managing your society efficiently
            </p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      {...field}
                      className="h-11"
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 mt-1"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-slate-500">
                      I agree to the{" "}
                      <a
                        href="/terms"
                        className="text-orange-500 hover:underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="text-orange-500 hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full cursor-pointer bg-slate-900 hover:bg-slate-800 text-white h-11 mt-4"
            >
              Create Account <span className="ml-2">→</span>
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-orange-500 font-medium hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

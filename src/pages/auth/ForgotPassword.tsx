import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

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
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import password from "../../assets/password.svg"; 
import AuthFormHeader from "@/components/AuthFormHeader";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Show success message instead of actual API call for demo
    setIsSubmitted(true);
    // In a real application, you would call an API endpoint here
  }

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex w-1/2 bg-slate-100 flex-col items-center justify-center p-8 relative">
        <div className="px-8 ">
          <div className="mb-10">
            <img
              src={password}
              alt="Forgot Password Illustration"
              className="mx-auto"
              style={{ maxWidth: "400px" }}
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-slate-800">
              Account Recovery Made Simple
            </h1>
            <p className="text-slate-600">
              Don't worry, we've got you covered. We'll help you get back into
              your account.
            </p>
          </div>
        </div>
      </div>

      <button
            onClick={() => navigate("/login")}
            className="absolute top-8 left-8 flex items-center text-slate-500 hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to Login</span>
      </button>

      <div className="w-full lg:w-[40%] flex flex-col justify-center mx-auto p-5 sm:p-8 md:p-16 lg:p-20">
          {!isSubmitted ? (
          <AuthFormHeader title="Forgot Password?"  subtitle="No worries! Enter your email address and we'll send you instructions to reset your password."/>
          ) : (
            <AuthFormHeader title="Check Your Email" subtitle="We've sent you an email with instructions to reset your password." />
          )}
          {isSubmitted ? (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <CheckCircle size={64} className="text-green-500" />
              </div>
              <p className="text-sm text-slate-500 pt-4">
                Didn't receive an email?{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-orange-500 font-medium hover:underline cursor-pointer"
                >
                  Try again
                </button>
              </p>
            </div>
          ) : (
            <>
            <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 w-full"
                  >
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

                  <Button
                    type="submit"
                    className="w-full cursor-pointer bg-primary hover:bg-accent text-white h-11"
                    >
                    Send Reset Link <span className="ml-2">→</span>
                  </Button>
                </form>
              </Form>
              <div className="mt-16 text-center">
          <p className="text-sm text-slate-600">
            Remember your password?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
          </>
          )}
      </div>
    </div>
  );
};

export default ForgotPassword;

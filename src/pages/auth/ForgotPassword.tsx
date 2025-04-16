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
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

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
              src="/password.svg"
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

      <div className="w-full lg:w-[40%] flex flex-col justify-center mx-auto p-5 sm:p-8 md:p-16 lg:p-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex mb-8">
            <div className="w-8 h-5 bg-orange-500 transform skew-x-[-20deg] mr-1"></div>
            <div className="w-8 h-5 bg-slate-900 transform skew-x-[-20deg]"></div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="absolute top-8 left-8 flex items-center text-slate-500 hover:text-orange-500 transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to Login</span>
          </button>

          {!isSubmitted ? (
            <>
              <div className="space-y-2 mb-10 text-center">
                <h2 className="text-2xl font-bold">Forgot Password?</h2>
                <p className="text-slate-500 text-sm">
                  No worries! Enter your email address and we'll send you
                  instructions to reset your password.
                </p>
              </div>

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
                    className="w-full cursor-pointer bg-slate-900 hover:bg-slate-800 text-white h-11"
                  >
                    Send Reset Link <span className="ml-2">→</span>
                  </Button>
                </form>
              </Form>
            </>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <CheckCircle size={64} className="text-green-500" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Check Your Email</h2>
                <p className="text-slate-600">
                  We've sent password reset instructions to your email address.
                  Please check your inbox.
                </p>
              </div>
              <div className="pt-4">
                <Button
                  onClick={() => navigate("/")}
                  className="cursor-pointer bg-slate-900 hover:bg-slate-800 text-white h-11 px-6"
                >
                  Back to Login
                </Button>
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
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-slate-600">
            Remember your password?{" "}
            <a href="/" className="text-orange-500 font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

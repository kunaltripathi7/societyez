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
import AuthFormHeader from "@/components/AuthFormHeader";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional(),
});

const Login = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "demo@gmail.com",
      password: "12345678",
      rememberMe: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const demoCredentials = {
      email: "demo@gmail.com",
      password: "12345678",
    };

    if (
      values.email === demoCredentials.email &&
      values.password === demoCredentials.password
    ) {
      navigate("/home");
    } else {
      form.setError("email", {
        type: "manual",
        message: "Invalid email or password.",
      });
      form.setError("password", {
        type: "manual",
        message: "Invalid email or password.",
      });
    }
  }

  return (
    <div className="flex h-screen">
      <Carousel />

      <div className="w-full lg:w-[40%] flex flex-col justify-center mx-auto p-5 sm:p-8 md:p-16 lg:p-20">
        <AuthFormHeader title="Welcome Back !" subtitle="Please enter your details" />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-border data-[state=unchecked]:bg-primary/20 data-[state=unchecked]:border-border"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-sm text-slate-500 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                )}
              />
              <a
                href="/forgot-password"
                className="text-sm text-slate-500 hover:text-primary"
              >
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer bg-primary hover:bg-accent text-white h-11"
            >
              Login <span className="ml-2">→</span>
            </Button>
          </form>
        </Form>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>
            By creating an account, you agree to our{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="text-primary font-medium hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

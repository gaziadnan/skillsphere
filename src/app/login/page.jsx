"use client";


import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

import { Check } from "@gravity-ui/icons";
import { FcGoogle } from "react-icons/fc";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "../../lib/auth-client";
import { useEffect } from "react";

const SignInPage = () => {

 useEffect(() => {
    localStorage.setItem('user', 'loggedIn')
  }, []);

  const router = useRouter();

  // Email Login
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/", 
    });

    if (error) {
      toast.error(error.message || "Login failed ❌");
      return;
    }

    toast.success("Login successful 🎉");
    router.push("/");
  };

  //  Google Login
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <Form onSubmit={onSubmit} className="flex flex-col gap-4">

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Enter valid email";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>

          {/* for Password */}


          <TextField
            isRequired
            name="password"
            type="password"
          >
            <Label>Password</Label>
            <Input placeholder="Enter password" />
            <FieldError />
          </TextField>

          {/* for Buttons */}
          <div className="flex gap-3 mt-2">
            <Button
              type="submit"
              className="w-full bg-[#244D3F] text-white"
            >
              <Check />
              Login
            </Button>

            <Button type="reset" variant="secondary" className="w-full">
              Reset
            </Button>
          </div>
        </Form>

      
        <p className="text-center mt-6 text-gray-500">
          OR
        </p>

        {/* Google Login */}




        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Register Link */}



        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-[#244D3F] font-medium">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignInPage;
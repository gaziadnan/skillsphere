"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

import { Check } from "@gravity-ui/icons";
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

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      image,
      password,
    });

    if (error) {
      toast.error(error.message || "Registration failed ");
      return;
    }

    toast.success("Registration successful");

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      
      <Form
        onSubmit={onSubmit}
        className="w-full max-w-md flex flex-col gap-4 p-8 border rounded-2xl shadow-md bg-white"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        {/* Name */}
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

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

        {/* Image */}
        <TextField isRequired name="image" type="text">
          <Label>Photo URL</Label>
          <Input placeholder="https://example.com/photo.jpg" />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Min 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Need 1 uppercase";
            }
            if (!/[0-9]/.test(value)) {
              return "Need 1 number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter password" />
          <Description>
            8+ chars, 1 uppercase, 1 number
          </Description>
          <FieldError />
        </TextField>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <Button
            type="submit"
            className="w-full bg-[#244D3F] text-white"
          >
            <Check />
            Register
          </Button>

          <Button type="reset" variant="secondary" className="w-full">
            Reset
          </Button>
        </div>

        {/* Login Link */}
        <p className="text-sm text-center mt-2">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#244D3F] font-medium"
          >
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUpPage;
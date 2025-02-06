"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className="max-w-md w-full p-8 shadow-lg bg-white dark:bg-black rounded-md border border-blue-300
        hover:shadow-blue-400 dark:hover:shadow-blue-500 hover:border-blue-500 transition duration-300"
      >
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
          Login
        </h2>
        <p className="text-neutral-600 text-sm text-center dark:text-neutral-300 mt-2">
          Choose your login type and enter your credentials.
        </p>

        <form className="mt-6">
          {/* Owner / Tenant Selection */}
          <div className="mb-4">
            <Label className="font-medium">Login as:</Label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="userType" value="owner" required />
                <span>Owner</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="userType" value="tenant" required />
                <span>Tenant</span>
              </label>
            </div>
          </div>

          {/* Email Input */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="example@gmail.com" type="email" required />
          </LabelInputContainer>

          {/* Password Input */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type={passwordVisible ? "text" : "password"}
              required
            />
          </LabelInputContainer>

          {/* Show Password Checkbox */}
          <div className="mb-4">
            <input
              type="checkbox"
              id="show-password"
              onChange={() => setPasswordVisible(!passwordVisible)}
              className="mr-2"
            />
            <label htmlFor="show-password">Show Password</label>
          </div>

          {/* Login Button */}
          <button
            className="w-full h-10 font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Login
          </button>

          {/* Signup Link */}
          <div className="mt-4 text-center">
            <Link href="/signup" className="text-blue-500 hover:underline">
              Don't have an account? Sign Up
            </Link>
          </div>

          {/* Google Login Option */}
          <div className="mt-6 flex flex-col space-y-4">
            <button
              className="flex items-center justify-center space-x-2 w-full h-10 font-medium rounded-md border border-gray-300 hover:bg-gray-100 dark:border-zinc-800 dark:hover:bg-zinc-900 transition duration-300"
              type="button"
            >
              <IconBrandGoogle className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
              <span>Login with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

const LabelInputContainer = ({ children, className }) => { // Removed type annotations
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
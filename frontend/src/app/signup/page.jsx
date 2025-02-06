"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";

// List of countries with phone codes
const countryCodes = [
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "China", code: "+86" },
  { name: "Brazil", code: "+55" },
  { name: "Pakistan", code: "+92" },
  { name: "Bangladesh", code: "+880" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "UAE", code: "+971" },
  { name: "Russia", code: "+7" },
];

function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneCode: "+1",
    phoneNumber: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", user);
    router.push("/sidebar");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-6 md:p-8 shadow-xl bg-white dark:bg-black mt-20 border border-blue-400 shadow-blue-400/50">
      <p className="text-neutral-600 text-sm max-w-sm mt-5 dark:text-neutral-300">
        Sign Up for Land
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* First and Last Name */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              placeholder="Aadil"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              placeholder="Rizwan"
              type="text"
            />
          </LabelInputContainer>
        </div>

        {/* Email */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="example@gmail.com"
            type="email"
          />
        </LabelInputContainer>

        {/* Password */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="••••••••"
            type={passwordVisible ? "text" : "password"}
          />
        </LabelInputContainer>

        {/* Show Password Checkbox */}
        <input
          type="checkbox"
          id="show-password"
          onChange={togglePasswordVisibility}
          className="mr-2 mb-3"
        />
        <label htmlFor="show-password">Show Password</label>
        {/* Phone Number with Country Code */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex space-x-2">
            {/* Country Code Dropdown */}
            <select
              className="p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
              value={user.phoneCode}
              onChange={(e) => setUser({ ...user, phoneCode: e.target.value })}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>

            {/* Phone Number Input */}
            <Input
              id="phone"
              value={user.phoneNumber}
              onChange={(e) =>
                setUser({ ...user, phoneNumber: e.target.value })
              }
              placeholder="123 456 7890"
              type="tel"
            />
          </div>
        </LabelInputContainer>
        {/* Signup Button */}
        <button
          className="bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600 block w-full text-white rounded-md h-10 font-medium shadow-md hover:shadow-blue-500/50 transition-all"
          type="submit"
        >
          Signup
          <BottomGradient />
        </button>

        {/* Login Link */}
        <div className="mt-4">
          <Link href="/login" className="text-blue-500 hover:underline">
            Visit login page
          </Link>
        </div>

        {/* Divider */}
        <div className="bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent my-8 h-[1px] w-full" />

        {/* Google Signup Button */}
        <div className="flex flex-col space-y-4">
          <button
            className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-md bg-blue-50 dark:bg-blue-900 hover:shadow-blue-500/50 transition-all"
            type="button"
          >
            <IconBrandGoogle className="h-4 w-4 text-blue-800 dark:text-blue-300" />
            <span className="text-blue-700 dark:text-blue-300 text-sm">
              Sign up with Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

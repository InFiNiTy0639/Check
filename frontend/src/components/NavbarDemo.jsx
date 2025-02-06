"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from 'next/image';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" legacyBehavior>
              <a className="w-20 h-16 shadow-lg">
                <Image
                  src="/images/a.png" 
                  alt="Logo"
                  width={80}
                  height={64}
                />
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
            <Link href="/products" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Products
            </Link>
            <Link href="/features" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Features
            </Link>
            <Link href="/pricing" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Pricing
            </Link>
            <Link href="/support" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Support
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="relative hidden md:inline-flex items-center justify-center group ml-6">
            <div className="absolute transition-all duration-200 rounded-lg -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            <Link href="/login" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-medium text-white bg-black border border-transparent rounded-lg hover:bg-opacity-80">
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {expanded && (
          <nav className="flex flex-col pt-8 pb-4 space-y-6 md:hidden">
            <Link href="/products" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Products
            </Link>
            <Link href="/features" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Features
            </Link>
            <Link href="/pricing" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Pricing
            </Link>
            <Link href="/support" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Support
            </Link>

            <div className="relative inline-flex items-center justify-center group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <Link href="/login" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full">
                Login
              </Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
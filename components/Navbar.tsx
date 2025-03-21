"use client";

import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-white shadow-md w-full">
      <nav
        className={`flex justify-between items-center border-b p-4 gap-4 top-0 sticky w-full h-16 text-black backdrop-blur-sm ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        {/* Logo / Home Link */}
        <div>
          <Link href="/" className="text-xl font-bold hover:text-amber-300">
            MentorMind
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-4">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/service" },
            { name: "Contact", href: "/contact" },
          ].map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-semibold hover:text-blue-600 transition-all ease-in-out duration-200 ${
                  pathname === href
                    ? "text-blue-600 font-semibold underline underline-offset-4 transition-all ease-in-out duration-200"
                    : "text-gray-600"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Authentication & Avatar */}
        <div className="flex gap-4 items-center">
          <SignedOut>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:ring-0 focus:outline-none hover:cursor-pointer px-2 p-1 rounded-sm border hover:bg-black hover:text-white">
                Sign In
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-2 mt-1 pl-2 shadow-2xl border bg-white text-black w-40 focus:ring-0 focus:outline-none mr-[4.5rem] rounded-md transition-opacity duration-300 ease-in-out opacity-0 data-[state=open]:opacity-100">
                <DropdownMenuItem className="focus:ring-0 focus:outline-none">
                  <button className="py-1.5 w-full hover:bg-gray-800 hover:cursor-pointer bg-black text-white rounded-sm">
                    <SignInButton />
                  </button>
                </DropdownMenuItem>

                <DropdownMenuItem className="pt-1 pl-1 flex items-center justify-between text-[0.8rem] w-full focus:ring-0 focus:outline-none">
                  <span className="whitespace-nowrap">New User?</span>
                  <SignUpButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Avatar>
              <AvatarFallback className="bg-amber-300 p-2 rounded-full text-black">
                CN
              </AvatarFallback>
            </Avatar>
          </SignedOut>

          <SignedIn>
            <Avatar>
              <UserButton />
            </Avatar>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
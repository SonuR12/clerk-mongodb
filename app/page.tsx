"use client"
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-2xl">Hello, {user.firstName} welcome to Home Page</div>
    </div>
  );
}

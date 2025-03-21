import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }

  const data = {
    clerkId: userId,
    username: user?.username || `${user?.firstName} ${user?.lastName}` || "Guest", 
    email: user?.emailAddresses[0]?.emailAddress || "N/A",
    photo: user?.imageUrl || "N/A",
  };

  console.log('Auth data:', data);

  return NextResponse.json({ message: "Authenticated", data},{ status: 200 });
}

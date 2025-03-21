import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { connect } from "@/lib/db/db";
import User from "@/lib/modals/user.modal";

export async function GET() {
  const { userId } = auth();
  console.log("Auth userId:", userId); // Debugging log

  const user = await currentUser();
  console.log("Current User:", user); // Debugging log

  if (!userId) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }

  const data = {
    message: "Authenticated",
    data: { 
      userId: userId,
      username: user?.username || `${user?.firstName} ${user?.lastName}` || "Guest",
      email: user?.emailAddresses[0].emailAddress || "N/A",
      image_url: user?.imageUrl || "N/A" 
    }
  };

  console.log("Response Data:", data);

  try {
    // Connect to the database
    await connect();

    // Save the data to the database
    await User.create({
      clerkId: data.data.userId,
      email: data.data.email,
      // username: data.data.username,
      username: user?.username || `${user?.firstName} ${user?.lastName}` || "Guest",
      photo: data.data.image_url,
      // firstName: user?.firstName || "",
      // lastName: user?.lastName || "",
    });

    console.log("Data saved to MongoDB");
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    return NextResponse.json({ message: "Error saving data" }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}

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

  const userData = {
    clerkId: userId,
    username: user?.username || `${user?.firstName} ${user?.lastName}` || "Guest",
    email: user?.emailAddresses[0]?.emailAddress || "N/A",
    photo: user?.imageUrl || "N/A",
  };

  console.log("User Data:", userData);

  try {
    // Connect to the database
    await connect();

    // Save or update user data in MongoDB
    const savedUser = await User.findOneAndUpdate(
      { clerkId: userData.clerkId },
      userData,
      { upsert: true, new: true } // Create if not exists, return updated/new doc
    );

    console.log("Data saved to MongoDB:", savedUser);

    return NextResponse.json({
      message: "Data saved successfully",
      data: savedUser,
    }, { status: 200 });

  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    return NextResponse.json({ message: "Error saving data" }, { status: 500 });
  }
}

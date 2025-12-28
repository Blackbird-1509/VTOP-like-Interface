import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // adjust path if needed

export async function POST(req: Request) {
  try {
    const { username, password, role } = await req.json();

    if (!username || !password || !role) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const newUser = await prisma.user.create({
      data: {
        username,
        password,
        role,
      },
    });

    return NextResponse.json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

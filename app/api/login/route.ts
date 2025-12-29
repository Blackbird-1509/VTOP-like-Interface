import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
  
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password, role } = body;

    if (!username || !password || !role) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Find user
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Verify role (portal check)
    if (user.role !== role) {
      return NextResponse.json({ error: "Role mismatch. Wrong login portal." }, { status: 403 });
    }

    // Plain-text password check
    // (You should switch to bcrypt later)
    if (password !== user.password) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Check for missing JWT secret
    if (!process.env.JWT_SECRET) {
      console.error("❌ Missing JWT_SECRET in environment variables");
      return NextResponse.json(
        { error: "Server config missing. Contact admin." },
        { status: 500 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({
      message: "Login successful",
      status: 200
    });

    response.headers.set(
      "Set-Cookie",
      `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`
    );

    return response


  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

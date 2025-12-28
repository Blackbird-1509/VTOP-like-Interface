// middleware.ts
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// Define role-to-path mappings
const roleRoutes: Record<string, string[]> = {
  Student: ["/api/roles/student", "/roles/student"],
  Faculty: ["/api/roles/faculty", "/roles/faculty"],
  Admin: ["/api/roles/admin", "/roles/admin"],
  Parent: ["/api/roles/parent", "/roles/parent"],
};

// Public routes (no login required)
const publicRoutes = ["/login", "/unauthorized"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip public routes
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/role", req.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { role: string };
    const userRole = decoded.role;

    // Check if the user can access this route
    const allowedRoutes = roleRoutes[userRole];
    if (!allowedRoutes || !allowedRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  } catch {
    // Token invalid or expired
    return NextResponse.redirect(new URL("/role", req.url));
  }
}

// Only apply middleware to these routes
export const config = {
  matcher: [
    "/api/roles/:path*",
    "/roles/:path*",
  ],
};

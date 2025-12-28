// app/api/roles/student/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET: Fetch all available courses
export async function GET(req: NextRequest) {
  try {
    const courses = await prisma.course.findMany();
    return NextResponse.json(courses);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}

// POST: Register selected courses for a student
export async function POST(req: NextRequest) {
  try {
    const { studentId, courseIds, semester } = await req.json();

    if (!studentId || !courseIds || !semester) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const registrations = await prisma.registration.createMany({
      data: courseIds.map((courseId: number) => ({
        studentId,
        courseId,
        semester,
      })),
      skipDuplicates: true,
    });

    return NextResponse.json({ success: true, registrations });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to register courses" }, { status: 500 });
  }
}

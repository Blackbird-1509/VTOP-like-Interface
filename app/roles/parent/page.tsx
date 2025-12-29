"use client";

import Link from "next/link";

export default function ParentDashboard() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-8">
      <div className="w-full max-w-3xl">
        
        {/* Page Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Parent Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Welcome. Please select a section to view your child's academic information.
        </p>

        {/* Options */}
        <div className="grid gap-6">
          
          <Link href="/roles/parent/timetable" className="block">
            <div className="p-5 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition shadow-sm cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-800">
                📅 View Timetable
              </h2>
              <p className="text-gray-500 text-sm">See your child's daily and weekly schedule.</p>
            </div>
          </Link>

          <Link href="/roles/parent/marks" className="block">
            <div className="p-5 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition shadow-sm cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-800">
                📊 View Marks & Grades
              </h2>
              <p className="text-gray-500 text-sm">Check subject-wise performance and exam results.</p>
            </div>
          </Link>

          <Link href="/roles/parent/attendance" className="block">
            <div className="p-5 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition shadow-sm cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-800">
                📘 View Attendance Records
              </h2>
              <p className="text-gray-500 text-sm">Track attendance percentage and leave records.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

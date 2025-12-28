"use client";
import { useRouter } from "next/navigation";

export default function StudentDashboard() {
  const router = useRouter();

  const menuItems = [
    { label: "Register for Subjects", route: "/roles/student/register", color: "bg-blue-500 text-white" },
    { label: "View Marks & Grades", route: "/roles/student/marks", color: "bg-green-500 text-white" },
    { label: "Submit Re-evaluation Request", route: "/roles/student/revaluation", color: "bg-yellow-500 text-white" },
    { label: "View Course Content", route: "/roles/student/content", color: "bg-purple-500 text-white" },
    { label: "View Timetable", route: "/roles/student/timetable", color: "bg-pink-500 text-white" },
    { label: "Attendance Records", route: "/roles/student/attendance", color: "bg-red-500 text-white" },
  ];

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-8">
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
          Student Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.route)}
              className={`w-full border border-gray-300 rounded-xl p-6 shadow-sm text-left font-medium ${item.color}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

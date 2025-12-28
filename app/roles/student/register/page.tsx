"use client";

import { useEffect, useState } from "react";

interface Course {
  id: number;
  courseId: string;
  name: string;
  faculty: string;
}

export default function StudentRegister() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const studentId = 1; // replace with authenticated student's ID
  const semester = "Spring 2026"; // current semester

  // Fetch available courses
  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("/api/roles/student/register");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    }
    fetchCourses();
  }, []);

  // Toggle course selection
  const toggleCourse = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // Submit selected courses
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/roles/student/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, courseIds: selected, semester }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Courses registered successfully!");
        setSelected([]); // reset selection
      } else {
        alert("Failed to register courses.");
      }
    } catch (err) {
      console.error(err);
      alert("Error registering courses.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Student Course Registration
        </h1>

        <div className="grid gap-4">
          {courses.map((course) => (
            <label
              key={course.id}
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition hover:shadow-sm ${
                selected.includes(course.id)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div>
                <p className="font-medium text-gray-900">
                  {course.courseId} - {course.name}
                </p>
                <p className="text-gray-500 text-sm">{course.faculty}</p>
              </div>
              <input
                type="checkbox"
                checked={selected.includes(course.id)}
                onChange={() => toggleCourse(course.id)}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </label>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || selected.length === 0}
          className="mt-6 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
        >
          {loading ? "Registering..." : "Confirm Registration"}
        </button>
      </div>
    </div>
  );
}

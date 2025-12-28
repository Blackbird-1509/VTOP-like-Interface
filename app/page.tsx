"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = (role: string) => {
    router.push(`/login?role=${role}`); 
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      <h1 className="text-4xl font-bold text-black">Welcome to the Portal</h1>
      <p className="text-gray-600 mb-8">Choose your role to continue</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => handleLogin("Student")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Student Login
        </button>
        <button
          onClick={() => handleLogin("Parent")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Parent Login
        </button>
        <button
          onClick={() => handleLogin("Faculty")}
          className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          Faculty Login
        </button>
        <button
          onClick={() => handleLogin("Admin")}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Admin Login
        </button>
      </div>
    </main>
  );
}

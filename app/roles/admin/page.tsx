"use client";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Admin Dashboard
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => router.push("/roles/admin/reval")}
            className="w-full py-3 border border-blue-500 rounded-lg text-blue-600 font-medium 
                       hover:bg-blue-50 transition-all"
          >
            Student Reevaluation Approval
          </button>

          <button
            onClick={() => router.push("/roles/admin/credman")}
            className="w-full py-3 border border-green-500 rounded-lg text-green-600 font-medium 
                       hover:bg-green-50 transition-all"
          >
            Credentials Manager
          </button>
        </div>
      </div>
    </div>
  );
}

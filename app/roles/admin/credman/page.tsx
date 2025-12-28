"use client";

import { useState } from "react";

export default function AdminPage() {
  const [form, setForm] = useState({ username: "", password: "", role: "" });
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/roles/admin/credman", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg border border-gray-200 bg-white">
        
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Admin Panel
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Add users who can log in to the site
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="mt-1 w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Role</label>
            <select
              className="mt-1 w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="">Select a role</option>
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
              <option value="Faculty">Faculty</option>
            </select>
          </div>

          <button
            className="w-full bg-blue-600 text-white rounded-lg py-3 text-base font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            Add User
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center font-medium text-blue-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

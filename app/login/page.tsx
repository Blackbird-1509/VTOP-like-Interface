"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const role = params.get("role") || "Unknown";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login Successful!");
      router.push(`/roles/${role.toLowerCase()}`);
    } else {
      alert(data.error || "Login failed");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-black">Login as {role}</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 bg-gray-100 p-6 rounded-lg shadow border-gray-200 border-2">
        <input
          className="border px-3 py-2 rounded border-black text-black"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="border px-3 py-2 rounded border-black text-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </main>
  );
}

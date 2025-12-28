// AdminDashboard.tsx
import React from "react";

const adminCards = [
  {
    title: "Users",
    content: ["Total Users: 120", "Active: 95", "Pending: 25"],
    color: "bg-blue-600",
    textColor: "text-white",
  },
  {
    title: "Roles",
    content: ["Admin: 5", "Moderator: 10", "User: 105"],
    color: "bg-green-600",
    textColor: "text-white",
  },
  {
    title: "Reports",
    content: ["Pending Reports: 8", "Resolved: 42", "Total: 50"],
    color: "bg-purple-600",
    textColor: "text-white",
  },
  {
    title: "Settings",
    content: ["System: Online", "Maintenance: Off"],
    color: "bg-yellow-500",
    textColor: "text-black",
  },
  {
    title: "Notifications",
    content: ["New Alerts: 3", "Messages: 5"],
    color: "bg-pink-500",
    textColor: "text-white",
  },
  {
    title: "Logs",
    content: ["Last Login: Today", "Errors: 2", "Warnings: 4"],
    color: "bg-red-600",
    textColor: "text-white",
  },
];

type CardProps = {
  title: string;
  content: string[];
  color: string;
  textColor: string;
};

const Card: React.FC<CardProps> = ({ title, content, color, textColor }) => (
  <div className={`${color} ${textColor} rounded-xl shadow-lg p-5 hover:scale-105 transition-transform`}>
    <h2 className="text-2xl font-bold mb-3">{title}</h2>
    <ul className="list-disc list-inside">
      {content.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-gray-800 via-gray-700 to-gray-600 font-sans p-6">

      {/* Header */}
      <header className="bg-gray-900 text-yellow-300 p-6 rounded-xl shadow-lg mb-6">
        <h1 className="text-3xl font-extrabold text-center">Admin Dashboard</h1>
      </header>

      {/* Main content */}
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminCards.map((card, idx) => (
            <Card
              key={idx}
              title={card.title}
              content={card.content}
              color={card.color}
              textColor={card.textColor}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 bg-gray-900 text-yellow-300 p-6 rounded-xl shadow-lg text-center text-lg">
        © 2025 Admin Dashboard
      </footer>
    </div>
  );
};

export default AdminDashboard;

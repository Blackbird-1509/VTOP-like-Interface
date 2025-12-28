import React from "react";

const cards = [
  {
    title: "Courses",
    content: ["Physics 101", "Mathematics", "Computer Science"],
    color: "bg-blue-600",
    textColor: "text-white",
  },
  {
    title: "Assignments",
    content: ["Lab Report - Physics", "Homework - Math", "Project - CS"],
    color: "bg-green-600",
    textColor: "text-white",
  },
  {
    title: "Profile",
    content: ["Name: John Doe", "Email: john@example.com", "Year: 2nd Year"],
    color: "bg-purple-600",
    textColor: "text-white",
  },
  {
    title: "Messages",
    content: ["You have 2 new messages."],
    color: "bg-pink-500",
    textColor: "text-white",
  },
  {
    title: "Grades",
    content: ["Physics 101: A", "Mathematics: B+", "Computer Science: A-"],
    color: "bg-yellow-500",
    textColor: "text-black",
  },
  {
    title: "Notifications",
    content: ["No new notifications."],
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-500 via-pink-500 to-orange-400 font-sans p-6">

      {/* Header */}
      <header className="bg-indigo-800 text-yellow-200 p-6 rounded-xl shadow-lg mb-6">
        <h1 className="text-3xl font-extrabold text-center">Student Dashboard</h1>
      </header>

      {/* Main content */}
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
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
      <footer className="mt-8 bg-purple-700 text-yellow-200 p-6 rounded-xl shadow-lg text-center text-lg">
        © 2025 Student Dashboard
      </footer>
    </div>
  );
};

export default App;

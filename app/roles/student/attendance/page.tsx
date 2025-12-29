export default function WIPPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-lg text-center">

        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          🚧 Work In Progress
        </h1>

        <p className="text-gray-600 mb-6">
          This page is currently under development. Features and content will be added soon.
        </p>

        <div className="border rounded-lg p-6 bg-gray-50 shadow-sm">
          <p className="text-gray-700">
            Placeholder section for future UI elements, components, or content.
          </p>
        </div>

        <button
          className="mt-8 px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
        >
          Back to Home
        </button>

      </div>
    </div>
  );
}

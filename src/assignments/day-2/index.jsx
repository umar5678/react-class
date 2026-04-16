import { Link } from "react-router-dom";

const Day2Assignment = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-2"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Assignment: Student Profile Cards
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Day 2 &bull; Due: Jan 20, 2024
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded text-sm font-medium">
                Easy
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-sm font-medium">
                Submitted
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <section className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Instructions
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-4">
              Create reusable profile card components with different variants
              using props and conditional rendering.
            </p>
            <h3 className="text-base font-semibold text-slate-900 mt-6 mb-2">
              Requirements
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Create a ProfileCard component that accepts props</li>
              <li>Support different card variants (basic, detailed, compact)</li>
              <li>Show online/offline status with conditional rendering</li>
              <li>Use Tailwind CSS for styling</li>
            </ul>
          </div>
        </section>

        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Design Reference
          </h2>
          <p className="text-sm text-slate-600">
            See <code className="bg-white px-2 py-0.5 rounded text-sm">design-source.md</code> in the
            day-2 assignment folder for the reference design.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Day2Assignment;

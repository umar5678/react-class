import { Link } from "react-router-dom";

const Day1Assignment = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
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
                Assignment: Personal Portfolio Page
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Day 1 • Due: Jan 17, 2024
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

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Assignment Details */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
              Topic
            </p>
            <p className="text-sm font-semibold text-slate-900">
              JSX & Basic Components
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
              Points
            </p>
            <p className="text-sm font-semibold text-slate-900">100</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
              Difficulty
            </p>
            <p className="text-sm font-semibold text-emerald-600">Easy</p>
          </div>
        </div>

        {/* Instructions */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Instructions
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-4">
              Create a simple personal portfolio page using React components and
              JSX.
            </p>

            <h3 className="text-base font-semibold text-slate-900 mt-6 mb-2">
              Requirements
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Create a Header component with your name and title</li>
              <li>Create an About component with a brief description</li>
              <li>Create a Skills component listing your skills</li>
              <li>Use proper JSX syntax</li>
              <li>Style with Tailwind CSS</li>
            </ul>

            <h3 className="text-base font-semibold text-slate-900 mt-6 mb-2">
              Submission
            </h3>
            <p className="text-slate-600">
              Create your solution in the{" "}
              <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">
                assignments/day-1/starter
              </code>{" "}
              folder.
            </p>
          </div>
        </section>

        {/* Starter Code */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Starter Code
          </h2>
          <div className="bg-slate-900 text-slate-50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre>{`// Your solution here
function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Add your components */}
    </div>
  );
}

export default Portfolio;`}</pre>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Tips</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Remember that JSX className is used instead of HTML class</li>
            <li>
              • All JSX elements must be closed (including self-closing tags)
            </li>
            <li>• You can only return one root element from a component</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Day1Assignment;

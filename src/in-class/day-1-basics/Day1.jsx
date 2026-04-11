import { Link } from 'react-router-dom';

const Day1 = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-2">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Day 1: React Basics</h1>
              <p className="text-sm text-slate-500 mt-1">Jan 15, 2024 • 2 hours</p>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-sm font-medium">
              Completed
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Topics Covered */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Topics Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['JSX', 'Components', 'Props', 'Project Setup'].map((topic) => (
              <div key={topic} className="bg-white border border-slate-200 rounded-lg px-4 py-3 text-center">
                <p className="text-sm font-medium text-slate-700">{topic}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lesson Content */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Lesson Overview</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-4">
              In this lesson, we covered the fundamentals of React including JSX syntax, 
              creating components, and understanding props.
            </p>
            
            <h3 className="text-base font-semibold text-slate-900 mt-6 mb-2">What is JSX?</h3>
            <p className="text-slate-600 mb-4">
              JSX is a syntax extension for JavaScript that looks similar to HTML. 
              It allows us to write markup directly in our JavaScript code.
            </p>

            <div className="bg-slate-900 text-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`function Welcome() {
  return <h1>Hello, React!</h1>;
}`}</pre>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Code Examples</h2>
          <div className="space-y-4">
            {/* Add your interactive examples here */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Example: Simple Component</h3>
              <div className="bg-slate-900 text-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>{`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Additional Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://react.dev/learn" className="text-blue-600 hover:text-blue-700 text-sm">
                React Official Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                JSX In Depth
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Day1;
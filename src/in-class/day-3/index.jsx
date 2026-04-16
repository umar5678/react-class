import { Link } from "react-router-dom";
import UserProfileCard from "./components/UserProfileCard";
import { users } from "./data/users";
import Counter from "./components/Counter";

const Day3 = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
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
                Day 3: State & Hooks
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Jan 17, 2024 &bull; 2 hours
              </p>
            </div>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium">
              In Progress
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Topics Covered
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "useState",
              "Event Handling",
              "Forms",
              "Controlled Components",
            ].map((topic) => (
              <div
                key={topic}
                className="bg-white border border-slate-200 rounded-lg px-4 py-3 text-center"
              >
                <p className="text-sm font-medium text-slate-700">{topic}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Lesson Content
          </h2>
          <p className="text-slate-900">
            In-class demos and examples for useState.
          </p>
          <p className="text-slate-900">
            recap for props and Compoment reusability.
          </p>
          <div className="flex flex-wrap justify-between">
            {users.map((user) => (
              <div key={user.id}>
                <UserProfileCard
                  name={user.name}
                  role={user.role}
                  intro={user.intro}
                  image={user.image}
                  linkedin={user.socialLinks.linkedin}
                  github={user.socialLinks.github}
                  instagram={user.socialLinks.instagram}
                />
              </div>
            ))}
          </div>

          <br />

          <br />

          <Counter />
        </section>
      </div>
    </div>
  );
};

export default Day3;

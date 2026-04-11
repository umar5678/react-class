import { Link } from 'react-router-dom';

function Home() {
  const lessons = [
    {
      day: 5,
      title: 'Lists & Keys',
      topics: ['Map', 'Filtering', 'Dynamic Lists', 'Key Props'],
      date: 'Jan 19, 2024',
      duration: '2 hours',
      path: '/day-05',
      status: 'upcoming',
      description: 'Learn to render dynamic lists and understand the importance of keys',
    },
    {
      day: 4,
      title: 'useEffect & Side Effects',
      topics: ['useEffect', 'API Calls', 'Cleanup', 'Dependencies'],
      date: 'Jan 18, 2024',
      duration: '2.5 hours',
      path: '/day-04',
      status: 'upcoming',
      description: 'Master side effects, data fetching, and cleanup functions',
    },
    {
      day: 3,
      title: 'State & Hooks',
      topics: ['useState', 'Event Handling', 'Forms', 'Controlled Components'],
      date: 'Jan 17, 2024',
      duration: '2 hours',
      path: '/day-03',
      status: 'in-progress',
      description: 'Introduction to React state management and event handling',
    },
    {
      day: 2,
      title: 'Props & Reusable Components',
      topics: ['Props', 'Conditional Rendering', 'Variants', 'Component Composition'],
      date: 'Jan 16, 2024',
      duration: '2.5 hours',
      path: '/day-02',
      status: 'completed',
      description: 'Building reusable components with props and conditional logic',
    },
    {
      day: 1,
      title: 'React Basics',
      topics: ['JSX', 'Components', 'Props', 'Project Setup'],
      date: 'Jan 15, 2024',
      duration: '2 hours',
      path: '/day-01',
      status: 'completed',
      description: 'Introduction to React fundamentals and JSX syntax',
    },
  ];

  const assignments = [
    {
      id: 4,
      title: 'Product Filter System',
      day: 5,
      topic: 'Lists, Filtering & Search',
      dueDate: 'Jan 31, 2024',
      points: 150,
      difficulty: 'Medium',
      path: '/day-05/assignment',
      status: 'locked',
      description: 'Build a product catalog with filtering and search functionality',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      day: 4,
      topic: 'API Integration & useEffect',
      dueDate: 'Jan 27, 2024',
      points: 200,
      difficulty: 'Hard',
      path: '/day-04/assignment',
      status: 'locked',
      description: 'Create a weather app fetching data from external API',
    },
    {
      id: 2,
      title: 'Todo List App',
      day: 3,
      topic: 'State Management & Events',
      dueDate: 'Jan 24, 2024',
      points: 150,
      difficulty: 'Medium',
      path: '/day-03/assignment',
      status: 'pending',
      description: 'Build an interactive todo list with add, delete, and toggle features',
    },
    {
      id: 2,
      title: 'Student Profile Cards',
      day: 2,
      topic: 'Props & Component Reusability',
      dueDate: 'Jan 20, 2024',
      points: 100,
      difficulty: 'Easy',
      path: '/day-02/assignment',
      status: 'submitted',
      description: 'Create reusable profile card components with different variants',
    },
    {
      id: 1,
      title: 'Personal Portfolio Page',
      day: 1,
      topic: 'JSX & Basic Components',
      dueDate: 'Jan 17, 2024',
      points: 100,
      difficulty: 'Easy',
      path: '/day-01/assignment',
      status: 'submitted',
      description: 'Build your first React component using JSX',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'in-progress':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'upcoming':
        return 'bg-slate-50 text-slate-600 border-slate-200';
      case 'submitted':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'pending':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'locked':
        return 'bg-slate-50 text-slate-400 border-slate-200';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-emerald-600 bg-emerald-50';
      case 'Medium':
        return 'text-amber-600 bg-amber-50';
      case 'Hard':
        return 'text-rose-600 bg-rose-50';
      default:
        return 'text-slate-600 bg-slate-50';
    }
  };

  const completedLessons = lessons.filter(l => l.status === 'completed').length;
  const submittedAssignments = assignments.filter(a => a.status === 'submitted').length;
  const progressPercentage = Math.round((completedLessons / lessons.length) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                React Fundamentals Course
              </h1>
              <p className="text-sm text-slate-500 mt-1">Winter 2024 • Full Stack Web Development</p>
            </div>
            
            {/* Progress Stats */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-slate-500 uppercase tracking-wide">Progress</p>
                <p className="text-2xl font-bold text-slate-900">{progressPercentage}%</p>
              </div>
              <div className="h-12 w-px bg-slate-200"></div>
              <div className="text-right">
                <p className="text-xs text-slate-500 uppercase tracking-wide">Completed</p>
                <p className="text-2xl font-bold text-slate-900">{completedLessons}/{lessons.length}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Split View */}
      <div className="flex-1 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 h-full">
          
          {/* LEFT: In-Class Lessons */}
          <div className="flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden">
            {/* Section Header */}
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">In-Class Lessons</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {completedLessons} of {lessons.length} completed
                  </p>
                </div>
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Scrollable Lesson Cards */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3" style={{ maxHeight: 'calc(100vh - 280px)' }}>
              {lessons.map((lesson) => (
                <Link
                  key={lesson.day}
                  to={lesson.path}
                  className="block group"
                >
                  <div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-sm transition-all duration-200">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center">
                          {lesson.day}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {lesson.title}
                          </h3>
                          <span className={`flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(lesson.status)}`}>
                            {lesson.status.replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">{lesson.date} • {lesson.duration}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {lesson.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1.5">
                      {lesson.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-2 py-1 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: Assignments */}
          <div className="flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden">
            {/* Section Header */}
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Assignments</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {submittedAssignments} of {assignments.length} submitted
                  </p>
                </div>
                <div className="h-8 w-8 rounded-lg bg-amber-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Scrollable Assignment Cards */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3" style={{ maxHeight: 'calc(100vh - 280px)' }}>
              {assignments.map((assignment) => (
                <Link
                  key={assignment.id}
                  to={assignment.path}
                  className={`block group ${assignment.status === 'locked' ? 'pointer-events-none opacity-50' : ''}`}
                >
                  <div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-amber-400 hover:shadow-sm transition-all duration-200">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                            {assignment.title}
                          </h3>
                          {assignment.status === 'locked' && (
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-slate-500">Day {assignment.day} • Due: {assignment.dueDate}</p>
                      </div>
                      <span className={`flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(assignment.status)}`}>
                        {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                      </span>
                    </div>

                    {/* Topic Badge */}
                    <div className="mb-3">
                      <span className="inline-block text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                        {assignment.topic}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {assignment.description}
                    </p>

                    {/* Footer Info */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <span className={`font-medium px-2 py-1 rounded ${getDifficultyColor(assignment.difficulty)}`}>
                          {assignment.difficulty}
                        </span>
                        <span className="text-slate-500">
                          {assignment.points} points
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex gap-6">
              <span>Total Lessons: {lessons.length}</span>
              <span>•</span>
              <span>Submitted: {submittedAssignments}/{assignments.length}</span>
            </div>
            <span>React Fundamentals 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
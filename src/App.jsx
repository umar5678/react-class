import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import Home from "./Home";
import days from "./data/days";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-slate-500">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />

        {days.map((day) => {
          const routes = [];

          if (day.inClass) {
            routes.push(
              <Route
                key={`in-class-${day.day}`}
                path={`/in-class/day-${day.day}`}
                element={<day.inClass />}
              />
            );
          }

          if (day.assignment?.component) {
            routes.push(
              <Route
                key={`assignment-${day.day}`}
                path={`/assignments/day-${day.day}`}
                element={<day.assignment.component />}
              />
            );
          }

          if (day.solution) {
            routes.push(
              <Route
                key={`solution-${day.day}`}
                path={`/solutions/day-${day.day}`}
                element={<day.solution />}
              />
            );
          }

          return routes;
        })}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;

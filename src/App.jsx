import { Routes, Route } from "react-router-dom";
import Home from "./Home";

// Import your day components
import Day1InClass from "./in-class/day-1-basics/Day1";
// import Day2InClass from "./in-class/day-2-props-and-reusability/Day2";

import Day1Assignment from "./assignments/day-1/Assignment";
// import Day2Assignment from "./assignments/day-2/Assignment";


import Day2 from "./in-class/day-2-props-and-reusability/Day2";
// import Day1 from "./solutions/day-1";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* In-Class Routes */}
      <Route path="/in-class/day-1" element={<Day1InClass />} />
      <Route path="/in-class/day-2" element={<Day2 />} />
      {/* <Route path="/day-02" element={<Day2InClass />} /> */}
      
      {/* Assignment Routes */}
      <Route path="assignment/day-1" element={<Day1Assignment />} />
      {/* <Route path="/day-02/assignment" element={<Day2Assignment />} /> */}

      {/* solutions routes */}

      {/* <Route path="/solutions/day-1" element={<Day1 />} /> */}


      
      
    </Routes>
  );
};

export default App;
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);



  console.log(count);

  return (
    <div className="mx-auto">
      <p className="text-3xl ">{count}</p>

      <button
        className="p-3 bg-blue-700 text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  function increment() {
       if (count === 10) {
      return null
    }
    setCount(count + 1);
  }

  function decrement() {
    if (count === -10) {
      return null
    }

    setCount(count - 1);
  }

  console.log(count);

  return (
    <div className="mx-auto ">
      <div className="h-60 w-60 bg-linear-to-r from-indigo-500 via-orange-400 to-pink-500  mx-auto mb-10 rounded-full pt-5">
        <div className="h-50 w-50 bg-white mx-auto rounded-full">
          <p className="text-8xl text-center pt-12">{count}</p>
        </div>
      </div>

      <div className="flex gap-4 justify-center ">
        <button
          className="p-3 bg-blue-700 text-white rounded hover:bg-blue-500 transition"
          
          onClick={decrement}
        >
        Decrement
        </button>

        <button
          className="p-3 bg-orange-700 text-white rounded hover:bg-red-500 transition"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        <button
          className="p-3 bg-green-700 text-white rounded hover:bg-green-500 transition"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;

// for decrement :
// onClick={() => setCount( count - 1 )}

// for reset , create button
// onClick={() => setCount( 0 )}

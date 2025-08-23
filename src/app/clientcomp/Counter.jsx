import React, { useState } from "react";

const Counter = () => {
  const [inc, setInc] = useState(0);
  return (
    <div>
      <button
        className="bg-blue-600 p-5 inline-block m-3.5"
        onClick={() => setInc((prev) => prev + 1)}
      >
        Add - {inc}
      </button>
    </div>
  );
};

export default Counter;

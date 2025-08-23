"use client";

import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComp = () => {
  const [allData, setAlldata] = useState([]);

  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    setAlldata(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>hey</h1>

      <button className="bg-blue-600 p-5">Click Me</button>
      <Counter />
      <ul className="grid grid-cols-3 gap-5">
        {allData.map((currEl, index) => {
          return <li key={index}>{currEl.body}</li>;
        })}
      </ul>
    </>
  );
};

export default ClientComp;

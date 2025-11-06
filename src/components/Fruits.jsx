import React from "react";

//Rendering arrays or lists in react
export default function Fruits() {
  const fruits = ["mango", "orange", "pineapple"];
  return (
    <div>
      {/* using map to loop through each item */}
      <ul>
        {fruits.map((fruit) => (
          // introduction of key prop
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

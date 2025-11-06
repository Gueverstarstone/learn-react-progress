import React from "react";

//Rendering arrays or lists in react
export default function Fruits() {
  // const fruits = ["mango", "orange", "pineapple"];
  const fruits = [
    { name: "mango", price: 20, emoji: "🥭" },
    { name: "banana", price: 20, emoji: "🍌" },
    { name: "apple", price: 20, emoji: "🍎" },
    { name: "pineapple", price: 20, emoji: "🍍" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

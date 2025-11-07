import React from "react";
import Fruit from "./Fruit";

//Rendering components inside a loop
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
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}

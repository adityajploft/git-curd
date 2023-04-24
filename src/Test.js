import React from "react";
import { useState } from "react";

const Test = () => {
  const [items, setItems] = useState([
    { id: 1, price: 100, ticket: "Aditya" },

    { id: 1, price: 100, ticket: "tusal" },
  ]);
  //   const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
//   setItems();
  return (
    <>
      <div>
        {items.map((element) => (
          <div>
            {element.price}
            <button onClick={increaseCount}>+</button>

            <input />
            <button onClick={decreaseCount}>-</button>
            {element.ticket}
          </div>
        ))}
        {count}
      </div>
    </>
  );
};

export default Test;

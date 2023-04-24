import React from "react";
import { useState } from "react";
const Demo = () => {
  const [items, setItems] = useState([
    { id: 1, price: 100, ticket: "Aditya" },

    { id: 1, price: 100, ticket: "tusal"},
  ]);
  const [totalItemCount, setTotalItemCount] = useState(6);
  // const [inputValue, setInputValue] = useState('');
  
	

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].price++;

    setItems(newItems);
    calculateTotal();
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].price--;

    setItems(newItems);
    calculateTotal();
  };
  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <>
      <div className="main-div">
        {items?.map((ele , index) => (
           	// <div className='item-name' onClick={() => toggleComplete(index)}>
          <div className="ele-rending">
           
            {ele.ticket}
            <button onClick={handleQuantityDecrease}>-{index}</button>  
            <input />
              <button onClick={handleQuantityIncrease}>+{index}</button>
            {ele.price}
          </div>
        ))}
        {/* <button onClick={handleQuantityIncrease}>+</button>
        <span> {items.price}</span>
        <button onClick={handleQuantityDecrease}></button> */}
          <div>{totalItemCount}</div>
      </div>
    </>
  );
};

export default Demo;

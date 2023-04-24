import React from "react";
import { useState, useEffect } from "react";

const Demo = () => {
  const[item,setItem]=useState([
    
      {
        user_id: 1,
        item: "biriani",
        price: "50",
        selling_price: "60",
        total_price: "80",
        status: 0,
        quantity: 0
      },
      {
        user_id: 5,
        item: "alfarm",
        price: "100",
        selling_price: "120",
        tax: "5%",
        total_price: "140",
        status: 0,
        quantity: 0
      }
  
  ])
  
  const [trayItems, settrayItems] = useState([]);
  console.log(trayItems);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    trayItems.forEach((stat) => {
      newTotal += stat.price * stat.quantity;
    });
    setTotal(newTotal);
  }, [trayItems]);

  const handleCheckClick = (ele) => {
    const dupe = trayItems.find((obj) => obj.user_id === ele.user_id);
    settrayItems(
      dupe
        ? trayItems
        : [...trayItems, { ...ele, quantity: (ele.quantity = 1) }]
    );
  };
  console.log(trayItems)

  const incre = (idd) => {
    settrayItems(
      trayItems.map((stat) =>
        stat.user_id === idd ? { ...stat, quantity: stat.quantity + 1 } : stat
      )
    );
  };

  // const handleQuantityDecrease =(index)=>{
  //     const newItems = [...items];

  // 	newItems[index].price--;

  // 	setItems(newItems);
  // 	calculateTotal();

  // }
  // const calculateTotal = () => {
  // 	const totalItemCount = items.reduce((total, item) => {
  // 		return total + item.quantity;
  // 	}, 0);

  // 	setTotalItemCount(totalItemCount);
  // };

  const decre = (idd) => {
    trayItems.every((stat, index) => {
      if (stat.user_id === idd) {
        stat.quantity > 1
          ? settrayItems([
              ...trayItems.slice(0, index),
              {
                ...stat,
                quantity: stat.quantity - 1,
              },
              ...trayItems.slice(index + 1, trayItems.length),
            ])
          : settrayItems([
              ...trayItems.slice(0, index),
              ...trayItems.slice(index + 1, trayItems.length),
            ]);
        return false;
      }
      return true;
    });

    console.log("trashcoder", trayItems);
  };

  return (
    <>
      <div className="main-div">
        {trayItems &&
          trayItems.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele.item}</td>
                <td>{ele.price}</td>

                <td>{ele.quantity}</td>
                <th>{ele.price * ele.quantity}</th>
                <td>
                  <button onClick={() => incre(ele.user_id)}>+</button>
                  <button onClick={() => decre(ele.user_id)}>-</button>
                </td>
              </tr>
            );
          })}
        <div>
        </div>
        {/* {person.status === 0? :""} */}
        {/* <div>{ele.item}</div>
        <></>
        <span> {`${ele.total_price}`}</span> */}
        {/* <Tray trayItems={trayItems} /> */}
        {/* <div>
        {item &&
          item
            .filter((person) => person.status === 0)
            .map((ele, index) => {
              return (
                <div
                  style={{ cursor: "pointer", border: "1px solid black" }}
                  key={index}
                  className="newmo-card"
                  onClick={() => handleCheckClick(ele)}
                >
                  {`${ele.item}`}
                  <br />
                  <br />
                  <span> {`${ele.total_price}`}</span>
                </div>
              );
            })}
      </div> */}
        <h3> total amount {total}</h3>
      </div>
    </>
  );
};

export default Demo;

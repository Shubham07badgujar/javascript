import { useState } from "react";
import Item from "./Item";

const FoodItem = ({ item }) => {
  // let foodItem = ['Dal','GGreen Vegetable', 'Roti', 'Salad','Milk','ghee'];
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton =(item, event) =>{
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };


  return (
    <ul className="list-group ">
      {item.map((item) => (
        <Item 
        key={item} 
        foodItem={item}
        bought = {activeItems.includes(item)}
        handleBuyButton = {(event) => onBuyButton(item,event)}

        ></Item>
      ))}
    </ul>
  );
};

export default FoodItem;

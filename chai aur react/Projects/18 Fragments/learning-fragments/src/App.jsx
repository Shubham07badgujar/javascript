import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ErrorMessage from "./component/ErrorMessage";
import FoodItem from "./component/FoodItem";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";

function App() {
  // let foodItem = ["Dal", "GGreen Vegetable", "Roti", "Salad", "Milk", "ghee"];

  // let textState = useState("Food Item Entered by User");
  // let textToShow = textState[0];
  // let setTextState = textState[1]

  // console.log(`Cureent Value of textState is : ${textToShow}`);

  let [textToShow, setTextState] = useState();
  let [foodItem, setFoodItems] = useState(["Dal", "Green Vegetable", "Roti","pasta"]);

  const onKeyDown = (event) => {
    if(event.key === 'Enter') {
      let newFoodItem = event.target.value
      let newAdd =[...foodItem,newFoodItem]
      setFoodItems(newAdd)
      console.log("food Value is " + newFoodItem);
      
    }
  };

  return (
    <>
      <Container>
        <div className="food-heading">Healthy Food</div>
        <ErrorMessage item={foodItem}></ErrorMessage>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <p>{textToShow}</p>

        <FoodItem item={foodItem}></FoodItem>
      </Container>

      <Container>
        <p>
          Above is the list of healthy that are good for your health and well
          being
        </p>
      </Container>
    </>
  );
}

export default App;

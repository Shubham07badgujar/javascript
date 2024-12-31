import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ErrorMessage from "./component/ErrorMessage";
import FoodItem from "./component/FoodItem";
import Container from "./component/Container";

function App() {
  let foodItem = ["Dal", "GGreen Vegetable", "Roti", "Salad", "Milk", "ghee"];

  return (
    <>
      <Container>
        <div className="food-heading">Healthy Food</div>
        <FoodItem item={foodItem}></FoodItem>
        <ErrorMessage item={foodItem}></ErrorMessage>
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

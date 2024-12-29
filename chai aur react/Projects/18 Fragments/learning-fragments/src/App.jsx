import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorMessage from './component/ErrorMessage'
import FoodItem from './component/FoodItem'

function App() {
  //  let myArray = ['Dal','GGreen Vegetable', 'Roti', 'Salad','Milk','ghee']

  return (
    <React.Fragment>
      <div>Healthy Food</div>

      <FoodItem></FoodItem>
      <ErrorMessage></ErrorMessage>
        
    </React.Fragment>
  )
}

export default App;

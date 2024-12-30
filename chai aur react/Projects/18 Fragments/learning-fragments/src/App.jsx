import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorMessage from './component/ErrorMessage'
import FoodItem from './component/FoodItem'

function App() {
   let foodItem = ['Dal','GGreen Vegetable', 'Roti', 'Salad','Milk','ghee']

  return (
    <React.Fragment>
      <div className='food-heading'>Healthy Food</div>

      <FoodItem item={foodItem}></FoodItem>
      <ErrorMessage item={foodItem} ></ErrorMessage>
        
    </React.Fragment>
  )
}

export default App;

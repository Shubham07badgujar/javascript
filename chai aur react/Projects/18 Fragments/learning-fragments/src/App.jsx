import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
   let myArray = ['Dal','GGreen Vegetable', 'Roti', 'Salad','Milk','ghee']

  return (
    <React.Fragment>
      <div>Healthy Food</div>
        <ul className="list-group">
         {myArray.map((item) => <li key={item} class="list-group-item">{item}</li>)}
          
        </ul>
        </React.Fragment>
  )
}

export default App;

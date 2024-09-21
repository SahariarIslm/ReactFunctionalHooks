import { useState } from 'react';
import './App.css';


function StateObject() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('Blue');

  function decrementCount(){
    setCount(previousCount =>  previousCount-1);
    setTheme('Red')
  }

  function incrementCount(){
    setCount(previousCount => previousCount+1);
    setTheme('Green')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default StateObject

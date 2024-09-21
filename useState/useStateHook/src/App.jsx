import { useState } from 'react';
import './App.css';

function countInitial(){
  console.log('run Function');
  return 6;
}

function App() {
  const [count, setCount] = useState(()=>countInitial());

  function decrementCount(){
    setCount(previousCount => previousCount-1);
  }

  function incrementCount(){
    setCount(previousCount => previousCount+1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App

import { useState } from 'react';
import './App.css';


function StateObject() {
  const [state, setState] = useState({count:4, theme:"blue"});

  const count = state.count
  const theme = state.theme

  function decrementCount(){
    setState(previousState => {
      return { ...previousState, count: previousState.count-1}
    });
  }

  function incrementCount(){
    setState(previousState => {
      return { ...previousState, count: previousState.count+1}
    });
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

import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const rendenCount = useRef(1);
  useEffect(()=>{
    rendenCount.current = rendenCount.current+1;
  })

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {rendenCount.current} times</div>
    </>
  )
}

export default App

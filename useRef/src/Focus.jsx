import { useEffect, useRef, useState } from 'react';
import './App.css';

function Focus() {
  const [name, setName] = useState('')
  const inputRef = useRef()
  const prevName = useRef('')

  useEffect(()=>{
    prevName.current = name
  },[name])
  function focuss(){
    inputRef.current.focus()
    // inputRef.current.value = 'Some Name'
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
      <button onClick={focuss}>Focus</button>
    </>
  )
}

export default Focus

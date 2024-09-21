import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(()=>{
    console.log('resource changed');

    return () => {
      console.log('cleaned up event listener')
    }
  },[resourceType])

  return (
    <>
      <div>
        <button onClick={()=>setResourceType('posts')}>Posts</button>
        <button onClick={()=>setResourceType('users')}>Users</button>
        <button onClick={()=>setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input ,setInput] = useState(0)

  function MultiplyByTwo(num) {
    console.log("Inside function")
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2
  }

  const Double = MultiplyByTwo(input)
  return (
    <>
      <div>
        <p>{count}</p>
        <p>Double : {Double}</p>
        <input type="text" onClick={(e)=>setInput(e.target.value)} placeholder='enter any number' />
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    </>
  )
}

export default App

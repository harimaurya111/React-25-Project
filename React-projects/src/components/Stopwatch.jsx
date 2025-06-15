
import React, { useRef, useState } from 'react'

const Stopwatch = () => {

  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervelRef = useRef(null)

  function formatTime(ms) {
    const minutes = String(Math.floor(ms / 60000)).padStart(2,'0')
    const second = String(Math.floor((ms % 60000) / 1000)).padStart(2,'0')
    const milisecond = String(Math.floor(ms % 1000) / 10).padStart(2,'0')
    return `${minutes}:${second}:${milisecond}`
  }

  function handleStart() {
    if (isRunning) return
    setIsRunning(true)
    intervelRef.current = setInterval(()=>{
      setTime((pre) => pre + 10)
    },10)
  }

  function handlePause (){
     clearInterval(intervelRef.current)
     setIsRunning(false)
  }

function handleReset(){
  clearInterval(intervelRef.current)
  setIsRunning(false)
  setTime(0)
}

  return (
    <div className='flex justify-center items-center bg-gray-100 w-full h-screen'>
      <div className=' flex justify-between flex-col gap-6 items-center rounded-2xl w-[400px] px-3 py-7 shadow-lg'>
        <h1 className='text-3xl font-semibold text-center'>⌚ Stopwatch </h1>
        <div className='flex items-center justify-center p-4 w-full'>
           <p className='text-blue-700 text-3xl font-semibold '>{formatTime(time)}</p>
        </div>
        <div className='flex gap-3'>
          {
            !isRunning ?
            (<button onClick={handleStart} className='py-2 px-4 bg-green-500 rounded-xl text-white cursor-pointer'>Start</button>) :
            (<button onClick={handlePause} className='py-2 px-4 bg-green-500 rounded-xl text-white cursor-pointer'>Pause</button>)
          }
          <button onClick={handleReset} className='py-2 px-4 bg-red-500 rounded-xl text-white cursor-pointer'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch
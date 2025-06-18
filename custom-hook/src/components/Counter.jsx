import React from 'react'
import useCounter from '../cusom-hooks/useCounter'
const Counter = () => {
  const {increment , decrement , reset ,count} = useCounter()
  return ( 
    <div className='flex flex-col w-full h-screen bg-red-100 items-center justify-center'>
      <div className='text-3xl mb-5'>{count}</div>
      <div className='flex gap-3'>
        <button onClick={increment} className='border rounded py-2 px-2 cursor-pointer'>Add Number</button>
        <button onClick={decrement} className='border rounded py-2 px-2 cursor-pointer'>Minus Number</button>
        <button onClick={reset} className='border rounded py-2 px-2 cursor-pointer'>Reset Number</button>
      </div>
    </div>
  )
}

export default Counter
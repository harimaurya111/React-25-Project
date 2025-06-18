import React, { useState } from 'react'
import useFrom from '../cusom-hooks/useForm'

const LoginForm = () => {

  const { values, handleChange, resetForm } = useFrom({
    email: "",
    password: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Form Data : ", values)
    resetForm()
  }

  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 border shadow-2xl p-3 w-[500px]'>
        <input onChange={handleChange} type="email" placeholder='Enter your name' value={values.name} name='email' className='border rounded py-2 px-1 ' />
        <input onChange={handleChange} type="password" placeholder='Enter your password' value={values.password} name='password' className='border rounded py-2 px-1 ' />
        <button className='py-2 px-1 border rounded ' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
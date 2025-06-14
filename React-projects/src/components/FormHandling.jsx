import React, { useState } from 'react'

const FormHandling = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState({})

    function handleChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }


    const validation = () => {
        let newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid."
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";

        } else if (formData.password.length < 6) {
            newErrors.password = "Email Must be 6 Character"
        } else if (formData.password.length > 10) {
            newErrors.password = "Email Must be maximum 9 Character"
        }

        return newErrors
    }

    function handleSubmit(e) {
        e.preventDefault()
        const validationError = validation()

        if (Object.keys(validationError).length > 0) {
            setError(validationError)

        } else {
            console.log( formData)
            alert("Successfull")
            setError({})
            setFormData({
                name: "",
                email: "",
                password: "",
            })
        }

    }

    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <form onSubmit={handleSubmit} className='border w-[400px] rounded py-5 px-4 shadow  flex-col justify-center items-center '>
                <h1 className='text-center font-bold text-2xl'>Form Validation</h1>
                <div className='my-3 flex flex-col'>
                    <label htmlFor="name"> Name : </label>
                    <input onChange={handleChange} value={formData.name} type="text" placeholder='Enter Your Name' name='name' className='border p-1 shadow-2xl w-full' id='name' />
                </div>
                {error.name && <p className='text-red-500'>{error.name}</p>}

                <div className='my-3 '>
                    <label htmlFor="email"> Email : </label>
                    <input onChange={handleChange} type="email" value={formData.email} placeholder='Enter Your Email' name='email' className='border p-1 w-full' id='email' />
                </div>
                {error.email && <p className='text-red-500'>{error.email}</p>}


                <div className='my-3'>
                    <label htmlFor="password">Password : </label>
                    <input onChange={handleChange} type="password" value={formData.password} placeholder='Enter Your Password' name='password' className='border p-1 w-full' id='password' />
                </div>
                {error.password && <p className='text-red-500'>{error.password}</p>}

                <div className='w-full flex justify-center'>
                    <button type='submit' className='py-2 px-1 border rounded shadow w-full cursor-pointer hover:bg-blue-500'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormHandling


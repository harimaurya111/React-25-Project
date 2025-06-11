import React, { useState } from 'react'

const StarRating = ({initialValue}) => {
    const [rating, setRating] = useState(initialValue || 1)
    function handleRating(index){
        setRating(index)
    }
console.log(rating)
    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <div className='w-[300px] h-auto p-3 bg-green-200 flex flex-col items-center'>
                <p className='font-bold text-2xl'>Pls Gives The Rating</p>
                <div className='font-bold text-2xl'>
                    {Array(5).fill("").map((_, i) => {
                     const index = i +1
                        return <span key={index}
                        
                        onClick={()=>handleRating(index)}
                        className={` cursor-pointer ${index <= rating ? "text-yellow-500" : "text-gray-500"}`}>
                            &#9733;
                        </span>
                    }
                    )}
                </div>
            </div>

        </div>
    )
}

export default StarRating
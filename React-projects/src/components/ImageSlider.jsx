import React, { useState } from 'react'

const ImageSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const Images = [
        "https://cdn.pixabay.com/photo/2025/05/04/18/04/robin-9578746_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/04/20/20/22/robin-7940556_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/08/16/15/27/robin-8194367_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/02/12/23/01/robin-634413_1280.jpg"
    ]

    function handleRightButton() {
        setCurrentIndex(pre => (pre + 1) % Images.length)
    }

    console.log(currentIndex)
    function handleLeftButton() {
        setCurrentIndex(prev => (prev - 1 + Images.length) % Images.length)
    }
        return (
            <div className='flex flex-col justify-center items-center h-screen w-full'>
                <div className='w-[700px] relative '>
                    <img src={Images[currentIndex]} alt="" />
                    <button onClick={handleLeftButton} className='absolute top-1/2 left-3 text-2xl cursor-pointer'>⬅️</button>
                    <button onClick={handleRightButton} className='absolute top-1/2 right-3 text-2xl cursor-pointer'>➡️</button>
                </div>
                <div className='flex gap-2 my-3'>
                    {Array(Images.length).fill("").map((_, index) => (
                        <button onClick={()=>setCurrentIndex(index)} key={index} className={`w-3 h-3 ${currentIndex === index ? "bg-black" : "bg-gray-400"} rounded-full cursor-pointer`}></button>
                    ))}
                </div>

            </div>
        )
    }

    export default ImageSlider
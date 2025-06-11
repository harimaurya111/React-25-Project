import React, { useState } from 'react'

const RandomColor = () => {
    const [color, setColor] = useState("red")

    function genrateHexColor() {
        const letters = "abcdef123456789"
        let hexColor = "#"
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * letters.length)
            hexColor += letters[randomIndex]
        }
        setColor(hexColor)
    }


    function genrateRgbColor() {
        const numbers1 = Math.floor(Math.random() * 256)
        const numbers2 = Math.floor(Math.random() * 256)
        const numbers3 = Math.floor(Math.random() * 256)
        const rgbColor = `rgb(${numbers1},${numbers2},${numbers3})`
        setColor(rgbColor)
    }

  
    return (
        <div style={{ backgroundColor: color }} className={`w-full h-screen flex justify-center items-center`} >
            <div className='w-[600px] flex items-center justify-center flex-col gap-5  p-2'>
                <div className='border p-2 text-3xl bg-white rounded-lg'>
                    {color}
                </div>
                <div className='flex gap-4 text-white'>
                    <button onClick={genrateHexColor} className='p-2 border cursor-pointer rounded-lg bg-red-500'>Generate HexColor </button>
                    <button onClick={genrateRgbColor} className='p-2 border cursor-pointer rounded-lg bg-red-500' >Generate RGB Color </button>
                </div>
            </div>
        </div>
    )
}

export default RandomColor
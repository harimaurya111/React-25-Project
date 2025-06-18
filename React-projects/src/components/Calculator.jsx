import React, { useState } from "react";


const CalculatorUI = () => {
  const [input, setInput] = useState("")
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ]

  function handleCalculation (){
   const result = eval(input)
   setInput(result.toString())
    
  }

  function handleBtn(value){
    setInput((prev) => prev + value)
  }

  function handleClear(){
    setInput("")
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">React Calculator</h2>

        <input
          type="text"
          placeholder="0"
          value={input}
          className="w-full mb-4 p-3 text-right text-2xl border border-gray-300 rounded"
          readOnly
        />

        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear} className="col-span-4 bg-red-500 text-white p-2 rounded hover:bg-red-600">
            C
          </button>

          {buttons.map((btn, index) => (
              <button
              onClick={()=> btn === "=" ? handleCalculation() : handleBtn(btn)}
                key={index}
                className="bg-gray-200 hover:bg-gray-300 text-xl font-medium p-3 rounded"
              >
                {btn}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorUI;

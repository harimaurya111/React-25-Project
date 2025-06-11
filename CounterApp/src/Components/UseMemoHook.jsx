import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  let [count, setCount] = useState(0);
  let [input, setInput] = useState(0);



  function handleCount() {
    setCount(count+1);
  }

function calculation(num){
    console.log("this is inner text")
    for(let i=0; i<=1000000000;i++){}
    return num*2
}
const doubleVariable = useMemo(() => calculation(input), [input]);

  return (
    <>
      <h1>Learning useMemo Hook</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>Count</button><br />
      <br />
      <input type="number" placeholder="Enter a number" onChange={(e)=>{setInput(e.target.value)}} />
      
      <h3>Double Value of number is : {doubleVariable}</h3>
      <br />
    </>
  );
};

export default UseMemoHook;

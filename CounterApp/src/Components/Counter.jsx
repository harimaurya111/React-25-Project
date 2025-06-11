import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);



  function increase() {
    if(count<20){
      setCount(++count);
    }
  }

  function decrease() {
    if(count>0){
      setCount(--count);

    }
  }
  return (
    <div>
      <h1 className="heading"> {count} </h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}> Decrease</button>
    </div>
  );
};

export default Counter;

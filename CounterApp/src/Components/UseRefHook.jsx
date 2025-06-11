import React, { useRef, useState } from "react";

const UseRefHook = () => {
  let [count, setCount] = useState(0);

  let numberRef = useRef(0);
  // useRef ko isiliye banaya gya hai ki hum varable ko mutable bana sake aur directly dom ko access karke modify kar sake
  function handleIncrement() {
    setCount(count + 1);
    numberRef.current++;
    console.log(numberRef);
  }


  //useref ki help se Dom ko modify hum kuch iss trah se kar sakte hai
  let chageRef = useRef();
  function changeBgc() {
    chageRef.current.style.color = "red";
    chageRef.current.style.backgroundColor = "black";
    chageRef.current.style.padding = "10px";
  }

  let timerRef = useRef(0)
  let [time,setTime]=useState(0);

  function handleStart(){
    timerRef.current = setInterval(() => {
        setTime(time++)
    }, 1000);

  }

  function handleStop(){
    clearInterval(timerRef.current)
    timerRef.current=null
  }
  function handleReset(){
    setTime(0) 
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <div>
        <h4 ref={chageRef}>
          Hello Everyone my self Hari shankar Maurya Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum quia, cumque perspiciatis
          aliquid quae earum natus! Esse voluptatem voluptate vitae.
        </h4>


        <button onClick={changeBgc}>
          Change the paragraph background Color
        </button>
      </div>



<h1>Let Make a Stopwatch</h1>
<h2>Your Time is : {time} </h2>
<button onClick={handleStart}>Start</button>
<button onClick={handleStop}>Stop</button>
<button onClick={handleReset}>Reset</button>
    </>
  );
};

export default UseRefHook;

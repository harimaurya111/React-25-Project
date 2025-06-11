import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildA from "./components/ChildA";


function App() {
  const [count, setCount] = useState(0);

  let handleIncrease = useCallback(() => {
    setCount(count + 1);
  },[])


  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={handleIncrease}>Increase</button>

      <ChildA buttonName={"Click Me"} handleIncrease={handleIncrease}></ChildA>

      </div>
    </>
  );
}

export default App;

import "./App.css";
import One from "./Components/One";
import Second from "./Components/Second";
import Third from "./Components/Third";
import { createContext, useState } from "react";

const themeContext = createContext();

// const UserContext = createContext();

function App() {
  // const [user,setUser]=useState({name:"Hritik Arya"});

  const [theme, setTheme] = useState("light");

  return (
    <>
      <themeContext.Provider value={{theme,setTheme}}>
        <div className="container" style={{backgroundColor:theme==="light" ? "black":"white"}}>
          <One />
        </div>
      </themeContext.Provider>
    </>
  );
}

export default App;
export { themeContext };
// export {UserContext}

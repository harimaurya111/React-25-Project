import React, { useContext } from 'react'
// import { UserContext } from '../App'
import { themeContext } from '../App'

const Third = () => {
    // const user = useContext(UserContext)
    const {theme,setTheme} = useContext(themeContext);

function handleToggle(){
    if(theme==="light"){
        setTheme('dark')
    }else{
        setTheme('light')
    }
}

  return (
    <div>
        {/* <h1> {theme}</h1> */}
        <button onClick={handleToggle}>Click me</button>
    </div>
  )
}
  
export default Third
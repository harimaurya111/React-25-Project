import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChaildA from './components/ChaildA'
import { createContext, useContext, useState } from 'react'
import ChildB from './components/ChildB'
import ChildC from './components/ChildC'
import Navbar from './components/Navbar'

const UserContext = createContext()


function App() {

  const [name, setName] = useState({ name: "hari Maurya" ,email:"harimaurya879@gmail.com",password:123456789})

  return (
    <div>
      <UserContext.Provider value={name}>
        <ChaildA />
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}

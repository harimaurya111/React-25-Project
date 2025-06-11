import React, { useContext } from 'react'
import { UserContext } from '../App'



const ChildC = () => {

    const user = useContext(UserContext)
    console.log(user)
  return (
    <div>
       <h1>{user.name}</h1>
       <h1>{user.email}</h1>
       <h1>{user.password}</h1>
    </div>
  )
}

export default ChildC
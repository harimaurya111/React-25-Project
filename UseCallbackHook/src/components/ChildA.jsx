import React from 'react'

const ChildA =React.memo((props) => {

  console.log("The Child Page is re-render")


  return (
    <div >
        <button onClick={props.handleIncrease}>{props.buttonName}</button>
    </div>
  )
})

export default ChildA
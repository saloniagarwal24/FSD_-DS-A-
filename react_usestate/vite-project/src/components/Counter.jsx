import React, { useState } from 'react'

export const Counter = () => {
  const[count,setCount]=useState(0);//setCount is function name 0 stored in count
  function inc(){
    if(count>=10)
      alert("max limit reached")
    else
   setCount(count+1)
  }
  function dec(){
    if(count<1)
      alert("min limit reached")
    else
   setCount(count-1)
  }
  return (
    <div>
        <h3>Counter App</h3> 
        <br/>
        <button onClick={inc}>+</button>
        <span>{count}</span>
        <button onClick={dec}>-</button>
       </div>
  )
}
// component must be called in app jsx
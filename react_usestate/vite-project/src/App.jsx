import React, { useEffect, useState } from 'react'
// import {Counter} from './components/Counter'
import Fiximage from './components/fiximage'
// import {useState} from 'react'
// datatype [variable, SetVariable] = useState(initialValue);capital krdo V
// const [state, setState] = useState(initialValue);
const Appp = () => {
  return (
    <div>
      {/* <h1>MY COUNTER App</h1> */}
      {/* <Counter/> */}
      <Fiximage/>
      </div>   
  )
}


const App = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
  })

  useEffect(()=>{
    console.log("form data update", formData)
  },[formData])

  const handleChange=(e)=>
  {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("registartion succesfully");
    console.log(formData);
  }
  // here formData is working as props
  return (
    <div>
      <form onSubmit={handleSubmit}>                   
        <input type='text' name='name' placeholder='enter name' value={formData.name} onChange={handleChange}/>
        <br/>
        <input type='email' name='email' placeholder='enter your email' value={formData.email} onChange={handleChange}/>
        <br/>
         <input type='password' name='password' placeholder='enter your pass' value={formData.password} onChange={handleChange}/>
         <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App


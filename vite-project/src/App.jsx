// rafce -due to es7 extension boilerplate code
// import karo library of react node moudules-package
//import from javascript
import React from 'react'
import Student from './components/Student';
import Header from './components/Header'
const App = () => {
  return (
    <div style={{display:'flex',margin:'60px',padding:'30px'}}>
       <Header/>
      {/* <Student/>
      <br />
      <Student/>
      <br/>
      <Student/> */}
    </div>
  )
}
export default App
// export means access (any other file can access)
// we can access our father income
// react cant use js code it uses babel to convert js code to jsx
// component is a predefined code its always first letter capital with extension .jsx
//rafce for boilerplate code
import React from 'react'

const Student = () => {
  return (
    <div style={{backgroundColor:"yellowgreen",border:'2px solid red',height:'300px',width:'300px'}}>
      <h2 style={{color:'red'}}>Student Info</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsq8S_0J4CUtJoXmUeGJqinW9DYEZnf6PUJ8hn_MSqnCmVCq7XCEOlHWA&s=10" alt="" height={'150'} width={'150'}/>
      <h3>Student Name:Saloni</h3>
      <h4 style={{color:'pink'}}>B.tech DS-A</h4>
    </div>
  )
}
export default Student
// component parent->app->main->index.html
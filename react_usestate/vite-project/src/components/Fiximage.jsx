import React, { useState } from 'react';
import {imageType} from 'tesseract.js'
const Fiximage = () => {
     const[width,setWidth]=useState(200);
      const[length,setLength]=useState(200);
    function widinc()
    {
      setWidth(width+1);
    }
    function widdec(){
 setWidth(width-1);
    }
    function lengthinc(){
         setLength(length+1);
    }
     function lengthdec(){
         setLength(length-1);
    }
  return (
    <div>
      
       <div>
         <button onClick={widinc}>+</button>
        <button onClick={widdec}>-</button>
            <button onClick={lengthinc}>+</button>
        <span>{<img src="https://images.unsplash.com/photo-1637424864367-7ab8752c19c6" width={width} height={length}/>}</span>
        <button onClick={lengthdec}>-</button>
         </div>
         <br/>
       
    </div>
        
  )
}

export default Fiximage
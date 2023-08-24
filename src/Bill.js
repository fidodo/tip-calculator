import React from 'react'

function Bill({ billValue, setBillValue}) {
    console.log(billValue)
    function handleChange(e){
        setBillValue((e.target.value))
    }  
  return (
  <div>
     <p>How much was the bill?  <input type="text" onChange={handleChange} value={(billValue)}/></p>
 </div>
  )
}

export default Bill
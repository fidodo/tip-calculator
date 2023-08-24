import React from 'react'

function Service({children, tipPercentage,   calculateTip }) {
    
  
  return (
    <>
    <div>
       <p>{children}    
        <select value={tipPercentage} onChange={calculateTip}>
        <option value="0">Not Okay  (0%)</option>
  <option value="10"> It was good (10%)</option>
  <option value="20">Absolutely amazing! (20%)</option>
        </select> 
        </p> 
       
    </div>

     </>
  )
}

export default Service
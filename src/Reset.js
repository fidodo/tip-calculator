import React from 'react'

function Reset({setBillValue, setTipPercentage, setTotalAmount}) {
    function handleReset(){
    setBillValue(0)
    setTipPercentage(0)
    setTotalAmount(0)
 
    }
  return (
    <div>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Reset
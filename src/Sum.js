import React from 'react'

function Sum({ billValue,  tipPercentage, TotalAmount, calculateTip}) {
   console.log(billValue)
  return (
    <div>
        <h1>
            {`you pay ${TotalAmount} (${Number(billValue)} + ${calculateTip()} tip)`} 
        </h1>
    </div>
  )
}

export default Sum
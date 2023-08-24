import Bill from "./Bill"
import Service from "./Service";
import Reset from "./Reset";
import Sum from "./Sum";
import {useState} from "react"


function App() {
  const [billValue, setBillValue]= useState("")
  const [tipPercentage, setTipPercentage]=useState(0)
 
  const [totalAmount, setTotalAmount] = useState(0);
 
  const calculateTip = () => {
    const tipAmount = (Number(billValue) * tipPercentage) / 100;
    const totalAmount = Number(billValue) + tipAmount;
    setTotalAmount(totalAmount);
  };
 
  
  console.log(Number(billValue))
  return (
    <div className="App">
     <Bill billValue={(billValue)} setBillValue={setBillValue}  setTipPercentage={setTipPercentage} tipPercentage={tipPercentage}   totalAmount={totalAmount} setTotalAmount={setTotalAmount} calculateTip={calculateTip}/>
        <Service tipPercentage={tipPercentage} billValue={billValue} setTotalAmount={setTotalAmount}>How did you like the service?</Service>
        <Service tipPercentage={tipPercentage} billValue={billValue} setTotalAmount={setTotalAmount} calculateTip={calculateTip}  setTipPercentage={setTipPercentage}>How did your friend like the service?</Service>
        <Sum  billValue={(billValue)} calculateTip={calculateTip}  setTipPercentage={setTipPercentage}/>
        <Reset setTotalAmount={setTotalAmount} setTipPercentage={setTipPercentage} setBillValue={setBillValue}/>
    </div>
  );
}

export default App;

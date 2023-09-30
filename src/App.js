
import './App.css';
import { useState } from 'react';

function App() {
const date = new Date();
let onlyDate=date.toDateString()
// console.log(onlyDate)
const[myCounter,setMyCounter]= useState([onlyDate])
const[stepCounter,setStepCounter]= useState(1)
const[countCounter,setCountCounter]= useState(0)

function stepPlusHandler(){
  setStepCounter(stepCounter+1)
}

function stepMinusHandler(){
 if(stepCounter > 1)
  setStepCounter(stepCounter-1)
}


function resetHandler(){
  setCountCounter(0)
   setStepCounter(1)
}



   //  PLUS HANDLER //
  function countPlusHandler() {
    const incrementDate = date.setDate(date.getDate() + (countCounter + stepCounter))
    console.log(incrementDate)
    const dateSet = new Date(incrementDate)
    onlyDate = dateSet.toDateString()
    console.log(onlyDate)
    setMyCounter(onlyDate)
    setCountCounter(countCounter + stepCounter)
    console.log(countCounter)
  }

   // MINUS HANDLER ///
   function countMinusHandler(){
    if (countCounter === 0){
      return alert("Please Incement the date & then Minus  ")
    }

    const decrementDate = date.setDate(date.getDate() + (countCounter - stepCounter))
    console.log(decrementDate)
    const dateSet = new Date(decrementDate)
    onlyDate = dateSet.toDateString()
    console.log(onlyDate)
    setMyCounter(onlyDate)
    setCountCounter(countCounter - stepCounter)
    console.log(countCounter)

   }


 
  return (
    <div className="App">
            <div>

            <h3 className='countentStep'>Step: </h3> 
      <div className='stepDiv'>
        <button className='buttonLeft' onClick={stepMinusHandler}>-</button>
        <h3 className='stepCount'>{stepCounter}</h3>
        <button className='buttonRight' onClick={stepPlusHandler}>+</button>
      </div>

            </div>

    <div>

      <h3 className='countentCount'>Count:</h3>
      <div className='countDiv'>
        <button className='buttonLeft' onClick={countMinusHandler}>-</button>
         <h3 className='count'>{countCounter}</h3>
        <button className='buttonRight' onClick={countPlusHandler}>+</button>
      </div>

    


      <p className="datePara">
        <span>
          {countCounter === 0
            ? ""
            : countCounter === 1
              ? countCounter + " day from "
              : countCounter === -1
                ? countCounter + " day from "
                : countCounter + " days from "}
        </span>
        Today is <span className='dateParaSpan' >{myCounter}</span>
      </p>
<button className='resetButton' onClick={resetHandler} >reset</button>




</div>

    </div>
);
}

export default App;
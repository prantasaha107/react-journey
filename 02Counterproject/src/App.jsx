import { useState } from "react";




function App() {
  //when we want to change the UI, we need UseState and it is A HOOK
  // the variable takes 2 parameters in form of an array, the first parameter is the 
  //variable and the second paramter is the the method that 
  //updates the  first variable.

  //the 0 value inside useState is the initial value we want ot have for the counter
  let [counter,setCounter]=useState(10)
  //let counter=0;

  const addValue=()=>{
    counter=counter+10;
    setCounter(counter)
   
    
    
  }

  const removeValue=()=>{
    
    counter-=100;
    if(counter<=1){
      counter=0;

    }
    setCounter(counter)
  }


  return (
    <>
     
      <h1>Vite and React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <button
      onClick={removeValue}>Remove Value</button>
     
      
    </>
  )
}

export default App

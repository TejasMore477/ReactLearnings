import { useState } from "react";

function App() {
  let [counter,setCounter] = useState(0);

  const addValue = ()=> {
    if(counter < 20){
      setCounter(counter+=1);
    }
    console.log(counter);
  }

  const redValue = ()=>{
    if(counter < 0){
      setCounter(counter-=1);
    }
    console.log(counter);
  }
  
  return (
    <>
      <h1>Letcure 4 React.JS</h1>
      <h1>Basic Counter Programm</h1>
      <h1>counter value: {counter}</h1>
      <button onClick={addValue}>ADD</button>
      <br /> <br />
      <button onClick={redValue}>REMOVE</button>

      <p>the latest value of counter is {counter}</p>
    </>
  )
}

export default App

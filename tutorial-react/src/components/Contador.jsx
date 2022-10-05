import { useState } from "react";

function Contador() {

    const [counter, setCounter] = useState(0);
    

    return (
      <>
        <h1> Counter : {counter}</h1>
        <button onClick={()=>{
            setCounter(counter +1);
        }}>
          Sumar
        </button>
        <button onClick={()=>{
            setCounter(counter -1);
        }}>
          Restar
        </button>
      </>
    );
  } 
  
  export default Contador;
  
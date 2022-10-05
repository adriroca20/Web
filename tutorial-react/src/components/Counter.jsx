import { useState, useEffect } from "react";

function Counter(){
    const [count, addCount] = useState(0);
    //Se usa cada vez que el componente se refresca
    useEffect(()=>{
        console.log("render");
    },[]);
    //Con el array vacio hace que el componente solo ejecute una vez lo de dentro
    //Si le pones [count] cada vez que cambie count se activara el useEffect
    return (<>
        <div>
            <h1>Contador {count}</h1>
            <button onClick={()=>{
                addCount(count +1 )
            }
            }>Sumar</button>
        </div>
    </>);
}

export default Counter;
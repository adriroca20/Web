import { useState, useEffect } from "react";

function Counter(){
    const [count, addCount] = useState(0);
    //Se usa cada vez que el componente se refresca
    useEffect(()=>{
        console.log("render");
    });

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
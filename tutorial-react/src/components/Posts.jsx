import { FaBeer } from 'react-icons/fa';



function Posts(){
    function llamarApi(){
        const resultadoLlamada= fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json=> json.map((objeto)=>objeto.name))
        .then(nombres=> console.log(nombres));

        const nombres = [];
        
    }
    return(
        <>
            <ul>
                <li>
                    <button onClick={()=>{
                        llamarApi()
                    }}>
                    Llamar a la api <FaBeer></FaBeer>
                    </button>
                </li>
            </ul>
        </>
    );
}

export default Posts;

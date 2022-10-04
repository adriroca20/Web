function BotonTraerDatos(){
    return(<>
        <button onClick={()=>{
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json));
        }}>
            Traer datos
        </button>
    </>);
}

export default BotonTraerDatos;
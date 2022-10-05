//Los props son los prametros de la funcion
//Puedes pasarle ({titulo}) y que reciba solo cosas que
//se llamen titulo
function Greetings(props){
    return (<>
        <h1>{props.titulo}</h1>
    </>);
}

export default Greetings;

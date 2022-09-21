import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';



function Square(props){
  return (
    //setState re renderiza tanto el componente de react como sus hijos con los valores que ele pases en el objeto.
    <button className="square" 
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square 
      value= {this.props.squares[i]}
      onClick={()=>this.props.onClick(i)}
    />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state={
      history:[{
        squares:Array(9).fill(null)
      }],
      xIsNext:true
    }
  }
  handleClick(i){
    const history = this.state.history;
    const current= history[history.length -1];
    //El slice devolvera un array copia del squares
    const squares= current.squares.slice();
    //Si hay ganador o el hueco esta ocupado, no cambia el contenido del botón
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    else if(this.state.xIsNext){
      squares[i]="X";
    }
    else{
      squares[i]="O";
    }
    this.setState({
      history: history.concat([{
        squares:squares
      }]), 
      xIsNext:!this.state.xIsNext});
  }

  render() {
    const history = this.state.history;
    const current= history[history.length -1]
    const winner= calculateWinner(current.squares);
    var turno="O";
    if(this.state.xIsNext){{
      turno="X"
    }}
    let status;
    if(winner){
      status= "Winner: " + winner;
    }
    else{
      status = 'Next player: ' + turno;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i)=> this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

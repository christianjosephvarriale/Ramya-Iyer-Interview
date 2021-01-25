import React from 'react'
import Board from './Board';

/**
 * Calculates whether a win has occured based on Game State
 * @param {*} squares 
 */
function calculateWinner(squares) {
  return
}


export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true,
        records: []
      };
    }

    /**
     * This function allows you to jump to any previous move 
     * @param {*} squares
    */
    jumpTo(step) {
      return
    }

    /**
     * What happens when a square is clicked on?
     * @param {*} i 
     */
    handleClick = (i) => {
      console.log(this.state);
      const { history, xIsNext, stepNumber, records } = this.state;
      if(xIsNext){
        history[stepNumber].squares[i] = 'X';
      }else{
        history[stepNumber].squares[i] = 'O'; 
      }
      this.setState({
        history,
        xIsNext: !xIsNext
      })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
    
        const moves = history.map((step, move) => {
          const desc = move ?
            'Go to move #' + move :
            'Go to game start';
          return (
            <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
          );
        });
    
        let status;
        if (winner) {
          status = "Winner: " + winner;
        } else {
          status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
    
        return (
          <div className="game">
            <div className="game-board">
              <Board
                squares={current.squares}
                onClick={i => this.handleClick(i)}
              />
            </div>
            <div className="game-info">
              <div>{status}</div>
              <ol>{moves}</ol>
            </div>
          </div>
        );
      }
    }
  

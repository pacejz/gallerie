import React, { Component } from 'react';
import GButton from '../components/atoms/button';


function Square(props) {
    return (
        <GButton onClick={props.onClick}>
            {props.value}
        </GButton>
    )
}

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
        if (squares[a] !== "/" && squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
}

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            squares: Array(9).fill("/")
        };
    }
    renderSquare(i) {
        return (
            <Square
                index={i}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
        />);
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i] !== "/") {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            xIsNext: !this.state.xIsNext,
            squares
        })
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        const status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
        const statusMessage = !winner ? <div className="status">{status}</div> : ""
        const winnerMessage = winner ? <div className="winner">The winner is {winner}</div> : "";
        
        return (
            <div>
                {statusMessage}
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
                {winnerMessage}
            </div>
        );
    }
}

export default class Game extends Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
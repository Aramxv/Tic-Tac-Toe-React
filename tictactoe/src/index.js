import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
    constructor(proops) {
        super(proops);
        this.state = {
            value: null,
        };
    }

    render() { 
        // TODO: use onCLick={this.props.onClick}
        // TODO: replace this.state.value with this.props.value
        return (
            <button className="square" 
            onClick={() =>  this.setState({value: 'X'}) }
            >
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquare(i) {
        return (
            <Square 
                value={this.state.squares[i]} 
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next Player: X';
    
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
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
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* Status */}</div>
                    <ol>{/* Todo */}</ol>
                </div>
            </div>
        );
    }
}

// ===============================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xisnext, setXisnext] = useState(true);

  function handleClick(i) {
    const squareCopy = [...squares];
    if (calculatewinner(squareCopy) || squareCopy[i]) {
      return;
    }

    squareCopy[i] = xisnext ? "X" : "O";
    setSquares(squareCopy);
    setXisnext(!xisnext);
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculatewinner(squares);
  let status;
  if (winner) {
    status = "winner : " + winner;
  } else {
    status = "Next player: " + (xisnext ? "X" : "O");
  }
  return (
    <div>
      <h1>{status}</h1>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function calculatewinner(squares) {
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
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;

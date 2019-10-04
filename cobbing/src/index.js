import React from 'react';
import ReactDOM from 'react-dom';
import Blank from './pieces/Blank';
import Wan from './pieces/Wan';
import Square from './components/Square';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function renderSquare(i, [pieceX, pieceY]) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isPieceHere = pieceX === x && pieceY === y
  const blue = (x + y) % 2 === 1
  const piece = isPieceHere ? <Wan /> : <Blank />

  return  (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Square blue={blue}>{piece}</Square>
    </div>
  )
}

export default function Board({ piecePosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, piecePosition))
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  )
}

ReactDOM.render(
  <Board piecePosition={[0,0]} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

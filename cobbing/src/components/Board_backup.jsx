import React from 'react';
import SquarePosition from './SquarePosition';

import Wan from './Wan';
import Do from './Do';

import { DndProvider } from 'react-dnd';
import { movePiece } from './Game';
import HTML5Backend from 'react-dnd-html5-backend';

export const PieceTypes = {
  WAN: 'wan',
  DO: 'do',
}

function renderSquare(i, [pieceX, pieceY]) {
  const x = i % 8
  const y = Math.floor(i / 8)

  return  (
    <div
      key={i}
      style={{
        width: '12.5vw',
        height: '12.5vh'
      }}>
      <SquarePosition x={x} y={y}>
        {renderWan(x, y, [pieceX, pieceY])}
        {renderDo(x, y, [pieceX, pieceY])}
      </SquarePosition>
    </div>
  )
}

function renderWan(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Wan />
  }
  return null
}

function renderDo(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Do />
  }
  return null
}

export default function Board({piecePosition}) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, piecePosition))
  }
  return (
    <DndProvider backend={HTML5Backend}>
        <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {squares}
      </div>
    </DndProvider>
  )
}

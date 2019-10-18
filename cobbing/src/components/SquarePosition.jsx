import React from 'react';
import Square from './Square';

import { movePiece } from './Game';
import { PieceTypes } from './Board';

import { useDrop } from 'react-dnd';

export default function SquarePosition({ x, y, children }) {
  const blue = (x + y) % 2 === 1
  const [, drop] = useDrop({
    accept: [ PieceTypes.WAN, PieceTypes.DO],
    drop: () => movePiece(x, y),
  })

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square blue={blue}>{children}</Square>
    </div>
  )
}

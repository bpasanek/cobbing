import React from 'react'
import { PieceTypes } from './Board'
import { useDrag } from 'react-dnd'

export default function Seeks() {
  const [, drag] = useDrag({
    item: { type: PieceTypes.SEEKS },
    // collect: monitor => ({
    //   isDragging: !!monitor.isDragging(),
    // }),
  })

  return (
    <div
      ref={drag}
      style={{
        fontSize: '2',
        cursor: 'move',
      }}
    >
        Seeks
    </div>
  )
}


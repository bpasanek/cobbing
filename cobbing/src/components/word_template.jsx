import React from 'react'
import { PieceTypes } from './Board'
import { useDrag } from 'react-dnd'

export default function Replace() {
  const [, drag] = useDrag({
    item: { type: PieceTypes.REPLACE },
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
        Replace
    </div>
  )
}

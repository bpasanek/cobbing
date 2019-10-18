import React from 'react'
import { PieceTypes } from './Board'
import { useDrag } from 'react-dnd'

export default function Den() {
  const [, drag] = useDrag({
    item: { type: PieceTypes.DEN },
    // collect: monitor => ({
    //   isDragging: !!monitor.isDragging(),
    // }),
  })

  return (
    <div
      ref={drag}
      style={{
        fontSize: '15',
        cursor: 'move',
      }}
    >
        Den
    </div>
  )
}

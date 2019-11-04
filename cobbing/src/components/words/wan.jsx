import React from 'react'
import { PieceTypes } from './Board'
import { useDrag } from 'react-dnd'

export default function wan() {
  const [, drag] = useDrag({
    item: { type: PieceTypes.WAN },
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
        wan
    </div>
  )
}


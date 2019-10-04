import React from 'react'

export default function Square({ blue, children }) {
  const fill = blue ? 'blue' : 'white'
  const stroke = blue ? 'white' : 'blue'

  return (
    <div
      style={{
        background: fill,
        color: stroke,
        width: '85px',
        height: '85px',
      }}
    >
      {children}
    </div>
  )
}

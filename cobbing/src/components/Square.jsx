import React from 'react';

export default function Square({ blue, children }) {
  const fill = blue ? 'blue' : 'white'
  const stroke = 'black'

  return (
    <div
      style={{
        background: fill,
        color: stroke,
        width: '20vw',
        height: '20vh',
      }}
    >
      {children}
    </div>
  )
}

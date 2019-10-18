import React from 'react';
import SquarePosition from './SquarePosition';

import Wan from './Wan';
import Do from './Do';
import Tree from './Tree';
import Fear from './Fear';
import Fife from './Fife';
import Seeks from './Seeks';
import Siphon from './Siphon';
import Eat from './Eat';
import Neighing from './Neighing';
import Den from './Den';
import Elephan from './Elephan';
import Twirl from './Twirl';

import { DndProvider } from 'react-dnd';
import { movePiece } from './Game';
import HTML5Backend from 'react-dnd-html5-backend';

export const PieceTypes = {
  WAN: 'wan',
  DO: 'do',
  TREE: 'tree',
  FEAR: 'fear',
  FIFE: 'fife',
  SEEKS: 'seeks',
  SIPHON: 'siphon',
  NEIGHING: 'neighing',
  DEN: 'den',
  ELEPHAN: 'elephan',
  TWIRL: 'twirl',    
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
        {renderTree(x, y, [pieceX, pieceY])}
        {renderFear(x, y, [pieceX, pieceY])}
        {renderFife(x, y, [pieceX, pieceY])}
        {renderSeeks(x, y, [pieceX, pieceY])}
        {renderSiphon(x, y, [pieceX, pieceY])}
        {renderEat(x, y, [pieceX, pieceY])}
        {renderNeighing(x, y, [pieceX, pieceY])}
        {renderDen(x, y, [pieceX, pieceY])}
        {renderElephan(x, y, [pieceX, pieceY])}
        {renderTwirl(x, y, [pieceX, pieceY])}
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

function renderTree(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Tree />
  }
  return null
}

function renderFear(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Fear />
  }
  return null
}

function renderFife(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Fife />
  }
  return null
}

function renderSeeks(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Seeks />
  }
  return null
}

function renderSiphon(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Siphon />
  }
  return null
}

function renderEat(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Eat />
  }
  return null
}

function renderNeighing(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Neighing />
  }
  return null
}

function renderDen(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Den />
  }
  return null
}

function renderElephan(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Elephan />
  }
  return null
}

function renderTwirl(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <Twirl />
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

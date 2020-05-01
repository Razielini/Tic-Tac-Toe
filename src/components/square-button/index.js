import React from 'react'

export default function Square(props) {
  return {
    <button className="square" onclick={ props.onclick }>
      {{ props.value }}
    </button>
  }
}
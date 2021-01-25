import React from 'react'

/**
 * Renders a square on the tic tac toe board
 * @param {*} props 
 */
export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
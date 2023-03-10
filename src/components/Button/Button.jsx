import React from 'react'
import './Button.css'

function Button ({ text, isButtonClick, clickFunct }) {
  return (
    <button
      className={isButtonClick ? 'btn-start' : 'btn-stop'}
      onClick={clickFunct}
    >
      {text}
    </button>
  )
}
export default Button

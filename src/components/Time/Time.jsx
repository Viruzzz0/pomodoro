import React, { useState } from 'react'
import Button from '../Button/Button'
import useTimer from '../../hooks/useTimer'
import InputTime from '../InputTime/InputTime'
import './Time.css'

function Time ({ title, type }) {
  const { time, Start, Stop, handleValue } = useTimer({ type })
  const [inputToggle, setInputToggle] = useState(false)
  const [resetBtn, setResetBtn] = useState(true)
  const [nameButton, setnameButton] = useState('Start')

  const handleInput = () => {
    if (type === 'chrono') return
    setInputToggle(!inputToggle)
  }

  const startButton = () => {
    if (time === '00:00' && type !== 'chrono') return
    resetBtn ? setnameButton('Reset') : setnameButton('Start')
    setResetBtn(!resetBtn)
    setInputToggle(false)
    Start({ time, toggleReset: resetBtn })
  }

  const stopButton = () => {
    setResetBtn(!resetBtn)
    resetBtn ? setnameButton('Reset') : setnameButton('Start')
    Stop()
  }

  return (
    <div className='time'>
      <div className='title'>
        <h2>{title}</h2>
      </div>

      <div className='time-render'>
        <p>
          <span
            className='value'
            onClick={handleInput}
          >
            {time}
          </span>
        </p>
      </div>

      <div className='buttons-container'>
        <Button
          text={nameButton}
          clickFunct={startButton}
        />

        <Button
          text='Stop'
          isButtonClick={false}
          clickFunct={stopButton}
        />
      </div>

      <div className={`container-input ${inputToggle ? '' : 'invisible'}`}>
        <InputTime onChange={handleValue} />
      </div>
    </div>
  )
}

export default Time
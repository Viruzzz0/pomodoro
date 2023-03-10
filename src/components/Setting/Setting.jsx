import { useState } from 'react'
import './Setting.css'
import iconGeneral from '../../assets/iconGeneral.svg'
import iconAbout from '../../assets/iconAbout.svg'

function Setting ({ classToggle, handleClassToggle }) {
  const [valueInput, setValueInput] = useState(window.localStorage.getItem('restPomo'))

  const updateTextInput = (event) => {
    const value = event.target.value
    window.localStorage.setItem('restPomo', value)
    setValueInput(value)
  }
  return (

    <div className={`container-setting ${classToggle ? '' : 'invisible'}`}>
      <div className='setting'>

        <div className='title-setting'>

          <div className='button-close' />
          <h4>Setting</h4>
          <div className='button-close' onClick={handleClassToggle}>×</div>
        </div>

        <div className='main-setting'>
          <div className='section-setting'>
            <div className='button-section'>
              <img src={iconGeneral} className='logo react' alt='React logo' width='20px' />
              general
            </div>
            <div className='button-section'>
              <img src={iconAbout} className='logo react' alt='React logo' width='20px' />
              acerca de
            </div>
          </div>

          <div className='body-setting'>
            <div className='body-item'>

              <div>Rest duration</div>

              <div className='input-range'>
                <input type='range' value={valueInput} name='rangeInput' min='0' max='60' onChange={updateTextInput} />
                <div className='valueInput'>{valueInput} min</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Setting

import React from 'react'
import './Header.css'
import addIcon from './assets/add_btn.png'

function header(props) {

  return (
    <div className='header-container'>
        <header className='header'>
            <h1 className='header-note'>NOTES</h1>
            <img src={addIcon} alt="Add icon" className='header-add-btn' onClick={() => props.addNote()}/>
        </header>
        
    </div>
  )
}

export default header

import React from 'react'
import delIcon from './assets/delete_icon.svg'
import './NoteCard.css'

function NoteCard() {



  return (
    <div className='note-card'>
      <main className='note-card-container'>
          <input type="text" name="title" id="title" placeholder='Enter the title'/>
          <textarea name="content" className='content note-scroll-bar' placeholder='Start writing your note here...'></textarea>
      </main>
      <footer className='note-card-footer'>
        <p>18-7-2022</p>
        <img src={delIcon} alt="Delete icon" />
      </footer>
    </div>
  )
}

export default NoteCard

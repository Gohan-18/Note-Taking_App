import React from 'react'
import delIcon from './assets/delete_icon.svg'
import './NoteCard.css'

function NoteCard(props) {

  return (
    <div className='note-card' key = {props.id}>
      <main className='note-card-container'>
          <input type="text" name="title" id="title" placeholder='Enter the title' value={props.note.title}/>
          <textarea name="content" className='content note-scroll-bar' placeholder='Start writing your note here...'>{props.note.text}</textarea>
      </main>
      <footer className='note-card-footer'>
        <p>{props.note.date}</p>
        <img src={delIcon} alt="Delete icon" />
      </footer>
    </div>
  )
}

export default NoteCard

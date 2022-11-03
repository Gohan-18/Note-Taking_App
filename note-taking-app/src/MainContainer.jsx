import React from 'react'
import NoteCard from "./NoteCard"
import './MainContainer.css'

function MainContainer(props) {

  return (
    <div className='MainContainer custom-scroll'>
      {/* <NoteCard key={props.notes.id} note = {props.notes} /> */}
      {props.notes.map((item) => (
        <NoteCard key ={item.id} note={item} />
      ))}
    </div>
  )
}

export default MainContainer

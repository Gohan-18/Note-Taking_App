import React from 'react'
import NoteCard from "./NoteCard"
import SearchBar from "./SearchBar.jsx"
import './MainContainer.css'


function MainContainer(props) {

  const reverseArray = (arr) => {
    const array = [];

    for(let i = arr.length-1; i >= 0; --i){
      array.push(arr[i]);
    }

    return array;
  }

  const notes = reverseArray(props.notes);

  return (
    <>
      <SearchBar searchUpdate = {props.searchUpdate} />
      <div className='MainContainer custom-scroll'>
        {/* <NoteCard key={props.notes.id} note = {props.notes} /> */}
        {notes?.length > 0 ? (notes.map((item) => (
          <NoteCard 
          key ={item.id} 
          note={item} 
          delNote = {props.delNote} 
          titleUpdate = {props.titleUpdate}
          contentUpdate= {props.contentUpdate} />
          
        ))): (<h1 className='no-notes-message'>No Notes Available</h1>)}
      </div>
    </>
  )
}

export default MainContainer;

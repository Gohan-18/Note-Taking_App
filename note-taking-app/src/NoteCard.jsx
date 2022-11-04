import React from 'react'
import delIcon from './assets/delete_icon.svg'
import './NoteCard.css'

function NoteCard(props) {

  let timer = 500, timeOut;

  const debounce = (func) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(func, timer);
    console.log("debounce called");
  }

  const titleUpdate = (event, id) => {
    debounce(() => props.titleUpdate(event, id));
  }

  const contentUpdate = (event, id) => {
    debounce(() => props.contentUpdate(event,id));
    console.log(event);
    console.log(id);
  }

  const dateTime = (value) => {
    if(!value) return "";

    const date = new Date(value);

    const monthName = ["Jan","Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : 12;
    hrs = hrs > 12 ? (hrs = hrs - 12) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? `0${min}` : min;

    let day = date.getDate();
    const month = monthName[date.getMonth()];

    return (`${hrs}:${min} ${amPm} ${day} ${month}`);

  };

  return (
    <div className='note-card' key = {props.id}>
      <main className='note-card-container'>
          <input type="text" name="title" id="title" placeholder='Enter the title' defaultValue={props.note.title} 
          onChange={(event) => titleUpdate(event.target.value, props.note.id)}/>
          <textarea name="content" className='content note-scroll-bar' placeholder='Start writing your note here...' 
          defaultValue={props.note.text} onChange={(event) => contentUpdate(event.target.value, props.note.id)} ></textarea>
      </main>
      <footer className='note-card-footer'>
        <p>{dateTime(props.note.date)}</p>
        <img className='delIcon' src={delIcon} alt="Delete icon" onClick={() => props.delNote(props.note.id)} />
      </footer>
    </div>
  )
}

export default NoteCard

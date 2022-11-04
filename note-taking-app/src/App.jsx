import { useState, useEffect } from "react"
import Header from "./header"
import MainContainer from "./MainContainer"
import './App.css'


function App() {

  const [notes, setNote] = useState(
    JSON.parse(localStorage.getItem("note-taking-app")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      'note-taking-app', JSON.stringify(notes)
  )}, [notes])

  const addNotes = () =>{
    const temp = [...notes];
    temp.push({
      id : new Date().getTime().toString(),
      title : "",
      text : "",
      date : Date.now()
    });
    setNote(temp);
  };

  const delNote = (id) => {
    const tempNote = [...notes];

    const index = tempNote.filter((item) => item.id !== id);

    setNote(index);
  }

  const titleUpdate = (event, id) => {
    const tempNote = [...notes];

    const index = tempNote.findIndex((item) => item.id === id);

    if (index < 0) return;

    tempNote[index].title = event;
    setNote(tempNote);

  }

  const contentUpdate = (event,id) => {
    const tempNote = [...notes];

    const index = tempNote.findIndex((item) => item.id === id);

    if (index < 0) return;

    tempNote[index].text = event;
    setNote(tempNote);
  }

  return (
    <div className="App">
      <Header addNote={addNotes}/>
      <MainContainer 
      notes = {notes} 
      delNote = {delNote} 
      titleUpdate = {titleUpdate} 
      contentUpdate = {contentUpdate} />
    </div>
  )
}

export default App


  // useEffect(() => {
  //   const savedNotes = JSON.parse(
  //     localStorage.getItem('note-taking-app')
  //   );

  //   if(savedNotes) {
  //     setNote(savedNotes);
  //   }

  // },[])


  // {
  //   id : new Date().getTime().toString(),
  //   title : "Hello World",
  //   text : "This is a hello text",
  //   date : `${new Date().getHours()}:${new Date().getMinutes()}`
  //   // date : "2:45"
  // }

  // const notes = [
  //   {
  //     id : new Date().getTime().toString(),
  //     title : "Hello World",
  //     text : "This is a hello text",
  //     date : `${new Date().getHours()}:${new Date().getMinutes()}`
  //     // date : "2:45"
  //   },
  //   {
  //     id : new Date().getTime().toString(),
  //     title : "sdfsahdbsjh",
  //     text : "Thksdjbsakj text",
  //     date : `${new Date().getHours()}:${new Date().getMinutes()}`
  //     // date : "2:45"
  //   },
  //   {
  //     id : new Date().getTime().toString(),
  //     title : "Heeeeeehehehe",
  //     text : "This is a hehehehehehe text",
  //     date : `${new Date().getHours()}:${new Date().getMinutes()}`
  //     // date : "2:45"
  //   },
  //   {
  //     id : new Date().getTime().toString(),
  //     title : "Pokemon World",
  //     text : "This is a pokemon text",
  //     date : `${new Date().getHours()}:${new Date().getMinutes()}`
  //     // date : "2:45"
  //   },
  // ]



  // const [title, titleState] = useState('');

  // const titleChange = (event) => {
  //   console.log(event.target.value);
  // }
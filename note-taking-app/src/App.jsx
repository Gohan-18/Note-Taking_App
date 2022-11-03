import { useState } from "react"
import Header from "./header"
import MainContainer from "./MainContainer"
import './App.css'


function App() {

  const [notes, setNote] = useState([{
    id : new Date().getTime().toString(),
    title : "Hello World",
    text : "This is a hello text",
    date : `${new Date().getHours()}:${new Date().getMinutes()}`
    // date : "2:45"
  }]);

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


  const addNotes = () =>{
    const temp = [...notes];
    temp.push({
      id : new Date().getTime().toString(),
      title : "",
      text : "",
      time : "5:40"
    });
    setNote(temp);
    console.log(temp);
  };

  return (
    <div className="App">
      <Header addNote={addNotes}/>
      <MainContainer notes = {notes} />
    </div>
  )
}

export default App

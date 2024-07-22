import React,{useState } from 'react';
import './App.css';

import AddNote from './components/AddNote/AddNote';
import ShowNotes from './components/AddNote/ShowNotes';
import SearchNoteDiv from './components/SearchNotes/SearchNoteDiv';
// let notesArray = [];
function App() {

  const [showNotes , setShowNotes] = useState([]);
  const [notes , setNotes] = useState([])
  
  const addNoteHandler = (note)=>{
    setNotes([...notes , note])
    setShowNotes([...notes , note]);
  }

  const showHandler = (showArray)=>{
    console.log(showArray)
    setShowNotes([...showArray]);
  }
  const deleteHandler=(key)=>{
    console.log(key)
    const notesArray = notes.filter((notes)=>{
      return notes.key !== 'list'+key
    })
    setNotes([...notesArray])
  }
  
  return (
    <React.Fragment>
      <SearchNoteDiv onShow={showHandler} notes={notes} total={notes.length}></SearchNoteDiv>
      <AddNote onAddNote={addNoteHandler}></AddNote>
      <ShowNotes notes={showNotes} onDeleteNote={deleteHandler}></ShowNotes>
    </React.Fragment>
  );
}

export default App;

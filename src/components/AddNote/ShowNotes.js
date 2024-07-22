import React from "react";
import NotesList from './NotesList';

const ShowNotes = (props)=>{
    const deleteHandler = (key)=>{
        console.log(key)
        props.onDeleteNote(key)
    }
    return (
        <React.Fragment>
            <ul>
                <NotesList notesArray = {props.notes} onDelete={deleteHandler}/>
            </ul>
        </React.Fragment>
    )
}

export default ShowNotes;
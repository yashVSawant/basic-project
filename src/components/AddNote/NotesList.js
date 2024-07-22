import React from "react";

const NotesList = (props)=>{
    const deleteClickHandler = (event)=>{
        console.log(event.target ,event)
        props.onDelete(event.target.key)
    }
    return (
        <React.Fragment>
            {props.notesArray.map(({title,description},i)=>{
                return <li key={`list${i}`}>
                        <h2>{title}</h2>
                        <div>{description}</div>
                        <button onClick={deleteClickHandler}>delete</button>
                </li>
            })}
        </React.Fragment>
    )
}

export default NotesList;
import React,{useState} from "react";

const AddNote = (props)=>{
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");

    const titleChangeHandler = (event)=>{
        setTitle(event.target.value)
    }
    const descriptionChangeHandler = (event)=>{
        setDescription(event.target.value);
    }

    const addNoteHandler = ()=>{
        if(title.trim().length > 0 && description.trim().length > 0){
            props.onAddNote({title,description});
            setTitle("")
            setDescription("")
        }
        
    }

    return(
        <React.Fragment>
            <label htmlFor="title" >Title:</label>
            <input type="text" id="title" name ="title" value={title} onChange={titleChangeHandler}></input>
            <label htmlFor="title">Description:</label>
            <input type="text" id="description" value={description} onChange={descriptionChangeHandler}></input>
            <button id="add" onClick={addNoteHandler}>add</button>
        </React.Fragment>
    )
}

export default AddNote;
import React,{useState} from "react";

import SearchNotes from "./SearchNotes";
import ShowNotesInfo from "./ShowNotesInfo"

const SearchNoteDiv = (props)=>{
    // const [show , setShow] = useState([]);
    const [total , setTotal] = useState(0);
    const [show , setShow] = useState(0);
    const searchHandler = (title)=>{
        
        let notes = props.notes;
        if(title !== ""){
            notes = props.notes.filter((note)=>{
                return note.title.indexOf(title) === 0;
            })
            props.onShow(notes)
        }else{
            props.onShow(notes)
        }
        // console.log( , );
        const tl = props.notes.length;
        const sl = notes.length;
        setTotal(tl);
        setShow(sl)
    }
    return(
        <React.Fragment>
            <SearchNotes onSearch={searchHandler}></SearchNotes>
            <ShowNotesInfo total={total} show={show}></ShowNotesInfo>
        </React.Fragment>
    )
}

export default SearchNoteDiv;
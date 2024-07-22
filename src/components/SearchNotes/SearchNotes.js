import React,{useState} from "react";

const SearchNotes = (props)=>{
    const [search , setSearch] = useState("");
    const searchChangeHandler = (event)=>{
        setSearch(event.target.value)
    }
    const searchHandler = ()=>{
        props.onSearch(search);
        setSearch("")
    }
    return (
        <React.Fragment>
            <input type="text" id="search" value={search} onChange={searchChangeHandler}></input>
            <button onClick={searchHandler}>search</button>
        </React.Fragment>
    )
}

export default SearchNotes;
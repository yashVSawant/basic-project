import React from "react";

const ShowNotesInfo = (props)=>{
    return (
        <React.Fragment>
            <div>total : {props.total}</div>
            <div>show : {props.show}</div>
        </React.Fragment>
    )
}

export default ShowNotesInfo;
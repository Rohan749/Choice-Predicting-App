import React from "react";
import "./SingleBlocks.css"


const SingleBlocks = (props) => {
    
    return (
        <div className="block">
            {props.link}
        </div>
    )
};

export default SingleBlocks;


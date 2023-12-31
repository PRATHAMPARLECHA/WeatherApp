import React from "react";

const SearchBox  = ({ onValueChange })=> {
    return (
        <div className="pa2">
            <input type="text" className="pa3 ba b--green bg-lightest-blue w-60" onKeyDown={onValueChange} placeholder="enter the location"/>
        </div>
    );
}

export default SearchBox;
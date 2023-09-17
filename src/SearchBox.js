import React, { useState } from "react";

const SearchBox  = ({ onValueChange })=> {
    return (
        <div className="pa2">
            <input type="text" className="pa3 ba b--green bg-lightest-blue w-60" onKeyDown={onValueChange}/>
        </div>
    );
}

export default SearchBox;
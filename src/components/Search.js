import React from 'react';

const Search = props =>{
    return(
        <div>
            <h1> My Processors List </h1>
            <label htmlFor="search">Search :</label>
            <input id="search" type="text" onChange={props.change} />
        </div>
        
    )
}

export default Search;
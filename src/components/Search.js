import React from 'react';

const Search = props =>{
    return(
        <div>
            <h1> My Processors List </h1>
            <label htmlFor="search">Search :</label>
            <input id="search" type="text" onChange={props.change} />
            <p>Processor being searched for is : <strong>{props.reqparam}</strong></p>
        </div>
        
    )
}

export default Search;
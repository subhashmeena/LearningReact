import React, {useState} from 'react';

const Search = props =>{
    const [searchTerm,setSearchTerm] = useState('');
    const handleChange = e=>{
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
    return(
        <div>
            <h1> My Processors List </h1>
            <label htmlFor="search">Search :</label>
            <input id="search" type="text" onChange={handleChange} />
            <p> Searching for : <strong>{searchTerm}</strong></p>
        </div>
        
    )
}

export default Search;
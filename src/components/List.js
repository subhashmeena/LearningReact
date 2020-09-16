import React from 'react';

const List = props =>{
    return (
        props.list.map(k=>(
            <div>
                Processor Name: {k.name}<br/>
                Year : {k.year}<br />
            </div>
        ))
    )
}

export default List;
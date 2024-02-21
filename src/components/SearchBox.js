import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
            onChange={searchChange} 
            className = "pa3 ba bg-lightest-blue bw2 b-green"
            type="search" 
            placeholder="Search robot" />
        </div>
    )

};

export default SearchBox;
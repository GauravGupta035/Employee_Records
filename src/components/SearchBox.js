import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
            className='pa3 ba b--orange bg-light-yellow b'
            type='search'
            placeholder='Employees'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
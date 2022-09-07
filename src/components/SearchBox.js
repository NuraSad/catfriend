import React from 'react';

const SearchBox = ({searchField, searchchange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--blue bg-lightest-blue' 
                type='search' 
                placeholder='search cats'
                onChange = {searchchange}
            />
        </div>
    );
}

export default SearchBox;
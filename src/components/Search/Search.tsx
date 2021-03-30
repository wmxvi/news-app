import React, { useContext, useState } from 'react';
import useStyles from './style/Search';

const Search = ({...props}) => {
    const classes = useStyles();

    const handleKeyUp = (e: any): void => {
        props.setSearchTerm(e.target.value)
    };

    return (
        <div className={classes.base}>
            <input type='search' className={classes.searchField} value={props.searchTerm} onChange={handleKeyUp} placeholder='Type to search' />
        </div>
    );
}

export default Search;

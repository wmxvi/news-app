import React, { useContext, useState } from 'react';

import BookmarkContext from '../../BookmarkContext';
import Button from '../Button/Button';
import useStyles from './style/ClearBookmarksButton';

const ClearBookmarksButton = ({...props}) => {
    const classes = useStyles({...props})
    const {bookmarks, setBookmarks} = useContext(BookmarkContext);

    const clearBookmarks = () => {
        if(window.confirm('Are you sure you want to clear your bookmarks?')) {
            setBookmarks({});
        }
    };
    
    return (
        <div className={classes.base}>
            <Button title="Clear" onClick = {() => clearBookmarks()} />
        </div>
    );
}

export default ClearBookmarksButton;
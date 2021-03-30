import React, { useContext, useState } from 'react';

import BookmarkContext from '../../BookmarkContext';
import Button from '../Button/Button';
import useStyles from './style/RemoveBookmarkButton';

const RemoveBookmarkButton = ({...props}) => {
    const classes = useStyles({...props})
    const {bookmarks, setBookmarks} = useContext(BookmarkContext);

    // Remove our bookmark from context provider

    const removeBookmark = (title: string | number) => {
        let existingBookmarks = {...bookmarks}
        delete (existingBookmarks as any)[title as string]; 
        
        setBookmarks({...existingBookmarks})
    };
    
    return (
        <Button title="X" onClick = {() => removeBookmark(props.article.title)} />
    );
}

export default RemoveBookmarkButton;
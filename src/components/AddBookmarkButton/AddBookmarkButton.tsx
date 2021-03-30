import React, { useContext, useState } from 'react';

import BookmarkContext from '../../BookmarkContext';
import Button from '../Button/Button';
import useStyles from './style/AddBookmarkButton';

const AddBookmarkButton = ({...props}) => {
    const classes = useStyles({...props})
    const {bookmarks, setBookmarks} = useContext(BookmarkContext);

    let isBookmarked = (props.article.title in bookmarks);

    const addBookmark = (bookmark: { title: string | number; }) => {
        let entry : { [bookmark: string]: any } = {};
        entry[bookmark.title] = bookmark;

        setBookmarks({
            ...entry,
            ...bookmarks, 
        });
    };
    
    return isBookmarked ? (
        <Button title="Added" icon="&#x2713;" disabled="disabled"/>
    ) : (
        <Button title="Add" icon="&#9734;" onClick = {() => addBookmark(props.article)} />
    );
}

export default AddBookmarkButton;
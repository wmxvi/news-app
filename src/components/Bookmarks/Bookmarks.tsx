import React, { useState, useContext } from 'react';

import BookmarkContext from '../../BookmarkContext';
import BookmarkEntry from '../BookmarkEntry/BookmarkEntry';
import ClearBookmarksButton from '../ClearBookmarksButton/ClearBookmarksButton';

import useStyles from './style/Bookmarks';

const Bookmarks = ({...props}) => {
    const classes = useStyles({...props})
    const {bookmarks, setBookmarks} = useContext(BookmarkContext);

    // Create our bookmark item components

    const bookmarksList = Object.keys(bookmarks).map((title: string) => {
        let entry = (bookmarks as any)[title as string];

        return (
            <BookmarkEntry key={title} data={entry}/>
        );
    });

    // Remove all bookmarks from local storage

    const ClearBookmarks = () => {
        if(Object.keys(bookmarks).length > 0) {
            return (
                <ClearBookmarksButton />
            );
        }

        return (null);
    };

    return (
        <section className={classes.bookmarks}>
            <div className={classes.header}>
                <h3 className={classes.header}>Your bookmarks</h3>
            </div>

            <div className={classes.entries}>
                <p className={classes.message}>Articles you add will be added to this list</p>
                {bookmarksList}
            </div>

            <ClearBookmarks />
        </section>
    );
}

export default Bookmarks;
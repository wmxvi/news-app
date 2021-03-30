import React, { useContext, useState } from 'react';
import RemoveBookmarkButton from '../RemoveBookmarkButton/RemoveBookmarkButton';
import useStyles from './style/BookmarkEntry';

const BookmarkEntry = ({...props}) => {
    const classes = useStyles({...props})
    const author = props.data.author ? props.data.author : props.data.source.name;

    return (
        <article className={classes.base}>
            <div className={classes.header}>
                <h3 className={classes.author}>
                    {author}
                </h3>

                <div className={classes.actions}>
                    <RemoveBookmarkButton article={props.data} />
                </div>
            </div>
            <h1 className={classes.title}>{props.data.title}</h1>

        </article>
    );
}

export default BookmarkEntry;
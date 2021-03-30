import React, { useEffect, useState } from 'react';
import useStyles from './styles/layout';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Articles from './components/Articles/Articles';
import Bookmarks from './components/Bookmarks/Bookmarks';
import BookmarkContext from './BookmarkContext';

function App() {
    const classes = useStyles()
    const [searchTerm, setSearchTerm] = useState('');

    // Setup and read local storage bookmarks

    let existingBookmarks: any = window.localStorage.getItem('bookmarks') || {};

    if(existingBookmarks && Object.keys(existingBookmarks).length > 0) {
      existingBookmarks = JSON.parse(existingBookmarks);
    }

    // Setup our context provider

    const [bookmarks, setBookmarks]: any = useState(existingBookmarks);
    const value = {bookmarks, setBookmarks};

    // Save any changes to bookmarks

    useEffect(() => {
        window.localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    return (
      <div className={classes.container}>
        <BookmarkContext.Provider value={value}>
          <Header />
          <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          <Bookmarks />
          <Articles searchTerm={searchTerm} />
        </BookmarkContext.Provider>
      </div>
    );
}

export default App;

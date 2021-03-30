import { createContext } from 'react';

const BookmarkContext = createContext({
    bookmarks: {},
    setBookmarks: (bookmarks: any) => {}
});

export default BookmarkContext;
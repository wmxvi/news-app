import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  body: {
    color: 'black',
  },

  container: {
    maxWidth: 1550,
    margin: '0px auto',
    padding: 0,
    display: 'grid',
    gap: '32px',
    justifySelf: 'center',
    alignSelf: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridTemplateAreas: '"header header header" "search search search" "articles articles bookmarks" "articles articles bookmarks"'
  },

  '@media screen and (max-width: 1350px)': {
      container: {
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateAreas: '"header header header" "search search search" "bookmarks bookmarks bookmarks" "articles articles articles" "articles articles articles"'
      }
  },
})

export default useStyles;
import {createUseStyles} from 'react-jss';
import theme from '../../../styles/theme';

const useStyles = createUseStyles({
  base: {
    display: 'grid',
    gridArea: 'articles',
    gap: '32px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridTemplateRows: 'auto',
    borderRight: `1px solid ${theme.colours.lightPrimary}`,
    paddingRight: 0,
  },

  loading: {
    fontSize: '100%',
  },
  
  article: {
    paddingBottom: 32,
    marginRight: 32,
    borderBottom: `1px solid ${theme.colours.lightPrimary}`,
  },

  author: {
    color: theme.colours.ascent,
    fontWeight: 400,
    fontStyle: 'italic',
    fontSize: '150%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: 200,
    whiteSpace: 'nowrap'
  },

  title: {
    lineHeight: '25px',
    fontWeight: 700,
    height: 75,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  actions: {
    marginBottom: 32
  },

  coverImage: {
    height: '50%',
    width: '100%',
    objectFit: 'cover',
    justifySelf: 'end'
  },

  placeholder: {
    display: 'grid',
    height: '200px',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '300%',
    color: theme.colours.lightAscent
  }
})

export default useStyles;
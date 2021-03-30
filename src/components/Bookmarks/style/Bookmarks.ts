import {createUseStyles} from 'react-jss';
import theme from '../../../styles/theme';

const useStyles = createUseStyles({
    bookmarks: {
        gridArea: 'bookmarks',
        justifySelf: 'start',
        width: '100%',
        borderTop: `3px solid ${theme.colours.ascent}`,
    },

    header: {
        fontSize: '130%',
        color: theme.colours.ascent,
        fontWeight: 400,
    },

    message: {
        color: theme.colours.midPrimary,
        fontSize: '100%',
        borderBottom: `1px solid ${theme.colours.lightPrimary}`,
        paddingBottom: 32
    },

    entries: {
        // display: 'grid',
    },

    '@media screen and (max-width: 1250px)': {
        bookmarks: {
            display: 'grid',
            width: '100%',
            borderBottom: 0,
        },

        entries: {
            display: 'grid',
            overflow: 'auto',
            width: '100%',
            gap: '32px',
            justifySelf: 'start',
            borderBottom: 0,
            gridTemplateColumns: 'repeat(100, 1fr)',
        },

        message: {
            borderRight: `1px solid ${theme.colours.lightPrimary}`,
            borderBottom: 0,
            minWidth: 125,
            display: 'flex-end'
        }
    },
})

export default useStyles;
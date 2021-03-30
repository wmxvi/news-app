import {createUseStyles} from 'react-jss';
import theme from '../../../styles/theme';

const useStyles = createUseStyles({
    base: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto',
        borderBottom: `1px solid ${theme.colours.lightPrimary}`,
    },

    header: {
        fontWeight: 400,
        fontSize: '150%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    },

    actions: {
        justifySelf: 'end',
    },

    author: {
        color: theme.colours.ascent,
        fontWeight: 100,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: 0,
        marginTop: 20,
        fontSize: '100%',
        marginBottom: 0 
    },

    title: {
        lineHeight: '25px',
        fontWeight: 700,
        maxWidth: 400,
        fontSize: '120%',
        padding: 0,
        marginTop: 10,
        marginBottom: 10
    },
    
    '@media screen and (max-width: 1250px)': {
        base: {
            width: 200,
            justifySelf: 'start',
        },
    },

})

export default useStyles;
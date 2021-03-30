import {createUseStyles} from 'react-jss';
import theme from '../../../styles/theme';

const useStyles = createUseStyles({
    base: {
        marginTop: 10,
        marginBottom: 10,
    },

    button: {
        textTransform: 'uppercase',
        fontWeight: 400,
        width: '50%',
        maxWidth: 150,
        minWidth: 30,
        height: 30,
        borderRadius: 20,
        padding: 5,
        // lineHeight: 1.5,
        background: theme.colours.lightAscent,
        border: `1px solid ${theme.colours.ascent}`,
        color: theme.colours.ascent
    },
    
    disabled: {
        width: '50%',
        maxWidth: 150,
        minWidth: 30,
        height: 30,
        textTransform: 'uppercase',
        fontWeight: 400,
        borderRadius: 20,
        padding: 5,
        background: theme.colours.lightPrimary,
        border: `1px solid ${theme.colours.lightPrimary}`,
        color: theme.colours.midPrimary
    }
})

export default useStyles;
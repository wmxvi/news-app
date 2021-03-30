import {createUseStyles} from 'react-jss';
import theme from '../../../styles/theme';

const useStyles = createUseStyles({
    base: {
        gap: 32,
        display: 'grid',
        gridArea: 'search',
        alignItems: 'center',
        justifyItems: 'center',
    },

    searchField: {
        width: '100%',
        border: 0,
        borderBottom: `1px solid ${theme.colours.lightPrimary}`,
        fontSize: '2em',
        padding: 10,
        color: theme.colours.ascent,
        '&::-webkit-input-placeholder': {
            color: theme.colours.lightPrimary,
        }
    }

})

export default useStyles;
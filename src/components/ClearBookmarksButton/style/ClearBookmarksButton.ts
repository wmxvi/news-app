import {createUseStyles} from 'react-jss';
import theme from '../../../styles/theme';

const useStyles = createUseStyles({
    base: {
        maxWidth: 200,
        marginTop: 20,
        opacity: 0.5,
        '&:hover': {
            opacity: 1
        }
    },
})

export default useStyles;
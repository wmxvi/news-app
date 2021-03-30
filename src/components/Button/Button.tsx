import React, { useState } from 'react';
import useStyles from './style/Button';

const Button = ({...props}) => {
    const classes = useStyles({...props});
    
    return (
        <div className={classes.base}>
            <button onClick={props.onClick} className={props.disabled ? classes.disabled : classes.button} disabled={props.disabled}>{props.title} {props.icon}</button>
        </div>

    );
}

export default Button;
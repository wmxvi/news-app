import React, { useState } from 'react';
import useStyles from './style/Header';

import logo from './images/logo.svg';

function Header () {
    const classes = useStyles()

    return (
        <header className={classes.header}>
            <img src={logo} className={classes.svg} alt="" height="100"/>
        </header>
    );
}

export default Header;

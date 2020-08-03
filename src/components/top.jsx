import React from 'react';
import { AppBar, IconButton, Toolbar, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Top = props => {
    const {setNavOpen} = props;
    return (
        <AppBar style={{boxShadow: 'none'}} position="relative" color="transparent">
            <Toolbar justify="flex-end">
                <IconButton onClick={() => setNavOpen(true)} variant="outlined" edge="start">
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
            <Divider/>
        </AppBar>
    )
}

export default Top;

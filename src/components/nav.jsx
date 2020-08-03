import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    navButton: {
        minWidth: '180px',
        paddingLeft: theme.spacing(3)
    }
}));

const navLinks = [
    { to: '/', key: 'home', primary: 'Home' },
    { to: '/projects', key: 'projects', primary: 'Projects' },
    { to: '/katas', key: 'katas', primary: 'Katas' },
    { to: '/about', key: 'about', primary: 'About Me' },
    { to: '/contact', key: 'contact', primary: 'Contact' }
]

const Nav = props => {
    const { navOpen, setNavOpen } = props;
    const classes = useStyles();
    return (
        <Drawer anchor='left'
            onClose={() => setNavOpen(false)}
            open={navOpen}>
            <List>
                {navLinks.map(item => (
                    <ListItem key={item.key}
                        component={Link}
                        to={item.to}
                        onClick={() => setNavOpen(false)}
                        className={classes.navButton}
                        button>
                        <ListItemText primary={item.primary} />
                    </ListItem>)
                )}
            </List>
        </Drawer>
    )
};

export default Nav;
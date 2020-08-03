import React from 'react';
import { makeStyles, Box, Grid } from "@material-ui/core";
import MemoizedBanner from './banner';

const useStyles = makeStyles(theme => ({
    rootContainer: {
        height: 'calc(100% - 65px)'
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Box component={Grid} className={classes.rootContainer} container direction="column" justify="flex-start">
            <MemoizedBanner />
        </Box>
    )
}
export default Home;
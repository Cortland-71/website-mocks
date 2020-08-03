import React, { useCallback, useRef, Suspense } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Grid } from '@material-ui/core';
import { Canvas } from "react-three-fiber";
import Swarm from './swarm';
import { EffectComposer, DepthOfField, Noise } from 'react-postprocessing';
import { primaryDark, primaryLight, primaryMain, secondaryText } from '../../constants';

const useStyles = makeStyles(theme => ({
    rootContainer: {
        height: '100%'
    },
    banner: {
        height: '100%',
        paddingTop: theme.spacing(10)
    },
    bannerText: {
        marginBottom: 0,
        lineHeight: 0.9
    },
    background: {
        zIndex: -10,
        position: 'fixed'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%',
        paddingTop: '30vh'
    }
}));

const Banner = () => {
    const classes = useStyles();
    const mouse = useRef([0, 0]);
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
    return (
        <Grid component='div' className={classes.rootContainer} onMouseMove={onMouseMove}>
            <Canvas
                className={classes.background}
                pixelRatio={window.devicePixelRatio}
                gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}
                camera={{ fov: 75, position: [0, 0, 70] }}
                onCreated={({ gl }) => {
                    gl.setClearColor(primaryDark)
                }}>
                <ambientLight intensity={1.1} />
                <pointLight position={[-100, -100, -100]} intensity={3} color={primaryLight} />
                <Suspense fallback={null}>
                    <Swarm mouse={mouse} count={50} color={primaryLight} />
                    <Swarm mouse={mouse} count={50} color={primaryDark} />
                    <Swarm mouse={mouse} count={50} color={primaryMain} />
                    <EffectComposer>
                        <DepthOfField focusDistance={0} focalLength={0.002} bokehScale={2} height={480} />
                        <Noise opacity={0.05} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
            <Grid container direction='column' alignItems='center' className={classes.overlay}>
                <Typography className={classes.bannerText} variant='h1'>Cortland</Typography>
                <Typography className={classes.bannerText} variant='h1'>Carrillo</Typography>
                <Typography color='textSecondary' className={classes.bannerText} variant='h3'>{'{Java Developer}'}</Typography>
            </Grid>
        </Grid>
    )
}

const MemoizedBanner = React.memo(Banner);

export default MemoizedBanner;
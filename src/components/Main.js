import React from 'react';
import Container from 'react-bootstrap/Container';
import Animation from './Animation';
import girl from '../assets/girl.json'
import { Grid } from '@material-ui/core';


function Main() {
    return (
        <Grid>
                My portfoilo
                <div>
                    <Animation width={300} height={300} animation={girl} />
                </div>
        </Grid>
    )
}

export default Main


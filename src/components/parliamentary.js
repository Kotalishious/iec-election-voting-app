import React from 'react';
import {Box, Paper, Typography} from "@mui/material";
import Candidate from "./candidate";

function Parliamentary(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: '100%',
                },
            }}
        >
            <Paper elevation={0} sx={{
                p: 2,

            }}>
                <Typography align='left' variant='h5'>
                    Pick Your Desirable Candidate
                </Typography>
                <Candidate/>
                <Candidate/>
                <Candidate/>
            </Paper>

        </Box>
    );
}

export default Parliamentary;
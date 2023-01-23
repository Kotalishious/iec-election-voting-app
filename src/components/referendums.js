import React from 'react';
import {Box, Paper, Typography} from "@mui/material";
import Referendum from "./referendum";

function Referendums(props) {
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
                    Vote on the following referendums
                </Typography>

                <Referendum/>
                <Referendum/>
                <Referendum/>

            </Paper>

        </Box>
    );
}

export default Referendums;
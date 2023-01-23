import React from 'react';
import {Avatar, Paper, Typography} from "@mui/material";

function Candidate(props) {
    return (
        <article>
            <Paper sx={{
                display:'flex',
                flexDirection:'row',
                p:1,
                m:1
            }}>
                <Avatar alt='candidate-name' sx={{mr:'2rem'}}/>
                <div>
                    <Typography align='left'>
                        Koketso Morapedi
                    </Typography>
                    <Typography align='left'>
                        Botswana Democratic Party (BDP)
                    </Typography>
                </div>
            </Paper>
        </article>
    );
}

export default Candidate;
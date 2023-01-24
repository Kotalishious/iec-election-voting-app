import React from 'react';
import {Avatar, FormControlLabel, Paper, Radio, Typography} from "@mui/material";

function Candidate({candidate}) {
    return (
        <article>
            <Paper sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1
            }}>
                <Avatar alt={candidate?.party} sx={{mr: '2rem'}} src={candidate?.logo}/>
                <div>
                    <Typography align='left'>
                        {candidate?.name}
                    </Typography>
                    <Typography align='left'>
                        {candidate?.party}
                    </Typography>
                </div>
                <FormControlLabel
                    value={`${candidate?.name}`}
                    control={<Radio/>}
                    labelPlacement="end"
                />
            </Paper>
        </article>
    );
}

export default Candidate;
import React from 'react';
import {Avatar, Card, Typography} from "@mui/material";

function SelectedCandidate({candidate, title}) {
    return (
        <Card sx={{
            m: 1,
            p: 3
        }}>
            <Typography>
                {title}
            </Typography>
            <Avatar src={candidate?.logo} alt='candidate-name' sx={{mr: '2rem'}}/>
            <div>
                <Typography align='left'>
                    {candidate?.name}
                </Typography>
                <Typography align='left'>
                    {candidate?.party}
                </Typography>
            </div>
        </Card>
    );
}

export default SelectedCandidate;
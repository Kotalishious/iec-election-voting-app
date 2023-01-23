import React from 'react';
import {Avatar, Card, Typography} from "@mui/material";

function SelectedCandidate({title}) {
    return (
        <Card sx={{
            m:1,
            p:3
        }}>
            <Typography>
                {title}
            </Typography>
            <Avatar alt='candidate-name' sx={{mr: '2rem'}}/>
            <div>
                <Typography align='left'>
                    Koketso Morapedi
                </Typography>
                <Typography align='left'>
                    Botswana Democratic Party (BDP)
                </Typography>
            </div>
        </Card>
    );
}

export default SelectedCandidate;
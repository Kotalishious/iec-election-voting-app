import React from 'react';
import {Paper, Typography} from "@mui/material";
import SelectedCandidate from "./selectedCandidate";
import ReferendumSummary from "./referendumSummary";

function VoteSummary(props) {
    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 1,
            m: 1,
            alignItems: "left",
            textAlign: "left",
        }}>
            <Typography>
                Please confirm your vote
            </Typography>
            <SelectedCandidate title='Parliamentary Election'/>
            <SelectedCandidate title='Local Government'/>
            <Typography>
                Referendum Summary
            </Typography>
            <Typography>
                Here is the summary of your votes on the referendums
            </Typography>
            <ReferendumSummary/>
        </Paper>
    );
}

export default VoteSummary;
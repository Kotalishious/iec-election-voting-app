import React, {useEffect, useState} from 'react';
import {Paper, Typography} from "@mui/material";
import SelectedCandidate from "./selectedCandidate";
import ReferendumSummary from "./referendumSummary";
import {localGovCandidates, parliamentaryCandidates} from "../asserts/simmulationData";

function VoteSummary({localGovElect, parliamentaryElect, referendumAnswer}) {
    const [parliamentaryCandidate, setParliamentaryCandidate] = useState();
    const [localGovCandidate, setLocalGovCandidate] = useState();
    useEffect(() => {
        parliamentaryCandidates.forEach(d => {
            if (d?.name === parliamentaryElect) {
                setParliamentaryCandidate(d)
            }
        })
    }, [parliamentaryElect]);

    useEffect(() => {
        localGovCandidates.forEach(d => {
            if (d?.name === localGovElect) {
                setLocalGovCandidate(d)
            }
        })
    }, [localGovElect]);


    return (<Paper sx={{
        display: 'flex', flexDirection: 'column', p: 1, m: 1, alignItems: "left", textAlign: "left",
    }}>
        <Typography>
            Please confirm your vote
        </Typography>
        <SelectedCandidate title='Parliamentary Election' candidate={parliamentaryCandidate}/>
        <SelectedCandidate title='Local Government' candidate={localGovCandidate}/>
        <Typography>
            Referendum Summary
        </Typography>
        <Typography>
            Here is the summary of your votes on the referendums
        </Typography>
        <ReferendumSummary referendumAnswer={referendumAnswer}/>
    </Paper>);
}

export default VoteSummary;
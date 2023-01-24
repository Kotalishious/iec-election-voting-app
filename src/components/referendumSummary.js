import React from 'react';
import {FormControlLabel, FormLabel, Paper, Radio} from "@mui/material";

function ReferendumSummary({referendumAnswer}) {
    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 1,
            m: 1,
            alignItems: "left",
            textAlign: "left",
        }}>
            <FormLabel>
                Should the United Kingdom remain a member of the European Union or leave the European Union?
            </FormLabel>
            <FormControlLabel
                value={referendumAnswer}
                control={<Radio checked={true}/>}
                label={referendumAnswer}
                labelPlacement="start"
            />
        </Paper>
    );
}

export default ReferendumSummary;
import React from 'react';
import {FormControlLabel, FormLabel, Paper, Radio} from "@mui/material";

function ReferendumSummary(props) {
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
                value="yes"
                control={<Radio checked={true}/>}
                label="Remain a member of the European Union"
                labelPlacement="start"
            />
        </Paper>
    );
}

export default ReferendumSummary;
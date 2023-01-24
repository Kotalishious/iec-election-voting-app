import React from 'react';
import {Box, FormControl, FormLabel, Paper, RadioGroup} from "@mui/material";
import Candidate from "./candidate";

function Parliamentary({elected, setElected, candidates}) {
    const handleChange = (event) => {
        setElected(event.target.value);
    };
    return (<Box
        sx={{
            display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
                m: 1, width: '100%', height: '100%',
            },
        }}
    >
        <Paper elevation={0} sx={{
            p: 2,

        }}>
            <FormControl>
                <FormLabel>
                    Pick Your Desirable Candidate
                </FormLabel>
                <RadioGroup
                    aria-labelledby="referendum-radio-buttons"
                    name="referendum-radio-buttons"
                    value={elected}
                    onChange={handleChange}
                >
                    {candidates.map((candi, index) => {
                        return <Candidate candidate={candi} id={index}/>
                    })}
                </RadioGroup>
            </FormControl>
        </Paper>

    </Box>);
}

export default Parliamentary;
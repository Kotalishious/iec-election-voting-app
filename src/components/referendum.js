import React, {useState} from 'react';
import {FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography} from "@mui/material";

function Referendum(props) {
    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };
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
                Referendum on the United Kingdom's membership of the European Union
            </Typography>
            <FormControl>
                <FormLabel>
                    Should the United Kingdom remain a member of the European Union or leave the European Union?
                </FormLabel>
                <RadioGroup
                    aria-labelledby="referendum-radio-buttons"
                    name="referendum-radio-buttons"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="yes"
                        control={<Radio/>}
                        label="Remain a member of the European Union"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="no"
                        control={<Radio/>}
                        label="Leave the European Union"
                        labelPlacement="start"
                    />
                </RadioGroup>
            </FormControl>
        </Paper>
    );
}

export default Referendum;
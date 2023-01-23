import React from 'react';
import {Avatar, Box, Button, Container, CssBaseline, TextField, Typography} from "@mui/material";
import Copyright from "../functions/copyRight";
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate} from "react-router-dom";

function Login(props) {
    const navigate= useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        navigate('/')
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img src='https://www.iec.gov.bw/images/logo-iec-wide.png' alt='logo'/>
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="registration-number"
                        label="Voter Registration Number"
                        name="registration-number"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="omang"
                        label="Omang"
                        type="number"
                        id="omang"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
            <Copyright sx={{mt: 8, mb: 4}}/>
        </Container>
    );
}

export default Login;
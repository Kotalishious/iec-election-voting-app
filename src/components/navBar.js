import React from 'react';
import {AppBar, Avatar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function NavBar(props) {
    function handleLogout() {
        alert('Please note that if you log out you wont be able' +
            ' to access the system again. You will be counted amongst ' +
            'those who have voted and the system will not let you again')
    }
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}>
                        <Avatar src='data:image/jpeg;base64,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' alt='logo'/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Live Voting
                    </Typography>
                    <IconButton color="inherit" onClick={handleLogout}>
                        <ExitToAppIcon/>
                        Log out
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
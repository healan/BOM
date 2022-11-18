import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavBarContent from './Navbar.js';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

const mdTheme = createTheme();

export default function Main(){
    return (  
        <>
        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavBarContent />
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
              }}
            >
              <Toolbar />
            </Box>
          </Box>
        </ThemeProvider>
        </>
      );
};
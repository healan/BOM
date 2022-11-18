import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavBarContent from './Navbar.js';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRecoilState } from 'recoil';
import { productmodalState } from './state.js';
import ProductModal from './productModal.js';

const mdTheme = createTheme();
var rows = [];
var columns = [];

export default function Bom(){

    const [poductModal, setPoductModal] = useRecoilState(productmodalState);

    columns = [
        { field: 'file_option', headerName: '품목코드', width: 200, editable: false },
        { field: 'filename', headerName: '품목명', width: 200, editable: false },
        { field: 'file_version', headerName: '생산공정', width: 200, editable: false },
        { field: 'filesize', headerName: '원재료갯수', width: 200, editable: false },
        { field: 'comment', headerName: 'BOM 등록', width: 200, editable: false },
        { field: 'history', headerName: '조회', width: 200, editable: false }, 
      ];

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
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={5}>
                    <Grid item>

                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>
                            BOM 조회
                        </Typography>   
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            getRowId={(row) => row.file_id}
                            autoHeight={true}
                            checkboxSelection
                            disableSelectionOnClick
                            onSelectionModelChange={(ids) => {
                                
                            }}
                        />
                        <Button variant="contained" size='small' sx={{minWidth:90, maxWidth:90, mt:2}} onClick={()=>{setPoductModal(true)}}>신규</Button>
                        </Paper>
                    </Grid>
                </Grid>
             </Container>    
             <ProductModal />
            </Box>
          </Box>
        </ThemeProvider>
        </>
      );
};
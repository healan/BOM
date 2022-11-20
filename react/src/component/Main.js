import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavBarContent from './Navbar.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
import moment from 'moment';
import URL from '../config.js';
import axios from 'axios';

const mdTheme = createTheme();

export default function Main(){
    const [rows, setRows] = useState([]);
    const [poductModal, setPoductModal] = useRecoilState(productmodalState);
    const [prodId, setProdId] = useState();

    const columns = [
        { field: 'createDate', headerName: '생성일자', width: 150, editable: false,
             valueFormatter: params => moment(params.value).format("YYYY-MM-DD"),
         },
        { field: 'subject', headerName: '생산계획대상', width: 150, editable: false,
            valueFormatter: params => params.value =='1'?'주문서':'',},
        { field: 'planStartDate', headerName: '생산계획시작', width: 120, editable: false,
             valueFormatter: params => moment(params.value).format("YYYY-MM-DD"), },
        { field: 'planEndDate',headerName: '생산계획종료', width: 120, editable: false,
             valueFormatter: params => moment(params.value).format("YYYY-MM-DD"), },
        { field: 'add', headerName: '생성', width: 100, editable: false },
        { field: 'comment', headerName: '적요', width: 300, editable: false },
        { field: 'history', headerName: '이력', width: 100, editable: false }, 
      ];

    useEffect(() => {
        loadData();
    },[]);

    useEffect(() => {
        loadData();
    },[poductModal]);

    const loadData = async() => {
        await axios.get(URL+'/api/srchProduct/')
                   .then((res) => {
                       setRows(res.data.rows);
                   });
    };
    
    const handelDelProd = async() => {
        let cf = window.confirm('전체 데이터가 삭제됩니다. 계속 하시겠습니까?');
        if(cf == true){
            await axios.delete(URL+'/api/delProduct/'+prodId)
                .then((res) => {
                    loadData();
                });
        }else{
            loadData();
        }
    };

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
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                생산요청등록
                            </Typography>   
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                getRowId={(row) => row.productId}
                                autoHeight={true}
                                checkboxSelection
                                disableSelectionOnClick
                                selectionModel={prodId}
                                onSelectionModelChange={(e) => {
                                    if(e.length > 1){
                                        e = e[e.length - 1];
                                        setProdId(e);
                                    }else{ 
                                        setProdId(e);
                                    };
                                }}
                            />
                           
                       </Paper>
                    </Grid> 
                </Grid>
                <Grid container alignItems='flex-start'>
                    <Grid item>
                        <Button variant="contained" size='small' sx={{minWidth:90, maxWidth:90, mt:2}} onClick={()=>{setPoductModal(true)}}>신규</Button>
                        <Button variant="contained" size='small' sx={{minWidth:90, maxWidth:90, mt:2, ml:1}} onClick={handelDelProd}>삭제</Button>
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
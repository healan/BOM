import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { bomListModalState } from './state.js';
import URL from '../config.js';
import axios from 'axios';

export default function BomListModal(){
    const [bomListModal, setbomListModal] = useRecoilState(bomListModalState);
    const [rows, setRows] = useState([]);
    
    const columns = [
        { field: 'itemCode', headerName: '품목코드', width: 150, editable: false,},
        { field: 'stockCnt', headerName: '재고수량', width: 120, editable: false,},
        { field: 'requireCnt',headerName: '소요량', width: 120, editable: false,},
        { field: 'remark', headerName: '비고', width: 100, editable: false },
    ];
    
    useEffect(() => {
        loadData();
    },[]);

    const loadData = async() => {
        await axios.get(URL+'/api/srchBom/')
                .then((res) => {
                    console.log(37, res.data);
                    setRows(res.data.rows);
                });
    };

    return(
        <Dialog 
            open={bomListModal}
            fullWidth
        >
        <DialogTitle id="responsive-dialog-title" align='center' sx={{mt:2}}>
            {"BOM 조회"}
        </DialogTitle>
        <DialogContent>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => row.itemCode}
                        autoHeight={true}
                        // checkboxSelection
                        // disableSelectionOnClick
                        // selectionModel={prodId}
                        // onSelectionModelChange={(e) => {
                        //     if(e.length > 1){
                        //         e = e[e.length - 1];
                        //         setProdId(e);
                        //     }else{ 
                        //         setProdId(e);
                        //     };
                        // }}
                    />
                </Paper>
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button variant="outlined" autoFocus  sx={{mb:2}} onClick={() => setbomListModal(false)}>
                닫기
            </Button>
            <Button variant="outlined" autoFocus sx={{mb:2}} >
                수정
            </Button>
        </DialogActions>
        </Dialog>
    )
};
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
            <DialogContent >
                <Paper sx={{mb:4, p:1}} variant='outlined'>
                    <Grid container >
                        <Grid item xs={3}>
                            <Typography>생산품목 :</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>C422 메모지</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>생산공정 :</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>기초공정</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3}>
                            <Typography>생산수량 :</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>1000</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography></Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography></Typography>
                        </Grid>
                    </Grid>
                </Paper>

                <Grid container sx={{mb:1}}>
                    <Grid item xs={2} sx={{mt:1}}>
                        <Typography>생산량</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField id="outlined-basic" size='small' fullWidth variant="outlined" value='1000' />
                    </Grid>
                    <Grid item xs={2} sx={{ml:1}}>
                        <Button fullWidth variant="contained">적용</Button>
                    </Grid>
                </Grid>
                
                <Grid item xs={12}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => row.itemCode}
                        autoHeight={true}
                    />
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
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { bomModalState } from './state.js';
import URL from '../config.js';
import axios from 'axios';

export default function BomModal(){
    const [bomModal, setbomModal] = useRecoilState(bomModalState);
    const [itemcode, setItemcode] = useState();
    const [stockCnt, setstockCnt] = useState();
    const [reqCnt, setReqCnt] = useState();
    const [comment, setComment] = useState();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    
    const handleBomSave = async() => {
        let data = {
            itemcode : itemcode,
            stockCnt : stockCnt,
            reqCnt  : reqCnt,
            comment : comment,
        };

        await axios.post(URL+'/api/addBom/', data)
                .then((res) => {
                    if(res.status == 200){
                        alert('정상적으로 생성되었습니다.');
                        setbomModal(false);
                    };
                })
                .catch((err) => {
                    console.log(err);
                });
    };

    return(
        <Dialog 
            open={bomModal}
            fullWidth
        >
        <DialogTitle id="responsive-dialog-title" align='center' sx={{mt:2}}>
            {"BOM 생산"}
        </DialogTitle>
        <DialogContent>
            <Grid container sx={{mt:1}}>
                <Grid item xs={3} sx={{mt:1}}>
                    <Typography variant="button" gutterBottom>품목코드 </Typography>
                </Grid>
                <Grid item xs={9}>
                    <TextField fullWidth id="outlined-basic" variant="outlined" sx={{minWidth:300}} value={itemcode} onChange={(e)=> setItemcode(e.target.value)}/>
                </Grid>
            </Grid>

            <Grid container sx={{mt:1}}>
                <Grid item sx={{mt:1}} xs={3}>
                    <Typography  variant="button" gutterBottom>재고수량 </Typography>
                </Grid>
                <Grid item xs={9}>
                    <TextField fullWidth id="outlined-basic" variant="outlined" sx={{minWidth:300}} value={stockCnt} onChange={(e)=> setstockCnt(e.target.value)}/>
                </Grid>
            </Grid>

            <Grid container sx={{mt:1}}>
                <Grid item sx={{mt:1}} xs={3}>
                    <Typography variant="button" gutterBottom>소요량 </Typography>
                </Grid>
                <Grid item xs={9}>
                    <TextField fullWidth id="outlined-basic" variant="outlined" sx={{minWidth:300}} value={reqCnt} onChange={(e)=> setReqCnt(e.target.value)}/>
                </Grid>
            </Grid>

            <Grid container sx={{mt:1}}>
                <Grid item sx={{mt:2}} xs={3}>
                    <Typography variant="button" gutterBottom>비고 </Typography>
                </Grid>
                <Grid item xs={9} sx={{mt:2}}>
                    <TextField fullWidth id="outlined-basic" variant="outlined" sx={{minWidth:300}} value={comment} onChange={(e)=> setComment(e.target.value)}/>
                </Grid>
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button variant="outlined" autoFocus  sx={{mb:2}} onClick={() => setbomModal(false)}>
                닫기
            </Button>
            <Button variant="outlined" autoFocus sx={{mb:2}} onClick={handleBomSave}>
                저장
            </Button>
        </DialogActions>
        </Dialog>
    )
};
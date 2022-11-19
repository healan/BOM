import React, { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import {DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import dayjs from "dayjs";
import { useRecoilState } from 'recoil';
import { productmodalState } from './state.js';
import Checkbox from '@mui/material/Checkbox';

export default function bomModal(){
    const [poductModal, setPoductModal] = useRecoilState(productmodalState);
    const [startDt, setStartDt] = useState();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [comment, setComment] = useState();

    return(
        <Dialog open={poductModal}>
        <DialogTitle id="responsive-dialog-title" align='center' sx={{mt:2}}>
            {"생산 계획 생성"}
        </DialogTitle>
        <DialogContent>
            <Grid container sx={{mt:1}}>
                <Grid item xs={3} sx={{mt:1}}>
                    <Typography variant="button" gutterBottom>생성일자 </Typography>
                </Grid>
                <Grid item xs={9}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label=""
                            inputFormat={'YYYY-MM-DD'}
                            value={startDt}
                            onChange={(newValue) => {
                                setStartDt(dayjs(newValue).format('YYYY-MM-DD'));
                            }}
                            renderInput={(params) => <TextField fullWidth size="small" sx={{minWidth:400}} {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>

            <Grid container sx={{mt:1}}>
                <Grid item sx={{mt:1}} xs={3}>
                    <Typography  variant="button" gutterBottom>생성계획대상 </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="button" gutterBottom>주문서 <Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }}/></Typography>
                </Grid>
            </Grid>

            <Grid container sx={{mt:1}}>
                <Grid item sx={{mt:1}} xs={3}>
                    <Typography variant="button" gutterBottom>생산계획기간 </Typography>
                </Grid>
                <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label=""
                                inputFormat={'YYYY-MM-DD'}
                                value={startDt}
                                onChange={(newValue) => {
                                    setStartDt(dayjs(newValue).format('YYYY-MM-DD'));
                                }}
                                renderInput={(params) => <TextField fullWidth size="small" sx={{minWidth:150}} {...params} />}
                            />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={1} sx={{mt:0.5}}>
                    <Typography >&nbsp; &nbsp; ~</Typography>
                </Grid>
                <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label=""
                                inputFormat={'YYYY-MM-DD'}
                                value={startDt}
                                onChange={(newValue) => {
                                    setStartDt(dayjs(newValue).format('YYYY-MM-DD'));
                                }}
                                renderInput={(params) => <TextField fullWidth size="small" sx={{minWidth:150}} {...params} />}
                            />
                    </LocalizationProvider>
                </Grid>
            </Grid>

            <Grid container sx={{mt:1}}>
                <Grid item sx={{mt:2}} xs={3}>
                    <Typography variant="button" gutterBottom>적요 </Typography>
                </Grid>
                <Grid item xs={9} sx={{mt:2}}>
                    <TextField fullWidth id="outlined-basic" variant="outlined" multiline rows={5} sx={{minWidth:400}} value={comment} onChange={(e)=> setComment(e.target.value)}/>
                </Grid>
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button variant="outlined" autoFocus  sx={{mb:2}} onClick={() => setPoductModal(false)}>
                닫기
            </Button>
            <Button variant="outlined" autoFocus sx={{mb:2}}>
                저장
            </Button>
        </DialogActions>
        </Dialog>
    )
};
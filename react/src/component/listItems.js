import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CloudIcon from '@mui/icons-material/Cloud';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import axios from 'axios';

export const MainListItems= (
  <React.Fragment>
    <ListItemButton href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="생산요청등록" />
    </ListItemButton>
   
    <ListItemButton href="/bom">
      <ListItemIcon>
        <CloudIcon />
      </ListItemIcon>
      <ListItemText primary="BOM 조회" />
    </ListItemButton> 

    <ListItemButton >
      <ListItemIcon>
        <CloudIcon />
      </ListItemIcon>
      <ListItemText primary="작업지시등록" />
    </ListItemButton>

    <ListItemButton >
      <ListItemIcon>
        <CloudIcon />
      </ListItemIcon>
      <ListItemText primary="작업지시현황" />
    </ListItemButton>

    <ListItemButton >
      <ListItemIcon>
        <CloudIcon />
      </ListItemIcon>
      <ListItemText primary="마이페이지" />
    </ListItemButton>
  </React.Fragment>
 
 );


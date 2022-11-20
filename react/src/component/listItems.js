import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloudIcon from '@mui/icons-material/Cloud';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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
        <ScreenSearchDesktopIcon />
      </ListItemIcon>
      <ListItemText primary="BOM 조회" />
    </ListItemButton> 

    <ListItemButton >
      <ListItemIcon>
        <DomainAddIcon />
      </ListItemIcon>
      <ListItemText primary="작업지시등록" />
    </ListItemButton>

    <ListItemButton >
      <ListItemIcon>
        <SummarizeIcon />
      </ListItemIcon>
      <ListItemText primary="작업지시현황" />
    </ListItemButton>

    <ListItemButton >
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="마이페이지" />
    </ListItemButton>
  </React.Fragment>
 
 );


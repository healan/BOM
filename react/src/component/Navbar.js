import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import { MainListItems, secondaryListItems  } from './listItems.js';
import { makeStyles, Dialog } from '@material-ui/core';
import LoginIcon from '@mui/icons-material/Login';
// import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const drawerWidth = 260;
const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    left: 1680,
    top: 30
  }
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


const mdTheme = createTheme();

export default function NavBarContent() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);  
  const toggleDrawer = () => {
    setOpen(!open);
  };
  //Recoil
//   const modalOpen = useRecoilValue(modalState);
//   const setModalOpen = useSetRecoilState(modalState);
//   const setModalMenu = useSetRecoilState(modalMenuState);
//   const [myinfoOpen, setmyinfoOpen] = useRecoilState(modalMyinfoState);
 
  return (
  <>

    <AppBar position="absolute" open={open}>
    <Toolbar
      sx={{
        pr: '24px', // keep right padding when drawer closed
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: '36px',
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
          
        >
          InnoEye Community
      </Typography>
      <IconButton color="inherit" sx={{mr:2}} >
        <Badge color="secondary">
            <Typography>서비스가입</Typography>
        </Badge>
      </IconButton>
      <IconButton color="inherit" >
            <Badge color="secondary" >
                {/* <Typography>로그인</Typography> */}
                <LoginIcon />
            </Badge>
        </IconButton>
    </Toolbar>
  </AppBar>
  <Drawer variant="permanent" open={open}>
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
      }}
    >
      <IconButton onClick={toggleDrawer}>
        <ChevronLeftIcon />
      </IconButton>
    </Toolbar>
    <Divider />
    <List component="nav">
      {MainListItems}
    </List>
  </Drawer>
  </>
  );
}
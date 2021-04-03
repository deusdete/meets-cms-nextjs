import React, { Fragment, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import NotificationsIcon from '@material-ui/icons/Notifications';
import RefreshIcon from '@material-ui/icons/Refresh';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { ClickAwayListener, Divider, Drawer, Grow, makeStyles, MenuItem, MenuList, Popper } from '@material-ui/core';
import Image from 'next/image';
import SliderBar from '../sliderBar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },


}));

export default function NavBar() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(true);
  const handleDrawerOpen = () => {
    setOpenMenu(true);
  };
  const handleDrawerClose = () => {
    setOpenMenu(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);



  const [openPerfil, setOpenPerfil] = useState(false);
  const anchorRef = useRef(null);

  const handleTogglePerfil = () => {
    setOpenPerfil((prevOpen) => !prevOpen);
  };

  const handleClosePerfil = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenPerfil(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenPerfil(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(openPerfil);
  useEffect(() => {
    if (prevOpen.current === true && openPerfil === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openPerfil;
  }, [openPerfil]);
  return (
    <Fragment>
      <AppBar position="absolute" className={clsx(classes.appBar, openMenu && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, openMenu && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <RefreshIcon />
          </IconButton>
          <div>
            <IconButton
              ref={anchorRef}

              onClick={handleTogglePerfil}
              color="inherit">
              <AccountCircleIcon />
            </IconButton>
            <Popper open={openPerfil} anchorEl={anchorRef.current} role={undefined} placement="bottom-end" transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClosePerfil}>
                      <MenuList autoFocusItem={openPerfil} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClosePerfil}>Meu perfil</MenuItem>
                        <MenuItem onClick={handleClosePerfil}>meu plano</MenuItem>
                        <MenuItem onClick={handleClosePerfil}>Sair</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>


        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !openMenu && classes.drawerPaperClose),
        }}
        open={openMenu}
      >

        <div className={classes.toolbarIcon}>
          <Image src="/logo/meets.png" height={30} width={100} />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <SliderBar />
      </Drawer>
    </Fragment>
  );
}

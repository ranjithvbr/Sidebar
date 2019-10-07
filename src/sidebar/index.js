import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

//material-ui
import { withStyles } from '@material-ui/core/styles';

import {
  Menu as MenuIcon,
  MoveToInbox as InboxIcon,
  Mail as MailIcon
} from '@material-ui/icons';

import {
  AppBar, Toolbar, IconButton, Typography,
  Drawer, CssBaseline,Divider,ListItem,ListItemIcon,
  ListItemText,List,MenuList,MenuItem
} from '@material-ui/core'

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import test from '../images/test.jpg'


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class Sidebar extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open:!this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme, children } = this.props;
    const { open } = this.state;

    return (
  
    <div>
      <div className={classes.root}>

        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open)}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" justify="flex-end" color="inherit">
              Surana
            </Typography> */}
            
            <Grid container justify="flex-end" alignItems="center">
              <div className={"flex"}>
                <div>
                <h6 className="headername mt-2 mr-3">Surana</h6>
                </div>
                <div>
              <Avatar alt="Remy Sharp" src={test} className={""} />
              </div>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            {/* <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton> */}
          </div>

          <MenuList>

            <MenuItem component={Link} to="/">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                  <ListItemText primary="Dashboard" />
            </MenuItem>

            <MenuItem component={Link} to="/client">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                  <ListItemText primary="Client" />
            </MenuItem>

            <MenuItem component={Link} to="/court">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                  <ListItemText primary="Court" />
            </MenuItem>

          </MenuList>

          <List>
            {['Case',
            'Project', 'Trademark', 'India','PCT','Copyright','Design',
          'IPAM'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
         className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          {children}
        </main>
      </div>
      
      <div className="footer">
        <p className={"footertextalign"}>2018 © Copyright Paladin Software Solutions Pvt Ltd</p>
      </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Sidebar);
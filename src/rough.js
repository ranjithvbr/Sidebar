// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   // content: {
//   //   flexGrow: 1,
//   //   padding: theme.spacing(3),
//   //   transition: theme.transitions.create('margin', {
//   //     easing: theme.transitions.easing.sharp,
//   //     duration: theme.transitions.duration.leavingScreen,
//   //   }),
//   //   marginLeft: -drawerWidth,
//   // },
//   // contentShift: {
//   //   transition: theme.transitions.create('margin', {
//   //     easing: theme.transitions.easing.easeOut,
//   //     duration: theme.transitions.duration.enteringScreen,
//   //   }),
//   //   marginLeft: 0,
//   // },
// }));

// export default function Sidebar() {
//   const classes = useStyles();
//   // const theme = useTheme();
//   const [open, setOpen] = React.useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(!open);
//   };

//   // const handleDrawerClose = () => {
//   //   setOpen(false);
//   // };

//   return (
//     <div className={classes.root}>
//       {/* <CssBaseline /> */}
//       <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             className={clsx(classes.menuButton, open )}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Persistent drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           {/* <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton> */}
//         </div>
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
     
//     </div>
//   );
// }

// ---------------------------------

// import React,{ Component } from 'react';
// import Sidebar from '../sidebar';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';


//   import {
//     Menu as MenuIcon,
//     MoveToInbox as InboxIcon,
//     Mail as MailIcon
//   } from '@material-ui/icons';
  
//   import {
//     AppBar, Toolbar, IconButton, Typography,
//     Drawer, CssBaseline,Divider,ListItem,ListItemIcon,
//     ListItemText,List,MenuList,MenuItem
//   } from '@material-ui/core'


// class Client extends Component{
//     render(){
//         return (
//             <div>
//             <Sidebar>
//             <AppBar position="static" className="mt-5">
//                 <Toolbar variant="dense">
//                     <IconButton edge="start" className={""} color="inherit" aria-label="menu">
//                         {/* <MenuIcon /> */}
//                     </IconButton>
//                     <Typography variant="h6" color="inherit">
//                         Photos
//                     </Typography>
//                 </Toolbar>
//                 <MenuList>

//             <MenuItem component={Link} to="/leaveapplication">
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                   <ListItemText primary="leaveapplication" />
//             </MenuItem>

//             <MenuItem component={Link} to="/client">
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                   <ListItemText primary="Client" />
//             </MenuItem>

//             <MenuItem component={Link} to="/court">
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                   <ListItemText primary="Court" />
//             </MenuItem>

//           </MenuList>
//             </AppBar>
                
//             </Sidebar>    
//           </div>
//           );
//     }
   
//   }

//   export default Client;

//   <div className={"mt-5"}>
//                 <Navbar  bg="secondary" variant="dark" className="row topnavradius">
//                     <Navbar.Brand href="/leaveapplication" className="col text-center">Leave Application</Navbar.Brand>
//                     <Navbar.Brand href="#home" className="col">Permission Application</Navbar.Brand>
//                     <Navbar.Brand href="#home" className="col text-center">On Duty Form</Navbar.Brand>
//                     <Navbar.Brand href="#home" className="col">Leave Application(CEP)</Navbar.Brand>
                    
//                 </Navbar>
//                 </div>
import React,{ Component } from 'react';
import Sidebar from '../sidebar';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'


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


class Client extends Component{
    render(){
        return (
            <div>
            <Sidebar>
            <div className="d-flex flex-column">
                <ButtonGroup className="mt-5 topnavradius" variant="secondary" >
                    <Button variant="secondary">Leave Application</Button>
                    <Button variant="secondary">Permission Application</Button>
                    <Button variant="secondary">On Duty Form</Button>
                    <Button variant="secondary">Leave Application(CEP)</Button>

                </ButtonGroup>
            </div>
            </Sidebar>    
          </div>
          );
    }
   
  }

  export default Client;

{/* <div className={"mt-5"}>
                <Navbar  bg="secondary" variant="dark" className="row topnavradius">
                    <Navbar.Brand href="/leaveapplication" className="col text-center">Leave Application</Navbar.Brand>
                    <Navbar.Brand href="#home" className="col">Permission Application</Navbar.Brand>
                    <Navbar.Brand href="#home" className="col text-center">On Duty Form</Navbar.Brand>
                    <Navbar.Brand href="#home" className="col">Leave Application(CEP)</Navbar.Brand>
                    
                </Navbar>
            </div> */}
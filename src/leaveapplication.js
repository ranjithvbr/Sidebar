import React, { Fragment } from "react";
import Client from './components/client'
import Navbar from "react-bootstrap/Navbar";

class Leaveapplication extends React.Component{
  render(){
    return(
      <div>
            <Client />
                    <div className={""}>
                    <h6>LeaveApplication</h6>
                    </div>
      </div>
    )
  }
}

export default Leaveapplication;
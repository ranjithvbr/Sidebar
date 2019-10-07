import React, { Fragment } from "react";
import Sidebar from '../sidebar'

class Landingpage extends React.Component{
  render(){
    return(
      <div>
        <Sidebar>
            <div className={"mt-5"}>
              <h6>HR Dash board</h6>
            </div>
        </Sidebar>    
      </div>
    )
  }
}

export default Landingpage;
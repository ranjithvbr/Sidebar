import React,{ Component } from 'react';
import Sidebar from '../sidebar'

 class Court extends Component{
    render(){
        return (
            <div>
            <Sidebar>
                <div className={"mt-5"}>
                  <h6>Court Page</h6>
                </div>
            </Sidebar>    
          </div>
          );
    }
   
  }

  export default Court;
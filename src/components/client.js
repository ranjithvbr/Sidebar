import React,{ Component } from 'react';
import Sidebar from '../sidebar'

class Client extends Component{
    render(){
        return (
            <div>
            <Sidebar>
                <div className={"mt-5"}>
                  <h6>Client Page</h6>
                </div>
            </Sidebar>    
          </div>
          );
    }
   
  }

  export default Client;
import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//pages
import Landingpage from "./components/landingpage";
import Notfound from "./components/notfound";
import Client from "./components/client";
import Court from "./components/court";

export default class Routes extends Component{
    render(){
        return (
          <div>
           <Router>
            <Switch>

              <Route path="/" exact component={Landingpage} /> 

              <Route path="/court" exact component={Court} />

              <Route path="/client" exact component={Client} />

              <Route component={Notfound} /> 

            </Switch>
           </Router> 
          </div>
          );
    }
   
  }
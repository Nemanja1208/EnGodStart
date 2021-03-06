import React from "react";
import { default as localforage } from "localforage";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from "./login/register.jsx";
import Login from "./login/login.jsx";
import List from "../components/allaboutlists/list.jsx";
import Posts from "../components/allaboutlists/posts.jsx";
import Welcome from "../components/welcome.js";
import style from "../components/login/formstyle.css";
import ErrorBoundary from "../components/allaboutlists/errorboundry.jsx";  


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.changingstate = this.changingstate.bind(this)
  }

      //Persisted state (Keep state on refresh)
      componentDidMount(){
      localforage.getItem('UserLoggedIn').then(value =>{
        this.setState({isLoggedIn: value});
      }).catch(function(err){
        console.log(err);
      })
      }


    changingstate(){
    this.setState({isLoggedIn: true});
    }

  
  render() {
     const UserStatus = this.state.isLoggedIn;
     console.log(UserStatus);

    if(!UserStatus){
    return (
      <Router>

      <div className="center" >
        <div className="topnav">

              <a className="active2"><Link to="/register">Register</Link></a>

              <a className="active1"><Link to="/login">Login</Link></a>

        </div> 
        <Switch>
          <Route path="/register">
            <Register changingState={this.changingstate}/>
          </Route>
          <Route path="/login">
            <Login changingState={this.changingstate}/>
          </Route>
        </Switch>
      </div>
    </Router>
    );}
    return(
      <div>
        <ErrorBoundary>
        <Welcome/>
        </ErrorBoundary>
      </div>
    )

}
  }
  
  export default App;
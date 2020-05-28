import React from "react";
import ReactDOM from "react-dom";
import { default as localforage } from "localforage";
import {
	HashRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import List from "../components/allaboutlists/list.jsx";
import Posts from "../components/allaboutlists/posts.jsx";
import Footer from "../components/login/Footer.jsx";
import Clock from "../components/login/clock.jsx";

class Welcome extends React.Component {

	logout(){
		localforage.getItem('UserLoggedIn').then(value =>{
			value = false;
			localforage.setItem('UserLoggedIn', value).then(value =>{
				console.log(value);
				window.location.href = 'app.html';
			}).catch(function(err){
				console.log(err);

			})
		})
	}
	
	
	render() {
		return (
			<div>
				<h1>Welcome to the HOPE-app</h1>
				<button className="logout" onClick={this.logout}>Log out</button>
				<h3>[Help other people eat]</h3>
				
				
        <Router>
        <button className="btn submitbtn"><Link to="/posts">Donation Feed</Link></button>
		<button className="btn submitbtn"><Link to="/List">Post a donation</Link></button>
        <Switch>
        <Route path="/posts">
        <Posts/>
        </Route>
		<Route path="/list">
        <List/>
        </Route>
        </Switch>
        </Router>
		<Clock/>
		<Footer/>
			</div>
		);
	}
}

export default Welcome
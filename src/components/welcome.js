import React from "react";
import ReactDOM from "react-dom";
import { default as localforage } from "localforage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import List from "../components/allaboutlists/list.jsx";
import Posts from "../components/allaboutlists/posts.jsx";

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
				<button onClick={this.logout}>Log out</button>
				<h2>Help other people eat</h2>
				
        <Router>
        <button><Link to="/posts">Donation Posts</Link></button>
		<button><Link to="/List">Make a donation post</Link></button>
        <Switch>
        <Route path="/posts">
        <Posts/>
        </Route>
		<Route path="/list">
        <List/>
        </Route>
        </Switch>
        </Router>
			</div>
		);
	}
}

export default Welcome
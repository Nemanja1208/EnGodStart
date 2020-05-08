import React from "react";
import { default as localforage } from "localforage";
import Login from "./login.jsx";


class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



    handleUsername(event) {

      this.setState({username: event.target.value});

    }
    handleEmail(event) {

      this.setState({email: event.target.value});
    
    }

    handlePassword(event) {

      this.setState({password: event.target.value});

    }

    handleSubmit(event){
     event.preventDefault();
     console.log(this.state);
     localforage.setItem(this.state.username, this.state.password).then(function (password){
     console.log(password);

     //Part where saving the user in LocalStorage and adding to state of parent
    localforage.setItem("UserLoggedIn", true).then(value =>{
    console.log(value);
    }).catch(function(err){
    console.log(err);
    });
    //End of the tricky part
     
     })
     .catch(function(err){
       console.log(err);
     });
     this.setState({password: "", username: "", email: ""});
     this.props.changingState();
     //Part where saving the user in LocalStorage and adding to state of parent
    }

    render() {
    return (

        <div>
            <h1>Register here</h1>
            <h2>Register as a donor or as a receiver</h2>
      <form >
      <label >Username</label><br/>
    <input type="text" id="fname" value={this.state.username} onChange={this.handleUsername} name="firstname" placeholder="Your Username.."/><br/>

    <label >Email</label><br/>
    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleEmail} placeholder="Your Email adress.."/><br/>
    
    <label>Password</label><br/>
    <input type="password" id="password" name="password"  value={this.state.password}  onChange={this.handlePassword} onChange={this.handlePassword} placeholder="Your password"/><br/>
     <button type="submit" onClick={this.handleSubmit}>Register</button>
    </form>  
      </div>
    );  
    }
    }
   
    export default Register;
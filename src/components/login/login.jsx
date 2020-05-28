import React from "react";
import { default as localforage } from "localforage";
import style from "../login/formstyle.css";
import Footer from "../login/Footer.jsx";
import Clock from "../login/clock.jsx";


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleUsername(event) {

      this.setState({username: event.target.value});

    }

    handlePassword(event) {

      this.setState({password: event.target.value});

    }

    handleSubmit(event){
     event.preventDefault();
     console.log(this.state);
     const name = this.state.username;
     const usernamepassword = this.state.password;
     const props = this.props;
    //  const change = this.props.changingState();
     localforage.getItem(name).then(function (password){
      if(password === usernamepassword){
        console.log(password);
        console.log(usernamepassword);
        

        //Part where saving the user in LocalStorage and adding to state of parent
        localforage.setItem("UserLoggedIn", true).then(value =>{
          console.log(value);
        }).catch(function(err){
          console.log(err);
        });
        //End of the localstorageuser part

        props.changingState();

      } else{
        alert("Wrong Username and/or Password");
      }
     })
    }


    render() {
    return (

        <div>

          <Clock/>
      <form className="forms">
      <h1>Welcome to the Hope App</h1>
          <h3>[Help Other People Eat]</h3>
      <h1 className="hh1">Already a member ?</h1>
            <h2 className="hh2">Please Log-In</h2>
      <label className="label">Username</label><br/>
    <input className="inputs" type="text" id="fname" value={this.state.username} onChange={this.handleUsername} name="firstname" placeholder="Your Username.."/><br/>
    
    <label className="label">Password</label><br/>
    <input className="inputs" type="password" id="password" name="password"  value={this.state.password}  onChange={this.handlePassword} onChange={this.handlePassword} placeholder="Your password"/><br/>
     <button className="submitbtn btn" type="submit" onClick={this.handleSubmit}>Log In</button>
    </form>  
    <div><Footer/></div>
      </div>
      
    );  
    }
    }
   
    export default Login;
import React from 'react';
import ReactDOM from 'react-dom';
import { default as localforage } from "localforage";
import PropTypes from "prop-types";

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      typeoffood: '',
      amount: '',
      expirationdate: '',
      pickuplocation: ''
    };

    this.handleName = this.handleName.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleExpDate = this.handleExpDate.bind(this);
    this.handleLocation = this.handleLocation.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleName(event) {
    this.setState({name: event.target.value});
    }

    handleType(event) {

      this.setState({typeoffood: event.target.value});

    }
    handleAmount(event) {

      this.setState({amount: event.target.value});
    
    }

    handleExpDate(event) {

      this.setState({expirationdate: event.target.value});

    }

    handleLocation(event) {

        this.setState({pickuplocation: event.target.value});
  
      }

    handleSubmit(event){
     event.preventDefault();
     console.log(this.state);

     //Getting the POSTS from localStorage / IndexedDB 
     localforage.getItem('Lists').then(value =>{
      
      //If the posts are none existant we create them as empty
      
      if(value == null){
         const listinfo = [];
         listinfo.push({
          orgname:this.state.name,
          foodtype:this.state.typeoffood,
          amount: this.state.amount,
          expdate: this.state.expirationdate,
          pickuplocation: this.state.pickuplocation});
          localforage.setItem('Lists', JSON.stringify(listinfo)).then(function (info){
            console.log(info);
          })
          .catch(function(err){
              console.log(err);
                  });
                  this.setState({name: '', typeoffood:'', amount:'', expirationdate:'',pickuplocation:''});
                  alert("Donation is submited");
        }
        
        //Otherwise we just push to the existing array

        else {
          let lists = JSON.parse(value);
          lists.push({
            orgname:this.state.name,
            foodtype:this.state.typeoffood,
            amount: this.state.amount,
            expdate: this.state.expirationdate,
            pickuplocation: this.state.pickuplocation});
            localforage.setItem('Lists', JSON.stringify(lists)).then(function (info){
              console.log(info);
              this.setState({name: '', typeoffood:'', amount:'', expirationdate:'',pickuplocation:''});
              alert("Donation is submited");
            })
            .catch(function(err){
                console.log(err);
                    });
                    this.setState({name: '', typeoffood:'', amount:'', expirationdate:'',pickuplocation:''});
                    alert("Donation is submited");   
     }});
    }

    render() {

    return (

      <div className="forms">
      <form >
      <h1>Donate Today</h1>
      <h3>Post a LIST with todays DONATION</h3>
      <label className="label">Name of your Organisation</label><br/>
    <input className="inputs" type="text" id="name" value={this.state.name} onChange={this.handleName} name="name" placeholder="Organization Name"/><br/>
      <label className="label">Type of food that you are donation</label><br/>
    <input className="inputs" type="text" id="type" value={this.state.typeoffood} onChange={this.handleType} name="foodtype" placeholder="Type of food"/><br/>

    <label className="label">Amount</label><br/>
    <input className="inputs" type="text" id="amount" name="amount" value={this.state.amount} onChange={this.handleAmount} placeholder="Amount in KG"/><br/>

    <label className="label">Expiration Date</label><br/>
    <input className="inputs" type="text" id="expdate" name="expdate" value={this.state.expirationdate} onChange={this.handleExpDate} placeholder="How many days left ?"/><br/>

    <label className="label">Location that you are donating from</label><br/>
    <input className="inputs" type="text" id="location" name="location" value={this.state.pickuplocation} onChange={this.handleLocation} placeholder="Location you are donating from"/><br/>
    
    
    <button className="submitbtn btn" type="submit" onClick={this.handleSubmit}>Post the List</button>
    
      </form>  
      </div>
    );  
    }
    }
    export default List ;


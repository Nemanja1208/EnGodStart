import React from 'react';
import ReactDOM from 'react-dom';
import { default as localforage } from "localforage";
import LSProps from "../allaboutlists/localstoragelistprops.jsx";
import DeleteListButton from "../allaboutlists/deletelistfromstorage.jsx";

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        thelist: {}
    };
    this.getLists = this.getLists.bind(this);
    this.deletelist = this.deletelist.bind(this);
  }
  

//     componentDidUpdate() { 
//    window.removeEventListener('load', this.getLists); 
//     }
    getLists(){
        localforage.getItem('Lists').then(list => {
            
            //The new list that is fetched is passed to the state 
            const thenewlist = JSON.parse(list);
            console.log(thenewlist);
            console.log(JSON.stringify(thenewlist));
            this.setState({thelist: thenewlist})
            console.log(this.state.thelist[0]);

        }).catch(function(err){
            console.log(err);
            
        });
        }

        //Version of deleting the localstorage lists (beginer version)
        deletelist(){
            //Passing down the list properties in the HTML elements
            this.nameOfOrg.innerHTML = '';
            this.type.innerHTML = '';
            this.amountinkg.innerHTML = '';
            this.expirationdate.innerHTML = '';
            this.locationofpickup.innerHTML = '';
            this.delete.innerHTML = '';
        }

    // componentWillMount(){
    //     window.addEventListener("load", this.getLists);
    // }
    // componentDidMount(){}
    // renderprops(){
    //     console.log(this.state.thelist);
    //     const stateofcomponent = this.state.thelist;
    //     return stateofcomponent.map((properties, index) =>
    //     <LSProps
    //         key={index}
    //         name={properties.name}
    //         type={properties.type}
    //         amount={properties.amount}
    //         expdate={properties.expdate}
    //         location={properties.location}
    //     />)
    // }

    render() {
        if(this.state.thelist.length > 1){
            return(
            <div>
            <h1>Today's Donations</h1>
            <button onClick={this.getLists}>Get the Donations</button>
            <div className="card">
                  <table>
                  <tr>
                    <th>Company/Organisation</th>
                    <th>Food Type</th>
                    <th>Amount</th>
                    <th>Expiration Date</th>
                    <th>Pick Up Location</th>
                </tr>

                    {Object.keys(this.state.thelist).map(item => <tr key={item}>
                       <td> {this.state.thelist[item].orgname}</td>
                       <td> {this.state.thelist[item].foodtype}</td>
                       <td> {this.state.thelist[item].amount}</td>
                       <td> {this.state.thelist[item].expdate}</td>
                       <td> {this.state.thelist[item].pickuplocation}</td>
                       <td><DeleteListButton nr={item}/></td>
                    </tr>)}
                 </table>
            </div>
            </div>
            )} else {
    return(
        <div>
            <h1>Today's Donations</h1>
            <button onClick={this.getLists}>Get the Donations</button>         
        </div>     
    );
    }}}
    export default Posts ;
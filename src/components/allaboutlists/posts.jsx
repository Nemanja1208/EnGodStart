import React from 'react';
import ReactDOM from 'react-dom';
import { default as localforage } from "localforage";
import LSProps from "../allaboutlists/localstoragelistprops.jsx";

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        thelist: {}
    };
    //  this.p = null;
    //  this.foodtype = null;
    //  this.h4 = null;
    this.getLists = this.getLists.bind(this);
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

            //Passing down the list properties in the HTML elements
            this.nameOfOrg.innerHTML = (thenewlist[0].orgname);
            this.type.innerHTML = (thenewlist[0].foodtype);
            this.amountinkg.innerHTML = (thenewlist[0].amount);
            this.expirationdate.innerHTML = (thenewlist[0].expdate);
            this.locationofpickup.innerHTML = (thenewlist[0].pickuplocation);


        }).catch(function(err){
            console.log(err);
            
        });
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
        // renderobject(){
        //     return Object.entries(this).map(([key, value], i) => {
        //         return (
        //             <div key={key}>
        //                 orgname is: {value.orgname};
        //                 type is: {value.amount}
        //             </div>
        //         )
        //     })
        // }

    render() {
        const postslists = this.state.thelist[0];
        if(this.state.thelist.length > 1){
            return(
            <div>
            <h1>Today's Donations</h1>
            <button onClick={this.getLists}>Get the Donations</button>
            {/* <button onClick={this.renderprops}></button> */}
            <div className="card">
                {/* <div>
                    <button onClick={this.renderobject}>Render Object</button>
                </div> */}
                {/* <ul>
                    {Object.keys(postslists).map(item => <li key={item}>
                        {postslists[item].orgname}
                    </li>)}
                </ul> */}
            <div className="container">
            

            <h1 ref={elem => this.nameOfOrg = elem}></h1>
            <h2 ref={elem => this.type = elem}></h2>   
            <h3 ref={elem => this.amountinkg = elem}></h3>  
            <h3 ref={elem => this.expirationdate = elem}></h3>  
            <h3 ref={elem => this.locationofpickup = elem}></h3>  

            <table>
  <tr>
    <th>Company/Organisation</th>
    <th>Food Type</th>
    <th>Amount</th>
    <th>Expiration Date</th>
    <th>Pick Up Location</th>
  </tr>
  <tr>
    <td ref={elem => this.nameOfOrg = elem}></td>
    <td ref={elem => this.type = elem}></td>
    <td ref={elem => this.amountinkg = elem}></td>
    <td ref={elem => this.expirationdate = elem}></td>
    <td ref={elem => this.locationofpickup = elem}></td>
  </tr>
</table>
            </div>
            </div>
            </div>
            )} else {
    return(
        <div>
            <h1>Today's Donations</h1>
            <button onClick={this.getLists}>Get the Donations</button>         
        </div>
        
    );
    }}
    }
    export default Posts ;
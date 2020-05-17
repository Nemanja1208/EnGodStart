import React, { Component } from "react";
import axios from "axios";
import Upvote from '../api/upvote.jsx';


class Rankings extends Component {
    constructor() {
      super();
      this.state = {
        organisations: []
      };
      this.getRankings = this.getRankings.bind(this);
    //   this.postRanking = this.postRankings.bind(this);
    }

    componentDidMount() {
         this.getRankings();
    }

    async getRankings() {
        // Simple one
         let rankings = await axios.get('http://localhost:5000/api/rankings')
         .then(response =>{
          console.log(response.data);
          this.setState({organisations: response.data});
        })
         .catch(function(error){
          console.log(error);
        });
      }

    render() {
        return (
        <div>
            <h1>Donation Rankings</h1>
            {/* <button className="submitbtn btn" onClick={this.getRankings}>After Voting please Update</button> */}
            <hr />
             <table >
             <tr >
                    <th >Company/Organisation</th>
                    <th >Amount</th>
                    <th >How Often ?</th>
                    <th >Ranking</th>
                    <th >Votes</th>
                    <th >Give a Vote</th>
                </tr>
        {this.state.organisations.map(org => 
        <tr key={org.id} >
            <td >{org.orgname}</td>
            <td >{org.donations}</td>
            <td >{org.interval}</td>
            <td >{org.ranking}</td>
            <td >{org.votes}</td>
            <td ><Upvote id={org.id}/></td>
            </tr>)}
        </table>         
        </div>
        );
    }

}


export default Rankings
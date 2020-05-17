import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Upvote extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
        this.voteUpp = this.voteUpp.bind(this);
    }  

    async voteUpp() {
        // ID of the Organisation
        let organisationId = this.props.id;
        let body = {
            id: organisationId
        };
        //Posting
        let sending = await axios
        .post("http://localhost:5000/api/rankings", body, {timeout: 2})
        .then(function(response) {
            console.log(response.data);
            
        })
        .catch(function(error) {
            console.log(error);
        });
        alert("You have sucessfully voted. Thank you");
        window.location.href = 'app.html#/';
      }

    render() {
        return (
            <div>
            <button className="votebtn" onClick={this.voteUpp}>Vote for me</button>
            </div>
        );
    }
}
export default Upvote
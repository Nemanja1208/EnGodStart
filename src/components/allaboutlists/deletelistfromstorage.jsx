import React from 'react';
import ReactDOM from 'react-dom';
import { default as localforage } from "localforage";
import style from "../login/formstyle.css";


 class DeleteListButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
        this.deletecurrentList = this.deletecurrentList.bind(this);
    }  
    deletecurrentList(){
        const number = this.props.nr;
        localforage.getItem('Lists').then(lists =>{
            const listofposts = JSON.parse(lists);
                    listofposts.splice(number, 1);
                    localforage.setItem('Lists', JSON.stringify(listofposts)).then(value => {
                        console.log(value);
                        window.location.href = 'app.html#/login';
                    })
                })
    }
    render() {
        return (
            <div>
            <button className="deleteicon" onClick={this.deletecurrentList}>Delete</button>
            </div>
        );
    }
 }
export default DeleteListButton
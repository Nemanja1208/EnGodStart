import React, { Component } from "react";
import axios from "axios";


//Test version before implementing the real deal

class UsingAxios extends Component {
    constructor() {
      super();
      this.state = {
        customers: []
      };
      this.getTodos = this.getTodos.bind(this);
      this.postTodos = this.postTodos.bind(this);
    }
  
      componentDidMount() {
          //this.getTodos();
          //  this.postTodos();
      }
  
      async getTodos() {
        // Simple one
         let todos = await axios.get(
            'http://localhost:5000/api/customers'
        ).then(response =>{
          console.log(response.data);
          this.setState({customers: response.data});
        })
        .catch(function(error){
          console.log(error);
        });
      }

       async postTodos() {
         // With all properties
        let body = {
          // id: 4,
          name: "Neca",
          password: "Milosavljevic",
          profession: "Gangster"
          };
         axios
         .post("http://localhost:5000/api/customers", body, {timeout: 2})
         .then(function(response) {
             console.log(response.data);
         })
         .catch(function(error) {
             console.log(error);
         });
     }
  
      render() {
          return (
          <div>
              <h3>Using Axios in React for API call</h3>
              <hr />
               <ul>
          {this.state.customers.map(customer => <li key={customer.id}>{customer.name} {customer.profession} </li>)}
          </ul> 
          <form>
            <button onClick={this.getTodos}>Get API</button>
            <button onClick={this.postTodos}>Post API</button>
          </form>
          
          </div>
          );
      }
  }
  
  export default UsingAxios

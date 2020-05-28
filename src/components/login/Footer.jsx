import React from "react";
import { default as localforage } from "localforage";
import style from "../login/formstyle.css";

class Footer extends React.Component {
    constructor(props){
      super(props);
    };


    render(){
        return(
            <div className="footer">
                <h1>Progress</h1>
                    <div className="w3-row w3-center w3-dark-grey w3-padding-16">
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">14+</span><br></br>
    Partners
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">55+</span><br></br>
    Projects Done
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">89+</span><br></br>
    Happy Clients
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">150+</span><br></br>
    Meetings
  </div>
</div>

<footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
  <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
</footer>

            </div>
        )}
}
export default Footer
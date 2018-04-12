import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group



export default class Bill extends Component {
    render(){
        
        return(
            <form>
            <h2>Bill</h2>
                <b>Bill Number: </b><input type='text'/><br></br>
                <h3>Personal Information</h3><br></br>
                <b>First Name: </b><input type='text' placeholder='First Name'/><br></br>
                <b>Last Name: </b><input type='text' placeholder='Last Name'/><br></br>
                <b>Check Digit: </b><input type='text' placeholder='####'/><br></br>
                <b>Expire Date: </b><input type='text' placeholder='MM/yy'/><br></br>
                <b>Depart Date: </b><input type='text' placeholder='MM/dd/yy'/><br></br>
                <b>Return Date: </b><input type='text' placeholder='MM/dd/yy'/><br></br>
                <b>Destination: </b><input type='text' placeholder='Place'/><br></br>
                <h3>Cost</h3><br></br>
                <b>Subtotal: </b><input type='text' placeholder='####'/><br></br>
                <b>Taxes: </b><input type='text' placeholder='####'/><br></br>
                <b>Total: </b><input type='text' placeholder='####'/><br></br>
                <button>Pay</button>
            
            </form>
        );
    }
}
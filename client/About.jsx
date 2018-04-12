import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group

export default class About extends Component {
    setVar() {
        Session.set('Meteor.loginButtons.dropdownVisible', true);
    }
    render(){
        return (
            <ReactCSSTransitionGroup
                        component = "div"
                        transitionName = "route"
                        transitionEnterTimeout = {600}
                        transitionAppearTimeout = {600}
                        transitionLeaveTimeout = {400}
                        transitionAppear={true}
            >
                <h1>About us</h1>
                <p>Somos una empresa dedicada al transporte de gente en Honduras</p>
            </ReactCSSTransitionGroup>
        )
    }
}
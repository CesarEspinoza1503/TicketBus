import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection("resolutions");//Mongo DB

export default class ResolutionsWrapper extends TrackerReact(React.Component){
    constructor(){
        super();
        this.state = {
            subscription:{
                resolutions: Meteor.subscribe("userResolutions")
            }
        }
    }

    componentWillUnmount(){
        this.state.subscription.resolutions.stop();
    }

    resolution(){
        return Resolutions.find().fetch();//with .fetch it will return an object, otherwise it will return a cursor
    }

    
    render(){
        /*let res = this.resolutions();
        if(res.length < 1){
            return (<div>Loading</div>)
        }*/
        console.log(this.resolution());
        return(
            <ReactCSSTransitionGroup
                        component = "div"
                        transitionName = "route"
                        transitionEnterTimeout = {600}
                        transitionAppearTimeout = {600}
                        transitionLeaveTimeout = {400}
                        transitionAppear={true}
            >
                <h1>My Resolutions - {Session.get('test')}</h1>
                <ResolutionsForm />
                
                    <ReactCSSTransitionGroup
                        component = "ul"
                        className = "resolutions"
                        transitionName = "resolutionLoad"
                        transitionEnterTimeout = {600}
                        transitionLeaveTimeout = {400}
                    >
                        {this.resolution().map((resolution)=>{
                            return <ResolutionSingle key={resolution._id} resolution = {resolution} />
                        })}
                    </ReactCSSTransitionGroup>
                    
            </ReactCSSTransitionGroup> //Wrapping this up
        )
    }
}

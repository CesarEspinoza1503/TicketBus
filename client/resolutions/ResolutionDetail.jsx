import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ResolutionDetail extends TrackerReact(Component) {
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
        return Resolutions.findOne(this.props.id);//with .fetch it will return an object, otherwise it will return a cursor
    }

    render(){
        let res = this.resolution();
        if(!res){
            return (<div>Loading...</div>);
        }
        return (
            <div>
                <h1>{res.text}</h1>
            </div>
        )
    }
}
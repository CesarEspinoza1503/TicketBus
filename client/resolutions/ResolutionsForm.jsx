import React, {Component} from 'react';

export default class ResolutionsForm extends Component{
    
    addResolution(event){
        event.preventDefault();//Prevents the page of refreshing when pressing Enter
        var text = this.refs.resolution.value.trim();//Will look for the ref called resolution and trim it (removes break space)
        if(text){
            Meteor.call('addResolution', text, (error, data)=>{//calls method from server, () is a function
                if(error){
                    Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
                } else {
                    this.refs.resolution.value = "";//Box will be "resetted"
                }
            });
        }
        console.log(text);
    }
    render(){
        return(
            <form className="new-resolution" onSubmit ={this.addResolution.bind(this)}>
                    <input
                        type="text"
                        ref="resolution" //this ref is called "resolution"
                        placeholder="stuff"
                    />
            </form>
        )
    }
}
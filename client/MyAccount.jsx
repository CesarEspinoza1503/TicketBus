import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group

Usuarios = new Mongo.Collection("usuarios");

export default class MyAccount extends Component {
    
    addUsuario(event){
        event.preventDefault();
        var primerNombre = this.refs.Nombre.value;
        var apellido = this.refs.Apellido.value;
        var address = this.refs.Direccion.value;

        Usuarios.insert({
            Nombre : primerNombre,
            Apellido : apellido,
            Direccion : address

        });
    }
    
    render(){
        return(
            <form onSubmit={this.addUsuario.bind(this)}>
            
                <b>First Name: </b><input ref='Nombre' type='text' placeholder='First Name'/>
                <b> Last Name: </b><input ref='Apellido' type='text' placeholder='Last Name'/><br></br><br></br>
                <b>Address</b><br></br><textarea ref='Direccion'></textarea><br></br>
                <table >
                    <tr>
                        <th>Item</th>
                        <th>Date</th><br></br>
                    </tr>
                </table>
                <button>SAVE</button>
            
            </form>
        );
    }
}
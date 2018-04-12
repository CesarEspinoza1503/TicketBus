import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group

pagoTarjeta = new Mongo.Collection("pagosTarjeta");

export default class Payment extends Component {
    
    addTarjeta(event){
        event.preventDefault();
        var nombreTarjeta = this.refs.nombreTarjeta.value.trim();
        var numTarjeta = this.refs.numTarjeta.value;
        var ccv = this.refs.CCV.value;
        var FechaExpiracion = this.refs.expDate.value;
        var adress1 = this.refs.adress1.value;
        var adress2 = this.refs.adress2.value;

        pagoTarjeta.insert({
            NombreTarjeta: nombreTarjeta,
            NumeroTarjeta : numTarjeta,
            CCV : ccv,
            Expiracion: FechaExpiracion,
            Adress1 : adress1,
            Adress2 : adress2
        });
    }
    
    render(){    
        return(
            <form onSubmit={this.addTarjeta.bind(this)}>
            <h2>Payment</h2>
                <b>Card Title: </b><input ref="nombreTarjeta" name="cardTitle" type='text' placeholder='Name'/><br></br>
                <b>Card Number: </b><input ref="numTarjeta" name="cardNumber" type='text' placeholder='Card Number'/><br></br>
                <b>CCV: </b><input ref="CCV" type='text' placeholder='###-#'/><br></br>
                <b>Expire Date: </b><input ref="expDate" type='text' placeholder='MM/yy'/><br></br>
                <b>Address1: </b><input ref="adress1" type='text' placeholder='Region'/><br></br>
                <b>Address2: </b><input ref="adress2" type='text' placeholder='Street'/><br></br>
                <b>Telephone: </b><input ref="phone" type='text' placeholder='(###)####-####'/><br></br>
                <a href="/Recibo"><button >Guardar y Pagar</button></a>
            
            </form>
        );
    }
}
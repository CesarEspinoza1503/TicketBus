import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group




export default class Main extends Component {

    render(){
        return (
			
           	<form type="text">
				<h2>Origen</h2>
           		<select name="Partiendo" type="text" ref="Origen">
					   <option value="Tegucigalpa">Tegucigalpa</option>
					   <option value="Ceiba">La Ceiba</option>
					   <option value="SPS">San Pedro Sula</option>
				   </select>
				<h2>Destino</h2>
				   <select name="Llegando"	type="text" ref="Destino">
					   <option value="Ceiba">La Ceiba</option>
					   <option value="Tegucigalpa">Tegucigalpa</option>
					   <option value="SPS">San Pedro Sula</option>
				   </select>
				   <br></br>
            	<label>
               	 	Fecha ida:
                	<input type="text" name="fechaIda" ref="Ida"/>
            	</label>
            	<label>
                	Fecha de Regreso:
                	<input type="text" name="fechaRegreso" ref="Regreso"/>
            	</label>
            	    <h3>clase </h3>
        	 	<select type="text" name="Asiento" ref="Clase">
            		<option value="Turista">Turista</option>
             		<option value="VIP">VIP</option>
        	 	</select>
				 <br></br>
				 <a href="/Payment"><button>Pago</button></a> 
        	</form>
			

        );
    }
}
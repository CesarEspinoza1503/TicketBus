import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group

export default class Viaje extends Component {

    render(){
        return (
            <form>
                <table >
                    <tr>
                        <th>precio</th>
                        <th>clase</th>
                        <th>hora de partida</th>
                        <th>ida y regreso</th>
                    </tr>
                </table>
            </form>
        );
    }
}
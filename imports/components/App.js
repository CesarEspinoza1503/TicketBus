import React from 'react';
import {Grid, Segment, Menu, Modal, Header} from 'semantic-ui-react';

import {BusTicketSchema} from '/imports/api/schemaTicket';

import TicketForm from './ticketForm.js';


export default class App extends React.Component {
    state = {
        selectedTab: 'ticketForm',
        modalData: null,
        subscription:{
            tickets: Meteor.subscribe("tickets")
        }
    };
    openTab = selectedTab => this.setState({selectedTab});

    onSubmit = data => {
        Meteor.call('addTicket', 
        data.fechaSal,data.fechaReg,data.destino,data.origen,data.clase,data.cantPasajeros, (error, data)=>{//calls method from server, () is a function
            if(error){
                Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
            }else{
                console.log("good");
            }
        });
        this.setState({modalData: data})
    };

    closeModal = () => this.setState({modalData: null});

    render () {
        const {selectedTab, modalData} = this.state;
        return (
            <Grid verticalAlign="middle" centered className="app-container">
                <Grid.Column width={8}>
                    <Header as="h2">Tickets</Header>
                    <Segment>
                        <Menu pointing secondary>
                            {['ticketForm'].map(tab => (
                                    <Menu.Item
                                        key={tab}
                                        name={tab}
                                        active={tab === selectedTab}
                                        onClick={() => this.openTab(tab)}
                                    />
                                )
                            )}
                        </Menu>

                        {selectedTab === 'ticketForm' && (
                            <TicketForm
                                schema={BusTicketSchema}
                                onSubmit={this.onSubmit}
                            />
                        )}
                    </Segment>

                    <Modal
                        open={!!modalData}
                        onClose={this.closeModal}
                        header="Recibo"
                        content={(
                            <Modal.Content>
                                <pre>{JSON.stringify(modalData, null, 4)}</pre>
                            </Modal.Content>
                        )}
                        actions={[
                            {key: 'ok', content: 'Ok', color: 'blue', onClick: this.closeModal}
                        ]}
                    />
                </Grid.Column>
            </Grid>
        )
    }
}
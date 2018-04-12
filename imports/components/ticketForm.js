import React from 'react';
import {AutoForm, TextField, LongTextField, RadioField, SelectField, DateField,SubmitField, NumField,ErrorsField} from 'uniforms-semantic';
import {Grid} from 'semantic-ui-react';

const TicketForm = ({schema, onSubmit, model = {}}) => (
    <AutoForm schema={schema} onSubmit={onSubmit} model={model}>
        <Grid>
            <Grid.Row>
                <Grid.Column width={6}>
                    <SelectField name="origen" />
                </Grid.Column>
                <Grid.Column width={6}>
                    <SelectField name="destino" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={7} max={new Date(2100, 1, 1)} >
                    <DateField name="fechaSal" />
                </Grid.Column>
                <Grid.Column width={7}>
                    <DateField name="fechaReg" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={6}>
                    <SelectField name="clase" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={4}>
                    <NumField name="cantPasajeros" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <SubmitField value="Comprar!" className="blue fluid" />
                    <ErrorsField />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </AutoForm>
);

export default TicketForm;
const ticketMongo = new Mongo.Collection("tickets");

import SimpleSchema from 'simpl-schema';


export const BusTicketSchema = new SimpleSchema({
    origen:{
        type:String,
        label:"Origen",
        allowedValues:['La Ceiba','Choluteca','Trujillo','Comayagua','Santa Rosa de Copán','San Pedro de Sula'
        ,'Yuscarán','Tegucigalpa','Puerto Lempira','La Esperanza','La Paz','Gracias','Nuevo Ocotepeque','Juticalpa'
        ,'Santa Bárbara','Nacaome','Yoro'],
        defaultValue: 'Tegucigalpa',
        min:5
    },
    /*propietario:{
        type:String,
        label:"ID Usuario",
        autoValue: function() {
            return this.userID
        },
        optional:true
    },*/
    destino:{
        type:String,
        label:"Destino",
        allowedValues:['La Ceiba','Choluteca','Trujillo','Comayagua','Santa Rosa de Copán','San Pedro de Sula'
        ,'Yuscarán','Tegucigalpa','Puerto Lempira','La Esperanza','La Paz','Gracias','Nuevo Ocotepeque','Juticalpa'
        ,'Santa Bárbara','Nacaome','Yoro'],
        defaultValue: 'Tegucigalpa',
        min:4
    },
    fechaSal:{
        type:Date,
        defaultValue:new Date,
        label:"Fecha Salida",
    },
    fechaReg:{
        type:Date,
        defaultValue:new Date,
        label:"Fecha Regreso",
    },
    clase:{
        type:String,
        label:"Clase",
        allowedValues: ['Primera', 'Turista'],
        defaultValue: 'Turista'
    },
    cantPasajeros:{
        type: SimpleSchema.Integer,
        label:"Cantidad de personas",
        defaultValue:1,
        min:1,
        max:15
    },

});

ticketMongo.attachSchema(BusTicketSchema);
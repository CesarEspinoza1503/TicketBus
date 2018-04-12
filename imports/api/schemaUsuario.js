import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const BusUserSchema = new SimpleSchema({
    nombre:{
        type:String,
        label:"Nombre",
        defaultValue: '',
        min:2,
        optional:true
    },
    apellido:{
        type:String,
        label:"Apellido",
        defaultValue: '',
        min:2,
        optional:true
    },
    correo:{
        type:String,
        label:"Correo",
        min:10
    },
    contra:{
        type:String,
        label:"Contraseña",
        min:8
    },
    pais:{
        type:String,
        defaultValue: '',
        label:"País",
        optional:true,
        min:2
    },
    zip:{
        type: String,
        defaultValue: '',
        label:"Código Postal",
        optional:true,
        min: 4
    },
    numTarjeta:{
        type:String,
        label:"Numero de Tarjeta",
        defaultValue: '',
        optional:true,
        min:16
    },
    historial:{
        type: Array,
        label:"Historial",
        minCount: 1,
        optional:true,
    },
    'historial.$':String,
});
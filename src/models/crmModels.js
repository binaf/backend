// création des schemas 
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({

    fistName: {
        type: String,
        required: "Entrer un prénom"
    },
    lastName: {
        type: String,
        required: "Entrer un nom"
    },
    email: {
        type: String,
        //required: "Entrer une adresse mail"
    },
    compagny: {
        type: String,
    },
    phone: {
        type: Number,
    },
    created_date: {
        type: Date,
        default: Date.now
    }


})
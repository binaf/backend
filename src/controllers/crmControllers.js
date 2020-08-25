import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModels';

const Contact = mongoose.model('Contact', ContactSchema);

// méthode POST
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);


    newContact.save((err, contact) => {
        if(err) {
            res.send(err);
        };
        res.json(contact);
    });
}

// methode GET

export const getContacts = (req, res) => {
    
    Contact.find({},(err, contact) => {
        if(err) {
            res.send(err);
        };
        res.json(contact);
    });
}

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

// methode GET avec id pour avoir une liste specifique 

export const getContactwithID = (req, res) => {
    
    Contact.findById(req.params.contactId,(err, contact) => {
        if(err) {
            res.send(err);
        };
        res.json(contact);
    });
}


// methode PUT 
export const updateContact = (req, res) => {
    
    Contact.findOneAndUpdate(
        { _id: req.params.contactId }, 
        req.body, 
        {new: true}, 
        (err, contact) => {
        if(err) {
            res.send(err);
        };
        res.json(contact);
    });
}


// methode DELETE
export const deleteContact = (req, res) => {
    
    Contact.remove({ _id: req.params.contactId }, (err, contact) => {
        if(err) {
            res.send(err);
        };
        res.json({message: 'Effacer contact avec succès'});
    });
}


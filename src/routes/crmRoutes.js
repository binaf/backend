import {

    addNewContact, 
    getContacts,
    getContactwithID,

} from '../controllers/crmControllers';

const routes = (app) => { 

    app.route('/contact') // création des routes de l'application ici 

    .get((req, res, next) => {   // syntaxe de creation des routes
        // middleware
        console.log(` Request de: ${req.originalUrl} `)
        console.log(` Request type: ${req.method} `)
        next(); // pour passer à la prochaine fonction !!!
        }, getContacts ) 
    
    .post(addNewContact);
 

    app.route('/contact/:contactId')
    // Obtenir le contact avec id
    .get(getContactwithID)
    // Mise à jour contact
    .put((req, res) =>  
        res.send('demande PUT avec succès')) 
    // supprimer le contact   
    .delete((req, res) =>   
        res.send('demande DELETE avec succès'));          
     
}

export default routes;
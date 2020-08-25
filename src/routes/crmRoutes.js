const routes = (app) => { 

    app.route('/contact') // création des routes de l'application ici 

    .get((req, res, next) => {   // syntaxe de creation des routes
        // middleware
        console.log(` Request de: ${req.originalUrl} `)
        console.log(` Request type: ${req.method} `)
        next(); // pour passer à la prochaine fonction !!!
        }, (req, res, next) => {
            res.send('demande GET avec succès');
           }  

    ) 
    
    .post((req, res) =>   
         res.send('demande POST avec succès'));


    app.route('/contact/:contactId') 

    .put((req, res) =>  
        res.send('demande PUT avec succès')) 

    .delete((req, res) =>   
        res.send('demande DELETE avec succès'));          
     
}

export default routes;
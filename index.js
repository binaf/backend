import express from 'express';
import mongoose from 'mongoose';
import badyParser from 'body-parser'; // un outil pour convertir les informations entre la db et le serveur
import routes from './src/routes/crmRoutes'; // importer les routes 
import bodyParser from 'body-parser'; 


const app = express();
const PORT = 8080;

// connection mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://u3rtewkgjxfok1foan9x:riCWs2Xmu3W2sOj99RJw@bchobwzfpwnohfj-mongodb.services.clever-cloud.com:27017/bchobwzfpwnohfj', {

     useNewUrlParser: true,
     useUnifiedTopology: true,

}); //{ useUnifiedTopology: true }

// body-parser 
app.use(bodyParser.urlencoded({extended: true}));
app.use(badyParser.json()); // conversion qu'il faut  



routes(app); // Les routes de notre app !!

app.use(express.static('public'));

app.get("/",(req, res) => {
    res.send(`serveur node et express sur le port ${PORT}`)
}); // point de terminaison

// Listen pour ecouter sur un port !!

//app.listen(PORT, () => 
  //  console.log(`Votre serveur est sur le port ${PORT}`)
//);

console.log('Le serveur tourne sur le port:',PORT);
app.listen(PORT, '0.0.0.0');


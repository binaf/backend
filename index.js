import express from 'express';
import mongoose from 'mongoose';
import badyParser from 'body-parser'; // un outil pour convertir les informations entre la db et le serveur
import routes from './src/routes/crmRoutes'; // importer les routes 
import bodyParser from 'body-parser'; 


const app = express();
const PORT = 3000;

// connection mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb'); // , {useMongoClient: true} non necessaire en mongoose 5.x

// body-parser 
app.use(bodyParser.urlencoded({extended: true}));
app.use(badyParser.json()); // conversion qu'il faut  



routes(app); // Les routes de notre app !!

app.get("/",(req, res) => {
    res.send(`serveur node et express sur le port ${PORT}`)
}); // point de terminaison

// Listen pour ecouter sur un port !!

app.listen(PORT, () => 
    console.log(`Votre serveur est sur le port ${PORT}`)
);


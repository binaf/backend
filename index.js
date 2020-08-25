import express from 'express';
import routes from './src/routes/crmRoutes'; // importer les routes 


const app = express();
const PORT = 3000;

routes(app); // Les routes de notre app !!

app.get("/",(req, res) => {
    res.send(`serveur node et express sur le port ${PORT}`)
}); // point de terminaison

// Listen pour ecouter sur un port !!

app.listen(PORT, () => 
    console.log(`Votre serveur est sur le port ${PORT}`)
);


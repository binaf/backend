import express from 'express';


const app = express();
const PORT = 3000;

app.get("/",(req, res) => {
    res.send(`serveur node et express sur le port ${PORT}`)
}); // point de terminaison

// Listen pour ecouter sur un port !!

app.listen(PORT, () => 
    console.log(`Votre serveur est sur le port ${PORT}`)
);


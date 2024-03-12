//import du framework express
const express = require('express');

// on crée notre application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// associer le moteur de template EJS à notre application
app.set('view engine', 'ejs');

//on déclare un port sur lequel sera lancé notre application
const port = 3000;


// création de la route principale permettant d'afficher un message texte
app.get('', (req, res) => {
    const prenom = req.query.prenom ?? 'Samuel';
    res.render('pages/index', {
        prenom
    })
})

// méthode permettant de poster des données
app.post('', (req, res) => {
    const prenom = req.body?.prenom;
    const nom = req.body?.nom;

    res.send(`MESSAGE RECUsss: ${nom} ${prenom}`)
})


// on lance notre application
app.listen(port, function() {
    console.log('Application lancée')
})
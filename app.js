//import du framework express
const express = require('express');
// création tableau utilisateurs
const users = []

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

//Exercice
// créez une route qui permet de créer des utilisateurs nom et prenom, stockez 
// ces utilisateurs dans un tableau au niveau de l'application

//Créez une router permettant d'afficher l'ensemble des utilisateurs au format JSON


app.post('/users', (req, res) => {
    const { nom, prenom } = req.body;
    if (nom != null && prenom != null) {
        users.push({
            nom,
            prenom
        })
        return res.send(`Bonjour ${nom} ${prenom}`)
    } else {
        res.send('informations manquantes')
    }
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.delete('/users/:index', (req, res) => {
    const { index } = req.params;
    if (index == null) {
        return res.send('Index manquant');
    }

    if (users[index] == null) {
        return res.status(404).send('Utilisateur non trouvé')
    }
    users.splice(index, 1);

    return res.send('Utilisateur supprimé');
})



// on lance notre application
app.listen(port, function () {
    console.log('Application lancée')
})
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const port = 3000;

app.get('/', (req, res) => {
    const { prenom } = req.query
    res.render('pages/index', { prenom });
});


app.get('/bonjour', (req, res) => {
    // const nom = req.query.nom ? req.query.nom : '-'
    // const prenom = req.query.prenom ? req.query.prenom : '-'
    const nom = req.query.nom ?? '-'
    const prenom = req.query.prenom ?? '-'

    res.send(`Bonjour ${nom}  ${prenom}`)

});


app.get('/calculatrice', (req, res) => {
    let { nb1, nb2 } = req.query
    if(nb1 === undefined || nb2 === undefined) {
        return res.send('Veuillez indiquer le nb1 et nb2 !')
    }
    nb1 = parseInt(nb1, 10)
    nb2 = parseInt(nb2, 10)
    const somme = nb1 + nb2
    res.send(`Voici le résultat: ${somme}`)
});

app.listen(port, () => {
    console.log('Mon APP est lancée')
})
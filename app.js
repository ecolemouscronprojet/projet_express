const express = require('express');
const bodyParser = require('body-parser')
const app = express();
// database
const database = {
    users: []
}

app.set('view engine', 'ejs');

const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    const { prenom } = req.query
    res.render('pages/index', { prenom });
});



// hello-world  sans passer par le TPL
app.get('/hello-world', (req, res) => {
    res.send('Hello world')
})

// page multiplication où vous allez créer deux variables
// nb1 = 10
// nb2 = 20
// rendez la multiplication de ces deux nombres
app.get('/multiplication', function(req, res){
    const nb1 = req.query.nb1 ?? 1
    const nb2 = req.query.nb2 ?? 1
    
    const result = nb1 * nb2
    res.send(`Resultat ${result}`)
})


// créer la route table-de-multiplication

// app.get('/table-de-multiplication', (req, res) => {
//     const nb = req.query.nb ?? 1
//     let result = ''
//     for(let i = 1; i<=10; i++){
//         result += `${i} * ${nb} = ${i*nb} <br>`
//     }

//     res.send(result)
// })


app.get('/table-de-multiplication', (req, res) => {
    const nb = req.query.nb ?? 1

    res.render('pages/table-de-multiplication' , {
        nb: nb
    })
})

app.post('/formulaire-save', (req, res) => {
    const nom = req.body.nom
    const prenom = req.body.prenom
    database.users.push({
       nom,
       prenom 
    })
    // res.send(`Bonjour ${nom} ${prenom}`)
    res.redirect('/formulaire')
})

// Créer une nouvelle route /utilisateurs
// avec un tpl html qui permet de lister les utilisateurs



app.get('/formulaire', (req, res) => {
    res.render('pages/formulaire')
})

app.get('/utilisateurs', (req, res) => {
    res.render('pages/utilisateurs', {
        users: database.users
    })
})



// hello-world-2 création d'une page et affichage
//               Hello world dans la page


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
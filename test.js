
function resultat(nb1, nb2){
    console.log('nb1', nb1)
    console.log('nb2', nb2)
    console.log(nb1+nb2)
}



function calcul(nb1, nb2, callback) {
    // var thisArg = arguments;
    setTimeout(function() {
        callback.call(arguments)
    }, 2000)
}


calcul(5, 10, resultat)
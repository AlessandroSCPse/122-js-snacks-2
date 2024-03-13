// L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// Chiedo un numero all'utente
// Se è pari stampo il numero stesso
// altrimenti incremento il numero di uno e lo stampo
let userNumber = parseInt(prompt('Dammi un numero'));
let userResult;
if(userNumber % 2 === 0) {
    userResult = userNumber;
} else {
    userResult = userNumber + 1;
}

console.log(userResult);

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedo 2 parole all'utente
// Se la prima parola è più lunga stampo la seconda e poi la prima
// Se la seconda parola è più lunga stampo la prima e poi la seconda
// Altrimenti stampo "lunghezza parole uguali"
const firstWord = prompt('Dammi la prima parola');
const secondWord = prompt('Dammi la seconda parola');

let userMessage;
if(firstWord.length > secondWord.length) {
    userMessage = secondWord + ' ' + firstWord;
} else if(secondWord.length > firstWord.length) {
    userMessage = firstWord + ' ' + secondWord;
} else {
    userMessage = 'le parole hanno la stessa lunghezza';
}

console.log(userMessage);
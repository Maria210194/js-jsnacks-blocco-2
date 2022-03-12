// Chiedi per 5 volte all'utente di inserire un numero
// stampa la somma degli elementi (sia con for che con while)
/*
let contenitore = [];
let somma = 0;

for (i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt(`${i + 1} Inserisci un numero`));
    contenitore.push(userNumber);
    somma += contenitore[i];
}
console.log(somma);

*/


let contenitore = [];
let somma = 0;
let conto = 0;
let userNumber;

while (conto < 5) {
    do {
        userNumber = parseInt(prompt(`Inserisci un numero`));
    } while (isNaN(userNumber));
    conto++;
    contenitore.push(userNumber);
    somma += userNumber;
}
console.log(somma);
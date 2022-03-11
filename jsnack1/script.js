// Crea un array di numeri interi e somma quelli che si trovano nelle posizioni dispari

const interi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somma = 0;

for (i = 0; i < interi.length; i++) {
    if (i % 2 !== 0) {
        somma += interi[i];
    }

}
console.log(somma);
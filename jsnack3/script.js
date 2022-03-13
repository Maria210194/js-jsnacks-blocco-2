const primo = [77, 30, 100, 7, 5, 21, 68];
const secondo = [2, 5];
let check = false;

for (i = 0; i <= primo.length; i++) {
    if (primo.length > secondo.length) {
        let casuale = Math.floor(Math.random() * 100);
        secondo.push(casuale);
        check = false;
    }
}
if (primo.length = secondo.length) {
    check = true;
    console.log(secondo, primo);
}
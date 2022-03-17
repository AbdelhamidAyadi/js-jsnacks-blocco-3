let container = document.getElementById("container");
let number = Number( prompt("Inserisci un numero:"));
let sum = 0 ;

let array = [];


while ( sum < 50 ) {
    let number = Number( prompt("Inserisci un numero:"));
    sum += number;
    array.push(number);
};
console.log(array);

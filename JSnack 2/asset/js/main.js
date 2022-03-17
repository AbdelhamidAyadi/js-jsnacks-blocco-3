var container = document.getElementById("container");
n = Number(prompt("Inserisci la quantita degli Array:  "));

var randomNumber = Math.floor(Math.random()* 100 + 1);

i = 0;
while ( i < n) {
    array = [];
    var y = 10;
    var x = 0;
    while ( x < y) {
        var randomNumber = Math.floor(Math.random()* 100 + 1);
        array.push(randomNumber);
        x++;
    }

    i++;
    container.innerHTML += `<div>${array}</div>`;
};






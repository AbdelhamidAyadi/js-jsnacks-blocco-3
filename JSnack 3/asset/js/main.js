var container = document.getElementById("container");
var number = Number (prompt("Inserisci un numero"));
var somma = 0 ;
var y = 5 ;
var i = 0 ;

while ( i < y) {
    var number = Number (prompt("Inserisci un numero"));
    
    somma += number;
    
    i++ ; 
    
};

container.innerHTML += `<div>La somma è:${somma}</div>`;

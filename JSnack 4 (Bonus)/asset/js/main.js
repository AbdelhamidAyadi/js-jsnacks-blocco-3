let container = document.getElementById("container");

var namesList = ["Liam Smith","Noah Johnson","Oliver Williams","Emma Brown","Charlotte Jones","Benjamin Garcia","Lucas Harris" ];

var name = prompt("Inserisci il tuo Nome e Cognome:");

var esiste = false ;

var i = 0 ;

container.innerHTML = `<div>"Non sei invitato!"</div>`;

while ( esiste = false || i <= namesList.length) {
    if ( namesList[i] == name) {
        esiste = true ;
        container.innerHTML = `<div>Welcome ${namesList[i]}.</div>`;
    }
   
    i++;



    
};


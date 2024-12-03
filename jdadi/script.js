let giocatore = Math.floor(Math.random() * 6);
let computer = Math.floor(Math.random() * 6);

alert( "Il giocatore ha " + giocatore + " e il computer ha " + computer );

if(giocatore > computer) {
    alert("Il giocatore vince")
    } else if (giocatore < computer) {
        alert("Il computer vince")
        } else
        alert("Pareggio");

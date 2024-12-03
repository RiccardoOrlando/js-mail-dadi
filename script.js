/* array di email */
const listemail = ["pippococa@gmail.com" , "franco@gmail.com" , "mimmomail@gmail.com" , "dajeroma@gmail.com"]
/* variabile per l'inserimento della email dell'utente */
const email = prompt("inserisci la tua email")
/* variabile per la validazione */
let emailvalidation = false
for(i = 0 ; i < listemail.length ; i++){
    if(listemail[i] === email){
        emailvalidation = true
    }
}

/* stampa del risultato */
if(emailvalidation){
    alert("bravo, la tua email " + email + " è corretta")
} else{
    alert("eh no, la tua email " + email + " non è corretta")
}
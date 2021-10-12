//strumenti
/*

-traccia html
h1 + span

-Prompt

-getElementById / querySelector

-className(nome_classe)

-if


*/

//devi richiedere nome e sesso(con due prompt)
const userName = prompt("Hello! What's your name?");
console.log(userName);

const gender = prompt("Are you a boy or a girl? [boy/girl]").toLowerCase();

console.log(gender);

//sulla pagina HTML deve comparire Ciao(nome) e il colore in base al sesso dell'utente

const nameElement = document.querySelector("h1>span");

nameElement.innerHTML = userName;



if (gender == "boy") {
    nameElement.className = "blue";

    //colore blu

} else if (gender == "girl") {
    nameElement.className = "pink";

    // colore rosa 

} else {

    nameElement.className = "red";
    // colore crimson

}



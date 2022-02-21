//Html tabellen og arrayen med elever
let utskriftTabell = document.getElementById("utskrift");

let elevene = [
    {navn: "Amanda" , karakter: 4},
    {navn: "Ole" , karakter: 3},
    {navn: "Reidun" , karakter: 6},
    {navn: "Jan" , karakter: 5},
    {navn: "Jo Bjarne" , karakter: 2},
    {navn: "Jo Bjørnar" , karakter: 1}
]

function htmlTabellElever(arrayInn) {
    let tabell = "<table><tr><th> Elev </th><th> Karakter</th></td>";

        for(let elev of arrayInn) {
            tabell += "<tr><td>" + elev.navn + "</td><td>" + elev.karakter + "</td></tr>";
        }
        tabell += "</table>";
        utskriftTabell.innerHTML += "<br><br>" + tabell;
}
htmlTabellElever(elevene);

//Sletting av elever
let slettElev = document.getElementById("slettElev");
let ingenElevFunnet = document.getElementById("ingenElevFunnet");

slettElev.onclick = function() {
    console.log("funker");
    let elevSomSkalSlettes = document.getElementById("elevSomSkalSlettes").value
    for(let elev of elevene) {
        if(elev.navn.toUpperCase() === elevSomSkalSlettes.toUpperCase()) {
            elevene.splice(elevSomSkalSlettes, 1);
            utskriftTabell.innerHTML = "";
            htmlTabellElever(elevene);
            console.log(elevene);
            break;
        }
        else {
            ingenElevFunnet.innerHTML = "Ingen elev ved det navnet ble funnet i tabellen."
        }
    }
}

//Legge til elev

//sortere tabellen
let sorteringValgt = document.getElementById("velgSortering");
let sortertListe = document.getElementById("sortertListe");

sortertListe.onclick = function() {
    console.log(sorteringValgt.value);
    if(sorteringValgt.value === "navn") {
        let sortertNavn = elevene.slice().sort(function(a,b) {
            const navnA = a.navn.toUpperCase();
            const navnB = b.navn.toUpperCase();
            
        });
        console.log(sortertNavn);
        utskriftTabell.innerHTML = "";
        htmlTabellElever(sortertNavn);
    }
    else if(sorteringValgt.value === "karakter") {
        let sortertKarakter = elevene.slice().sort(function(a,b) {
            return b.karakter - a.karakter;
        });
        console.log(sortertKarakter);
        utskriftTabell.innerHTML = "";
        htmlTabellElever(sortertKarakter);
    }
}




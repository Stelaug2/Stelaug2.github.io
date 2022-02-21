//bilder
let gitar = document.getElementById("gitar");
let bass = document.getElementById("bass");
let orgel = document.getElementById("orgel");
let piano = document.getElementById("piano");
let trommer = document.getElementById("trommer");

//lyd
let gitarLyd = document.getElementById("gitarLyd");
let bassLyd = document.getElementById("bassLyd");
let orgelLyd = document.getElementById("orgelLyd");
let pianoLyd = document.getElementById("pianoLyd");
let trommerLyd = document.getElementById("trommerLyd");

gitarLyd.volume = 0
bassLyd.volume = 0
orgelLyd.volume = 0
pianoLyd.volume = 0
trommerLyd.volume = 1


gitar.onclick = function() {
    if(gitarLyd.volume === 1) {
        gitar.src = "bilder/gitar_sort.png";
        gitarLyd.volume = 0
    }
    else {
        gitar.src = "bilder/gitar_blek.png";
        gitarLyd.volume = 1
    }
    console.log(gitarLyd.volume)
}

gitar.onmouseover = function() {
    gitar.style.border = "2px solid black"
}

bass.onclick = function() {
    if(bassLyd.volume === 1) {
        bass.src = "bilder/bass_sort.png";
        bassLyd.volume = 0
    }
    else {
        bass.src = "bilder/bass_blek.png";
        bassLyd.volume = 1
    }
    console.log(bassLyd.volume)
}

bass.onmouseover = function() {
    bass.style.border = "2px solid black"
}

orgel.onclick = function() {
    if(orgelLyd.volume === 1) {
        orgel.src = "bilder/orgel_sort.png";
        orgelLyd.volume = 0
    }
    else {
        orgel.src = "bilder/orgel_blek.png";
        orgelLyd.volume = 1
    }
    console.log(orgelLyd.volume)
}

orgel.onmouseover = function() {
    orgel.style.border = "2px solid black"
}

piano.onclick = function() {
    if(pianoLyd.volume === 1) {
        piano.src = "bilder/piano_sort.png";
        pianoLyd.volume = 0
    }
    else {
        piano.src = "bilder/piano_blek.png";
        pianoLyd.volume = 1
    }
    console.log(pianoLyd.volume)
}

piano.onmouseover = function() {
    piano.style.border = "2px solid black"
}

trommer.onclick = function() {
    if(trommerLyd.volume === 1) {
        trommer.src = "bilder/trommer_sort.png";
        trommerLyd.volume = 0
    }
    else {
        trommer.src = "bilder/trommer_blek.png";
        trommerLyd.volume = 1
    }
    console.log(trommerLyd.volume)
}

trommer.onmouseover = function() {
    trommer.style.border = "2px solid black"
}

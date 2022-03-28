var request = new XMLHttpRequest(); //lager en request variabel med et nytt XMLHttpRequest objekt

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true); //åpner en ny koblin ved å bruke GET på URl-en

request.onload = function() {
    if(request.status >= 200 && request.status < 400) { //om forespørselen feiler console.logger den error om ikke kjører den som vanlig
        var data = JSON.parse(this.response);

        data.forEach(movie => {
            console.log(movie.title);
            console.log(movie.description);
            let card = document.createElement("div");
            card.className = "card";
        
            let h1 = document.createElement("h1");
            h1.textContent = movie.title;
        
            let p = document.createElement("p");
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;

            let img = document.createElement("img");
            img.src = movie.img;
        
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(img);
            card.appendChild(p);
        });
    }
    else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request.send(); //sender forespørselen

const app = document.getElementById("root");
const logo = document.createElement("img");
logo.scr = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);


let brukere = []
const getUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const json = await response.json();

    let users = json.results;

    addUser(users);
}

getUsers();

function addUser(users) {
    for(let user of users) {
        let newUser = {
            firstName: user.name.first,
            lastName: user.name.last,
            city: user.location.city,
            country: user.location.country,
            email: user.email,
            image: user.picture.large
        };
        console.log(newUser);
        brukere.push(newUser);
    }
    makeHTML(users);
}

function makeHTML(users) {
    let root = document.getElementById("root");
    for(let bruker of brukere) {
        let div = document.createElement("div");
        div.className = "bruker";

        let img = document.createElement("img");
        img.src = bruker.image;

        let h2 = document.createElement("h2");
        h2.textContent = bruker.firstName + " " + bruker.lastName;

        let p = document.createElement("p");
        p.textContent = bruker.city + ", " + bruker.country

        let p2 = document.createElement("p");
        p2.textContent = bruker.email;

        root.appendChild(div);
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(p2);
    }
}
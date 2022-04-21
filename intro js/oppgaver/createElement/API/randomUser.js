
let users = []
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
            city: user.city,
            country: user.country,
            email: user.email,
            image: user.picture.large
        };
        console.log(newUser);
        users.push(newUser);
    }
    makeHTML(users);
}

function makeHTML(users) {
    let root = document.getElementById("root");
    for(let user of users) {
        let div = document.createElement("div");
        div.className = "bruker";

        let img = document.createElement("img");
        img.src = image;

        let h2 = document.createElement("h2");
        h2.textContent = user.firstName + user.lastName;

        let p = document.createElement("p");
        p.textContent = user.city + ", " + user.country

        let p2 = document.createElement("p");
        p2.textContent = user.email;

        root.appendChild(div);
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(p2);
    }
}
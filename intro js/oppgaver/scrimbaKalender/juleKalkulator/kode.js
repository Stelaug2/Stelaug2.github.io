const btn = document.getElementById("btn")
let food = document.getElementById("food")
let vegetarian = document.getElementById("vegetarian-input");
let numGuests = document.getElementById("numInput").value;

btn.addEventListener("click", checkInput);

function checkInput() {
    console.log(numGuests);
    if(vegetarian.checked) {
        console.log("nut");
        food.innerHTML = "nut roast";
    }
    else if(numGuests <= 4 && numGuests >= 0) {
        console.log("turkey");
        food.innerHTML = "turkey";
    }
    else if(numGuests >= 5) {
        console.log("goose");
        food.innerHTML = "goose";
    }
    else if(numGuests === NaN) {
        console.log("NaN");
        alert("Please enter a positive number in the input area.");
    }
}

let andersDisplay = document.getElementById("anders_display");
let enemyDisplay = document.getElementById("enemy_display");
let description = document.getElementById("battleDescription");
let andersImage = document.getElementById("andersImage");

let attackButton = document.getElementById("attack");
let counterButton = document.getElementById("counter");
let healButton = document.getElementById("heal");

let enemyHP = 20;
let andersHP = 20;

enemyDisplay.innerHTML = "HP: " + enemyHP;
andersDisplay.innerHTML = "HP: " + andersHP;

summonEnemy();

attackButton.addEventListener("click", attackEnemy);

function attackEnemy() {
    disableButtons();
    let attackPower = randInt(3, 5);
    let newEnemyHP = enemyHP - attackPower;
    enemyHP = newEnemyHP;
    enemyDisplay.innerHTML = "HP: " + enemyHP;
    description.textContent = "You did " + attackPower + " damage";
    if(enemyHP > 0) {
        setTimeout(function() { attackAnders()}, 2000);
    }

    else if(enemyHP <= 0) {
        enemyDisplay.innerHTML = "HP: 0";
        description.textContent = "You defeated your enemy.";
        setTimeout(function() {description.textContent = "Oh no! Here comes a new one"; enemyHP = 20;
        enemyDisplay.innerHTML = "HP: " + enemyHP; summonEnemy()}, 3000);
    }
}

function attackAnders() {
    enableButtons();
    console.log("enemy attacks!")
    let attackPower = randInt(1, 3);
    let newAndersHP = andersHP - attackPower;
    andersHP = newAndersHP;
    andersDisplay.innerHTML = "HP: " + andersHP;
    description.textContent = "Your enemy did " + attackPower + " damage to you";
}

function summonEnemy() {
    let enemyImage = document.getElementById("enemyImage");
    console.log(enemyImage.src);
    if(enemyImage.src === "http://127.0.0.1:5501/intro%20js/jrpg/bilder/karoliner_big.png") {
        enemyImage.src = "bilder/redcoat_big.png";
        console.log("red");
    } 
    else {
        enemyImage.src = "bilder/karoliner_big.png";
        console.log("blue");
    }
    console.log(enemyImage.src);
}

function disableButtons() {
    attackButton.disabled = true;
    counterButton.disabled = true;
    healButton.disabled = true;
}

function enableButtons() {
    attackButton.disabled = false;
    counterButton.disabled = false;
    healButton.disabled = false;
}

function randInt(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

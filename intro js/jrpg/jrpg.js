let andersDisplay = document.getElementById("anders_display");
let enemyDisplay = document.getElementById("enemy_display");
let description = document.getElementById("battleDescription");
let andersImage = document.getElementById("andersImage");

let attackPressed = document.getElementById("attack");
let enemyHP = 20;

summonEnemy();

enemyDisplay.innerHTML = "HP: " + enemyHP

attackPressed.addEventListener("click", attackEnemy);

function attackEnemy() {
    let attackPower = randInt(3, 5);
    let newEnemyHP = enemyHP - attackPower;
    enemyHP = newEnemyHP;
    enemyDisplay.innerHTML = "HP: " + enemyHP;
    description.textContent = "You did " + attackPower + " damage";

    if(enemyHP <= 0) {
        enemyDisplay.innerHTML = "HP: 0";
        description.textContent = "You defeated your enemy.";
        setTimeout(function() {description.textContent = "Oh no! Here comes a new one"; enemyHP = 20;
        enemyDisplay.innerHTML = "HP: " + enemyHP; summonEnemy()}, 3000);
    }
}

function summonEnemy() {
    let enemyImage = document.getElementById("enemyImage");
    console.log(enemyImage.src);
    if(enemyImage.src === "http://127.0.0.1:5501/intro%20js/jrpg/jrpg1.html#") {
        let randEnemy = randInt(1, 2);
        if(randEnemy === 1) {
            console.log("with all");
            enemyImage.src = "bilder/karoliner_big.png";
        }
        else {
            console.log("of the");
            enemyImage.src = "bilder/redcoat_big.png";
        }
    }
    else if(enemyImage.src === "http://127.0.0.1:5501/intro%20js/jrpg/bilder/karoliner_big.png") {
        enemyImage.src = "bilder/redcoat_big.png";
        console.log("unga");
        return;
    } 
    else {
        enemyImage.src = "bilder/karoliner_big.png";
        console.log("bunga");
    }
    console.log(enemyImage);
    console.log(enemyImage.src);
}

function randInt(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//start screen with coloroptions
document.getElementById("runGame").style.display = "none";
document.getElementById("chooseWeapon").style.display = "none";
let redAnders = document.getElementById("red");
let blueAnders = document.getElementById("blue");
let yellowAnders = document.getElementById("yellow");
let pinkAnders = document.getElementById("pink");
let andersImage = document.getElementById("andersImage");

redAnders.onclick = blueAnders.onclick = yellowAnders.onclick = pinkAnders.onclick = function(evt) {
    let anders = evt.target
    let color = anders.getAttribute("id");
    andersImage.src = "bilder/anders_" + color + "_big.png";
    console.log(andersImage.getAttribute("src"));
    document.getElementById("chooseColor").style.display = "none";
    document.getElementById("chooseWeapon").style.display = "block";
}

//screen with weaponoptions
let bababoey = document.getElementById("bababoey");
let p90 = document.getElementById("p90");
let andersWeapon = document.getElementById("andersWeapon");

bababoey.onclick = p90.onclick = function(evt) {
    let weapon = evt.target;
    let weaponSource = weapon.getAttribute("id");
    andersWeapon.src = "bilder/" + weaponSource + "_big.png";
    document.getElementById("chooseWeapon").style.display = "none";
    document.getElementById("runGame").style.display = "grid";

}


let andersDisplay = document.getElementById("anders_display");
let enemyDisplay = document.getElementById("enemy_display");
let description = document.getElementById("description");
let enemyWeapon = document.getElementById("enemyWeapon");

let attackButton = document.getElementById("attack");
let counterButton = document.getElementById("counter");
let healButton = document.getElementById("heal");

let enemyHP = 20;
let andersHP = 20;

let action = 0;
let counter = false;
let attackPower = 0;
let newAndersHP = 0;
let newEnemyHP = 0;
let healAmount = 0;
let healEnemy = 0;

enemyDisplay.innerHTML = "HP: " + enemyHP;
andersDisplay.innerHTML = "HP: " + andersHP;

summonEnemy();

attackButton.addEventListener("click", attackEnemy);
counterButton.addEventListener("click", counterEnemy);
healButton.addEventListener("click", healAnders);

function attackEnemy() {
    counter = false;
    disableButtons();
    attackPower = determineAttackPower("anders");
    newEnemyHP = enemyHP - attackPower;
    attackEnemyText();
    setTimeout(function() {enemyDeath()}, 1000);
}

function counterEnemy() {
    counter = true;
    enemyTurn();
    disableButtons()
    setTimeout(function(){
        if(action === 1) {
        attackPower = Math.floor(determineAttackPower("anders") * 1.5);
        newEnemyHP = enemyHP - attackPower;
        description.textContent = "You countered your enemy's attack!";
        attackEnemyText();
        setTimeout(function() {enemyDeath()}, 1000);
        }
        else{
            description.textContent = "Your counter failed";
        }
        enableButtons();
    }, 2000);
}

function healAnders() {
    counter = false;
    disableButtons()
    let healChance = randInt(0, 100);
    if(healChance >= 20) {
        healAmount = randInt(2, 3); 
        newAndersHP = andersHP + healAmount;
        andersHP = newAndersHP;
        description.textContent = "Heal failed. You only healed " + healAmount + " hp";
        healText("anders")
        setTimeout(function() {enemyTurn(); enableButtons()}, 2000);
    }
    else {
        healAmount = randInt(6, 10);
        newAndersHP = andersHP + healAmount;
        andersHP = newAndersHP;
        description.textContent = "Heal successfull. You healed " + healAmount + " hp";
        healText("anders")
        setTimeout(function() {enemyTurn(); enableButtons()}, 2000);
    }
}

function enemyTurn() {
    enableButtons();
    action = randInt(1, 2);
    if(action === 1){
        if(counter === true) {
            attackPower = Math.floor(determineAttackPower("enemy") / 2);
            newAndersHP = andersHP - attackPower;
            attackAndersText();
        }
        else {
            attackPower = determineAttackPower("enemy");
            newAndersHP = andersHP - attackPower;
            attackAndersText();
        }
    }
    else{
        healEnemy = randInt(1, 2);
        newEnemyHP = enemyHP + healEnemy;
        enemyHP = newEnemyHP;
        healText("enemy");
    }
}

function attackEnemyText() {
    enemyHP = newEnemyHP;
    enemyDisplay.innerHTML = "HP: " + enemyHP;
    description.textContent = "You did " + attackPower + " damage";
    if(enemyHP <= 0) {
        enemyDisplay.innerHTML = "HP: 0";
    }
}

function attackAndersText() {
    andersHP = newAndersHP;
    andersDisplay.innerHTML = "HP: " + andersHP;
    description.textContent = "Your enemy did " + attackPower + " damage to you";
}

function healText(char) {
    if(char === "anders") {
        andersDisplay.innerHTML = "HP: " + andersHP;
    }
    else if(char === "enemy") {
        description.textContent = "Your enemy healed " + healEnemy + " hp";
        enemyDisplay.innerHTML = "HP: " + enemyHP;
    }
}

function determineAttackPower(char) {
    if(char === "anders") {
        attackPower = randInt(3, 5);
        return attackPower;
    }
    else if (char === "enemy"){
        attackPower = randInt(1, 2);
        return attackPower;
    }
}

function summonEnemy() {
    let enemyImage = document.getElementById("enemyImage");
    if(enemyImage.getAttribute("src") === "bilder/karoliner_big.png") {
        enemyImage.src = "bilder/redcoat_big.png";
        enemyWeapon.src = "bilder/musket_big.png";
        return;
    } 
    else {
        enemyImage.src = "bilder/karoliner_big.png";
        enemyWeapon.src = "bilder/saber_big.png";
    }
}

function enemyDeath() {
    if(enemyHP <= 0) {
        description.textContent = "You defeated your enemy.";
        setTimeout(function() {description.textContent = "Oh no! Here comes a new one"; enemyHP = 20;
        enemyDisplay.innerHTML = "HP: " + enemyHP; summonEnemy(); enableButtons()}, 3000);
    }
    else {
        enemyTurn();
    }
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

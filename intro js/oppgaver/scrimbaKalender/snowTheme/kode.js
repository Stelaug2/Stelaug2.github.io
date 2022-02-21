const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const divContainer = document.getElementById("container");

christmasBtn.onclick = snowBtn.onclick = themeChange;

function themeChange(evt) {
    let theme = evt.target
    let activeTheme = theme.value
    console.log(activeTheme)

    if(activeTheme === "christmas") {
        document.divContainer.style.backgroundcolor = "white";
        document.body.style.backgroundColor = "#C7375F";
        greeting.innerHTML = "🎅 merry christmas";
    }
    else {
        document.divContainer.style.backgroundcolor = "green";
        document.body.style.backgroundColor = "white";
        greeting.innerHTML = "Let it snow";
    }
}


// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.
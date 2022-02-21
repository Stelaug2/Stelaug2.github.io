const countdownDisplay = document.getElementById("countdown-display")

var countDownDate = new Date("Dec 24, 2021 00:00:00").getTime();

//var countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var today = new Date().getTime();
    
  // Find the distance between now and the count down date
  var remainderTime = countDownDate - today;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(remainderTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remainderTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remainderTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainderTime % (1000 * 60)) / 1000);
    
  countdownDisplay.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}, 1000);
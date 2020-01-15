function fadeIn(el, speed) {
    document.getElementById("some-div").classList.remove("shit");
    document.getElementById("MyClockDisplay").classList.add("shit");

    var step = 1 / speed;
    var interval = setInterval(function() {
      if (+el.style.opacity >= 1)
        clearInterval(interval);
        
      el.style.opacity = +div.style.opacity + step;
    }, speed / 1000);
    
  }
  
  var div = document.getElementById("some-div");
  var button = document.getElementById("MyClockDisplay");
  

  button.addEventListener('click', function(event) {
    fadeIn(div, 300);
  });

function fadeOut(el, speed) {
    document.getElementById("All-In").classList.remove("shit");
    document.getElementById("some-div").classList.add("shit");

    var step = 1 / speed;
    var interval = setInterval(function() {
      if (+el.style.opacity >= 1)
        clearInterval(interval);
        
      el.style.opacity = +deev.style.opacity + step;
    }, speed / 1000);
    
  }
  
  function obfuscating() {
    const text = baffle(".question, .Answers");
            text.set({
                  characters : '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
                  speed: 120
            });
            text.start();
            text.reveal(4000);
  }

  var deev = document.getElementById("All-In");
  var batton = document.getElementById("some-div");
  

  batton.addEventListener('click', function(event) {
    fadeOut(deev, 300), obfuscating();
  });

// function fuckBlinks() {
//   $('.question, .Answers').css('animation', 'inherit');
// };
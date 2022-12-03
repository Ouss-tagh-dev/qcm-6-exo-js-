spanHeure = document.getElementById("spHeure");
spanMinute = document.getElementById("spMinute");
spanSecond = document.getElementById("spSecond");
let initTime = { heure: 10, minute: 23, second: 5 };
let currentTime = initTime;
let timer = null;

// incrementer
function incrementer(temps) {
  var time = { ...temps };
  return function () {
    time.second++;
    if (time.second >= 60) {
      time.second = 0;
      time.minute++;
      if (time.minute >= 60) {
        time.minute = 0;
        time.heure++;
      }
    }
    affiche(time);
    currentTime = time;
    return time;
  };
}

// decrementer
function decrementer(temps) {
  tim = { ...currentTime };
  return function () {
    tim.second--;
    if (tim.second == 0) {
      tim.second = 60;
      tim.minute--;
      if (tim.minute == 0) {
        tim.minute = 60;
        tim.heure--;
      }
    }
    affiche(tim);
    currentTime = tim;
    return tim;
  };
}

// affiche
function affiche(time) {
  spanHeure.innerHTML = time.heure;
  spanMinute.innerHTML = time.minute;
  spanSecond.innerHTML = time.second;
}

// stopTimer
function stopTimer() {
  if (timer) {
    clearInterval(timer);
  }
  timer = null;
}

// incrementerTimer
function incrementerTimer() {
  stopTimer();
  let next = incrementer(currentTime);
  timer = setInterval(next, 1000);
}

// decrementerTimer
function decrementerTimer() {
  stopTimer();
  let pre = decrementer(currentTime);
  timer = setInterval(pre, 1000);
}


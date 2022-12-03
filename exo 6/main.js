spanHeure = document.getElementById("spHeure");
spanMinute = document.getElementById("spMinute");
spanSecond = document.getElementById("spSecond");
let initTime = { heure: 10, minute: 23, second: 5 };
let currentTime = initTime;
let timer = null;
function incrementer(temps) {
  time = { ...temps };
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
function affiche(time) {
  spanHeure.innerHTML = time.heure;
  spanMinute.innerHTML = time.minute;
  spanSecond.innerHTML = time.second;
}
function stopTimer() {
  if (timer) {
    clearInterval(timer);
  }
  timer = null;
}
function incrementerTimer() {
  stopTimer();
  let next = incrementer(currentTime);
  timer = setInterval(next, 1000);
}

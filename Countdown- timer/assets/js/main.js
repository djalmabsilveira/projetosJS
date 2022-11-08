"use strict";

function countdown(days) {
  function stopCountdown() {
    clearInterval(interval);
  }

  let seconds = Math.floor(days * 86400);
  let parseSeconds = Math.floor(seconds % 60);
  let minutes = Math.floor(days * 1440);
  let parseMinutes = Math.floor(minutes % 60);
  let hours = Math.floor(days * 24);
  let parseHours = Math.floor(hours % 24);
  let parseDays = Math.floor(days);

  function count() {
    if (seconds === 0) {
      stopCountdown();
    }

    timerDays(parseDays);
    timerHours(parseHours);
    timerMinutes(parseMinutes);
    timerSeconds(parseSeconds);

    if (parseSeconds === 0) {
      parseSeconds = 60;
      parseMinutes--;
      if (parseMinutes < 0) {
        timerMinutes(0);
        parseMinutes = 59;
        parseHours--;
        if (parseHours < 0) {
          timerHours(0);
          parseHours = 23;
          parseDays--;
        }
      }
    }
    parseSeconds--;
    seconds--;
  }

  const interval = setInterval(count, 1000);
}

function timerSeconds(timerSeconds) {
  const seconds = document.getElementById("seconds");
  seconds.textContent = formatTime(timerSeconds);
}

function timerMinutes(timerMinutes) {
  const minutes = document.getElementById("minutes");
  minutes.textContent = formatTime(timerMinutes);
}

function timerHours(timerHours) {
  const hours = document.getElementById("hours");
  hours.textContent = formatTime(timerHours);
}

function timerDays(timeDays) {
  const days = document.getElementById("days");
  days.textContent = formatTime(timeDays);
}

function formatTime(number) {
  number = number < 10 ? "0" + number : number;
  return number;
}

function promptInt(mensagem, tenteNovamente) {
  var msg = mensagem;
  while (true) {
    let ret = prompt(msg);
    if (!isNaN(ret)) return ret;
    msg = tenteNovamente;
  }
}

var count = promptInt(
  "Digite um número de dias:",
  "Por favor, digite um número de dias.\nTente novamente:"
);

countdown(count);

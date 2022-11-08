const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let sec = 0;
let timer;

function getTimeFromSeconds(sec) {
  const data = new Date(sec * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT',
  });
}

function startClock() {
  timer = setInterval(function () {
    sec++;
    clock.innerHTML = getTimeFromSeconds(sec);
  }, 1000);
}

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('start')) {
    clock.classList.remove('paused');
    clearInterval(timer);
    startClock();
  }

  if (el.classList.contains('pause')) {
    clock.classList.add('paused');
    clearInterval(timer);
  }

  if (el.classList.contains('reset')) {
    clock.classList.remove('paused');
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    sec = 0;
  }
});

//
// start.addEventListener('click', function (e) {
//   clock.classList.remove('paused');
//   clearInterval(timer);
//   startClock();
// });

// pause.addEventListener('click', function (e) {
//   clock.classList.add('paused');
//   clearInterval(timer);
// });

// reset.addEventListener('click', function (e) {
//   clock.classList.remove('paused');
//   clearInterval(timer);
//   clock.innerHTML = '00:00:00';
//   sec = 0;
// });

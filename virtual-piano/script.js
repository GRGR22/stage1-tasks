//fullscreen
let FlScr = document.querySelector(".fullscreen");
FlScr.addEventListener("click", toggleFullScreen);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Notes/Letters key

let btnNot = document.querySelector(".btn-notes");
btnNot.addEventListener("click", Toggle);

let btnLet = document.querySelector(".btn-letters");
btnLet.addEventListener("click", Toggle);

function Toggle() {
  document.querySelector(".btn-notes").classList.toggle("btn-active");
  document.querySelector(".btn-letters").classList.toggle("btn-active");
  let elems = document.querySelectorAll(".piano-key");
  [].forEach.call(elems, function (el) {
    el.classList.toggle("piano-key-letter");
  });
}

// mouse events 

const piano = document.querySelector(".piano");
piano.addEventListener("mousedown", (event) => {
  event.target.classList.add("piano-key-active");
  if (event.target.classList.contains("piano-key")) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
  }
});

piano.addEventListener("mouseup", (event) => {
  tap = false;
  event.target.classList.remove("piano-key-active");
});
document.addEventListener("mouseout", (event) => {
  let elems = document.querySelectorAll(".piano-key");
  [].forEach.call(elems, function (el) {
    el.classList.remove("piano-key-active");
  });
});

// keybord events

window.addEventListener("keydown", (event) => {
  if (event.repeat) return;
  let note = 0;
  switch (event.keyCode) {
    case 68:
      note = "c";
      break;
    case 70:
      note = "d";
      break;
    case 71:
      note = "e";
      break;
    case 72:
      note = "f";
      break;
    case 74:
      note = "g";
      break;
    case 75:
      note = "a";
      break;
    case 76:
      note = "b";
      break;
    case 82:
      note = "c♯";
      break;
    case 84:
      note = "d♯";
      break;
    case 85:
      note = "f♯";
      break;
    case 73:
      note = "g♯";
      break;
    case 79:
      note = "a♯";
      break;
    default:
      break;
  }

  let arbuz = document.querySelector("[data-note=" + note + "]");
  arbuz.classList.add("piano-key-active");

  const src = `assets/audio/${note}.mp3`;
  playAudio(src);
});
window.addEventListener("keyup", (event) => {
  let elems = document.querySelectorAll(".piano-key");
  [].forEach.call(elems, function (el) {
    el.classList.remove("piano-key-active");
  });
});

// play audio

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

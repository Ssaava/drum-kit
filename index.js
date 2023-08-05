const buttons = document.querySelectorAll(".drum");
const playSound = (song) => {
  audio = new Audio(song);
  audio.play();
};
function handleClick(e) {
  switch (this.innerHTML || e.key) {
    case "w":
      playSound(songs.audio1);
      break;
    case "a":
      playSound(songs.audio2);
      break;
    case "s":
      playSound(songs.audio3);
      break;
    case "d":
      playSound(songs.audio4);
      break;
    case "j":
      playSound(songs.audio5);
      break;
    case "k":
      playSound(songs.audio6);
      break;
    case "l":
      playSound(songs.audio7);
      break;
    default:
      alert("No such key in the list");
  }
  if (e.key) {
    var key = document.querySelector(`.${e.key}`);
    key.classList.add("pressed");
    setTimeout(() => {
      key.classList.remove("pressed");
    }, 100);
  }
  this.classList.add("pressed");
  setTimeout(() => {
    this.classList.remove("pressed");
  }, 100);
}
// Add event listener to all buttons
const songs = {
  audio1: "sounds/tom-1.mp3",
  audio2: "sounds/tom-2.mp3",
  audio3: "sounds/tom-3.mp3",
  audio4: "sounds/tom-4.mp3",
  audio5: "sounds/snare.mp3",
  audio6: "sounds/crash.mp3",
  audio7: "sounds/kick-bass.mp3",
};
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

document.addEventListener("keypress", handleClick);
